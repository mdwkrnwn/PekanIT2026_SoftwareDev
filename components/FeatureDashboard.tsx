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
    <section className="mx-auto mt-24 w-[80vw]" data-aos="fade-up">
      <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-b from-[#05705E] to-[#026353] px-8 py-8 text-white lg:px-14 lg:py-12">
        {/* Dekorasi kanan atas */}
        <div
          data-aos="fade-down-left"
          data-aos-delay="300"
          className="absolute right-10 top-8 grid grid-cols-4 gap-4 opacity-30"
        >
          {Array.from({ length: 16 }).map((_, i) => (
            <span key={i} className="h-[4px] w-[4px] rounded-full bg-white" />
          ))}
        </div>

        {/* Dekorasi kiri bawah */}
        <div
          data-aos="fade-up-right"
          data-aos-delay="400"
          className="absolute bottom-14 left-[42%] grid grid-cols-3 gap-4 opacity-30"
        >
          {Array.from({ length: 9 }).map((_, i) => (
            <span key={i} className="h-[4px] w-[4px] rounded-full bg-white" />
          ))}
        </div>

        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT */}
          <div
            data-aos="fade-right"
            data-aos-duration="900"
            className="relative z-10"
          >
            {/* Badge */}
            <span
              data-aos="fade-right"
              data-aos-delay="100"
              className="inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-medium text-white"
            >
              Untuk pemilik UMKM
            </span>

            {/* Title */}
            <h2
              data-aos="fade-right"
              data-aos-delay="200"
              className="mt-6 max-w-lg text-[46px] font-bold leading-[1.15]"
            >
              Kelola Bisnis Lebih Mudah,
              <br />
              Semua dalam Satu Tempat
            </h2>

            {/* Features */}
            <ul className="mt-8 space-y-5">
              {FEATURES.map((item, index) => (
                <li
                  key={item}
                  data-aos="fade-right"
                  data-aos-delay={300 + index * 100}
                  className="flex items-center gap-4"
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#42D7AE] transition-transform duration-300 hover:scale-110">
                    <Check size={18} strokeWidth={3} className="text-white" />
                  </div>

                  <span className="text-[20px] text-white/95">{item}</span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <button
              data-aos="fade-up"
              data-aos-delay="700"
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 text-lg font-semibold text-[#046A4E] transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl"
            >
              Coba Dashboard Sekarang
              <ArrowRight
                size={20}
                className="transition-transform duration-300 hover:translate-x-1"
              />
            </button>
          </div>

          {/* RIGHT */}
          <div
            data-aos="zoom-in-left"
            data-aos-delay="300"
            data-aos-duration="1000"
            className="flex justify-center lg:justify-end"
          >
            <Image
              src="/chart.png"
              alt="Dashboard Preview"
              width={500}
              height={320}
              className="h-auto w-full rounded-2xl transition-transform duration-500 hover:scale-105"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
