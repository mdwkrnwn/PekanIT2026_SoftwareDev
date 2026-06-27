import Link from "next/link";
import { LuCalculator, LuLayers, LuSparkles, LuPackage, LuAward } from "react-icons/lu";
import { FiBarChart2 } from "react-icons/fi";

const SOLUSI = [
  { title: "Analytic Dashboard", desc: "Memantau performa bisnis, melihat tren tren terkini dari satu tempat.", icon: FiBarChart2, color: "bg-emerald-50 text-emerald-600" },
  { title: "Automated Accounting", desc: "Laporan keuangan instan otomatis tanpa pusing pencatatan manual.", icon: LuCalculator, color: "bg-blue-50 text-blue-600" },
  { title: "Review Consolidator", desc: "Agregasi semua review pelanggan dari berbagai platform e-commerce.", icon: LuLayers, color: "bg-amber-50 text-amber-600" },
  { title: "Smart Recommendation", desc: "Inspirasi strategi bisnis cerdas menggunakan teknologi data AI.", icon: LuSparkles, color: "bg-purple-50 text-purple-600" },
  { title: "Inventory Management", desc: "Kelola stok ketersediaan barang dengan notifikasi otomatis barang habis.", icon: LuPackage, color: "bg-pink-50 text-pink-600" },
  { title: "Loyalty Program", desc: "Retensi pelanggan lama dengan skema poin diskon yang dipersonalisasi.", icon: LuAward, color: "bg-orange-50 text-orange-600" },
];

export function SolusiUMKM() {
  return (
    <div className="w-[80vw] mx-auto mt-24 text-center">
      <h3 className="text-slate-900 text-3xl font-bold tracking-tight">Solusi Lengkap untuk UMKM</h3>
      <p className="text-slate-500 max-w-xl mx-auto mt-2 text-sm">
        Semua yang Anda butuhkan untuk mengelola dan mengembangkan bisnis dalam satu platform.
      </p>

      <div className="md:grid-cols-3 lg:grid-cols-6 grid grid-cols-1 gap-4 mt-12 text-left">
        {SOLUSI.map((item, idx) => (
          <div key={idx} className="border border-slate-100 rounded-2xl p-5 bg-white shadow-xs flex flex-col justify-between min-h-[220px]">
            <div>
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.color} mb-4`}>
                <item.icon size={20} />
              </div>
              <h4 className="text-slate-900 mb-1 text-sm font-bold leading-snug">{item.title}</h4>
              <p className="text-slate-500 text-xs leading-normal">{item.desc}</p>
            </div>
            <Link href="/explore" className="text-emerald-600 hover:underline inline-flex items-center gap-1 mt-4 text-xs font-bold">
              Lihat Fitur ➔
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}