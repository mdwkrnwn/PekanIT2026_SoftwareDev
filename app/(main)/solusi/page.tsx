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
  LuCirclePlay,
} from "react-icons/lu";
import { BarChart3Icon, Sliders, LineChart } from "lucide-react";

export default function SolutionPage() {
  const features = [
    {
      title: "Analytics Dashboard",
      desc: "Pantau performa bisnis secara real-time dengan visualisasi data yang relevan dan mudah dipahami.",
      icon: BarChart3Icon,
      color:
        "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400",
    },
    {
      title: "AI Business Assistant",
      desc: "Dapatkan insight dan rekomendasi strategi bisnis dari AI Bakool yang siap membantu anda 24/7.",
      icon: LuSparkles,
      color: "bg-teal-50 text-teal-600 dark:bg-teal-950/50 dark:text-teal-400",
    },
    {
      title: "Produk & Menu",
      desc: "Kelola produk, stok, variasi, dan berbagai menu dalam satu sistem terintegrasi.",
      icon: LuUtensilsCrossed,
      color: "bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400",
    },
    {
      title: "Promo Management",
      desc: "Buat dan kelola promo menarik untuk meningkatkan penjualan dan loyalitas pelanggan.",
      icon: LuTicket,
      color: "bg-pink-50 text-pink-600 dark:bg-pink-950/50 dark:text-pink-400",
    },
    {
      title: "Review & Ulasan",
      desc: "Kelola ulasan pelanggan dan tingkatkan kepercayaan dengan respon yang cepat dan profesional.",
      icon: LuMessageSquare,
      color:
        "bg-amber-50 text-amber-600 dark:bg-amber-950/50 dark:text-amber-400",
    },
    {
      title: "Laporan & Insight",
      desc: "Unduh laporan lengkap dan dapatkan insight mendalam untuk mendukung keputusan bisnis.",
      icon: LineChart,
      color: "bg-cyan-50 text-cyan-600 dark:bg-cyan-950/50 dark:text-cyan-400",
    },
    {
      title: "Maps & Lokasi",
      desc: "Tampilkan lokasi bisnis di peta agar pelanggan lebih mudah menemukan toko Anda.",
      icon: LuMapPin,
      color:
        "bg-indigo-50 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400",
    },
    {
      title: "Favorit",
      desc: "Simpan toko favorit pelanggan agar mereka mudah kembali dan menjadi pelanggan setia.",
      icon: LuHeart,
      color: "bg-rose-50 text-rose-600 dark:bg-rose-950/50 dark:text-rose-400",
    },
  ];

  const impacts = [
    {
      metric: "+30%",
      text: "Peningkatan Penjualan",
      icon: LuTrendingUp,
      color: "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40",
    },
    {
      metric: "+50%",
      text: "Interaksi Pelanggan",
      icon: LuUsers,
      color: "bg-teal-50 text-teal-600 dark:bg-teal-950/40",
    },
    {
      metric: "+25%",
      text: "Efisiensi Operasional",
      icon: LuZap,
      color: "bg-cyan-50 text-cyan-600 dark:bg-cyan-950/40",
    },
    {
      metric: "Ribuan",
      text: "UMKM Aktif di Seluruh Indonesia",
      icon: LuGlobe,
      color: "bg-blue-50 text-blue-600 dark:bg-blue-950/40",
    },
  ];

  const steps = [
    {
      step: 1,
      title: "Daftar & Lengkapi Profil",
      desc: "Daftarkan bisnis Anda dan lengkapi informasi untuk mulai menggunakan Bakool.",
      image: "/step/register.png",
    },
    {
      step: 2,
      title: "Kelola Bisnis",
      desc: "Atur produk, promo, dan layanan menggunakan fitur yang tersedia sesuai kebutuhan.",
      image: "/step/store.png",
    },
    {
      step: 3,
      title: "Dapatkan Insight",
      desc: "Pantau performa bisnis melalui dashboard dan laporan lengkap dari data yang akurat.",
      image: "/step/chart.png",
    },
    {
      step: 4,
      title: "Kembangkan & Tumbuh",
      desc: "Gunakan insight untuk strategi lebih baik dan tingkatkan penjualan secara berkelanjutan.",
      image: "/step/growth.png",
    },
  ];

  const testimonials = [
    {
      quote:
        "Dashboard Bakool membantu saya memahami pelanggan dan meningkatkan penjualan hingga 40% setiap bulan.",
      name: "Rizky Pratama",
      role: "Pemilik Kopi Amin",
      image: "/image1.png",
    },
    {
      quote:
        "AI Assistant Bakool selalu memberi rekomendasi yang relevan. Strategi promo jadi lebih efektif.",
      name: "Karen Riena",
      role: "Pemilik Dapoer Rona",
      image: "/image2.png",
    },
    {
      quote:
        "AI Assistant Bakool selalu memberi rekomendasi yang relevan. Strategi promo jadi lebih efektif.",
      name: "Budi Santoso",
      role: "Pemilik Toko Sembako Berkah",
      image: "/image3.png",
    },
    {
      quote:
        "Dashboard Bakool membantu saya memahami pelanggan dan meningkatkan penjualan hingga 40% setiap bulan.",
      name: "Rina Kartika",
      role: "Pemilik Kopi Kita",
      image: "/image4.png",
    },
  ];

  return (
    <div className="text-slate-800 dark:text-slate-100">
      {/* ================= SECTION 1: MAIN SOLUTIONS GRID ================= */}
      <section className="mx-auto w-[80vw] pb-16" data-aos="fade-up">
        {/* Heading */}
        <div data-aos="fade-up">
          <h2 className="text-[38px] font-bold text-[#0B0F1F] dark:text-white">
            Solusi Bakool Untuk UMKM
          </h2>

          <p className="mt-2 max-w-xl text-[17px] leading-7 text-[#667085] dark:text-slate-400">
            Berbagai fitur terintegrasi yang dirancang untuk membantu UMKM
            mengelola dan mengembangkan bisnis dengan lebih mudah dan efisien.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feat, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 80}
              className="group rounded-2xl border border-[#EAECF0] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#158A62]/30 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-emerald-500/40 dark:hover:bg-slate-800"
            >
              {/* Icon */}
              <div
                className={`mb-5 flex h-13 w-13 items-center justify-center rounded-xl ${feat.color}`}
              >
                <feat.icon size={24} />
              </div>

              {/* Title */}
              <h3 className="text-[22px] font-semibold text-[#0B0F1F] dark:text-white">
                {feat.title}
              </h3>

              {/* Description */}
              <p className="mt-2 line-clamp-3 text-[14px] leading-6 text-[#667085] dark:text-slate-400">
                {feat.desc}
              </p>

              {/* Link */}
              <Link
                href="/explore"
                className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold text-[#158A62] transition-all group-hover:gap-3 dark:text-emerald-400"
              >
                Pelajari lebih lanjut
                <span>→</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SECTION 2: REAL IMPACT BUSINESS METRICS ================= */}
      <section className="mx-auto w-[80vw] border-t border-[#EAECF0] py-16 dark:border-slate-800">
        {/* Heading */}
        <div data-aos="fade-up" className="mx-auto max-w-2xl text-center">
          <h2 className="text-[37px] font-bold text-[#0B0F1F] dark:text-white">
            Dampak Nyata untuk Bisnis Anda
          </h2>

          <p className="mt-2 text-[17px] text-[#667085] dark:text-slate-400">
            Bergabung dengan ribuan UMKM yang telah merasakan manfaat Bakool.
          </p>
        </div>

        {/* Card */}
        <div
          className="mt-10 overflow-hidden rounded-3xl border border-[#EAECF0] bg-white dark:border-slate-800 dark:bg-slate-900"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="grid grid-cols-1 divide-y divide-[#EAECF0] dark:divide-slate-800 md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-4">
            {impacts.map((imp, idx) => (
              <div key={idx} className="flex items-center gap-5 px-8 py-7">
                {/* Icon */}
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-full ${imp.color}`}
                >
                  <imp.icon size={28} />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-[34px] font-bold leading-none text-[#158A62] dark:text-emerald-400">
                    {imp.metric}
                  </h3>

                  <p className="mt-2 text-[14px] leading-6 text-[#344054] dark:text-slate-400">
                    {imp.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: HOW IT WORKS STEPPER ================= */}
      <section className="mx-auto w-[80vw] border-t border-[#EAECF0] py-20 dark:border-slate-800">
        {/* Heading */}
        <div data-aos="fade-up" className="mx-auto max-w-2xl text-center">
          <h2 className="text-[35px] font-bold text-[#0B0F1F] dark:text-white">
            Bagaimana Bakool Bekerja?
          </h2>

          <p className="mt-2 text-[17px] text-[#667085] dark:text-slate-400">
            Empat langkah mudah untuk mengembangkan bisnis Anda
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-20">
          {/* Garis Penghubung */}
          <div className="absolute left-[12%] right-[12%] top-[42px] hidden h-[2px] bg-[#EAECF0] dark:bg-slate-800 lg:block" />

          <div className="grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 120}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="flex flex-col items-center">
                  {/* Circle */}
                  <div className="flex h-[86px] w-[86px] items-center justify-center rounded-full border border-[#EAECF0] bg-white transition-all duration-300 hover:-translate-y-1 dark:border-slate-700 dark:bg-slate-900">
                    <Image
                      src={step.image}
                      alt={step.title}
                      width={42}
                      height={42}
                    />
                  </div>

                  {/* Garis Vertikal */}
                  <div className="h-10 w-px bg-[#EAECF0] dark:bg-slate-700" />

                  {/* Step Number */}
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#158A62] text-lg font-bold text-white">
                    {step.step}
                  </div>
                </div>

                {/* Title */}
                <h3 className="mt-10 text-[24px] font-semibold text-[#0B0F1F] dark:text-white">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-4 max-w-[260px] text-[15px] leading-8 text-[#667085] dark:text-slate-400">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: REVIEWS & TRUST BANNER ================= */}
      <section className="mx-auto w-[80vw] py-20">
        {/* Heading */}
        <div data-aos="fade-up" className="text-center">
          <h2 className="text-[35px] font-bold text-[#0B0F1F] dark:text-white">
            Dipercaya oleh UMKM di Seluruh Indonesia
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="rounded-2xl border border-[#EAECF0] bg-white p-6 transition hover:border-[#158A62]/20 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-emerald-500/40"
            >
              {/* Quote */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#158A62">
                <path d="M7.17 6A5.001 5.001 0 0 0 2 11v7h7v-7H6.09A3.002 3.002 0 0 1 9 8V6H7.17zm10 0A5.001 5.001 0 0 0 12 11v7h7v-7h-2.91A3.002 3.002 0 0 1 19 8V6h-1.83z" />
              </svg>

              {/* Quote */}
              <p className="mt-3 line-clamp-3 text-[13px] leading-6 text-[#667085] dark:text-slate-400">
                {item.quote}
              </p>

              {/* Footer */}
              <div className="mt-6 flex items-center gap-3">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={42}
                  height={42}
                  className="rounded-full object-cover"
                />

                <div>
                  <h4 className="text-[14px] font-semibold text-[#0B0F1F] dark:text-white">
                    {item.name}
                  </h4>

                  <p className="text-[11px] text-[#98A2B3] dark:text-slate-500">
                    {item.role}
                  </p>

                  <div className="mt-1 flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <LuStar
                        key={i}
                        size={12}
                        className="fill-[#FBBF24] text-[#FBBF24]"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex justify-center gap-2">
          <span className="h-2.5 w-6 rounded-full bg-[#158A62]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#D0D5DD] dark:bg-slate-600" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#D0D5DD] dark:bg-slate-600" />
        </div>
      </section>

      {/* ================= SECTION 5: FINAL CTA COMPONENT ================= */}
      <section className="mx-auto w-[80vw] py-10" data-aos="fade-up">
        <div className="overflow-hidden rounded-2xl border border-[#E6F0EC] bg-[#F2FAF6] px-10 py-8 dark:border-slate-800 dark:bg-slate-900">
          <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
            {/* Left */}
            <div className="max-w-md">
              <h2 className="text-[30px] font-bold leading-tight text-[#0B0F1F] dark:text-white">
                Siap membawa bisnis Anda
                <br />
                ke level berikutnya?
              </h2>

              <p className="mt-3 text-[15px] text-[#475467] dark:text-slate-400">
                Gabung sekarang dan nikmati semua solusi terbaik dari Bakool.
              </p>
            </div>

            {/* Center Button */}
            <div className="flex shrink-0 items-center gap-4">
              <button className="rounded-xl bg-[#158A62] px-8 py-3 text-[15px] font-semibold text-white transition hover:bg-[#12704F] dark:bg-emerald-600 dark:hover:bg-emerald-700">
                Mulai Gratis
              </button>

              <button className="flex items-center gap-2 rounded-xl border border-[#158A62] bg-white px-8 py-3 text-[15px] font-semibold text-[#158A62] transition hover:bg-[#F6FCF9] dark:border-emerald-500 dark:bg-slate-800 dark:text-emerald-400 dark:hover:bg-slate-700">
                Lihat Demo
                <LuCirclePlay size={17} />
              </button>
            </div>

            {/* Right Illustration */}
            <div className="relative h-[140px] w-[330px] shrink-0">
              <Image
                src="/solusi.png"
                alt="Bakool Illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
