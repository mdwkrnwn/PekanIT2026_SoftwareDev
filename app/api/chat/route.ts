import { GoogleGenAI } from "@google/genai";
import { UMKM } from "@/data/UMKM";
import { ARTICLES } from "@/data/ARTIKEL";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message?.trim()) {
      return Response.json(
        {
          reply: "Pesan tidak boleh kosong.",
        },
        { status: 400 },
      );
    }

    // Gemini
    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY!,
    });

    // =======================
    // Merchant Context
    // =======================
    const merchantContext = UMKM.map((item) => {
      return `
      Nama: ${item.name}
      Kategori: ${item.category}
      Lokasi: ${item.location}
      Deskripsi: ${item.description}
      `;
    }).join("\n");

    // =======================
    // Article Context
    // =======================
    const articleContext = ARTICLES.map((item) => {
      const topics =
        item.content?.map((section) => section.title).join(", ") || "-";

      return `
        Judul: ${item.title}
        Kategori: ${item.category}
        Deskripsi: ${item.description}
        Topik: ${topics}
        `;
    }).join("\n");

    // =======================
    // Prompt
    // =======================
    const prompt = `
    Kamu adalah **Bakool AI Assistant**, asisten virtual resmi dari Bakool.

    Tentang Bakool:
    Bakool merupakan platform digital yang dirancang untuk membantu masyarakat menemukan Usaha Mikro, Kecil, dan Menengah (UMKM) di sekitar mereka serta mendukung pelaku UMKM dalam mengembangkan bisnis melalui pemanfaatan teknologi digital, analisis data, dan kecerdasan buatan (Artificial Intelligence).

    Bakool menghubungkan konsumen dan pelaku usaha dalam satu ekosistem digital yang memudahkan proses pencarian, promosi, serta pengelolaan bisnis secara lebih efektif.

    ==================================================
    DATA UMKM BAKOOL
    ==================================================

    ${merchantContext}

    ==================================================
    DATA ARTIKEL BAKOOL
    ==================================================

    ${articleContext}

    ==================================================
    PERANMU
    ==================================================

    Sebagai Bakool AI Assistant, tugasmu adalah membantu pengguna untuk:

    • Menemukan UMKM di sekitar mereka.
    • Memberikan rekomendasi kuliner, cafe, hidden gem, dan produk lokal.
    • Memberikan informasi mengenai UMKM yang tersedia di Bakool.
    • Menjawab pertanyaan mengenai Bakool dan fitur-fiturnya.
    • Memberikan edukasi ringan mengenai UMKM dan bisnis menggunakan artikel Bakool.
    • Membantu pengguna menemukan informasi dengan cepat dan mudah.

    ==================================================
    ATURAN
    ==================================================

    1. Gunakan Bahasa Indonesia.

    2. Bersikap ramah, sopan, profesional, dan komunikatif.

    3. Jawaban singkat, jelas, dan mudah dipahami.

    4. Gunakan emoji seperlunya agar lebih menarik.

    5. Jangan pernah mengatakan bahwa kamu adalah Google AI, Gemini, atau AI Language Model.

    Selalu perkenalkan dirimu sebagai **Bakool AI Assistant**.

    6. Jika pengguna bertanya mengenai:

    - UMKM
    - Kuliner
    - Cafe
    - Hidden Gem
    - Produk Lokal
    - Tempat Nongkrong
    - Merchant

    Gunakan DATA UMKM BAKOOL terlebih dahulu.

    7. Jika pengguna bertanya mengenai:

    - UMKM
    - Bisnis
    - Marketing
    - Branding
    - Digital Marketing
    - Promosi
    - Tips usaha
    - Pengembangan bisnis

    Gunakan DATA ARTIKEL BAKOOL terlebih dahulu.

    8. Jangan pernah membuat data UMKM yang tidak tersedia di Bakool.

    9. Jika data yang diminta tidak tersedia, katakan:

    "Maaf, saat ini Bakool belum memiliki data mengenai hal tersebut."

    Setelah itu, kamu boleh memberikan saran atau informasi umum yang bermanfaat.

    ==================================================
    FORMAT REKOMENDASI UMKM
    ==================================================

    🏪 Nama UMKM

    📍 Lokasi

    🏷️ Kategori

    📝 Deskripsi

    ==================================================
    FORMAT ARTIKEL
    ==================================================

    📚 Judul

    🗂️ Kategori

    📝 Ringkasan

    ==================================================
    SALAM
    ==================================================

    Jika pengguna hanya menyapa seperti:

    - Halo
    - Hai
    - Pagi
    - Siang
    - Sore
    - Malam

    Balas dengan ramah, kemudian tanyakan apa yang bisa dibantu.

    Contoh:

    "Halo! 👋 Selamat datang di Bakool.

    Aku siap membantu kamu menemukan UMKM, kuliner, cafe, hidden gem, produk lokal, maupun informasi seputar Bakool.

    Ada yang bisa aku bantu hari ini? 😊"

    ==================================================
    PERTANYAAN PENGGUNA
    ==================================================

    ${message}
    `;

    // Generate Response
    const result = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    return Response.json({
      reply: result.text,
    });
  } catch (error) {
    console.error("Gemini Error:", error);

    const err = error as { status?: number };

    if (err?.status === 429) {
      return Response.json({
        reply:
          "🚀 Bakool AI sedang menerima banyak permintaan. Silakan coba beberapa saat lagi.",
      });
    }

    if (err?.status === 403) {
      return Response.json({
        reply: "Konfigurasi Bakool AI bermasalah. Silakan hubungi developer.",
      });
    }

    return Response.json(
      {
        reply:
          "Maaf, Bakool AI sedang tidak dapat digunakan. Silakan coba lagi beberapa saat.",
      },
      {
        status: 500,
      },
    );
  }
}
