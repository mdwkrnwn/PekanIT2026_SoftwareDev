import { GoogleGenAI } from "@google/genai";
import { createClient } from "@supabase/supabase-js";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SECRET_KEY!,
);

console.log(
  "Secret Key Loaded:",
  process.env.SUPABASE_SECRET_KEY?.slice(0, 20),
);

export async function POST(req: Request) {
  try {
    const { message, userId } = await req.json();
    console.log("Message:", message);
    console.log("User ID:", userId);
    if (!message || !userId) {
      return Response.json(
        {
          reply: "Data tidak lengkap.",
        },
        {
          status: 400,
        },
      );
    }

    // =============================
    // Ambil Data UMKM
    // =============================

    const { data, error } = await supabase
      .from("umkm")
      .select(
        `
    *,
    categories (
      name
    )
  `,
      )
      .eq("owner_id", userId);

    console.log("===== QUERY RESULT =====");
    console.log({
      userId,
      data,
      error,
    });

    const umkm = data?.[0];

    if (!umkm) {
      return Response.json({
        reply:
          "Toko belum ditemukan. Silakan lengkapi profil tokomu terlebih dahulu.",
      });
    }

    // =============================
    // Ambil Profile Owner
    // =============================

    const { data: profile } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", userId)
      .single();

    // =============================
    // Ambil Menu
    // =============================

    const { data: menus } = await supabase
      .from("menus")
      .select("*")
      .eq("umkm_id", umkm.id);

    // =============================
    // Ambil Promo
    // =============================

    const { data: promos } = await supabase
      .from("promos")
      .select("*")
      .eq("umkm_id", umkm.id);

    // =============================
    // Ambil Gallery
    // =============================

    const { data: gallery } = await supabase
      .from("gallery")
      .select("*")
      .eq("umkm_id", umkm.id);

    // =============================
    // Insight Sederhana
    // =============================

    const mostViewed =
      menus && menus.length > 0
        ? [...menus].sort((a, b) => b.views - a.views)[0]
        : null;

    const mostFavorite =
      menus && menus.length > 0
        ? [...menus].sort((a, b) => b.favorite - a.favorite)[0]
        : null;

    const activePromo =
      promos?.find((promo) => promo.status === "Aktif") ?? null;

    // =============================
    // Context Owner
    // =============================

    const ownerContext = `
        Nama Pemilik : ${profile?.full_name ?? "-"}
        Level : ${profile?.level ?? "-"}
        XP : ${profile?.xp ?? "-"}
`;

    // =============================
    // Context Toko
    // =============================

    const storeContext = `
        Nama Toko : ${umkm.name}
        Kategori : ${umkm.categories?.name ?? "-"}
        Alamat : ${umkm.address}
        Kota : ${umkm.city}
        Deskripsi : ${umkm.description}
        Jam Operasional : ${umkm.open_time} - ${umkm.close_time}
        Website : ${umkm.website ?? "-"}
        Instagram : ${umkm.instagram ?? "-"}
        Facebook : ${umkm.facebook ?? "-"}
`;

    // =============================
    // Context Menu
    // =============================

    const menuContext =
      menus
        ?.map(
          (menu) => `
            Nama : ${menu.name}
            Kategori : ${menu.category}
            Harga : Rp${menu.price}
            Dilihat : ${menu.views}
            Favorit : ${menu.favorite}
            `,
        )
        .join("\n") || "Belum ada menu.";

    // =============================
    // Context Promo
    // =============================

    const promoContext =
      promos
        ?.map(
          (promo) => `
            Judul : ${promo.title}
            Diskon : ${promo.discount}
            Status : ${promo.status}
            Dilihat : ${promo.views}
            Klik : ${promo.clicks}
            `,
        )
        .join("\n") || "Belum ada promo.";

    // =============================
    // Statistik
    // =============================

    const statisticsContext = `
        Jumlah Menu : ${menus?.length ?? 0}
        Jumlah Promo : ${promos?.length ?? 0}
        Jumlah Foto Galeri : ${gallery?.length ?? 0}

        Produk Paling Banyak Dilihat :
        ${mostViewed?.name ?? "-"}

        Jumlah View :
        ${mostViewed?.views ?? 0}

        Produk Paling Banyak Difavoritkan :
        ${mostFavorite?.name ?? "-"}

        Jumlah Favorite :
        ${mostFavorite?.favorite ?? 0}

        Promo Aktif :
        ${activePromo?.title ?? "Tidak ada"}
        `;

    const aiInsightContext = `
      Produk paling banyak dilihat:
      ${mostViewed?.name ?? "-"}

      Total View:
      ${mostViewed?.views ?? 0}

      Produk paling banyak difavoritkan:
      ${mostFavorite?.name ?? "-"}

      Total Favorite:
      ${mostFavorite?.favorite ?? 0}

      Promo Aktif:
      ${activePromo?.title ?? "Tidak ada"}

      Jumlah Menu:
      ${menus?.length ?? 0}

      Jumlah Promo:
      ${promos?.length ?? 0}

      Jumlah Foto:
      ${gallery?.length ?? 0}
      `;

    const businessSummary = `
      Ringkasan Bisnis

      - Produk paling populer: ${mostViewed?.name ?? "-"}
      - Produk paling banyak difavoritkan: ${mostFavorite?.name ?? "-"}
      - Promo aktif: ${activePromo?.title ?? "Tidak ada"}
      - Jumlah menu: ${menus?.length ?? 0}
      - Jumlah promo: ${promos?.length ?? 0}
      - Jumlah foto galeri: ${gallery?.length ?? 0}

      Kesimpulan awal:
      - Fokuskan analisis pada produk populer dan efektivitas promo.
      `;

    // =============================
    // Prompt AI
    // =============================

    const prompt = `
      Kamu adalah **Bakool AI Business Assistant**.

      Bakool adalah platform digital yang membantu pelaku UMKM mengembangkan bisnis menggunakan data, analisis, dan Artificial Intelligence.

      Tugasmu adalah menjadi konsultan bisnis digital yang membantu pemilik UMKM mengambil keputusan berdasarkan data toko mereka.

      ==================================================
      DATA PEMILIK TOKO
      ==================================================

      ${ownerContext}

      ==================================================
      DATA TOKO
      ==================================================

      ${storeContext}

      ==================================================
      STATISTIK TOKO
      ==================================================

      ${statisticsContext}

      ==================================================
      DATA MENU
      ==================================================

      ${menuContext}

      ==================================================
      DATA PROMO
      ==================================================

      ${promoContext}

      ==================================================
      HASIL ANALISIS OTOMATIS
      ==================================================

      ${aiInsightContext}

      ==================================================
      RINGKASAN BISNIS
      ==================================================

      ${businessSummary}

      ==================================================
      ATURAN
      ==================================================

      1. Jawab menggunakan Bahasa Indonesia.

      2. Bersikap ramah, profesional, dan seperti mentor bisnis.

      3. Jangan pernah mengatakan:
      - Saya adalah Gemini
      - Saya adalah Google AI
      - Saya adalah AI Language Model

      Selalu berbicara sebagai **Bakool AI Business Assistant**.

      4. Prioritaskan menggunakan DATA TOKO sebelum menggunakan pengetahuan umum.

      5. Jangan pernah mengarang data toko.

      6. Jika data yang diminta tidak tersedia, katakan bahwa data tersebut belum tersedia lalu berikan rekomendasi umum.

      7. Berikan rekomendasi yang realistis dan bisa langsung dilakukan UMKM.

      8. Jangan hanya mengulang data. Berikan analisis dan alasan mengapa rekomendasi tersebut penting.

      9. Maksimal sekitar 250 kata kecuali pengguna meminta penjelasan lebih detail.

      10. Gunakan emoji seperlunya agar jawaban lebih nyaman dibaca.
      
      11. Selalu prioritaskan informasi dari data toko dibandingkan pengetahuan umum.

      12. Jangan menyebut informasi yang tidak terdapat pada data toko.

      13. Jangan menyimpulkan adanya penurunan penjualan, kenaikan pengunjung, atau perubahan performa apabila data tersebut memang tidak tersedia.

      14. Jika data belum cukup untuk memastikan penyebab suatu masalah, katakan bahwa analisis bersifat indikatif berdasarkan data yang tersedia.

      ==================================================
      FORMAT JAWABAN
      ==================================================

      📊 Analisis
      - Ringkas kondisi toko berdasarkan data yang tersedia.

      💡 Rekomendasi
      - Berikan 3–5 langkah konkret yang dapat dilakukan.

      🎯 Prioritas Minggu Ini
      - Sebutkan satu tindakan yang paling berdampak jika dikerjakan terlebih dahulu.

      ==================================================
      CONTOH ANALISIS
      ==================================================

      Jika produk A paling banyak dilihat tetapi favorit rendah,
      jelaskan bahwa produk tersebut menarik perhatian namun belum cukup meyakinkan pelanggan.

      Jika promo aktif memiliki sedikit klik,
      sarankan perbaikan desain promo, waktu publikasi, atau penawaran.

      Jika menu tertentu paling banyak difavoritkan,
      sarankan untuk menjadikannya produk unggulan atau bahan promosi.

      Jika data tidak cukup,
      katakan bahwa analisis bersifat umum dan jelaskan alasannya.

      ==================================================
      PERTANYAAN PEMILIK TOKO
      ==================================================

      ${message}
      `;

    // =============================
    // Generate AI
    // =============================

    const result = await generateWithRetry(prompt);
    console.log("MESSAGE:", message);
    console.log("PROMPT:");
    console.log(prompt);

    return Response.json({
      reply: result.text,
    });
  } catch (error) {
    console.error("AI Business Error:", error);

    return Response.json(
      {
        reply:
          "Maaf, Bakool AI Business Assistant sedang tidak tersedia. Silakan coba lagi beberapa saat.",
      },
      {
        status: 500,
      },
    );
  }
}

async function generateWithRetry(prompt: string) {
  try {
    return await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });
  } catch (err) {
    console.log("Retrying Gemini...");

    return await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });
  }
}
