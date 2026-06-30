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
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    title: "AI Bussines Assistant",
    desc: "Dapatkan insight dan rekomendasi strategi bisnis dari AI Bakool.",
    icon: FaRobot,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Review Terverifikasi",
    desc: "Tingkatkan kepercayaan pelanggan dengan review yang terverifikasi.",
    icon: FaShieldAlt,
    color: "bg-amber-100 text-amber-600",
  },
  {
    title: "Smart Recommendation",
    desc: "Jangkau pelanggan baru dengan rekomendasi UMKM yang tepat.",
    icon: FaMapMarkerAlt,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Promo Management",
    desc: "Kelola promo dan diskon dengan mudah untuk meningkatkan penjualan.",
    icon: FaTags,
    color: "bg-pink-100 text-pink-600",
  },
  {
    title: "Loyalty Program",
    desc: "Bangun pelanggan setia dengan sistem poin dan reward menarik.",
    icon: FaTrophy,
    color: "bg-orange-100 text-orange-600",
  },
];

export function SolusiUMKM() {
  return (
    <section id="solusi" className="mx-auto mt-20 w-[80vw]">
      <div className="text-center">
        <h2 className="text-[40px] font-semibold text-[#0B0F1F] dark:text-white ">
          Solusi Lengkap untuk UMKM
        </h2>

        <p className="mx-auto mt-2 max-w-[900px] whitespace-nowrap text-center text-[18px] leading-[32px] font-medium text-slate-500">
          Semua yang Anda butuhkan untuk mengelola dan mengembangkan bisnis
          dalam satu platform.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-6">
        {SOLUSI.map((item, index) => (
          <div
            key={index}
            className="flex min-h-[280px] flex-col rounded-2xl border border-[#EEF0F2] bg-[#FEFEFE] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div
              className={`mb-6 flex h-14 w-14 items-center justify-center rounded-full ${item.color}`}
            >
              <item.icon size={26} />
            </div>

            <h3 className="text-[20px] font-semibold leading-snug text-[#161C2D]">
              {item.title}
            </h3>

            <p className="mt-4 flex-1 text-[15px] leading-7 text-slate-400">
              {item.desc}
            </p>

            <Link
              href="/explore"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-[#0C7C61] transition hover:gap-3"
            >
              Lihat fitur
              <FiArrowRight size={18} />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
