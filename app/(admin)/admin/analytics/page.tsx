import Image from "next/image";
import { LuTrendingUp, LuHeart, LuStar, LuMapPin, LuMessageSquare } from "react-icons/lu";

export default function AnalyticsPage() {
  const stats = [
    { label: "Total Dilihat", value: "1.240", change: "+18.5%", icon: LuTrendingUp, color: "text-emerald-600 bg-emerald-50" },
    { label: "Total Favorit", value: "187", change: "+12.3%", icon: LuHeart, color: "text-pink-600 bg-pink-50" },
    { label: "Rating Rata-rata", value: "4.8 / 5", change: "+0.2%", icon: LuStar, color: "text-amber-600 bg-amber-50" },
    { label: "Klik ke Maps", value: "312", change: "+22.1%", icon: LuMapPin, color: "text-blue-600 bg-blue-50" },
  ];

  return (
    <div className="flex flex-col gap-8">
      {/* Overview Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-xs">
            <div className="flex justify-between items-center">
              <span className="text-slate-500 font-medium">{stat.label}</span>
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${stat.color}`}>
                <stat.icon size={22} />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mt-4">{stat.value}</h3>
          </div>
        ))}
      </div>

      {/* Heatmap and Traffic Source Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
          <h3 className="text-xl font-bold text-slate-900 mb-6">Performa Kunjungan Berdasarkan Waktu</h3>
          <div className="relative aspect-[2/1] bg-slate-50 rounded-xl overflow-hidden">
            <Image src="https://picsum.photos/800/400?random=88" fill className="object-cover" alt="Heatmap Waktu" />
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col justify-between">
          <h3 className="text-xl font-bold text-slate-900 mb-6">Sumber Trafik</h3>
          <div className="relative flex-1 bg-slate-50 rounded-xl overflow-hidden min-h-[200px]">
            <Image src="https://picsum.photos/400/400?random=89" fill className="object-cover" alt="Pie Chart Trafik" />
          </div>
        </div>
      </div>
    </div>
  );
}