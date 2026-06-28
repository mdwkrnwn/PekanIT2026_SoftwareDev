import Image from "next/image";
import { LuTrendingUp, LuHeart, LuStar, LuMapPin, LuSparkles, LuPlus, LuTicket } from "react-icons/lu";

export default function DashboardPage() {
  const stats = [
    { label: "Total Dilihat", value: "1.240", change: "+18.5%", icon: LuTrendingUp, color: "text-emerald-600 bg-emerald-50" },
    { label: "Total Favorit", value: "187", change: "+12.3%", icon: LuHeart, color: "text-pink-600 bg-pink-50" },
    { label: "Rating Rata-rata", value: "4.8 / 5", change: "+0.2%", icon: LuStar, color: "text-amber-600 bg-amber-50" },
    { label: "Klik ke Maps", value: "312", change: "+22.1%", icon: LuMapPin, color: "text-blue-600 bg-blue-50" },
  ];

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Selamat pagi, Ryn
        </h1>
        <p className="text-slate-500 mt-1 text-lg">
          Kelola usahamu dan tingkatkan performa bisnismu hari ini.
        </p>
      </div>
      <div className="flex flex-col gap-8">
        {/* Top Stats Cards */}
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
              <p className="text-emerald-600 font-bold text-base mt-2">
                {stat.change} <span className="text-slate-400 font-normal">dari minggu lalu</span>
              </p>
            </div>
          ))}
        </div>

        {/* Middle Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white border border-slate-100 rounded-2xl p-6 shadow-xs flex flex-col justify-between min-h-[350px]">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-slate-900">Performa Kunjungan</h3>
              <div className="flex gap-4 text-base font-medium">
                <span className="flex items-center gap-2 text-emerald-600">
                  <span className="w-3 h-3 bg-emerald-600 rounded-full" /> Dilihat
                </span>
                <span className="flex items-center gap-2 text-slate-400">
                  <span className="w-3 h-3 bg-slate-300 rounded-full" /> Favorit
                </span>
              </div>
            </div>
            <div className="flex-1 relative mt-6 min-h-55 bg-slate-50 rounded-xl overflow-hidden">
              <Image src="https://picsum.photos/800/400?random=42" fill className="object-cover" alt="Graph Performa" />
            </div>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-xs flex flex-col justify-between">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-slate-900">Produk / Menu Terpopuler</h3>
              <button className="text-[#15803d] font-bold">Lihat semua</button>
            </div>
            <div className="flex flex-col gap-4 flex-1">
              {[
                { rank: 1, name: "Nasi Ayam Geprek", count: "324 dilihat", tag: "Terlaris", tagCol: "bg-emerald-50 text-emerald-700" },
                { rank: 2, name: "Es Teh Manis", count: "210 dilihat", tag: "Populer", tagCol: "bg-blue-50 text-blue-700" },
                { rank: 3, name: "Ayam Penyet", count: "145 dilihat", tag: "Stabil", tagCol: "bg-slate-100 text-slate-700" },
              ].map((food, idx) => (
                <div key={idx} className="flex items-center gap-4 p-2 hover:bg-slate-50 rounded-xl transition-colors">
                  <span className="font-black text-slate-400 text-lg w-6">{food.rank}</span>
                  <div className="w-14 h-14 relative rounded-xl overflow-hidden shrink-0">
                    <Image src={`https://picsum.photos/100?random=${idx + 50}`} fill className="object-cover" alt={food.name} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-900">{food.name}</h4>
                    <p className="text-slate-400 font-medium">{food.count}</p>
                  </div>
                  <span className={`px-2 py-1 font-bold rounded-md ${food.tagCol}`}>{food.tag}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white border border-slate-100 rounded-2xl p-6 shadow-xs">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-slate-900">Ulasan Terbaru</h3>
              <button className="text-[#15803d] font-bold">Lihat semua</button>
            </div>
            <div className="flex flex-col gap-6">
              {[
                { name: "Siti Nurhaliza", comment: "Makanannya enak banget, sambalnya nampol! Porsi pas dan harga terjangkau", r: "2 jam yang lalu" },
                { name: "Rizky Pratama", comment: "Enak dan cocok buat makan siang. Ayamnya juicy!", r: "3 jam yang lalu" },
              ].map((review, idx) => (
                <div key={idx} className="flex gap-4 items-start border-b border-slate-50 pb-4 last:border-0 last:pb-0">
                  <div className="w-12 h-12 relative rounded-full overflow-hidden shrink-0">
                    <Image src={`https://picsum.photos/100?random=${idx + 60}`} fill className="object-cover" alt="User Profile" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-slate-900">{review.name}</h4>
                      <span className="text-slate-400 font-medium">{review.r}</span>
                    </div>
                    <div className="flex text-amber-400 gap-0.5 my-1">
                      {[...Array(5)].map((_, s) => <LuStar key={s} className="fill-amber-400 text-amber-400" size={16} />)}
                    </div>
                    <p className="text-slate-600 font-medium mt-1">{review.comment}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-emerald-900 text-white rounded-2xl p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-800 rounded-xl flex items-center justify-center text-emerald-300">
                  <LuSparkles size={22} />
                </div>
                <h3 className="text-xl font-bold">Insight AI Assistant</h3>
              </div>
              <p className="text-emerald-100/90 leading-relaxed font-medium">
                Kunjungan tokomu meningkat <span className="text-emerald-300 font-bold">18.5%</span> minggu ini. Produk Nasi Ayam Geprek paling banyak dilihat pada jam 17.00 - 21.00.
              </p>
            </div>
            <button className="w-full bg-white text-emerald-900 font-bold py-3 rounded-xl hover:bg-emerald-50 transition-colors mt-6 text-center">
              Lihat Rekomendasi →
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-xs">
          <h3 className="text-xl font-bold text-slate-900 mb-4">Aksi Cepat</h3>
          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-2 border border-slate-200 rounded-xl px-5 py-3 font-bold text-slate-700 hover:bg-slate-50 transition-colors">
              <LuPlus size={20} /> Tambah Menu
            </button>
            <button className="flex items-center gap-2 border border-slate-200 rounded-xl px-5 py-3 font-bold text-slate-700 hover:bg-slate-50 transition-colors">
              <LuTicket size={20} /> Buat Promo
            </button>
          </div>
        </div>
      </div>
    </>
  );
}