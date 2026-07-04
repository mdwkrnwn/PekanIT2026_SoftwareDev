import Link from "next/link";
import { FiBarChart2, FiArrowRight } from "react-icons/fi";
import {
  FaRobot,
  FaShieldAlt,
  FaMapMarkerAlt,
  FaTags,
  FaTrophy,
} from "react-icons/fa";

const SOLUSI = [
  {
    title: "Analytic Dashboard",
    desc: "Pantau performa bisnis Anda secara real-time dengan data yang akurat.",
    icon: FiBarChart2,
    color:
      "bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400",
  },
  {
    title: "AI Business Assistant",
    desc: "Dapatkan insight dan rekomendasi strategi bisnis dari AI Bakool.",
    icon: FaRobot,
    color: "bg-sky-100 text-sky-600 dark:bg-sky-950 dark:text-sky-400",
  },
  {
    title: "Review Terverifikasi",
    desc: "Tingkatkan kepercayaan pelanggan dengan review yang terverifikasi.",
    icon: FaShieldAlt,
    color: "bg-amber-100 text-amber-600 dark:bg-amber-950 dark:text-amber-400",
  },
  {
    title: "Smart Recommendation",
    desc: "Jangkau pelanggan baru dengan rekomendasi UMKM yang tepat.",
    icon: FaMapMarkerAlt,
    color:
      "bg-violet-100 text-violet-600 dark:bg-violet-950 dark:text-violet-400",
  },
  {
    title: "Promo Management",
    desc: "Kelola promo dan diskon dengan mudah untuk meningkatkan penjualan.",
    icon: FaTags,
    color: "bg-pink-100 text-pink-600 dark:bg-pink-950 dark:text-pink-400",
  },
  {
    title: "Loyalty Program",
    desc: "Bangun pelanggan setia dengan sistem poin dan reward menarik.",
    icon: FaTrophy,
    color:
      "bg-orange-100 text-orange-600 dark:bg-orange-950 dark:text-orange-400",
  },
];

export function SolusiUMKM() {
  return (
    <section id="solusi" data-aos="fade-up" className="mx-auto mt-20 w-[80vw]">
      {/* Header */}
      <div className="text-center">
        <h2
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-[40px] font-semibold text-[#0B0F1F] dark:text-white"
        >
          Solusi Lengkap untuk UMKM
        </h2>

        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="mx-auto mt-2 max-w-[900px] text-center text-[18px] leading-[32px] font-medium text-slate-500"
        >
          Semua yang Anda butuhkan untuk mengelola dan mengembangkan bisnis
          dalam satu platform.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-6 ">
        {SOLUSI.map((item, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            data-aos-duration="800"
            className="
              group
              flex
              min-h-70
              flex-col
              rounded-2xl
              border-2
              border-[#EEF0F2]
              dark:border-slate-800
              bg-[#FEFEFE]
              dark:bg-slate-900
              p-6
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-xl
              dark:hover:border-[#158A62]/40
              dark:hover:bg-slate-800
              "
          >
            <div
              className={`mb-6 flex h-14 w-14 items-center justify-center rounded-full ${item.color} transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}
            >
              <item.icon
                size={26}
                className="transition-transform duration-300"
              />
            </div>

            {/* Title */}
            <h3 className="text-[20px] font-semibold leading-snug text-foreground transition-colors duration-300 group-hover:text-primary">
              {item.title}
            </h3>

            {/* Description */}
            <p className="mt-4 flex-1 text-[15px] leading-7 text-slate-400">
              {item.desc}
            </p>

            {/* CTA */}
            <Link
              href="/explore"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-[#0C7C61] transition-all duration-300 group-hover:gap-3"
            >
              Lihat fitur
              <FiArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
