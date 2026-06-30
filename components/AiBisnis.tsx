import { BiCheckCircle } from "react-icons/bi";
import Image from "next/image";
import { ArrowRight, Check, User } from "lucide-react";
import { BsArrowRight } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";

const FEATURES = [
  "Analisis penjualan dan performa toko",
  "Rekomendasi promo & strategi terbaik",
  "Prediksi jam ramai pelanggan",
];

export function AiBisnis() {
  return (
    <section className="mx-auto mt-24 w-[80vw]">
      <div className="relative overflow-hidden rounded-[18px] bg-gradient-to-b from-[#003E42] to-[#2A7277] px-10 py-8 lg:px-12 lg:py-10">
        {/* Titik kanan atas */}
        <div className="absolute right-10 top-6 grid grid-cols-3 gap-4 opacity-40">
          {Array.from({ length: 9 }).map((_, i) => (
            <span key={i} className="h-[4px] w-[4px] rounded-full bg-white" />
          ))}
        </div>

        {/* Titik tengah */}
        <div className="absolute bottom-20 left-[48%] grid grid-cols-3 gap-4 opacity-40">
          {Array.from({ length: 9 }).map((_, i) => (
            <span key={i} className="h-[4px] w-[4px] rounded-full bg-white" />
          ))}
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.2fr]">
          {/* LEFT */}
          <div>
            <h2 className="text-[48px] font-bold leading-tight text-white">
              Tanya AI Bisnis Bakool
            </h2>

            <p className="mt-4 max-w-md text-[18px] leading-8 text-white/85">
              Dapatkan jawaban dan rekomendasi strategi untuk meningkatkan
              bisnis Anda
            </p>

            <div className="mt-8 space-y-5">
              {FEATURES.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#2FD3A3]">
                    <Check
                      size={18}
                      strokeWidth={3}
                      className="text-[#026353]"
                    />
                  </div>

                  <span className="text-lg text-white">{item}</span>
                </div>
              ))}
            </div>

            <button className="mt-10 inline-flex items-center gap-3 rounded-xl bg-white px-7 py-4 text-lg font-semibold text-[#046A4E] transition hover:scale-[1.02]">
              Mulai Konsultasi Gratis
              <ArrowRight size={20} />
            </button>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/aii.png"
              alt="Bakool AI Chat"
              width={800}
              height={405}
              priority
              className="h-auto w-full max-w-[800px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
