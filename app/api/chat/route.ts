import { GoogleGenerativeAI } from "@google/generative-ai";
import { UMKM } from "@/data/UMKM";
import { ARTICLES } from "@/data/ARTIKEL";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message) {
      return Response.json(
        {
          reply: "Message is required.",
        },
        { status: 400 },
      );
    }

    // Init Gemini
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    // Format data UMKM
    const merchantContext = UMKM.map((item) => {
      return `
        Name: ${item.name}
        Category: ${item.category}
        Location: ${item.location}
        Description: ${item.description}
        `;
    }).join("\n");

    // Format data artikel
    const articleContext = ARTICLES.map((item) => {
      const contentPreview = item.content
        ?.map((section) => section.title)
        .join(", ");

        return `
    Title: ${item.title}
    Category: ${item.category}
    Description: ${item.description}
    Topics: ${contentPreview}
        `;
    }).join("\n");

    // AI Prompt
    const prompt = `
        You are UFinder AI Assistant.

        About UFinder:
        UFinder is a digital platform that helps users discover and support local MSMEs (UMKM), culinary places, local businesses, and useful business insights.

        Available UFinder Merchant Data:
        ${merchantContext}

        Available UFinder Article Data:
        ${articleContext}

        Rules:
        1. Prioritize answering using UFinder merchant data if the user asks about places, food, cafes, local businesses, merchants, or recommendations.
        2. Prioritize using article data if the user asks about business tips, entrepreneurship, marketing, or educational content.
        3. If the question is unrelated to UFinder, answer normally using your general knowledge.
        4. If UFinder does not have related data, politely say that the platform has not listed it yet, then optionally provide general advice.
        5. Keep answers concise, clear, friendly, and helpful.
        6. Never make up UFinder merchant data.

        User question:
        ${message}
        `;

    // Generate AI response
    const result = await model.generateContent(prompt);
    const response = await result.response;

    return Response.json({
      reply: response.text(),
    });
  } catch (error: unknown) {
    console.error("Gemini error:", error);

    const err = error as { status?: number };

    // Rate limit
    if (err?.status === 429) {
      return Response.json({
        reply:
          "UFinder AI sedang mencapai batas penggunaan. Silakan coba lagi nanti.",
      });
    }

    // API key / permission issue
    if (err?.status === 403) {
      return Response.json({
        reply: "Konfigurasi AI bermasalah. Silakan hubungi developer.",
      });
    }

    // Unknown error
    return Response.json(
      {
        reply: "Maaf, UFinder AI sedang tidak tersedia saat ini.",
      },
      { status: 500 },
    );
  }
}
