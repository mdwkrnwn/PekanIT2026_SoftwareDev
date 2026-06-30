"use client";

import Image from "next/image";
import Link from "next/link";
import {
  LuSparkles,
  LuUtensilsCrossed,
  LuTicket,
  LuMessageSquare,
  LuTrendingUp,
  LuMapPin,
  LuHeart,
  LuUsers,
  LuZap,
  LuGlobe,
  LuStar,
  LuUserPlus,
} from "react-icons/lu";
import { BarChart3Icon, Sliders, LineChart } from "lucide-react";

export default function SolutionPage() {
  const features = [
    { title: "Analytics Dashboard", desc: "Pantau performa bisnis secara real-time dengan visualisasi data yang relevan dan mudah dipahami.", icon: BarChart3Icon, color: "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400" },
    { title: "AI Business Assistant", desc: "Dapatkan insight dan rekomendasi strategi bisnis dari AI Bakool yang siap membantu anda 24/7.", icon: LuSparkles, color: "bg-teal-50 text-teal-600 dark:bg-teal-950/50 dark:text-teal-400" },
    { title: "Produk & Menu", desc: "Kelola produk, stok, variasi, dan berbagai menu dalam satu sistem terintegrasi.", icon: LuUtensilsCrossed, color: "bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400" },
    { title: "Promo Management", desc: "Buat dan kelola promo menarik untuk meningkatkan penjualan dan loyalitas pelanggan.", icon: LuTicket, color: "bg-pink-50 text-pink-600 dark:bg-pink-950/50 dark:text-pink-400" },
    { title: "Review & Ulasan", desc: "Kelola ulasan pelanggan dan tingkatkan kepercayaan dengan respon yang cepat dan profesional.", icon: LuMessageSquare, color: "bg-amber-50 text-amber-600 dark:bg-amber-950/50 dark:text-amber-400" },
    { title: "Laporan & Insight", desc: "Unduh laporan lengkap dan dapatkan insight mendalam untuk mendukung keputusan bisnis.", icon: LineChart, color: "bg-cyan-50 text-cyan-600 dark:bg-cyan-950/50 dark:text-cyan-400" },
    { title: "Maps & Lokasi", desc: "Tampilkan lokasi bisnis di peta agar pelanggan lebih mudah menemukan toko Anda.", icon: LuMapPin, color: "bg-indigo-50 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400" },
    { title: "Favorit", desc: "Simpan toko favorit pelanggan agar mereka mudah kembali dan menjadi pelanggan setia.", icon: LuHeart, color: "bg-rose-50 text-rose-600 dark:bg-rose-950/50 dark:text-rose-400" },
  ];

  const impacts = [
    { metric: "+30%", text: "Peningkatan Penjualan", icon: LuTrendingUp, color: "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40" },
    { metric: "+50%", text: "Interaksi Pelanggan", icon: LuUsers, color: "bg-teal-50 text-teal-600 dark:bg-teal-950/40" },
    { metric: "+25%", text: "Efisiensi Operasional", icon: LuZap, color: "bg-cyan-50 text-cyan-600 dark:bg-cyan-950/40" },
    { metric: "Ribuan", text: "UMKM Aktif di Seluruh Indonesia", icon: LuGlobe, color: "bg-blue-50 text-blue-600 dark:bg-blue-950/40" },
  ];

  const steps = [
    { step: 1, title: "Daftar & Lengkapi Profil", desc: "Daftarkan bisnis Anda dan lengkapi informasi untuk mulai menggunakan Bakool.", icon: LuUserPlus },
    { step: 2, title: "Kelola Bisnis", desc: "Atur produk, promo, dan layanan menggunakan fitur yang tersedia sesuai kebutuhan.", icon: Sliders },
    { step: 3, title: "Dapatkan Insight", desc: "Pantau performa bisnis melalui dashboard dan laporan lengkap dari data yang akurat.", icon: BarChart3Icon },
    { step: 4, title: "Kembangkan & Tumbuh", desc: "Gunakan insight untuk strategi lebih baik dan tingkatkan penjualan secara keberlanjutan.", icon: LuTrendingUp },
  ];

  const testimonials = [
    { quote: "Dashboard Bakool membantu saya memahami pelanggan dan meningkatkan penjualan hingga 40% setiap bulan.", name: "Rizky Pratama", role: "Pemilik Kopi Amin" },
    { quote: "AI Assistant Bakool selalu memberi rekomendasi yang relevan, strategi promo jadi lebih efektif.", name: "Karen Riena", role: "Pemilik Dapoer Rona" },
    { quote: "Semua fitur yang saya butuhkan ada di Bakool, mengelola bisnis jadi jauh lebih mudah.", name: "Budi Santoso", role: "Pemilik Toko Sembako Berkah" },
    { quote: "Dashboard Bakool membantu saya memahami pelanggan dan meningkatkan penjualan hingga 40% setiap bulan.", name: "Rina Kartika", role: "Pemilik Kopi Kita" },
  ];

  return (
    <div className="text-slate-800 dark:text-slate-100">

      {/* ================= SECTION 1: MAIN SOLUTIONS GRID ================= */}
      <section className="w-[80vw] mx-auto pb-16">
        <h2 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white">Solusi Bakool Untuk UMKM</h2>
        <p className="text-slate-500 dark:text-slate-400 mt-2 text-lg max-w-2xl">
          Berbagai fitur terintegrasi yang dirancang untuk membantu UMKM mengelola dan mengembangkan bisnis dengan lebih mudah dan efisien.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {features.map((feat, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 rounded-2xl p-6 shadow-xs flex flex-col justify-between min-h-55">
              <div>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${feat.color} mb-4`}>
                  <feat.icon size={24} />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-lg">{feat.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 mt-2 text-base leading-relaxed line-clamp-3">{feat.desc}</p>
              </div>
              <Link href="/explore" className="text-[#15803d] dark:text-emerald-400 font-bold mt-4 inline-flex items-center gap-1 hover:underline">
                Pelajari lebih lanjut ➔
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SECTION 2: REAL IMPACT BUSINESS METRICS ================= */}
      <section className="w-[80vw] mx-auto py-16 text-center border-t border-slate-200/60 dark:border-slate-800">
        <h2 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white">Dampak Nyata untuk Bisnis Anda</h2>
        <p className="text-slate-500 dark:text-slate-400 mt-2 text-lg max-w-xl mx-auto">
          Bergabung dengan ribuan UMKM yang telah merasakan manfaat Bakool.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 text-left">
          {impacts.map((imp, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 rounded-2xl p-6 shadow-xs flex items-center gap-5">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${imp.color}`}>
                <imp.icon size={26} />
              </div>
              <div>
                <h3 className="text-3xl font-black text-slate-950 dark:text-white">{imp.metric}</h3>
                <p className="text-slate-500 dark:text-slate-400 font-medium mt-0.5">{imp.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SECTION 3: HOW IT WORKS STEPPER ================= */}
      <section className="w-[80vw] mx-auto py-16 text-center border-t border-slate-200/60 dark:border-slate-800">
        <h2 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white">Bagaimana Bakool Bekerja?</h2>
        <p className="text-slate-500 dark:text-slate-400 mt-2 text-lg max-w-xl mx-auto">
          Empat langkah mudah untuk mengembangkan bisnis anda
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 text-center relative">
          {steps.map((st, idx) => (
            <div key={idx} className="flex flex-col items-center relative z-10 group">
              <div className="w-20 h-20 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-full flex items-center justify-center shadow-md mb-4 text-slate-400 dark:text-slate-500 group-hover:border-[#15803d] dark:group-hover:border-emerald-500">
                <st.icon size={32} />
              </div>

              {/* Number Badge */}
              <div className="w-8 h-8 bg-[#15803d] text-white font-bold rounded-full flex items-center justify-center shadow-xs border-2 border-white dark:border-slate-950 -mt-8 mb-4 relative z-20">
                {st.step}
              </div>

              <h3 className="font-bold text-slate-950 dark:text-white text-lg mt-2">{st.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 mt-2 text-base max-w-xs leading-relaxed">{st.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SECTION 4: REVIEWS & TRUST BANNER ================= */}
      <section className="w-[80vw] mx-auto py-16 text-center border-t border-slate-200/60 dark:border-slate-800">
        <h2 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white">Dipercaya oleh UMKM di Seluruh Indonesia</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 text-left">
          {testimonials.map((test, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 rounded-2xl p-6 shadow-xs flex flex-col justify-between">
              <p className="text-slate-600 dark:text-slate-300 font-medium leading-relaxed italic">
                &quot;{test.quote}&quot;
              </p>

              <div className="flex items-center gap-4 mt-6 border-t border-slate-50 dark:border-slate-800/50 pt-4">
                <div className="w-12 h-12 relative rounded-full overflow-hidden shrink-0 bg-slate-200">
                  <Image src={`https://picsum.photos/100?random=${idx + 20}`} fill className="object-cover" alt={test.name} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-950 dark:text-white text-base">{test.name}</h4>
                  <span className="text-slate-400 dark:text-slate-500 font-medium block">{test.role}</span>
                  <div className="flex text-amber-400 gap-0.5 mt-1">
                    {[...Array(5)].map((_, s) => <LuStar key={s} className="fill-amber-400 text-amber-400" size={14} />)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Pagination Dots Mimicry */}
        <div className="flex justify-center gap-2 mt-8">
          <span className="w-6 h-2 rounded-full bg-[#15803d]" />
          <span className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-700" />
          <span className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-700" />
        </div>
      </section>

      {/* ================= SECTION 5: FINAL CTA COMPONENT ================= */}
      <section className="w-[80vw] mx-auto py-12 mb-20">
        <div className="bg-[#054E3A] dark:bg-emerald-950/40 rounded-[2rem] p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 text-white relative overflow-hidden shadow-xl border border-transparent dark:border-slate-800">
          <div className="max-w-xl text-left z-10">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">Siap membawa bisnis Anda ke level berikutnya?</h2>
            <p className="text-emerald-100/80 mt-3 text-lg">
              Gabung sekarang dan nikmati semua solusi terbaik dari Bakool.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <button className="bg-[#15803d] hover:bg-[#166534] text-white font-bold px-6 py-4 rounded-xl shadow-md text-base">
                Mulai Gratis
              </button>
              <button className="bg-white hover:bg-slate-50 text-slate-900 font-bold px-6 py-4 rounded-xl shadow-md text-base inline-flex items-center gap-2">
                Lihat Demo ➔
              </button>
            </div>
          </div>

          <div className="w-full relative z-10">
            <div className="relative w-full h-73 mt-2">
              <Image src="/solusi.png" fill className="object-cover" alt="Platform Dashboard View" />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}