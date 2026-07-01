
import Image from "next/image";
import {
  LuMail,
  LuPhone,
  LuMapPin,
  LuCalendar,
  LuHeart,
  LuMessageSquare,
  LuTrophy,
} from "react-icons/lu";

import { FaUserEdit } from "react-icons/fa";

export default function ProfilePage() {
  return (
    <div className="p-12 bg-slate-50 min-h-screen text-base">
      {/* Title Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-slate-900">Profil Saya</h1>
        <p className="text-slate-500 mt-1 text-lg">Kelola informasi profil dan lihat aktivitas kamu di bakool</p>
      </div>

      {/* Main Profile Header Card */}
      <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-xs mb-8">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-40 h-40 relative rounded-full overflow-hidden border-4 border-white shadow-md shrink-0">
              <Image src="https://picsum.photos/300/300?random=81" fill className="object-cover" alt="Ryn Askara" />
            </div>
            <div className="flex flex-col gap-3 text-center md:text-left">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                <h2 className="text-3xl font-bold text-slate-900">Ryn Askara</h2>
                <span className="bg-emerald-100 text-emerald-800 text-base font-bold px-3 py-1 rounded-md">Verified</span>
              </div>
              <div className="flex flex-col gap-2 text-slate-600 font-medium mt-1">
                <p className="flex items-center justify-center md:justify-start gap-3"><LuMail size={20} className="text-slate-400" /> rynaskara@gmail.com</p>
                <p className="flex items-center justify-center md:justify-start gap-3"><LuPhone size={20} className="text-slate-400" /> 0812-3456-7891</p>
                <p className="flex items-center justify-center md:justify-start gap-3"><LuMapPin size={20} className="text-slate-400" /> Malang, Jawa Timur</p>
                <p className="flex items-center justify-center md:justify-start gap-3"><LuCalendar size={20} className="text-slate-400" /> Bergabung sejak 12 Februari 2025</p>
              </div>
            </div>
          </div>
          <button className="border border-slate-200 text-slate-800 font-bold px-5 py-3 rounded-xl flex items-center gap-2 hover:bg-slate-50 transition-colors shrink-0">
            <FaUserEdit size={20} /> Edit Profil
          </button>
        </div>

        {/* User Statistics Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10 border-t border-slate-100 pt-8">
          {[
            { label: "UMKM Favorit", value: "23", icon: LuHeart, color: "text-rose-600 bg-rose-50" },
            { label: "Ulasan Dibuat", value: "17", icon: LuMessageSquare, color: "text-blue-600 bg-blue-50" },
            { label: "UMKM Dikunjungi", value: "12", icon: LuMapPin, color: "text-emerald-600 bg-emerald-50" },
            { label: "Total XP", value: "1.250", icon: LuTrophy, color: "text-amber-600 bg-amber-50" },
          ].map((stat, i) => (
            <div key={i} className="bg-slate-50/60 rounded-2xl p-5 flex items-center gap-4 border border-slate-100">
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${stat.color}`}>
                <stat.icon size={24} />
              </div>
              <div>
                <h4 className="text-2xl font-black text-slate-900">{stat.value}</h4>
                <p className="text-slate-500 font-semibold mt-0.5">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Grid Layout: Tentang Saya vs Pencapaian */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Tentang Saya */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs">
          <h3 className="text-xl font-bold text-slate-900 mb-4">Tentang Saya</h3>
          <p className="text-slate-600 font-medium leading-relaxed mb-6">
            Saya suka menjelajahi UMKM lokal, mencoba makanan enak, dan mendukung produk lokal berkualitas.
          </p>
          <div className="flex flex-col gap-4 border-t border-slate-50 pt-4 text-slate-700 font-semibold">
            <div>
              <span className="text-slate-400 font-medium block">Tanggal Lahir</span>
              <span className="mt-0.5 block">14 April 2022</span>
            </div>
            <div>
              <span className="text-slate-400 font-medium block">Pekerjaan</span>
              <span className="mt-0.5 block">Mahasiswa</span>
            </div>
            <div>
              <span className="text-slate-400 font-medium block">Minat</span>
              <span className="mt-0.5 block">Kuliner, Kopi, Fashion, Kerajinan</span>
            </div>
          </div>
        </div>

        {/* Pencapaian Terbaru */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-slate-900">Pencapaian Terbaru</h3>
              <button className="text-[#15803d] font-bold">Lihat Semua</button>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { title: "Reviewer", desc: "Berikan 5 ulasan untuk UMKM", date: "22 Mei 2025" },
                { title: "Food Hunter", desc: "Favoritkan 10 UMKM kuliner", date: "22 Mei 2025" },
                { title: "Local Explorer", desc: "Kunjungi 5 UMKM berbeda", date: "22 Mei 2025" },
              ].map((badge, idx) => (
                <div key={idx} className="flex items-center justify-between p-2 hover:bg-slate-50 rounded-xl transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 font-bold rounded-xl flex items-center justify-center">
                      🏅
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{badge.title}</h4>
                      <p className="text-slate-400 font-medium mt-0.5">{badge.desc}</p>
                    </div>
                  </div>
                  <span className="text-slate-400 font-medium">{badge.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Aktivitas Terbaru */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-slate-900">Aktivitas Terbaru</h3>
          <button className="text-[#15803d] font-bold">Lihat Semua</button>
        </div>
        <div className="flex flex-col gap-6 relative before:absolute before:top-4 before:bottom-4 before:left-[23px] before:w-0.5 before:bg-slate-100">
          {[
            { log: "Menambahkan Kedai Kopi Titik ke Favorit", time: "2 jam yang lalu", type: "fav" },
            { log: "Memberikan Ulasan untuk Nasi Ayam Geprek Pak Ndut", time: "1 jam yang lalu", type: "review" },
            { log: "Mengunjungi Warung Bu Siti", time: "2 hari yang lalu", type: "visit" },
          ].map((act, i) => (
            <div key={i} className="flex gap-4 items-start relative z-10">
              <div className="w-12 h-12 rounded-full bg-white border border-slate-100 shadow-xs flex items-center justify-center shrink-0 font-bold text-lg">
                {act.type === "fav" ? "❤️" : act.type === "review" ? "💬" : "📍"}
              </div>
              <div className="flex-1 pt-1">
                <h4 className="font-bold text-slate-900">{act.log}</h4>
                <p className="text-slate-400 font-medium mt-0.5">{act.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}