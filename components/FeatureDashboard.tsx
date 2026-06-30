import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
const FEATURES = [
  "Pantau pengunjung dan performa toko",
  "Kelola produk, stok, dan pesanan",
  "Analisis produk favorit dan pelanggan",
  "Tingkatkan rating dan kepercayaan",
];

export function FeatureDashboard() {
  return (
    <section className="mx-auto mt-24 w-[80vw]">
      <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-b from-[#05705E] to-[#026353] px-8 py-8 text-white lg:px-14 lg:py-12">
        {/* Dekorasi kanan atas */}
        <div className="absolute right-10 top-8 grid grid-cols-4 gap-4 opacity-30">
          {Array.from({ length: 16 }).map((_, i) => (
            <span key={i} className="h-[4px] w-[4px] rounded-full bg-white" />
          ))}
        </div>

        {/* Dekorasi kiri bawah */}
        <div className="absolute bottom-14 left-[42%] grid grid-cols-3 gap-4 opacity-30">
          {Array.from({ length: 9 }).map((_, i) => (
            <span key={i} className="h-[4px] w-[4px] rounded-full bg-white" />
          ))}
        </div>

        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT */}
          <div className="relative z-10">
            <span className="inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-medium text-white">
              Untuk pemilik UMKM
            </span>

            <h2 className="mt-6 max-w-lg text-[46px] font-bold leading-[1.15]">
              Kelola Bisnis Lebih Mudah,
              <br />
              Semua dalam Satu Tempat
            </h2>
            <ul className="mt-8 space-y-5">
              {FEATURES.map((item) => (
                <li key={item} className="flex items-center gap-4">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#42D7AE]">
                    <Check size={18} strokeWidth={3} className="text-white" />
                  </div>

                  <span className="text-[20px] text-white/95">{item}</span>
                </li>
              ))}
            </ul>
            <button className="mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 text-lg font-semibold text-[#046A4E] transition hover:scale-[1.02]">
              Coba Dashboard Sekarang
              <ArrowRight size={20} />
            </button>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center lg:justify-end">
           
              <Image
                src="/chart.png"
                alt="Dashboard Preview"
                width={500}
                height={320}
                className="h-auto w-full rounded-2xl"
                priority
              />
            </div>
         
        </div>
      </div>
    </section>
  );
}
