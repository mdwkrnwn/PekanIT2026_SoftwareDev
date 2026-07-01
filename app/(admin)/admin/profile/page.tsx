"use client";

import { useState } from "react";
import Image from "next/image";
import {
  LuMapPin,
  LuPhone,
  LuMail,
  LuGlobe,
  LuInstagram,
  LuFacebook,
  LuPlus,
  LuTrendingDown,
  LuHeart,
  LuStar,
  LuMessageSquare,
  LuLock,
  LuLanguages,
  LuMoon,
  LuLogOut,
  LuChevronRight
} from "react-icons/lu";
import { Edit } from "lucide-react";

export default function ProfilTokoView() {
  const [gallery, setGallery] = useState<string[]>([
    "https://picsum.photos/300/300?random=201",
    "https://picsum.photos/300/300?random=202",
    "https://picsum.photos/300/300?random=203",
    "https://picsum.photos/300/300?random=204",
  ]);

  const stats = [
    { label: "Total Dilihat", value: "25", change: "22.1% dari minggu lalu", icon: LuTrendingDown, color: "text-rose-600 bg-rose-50" },
    { label: "Total Favorit", value: "162", change: "0.2% dari minggu lalu", icon: LuHeart, color: "text-emerald-600 bg-emerald-50" },
    { label: "Rating Rata-rata", value: "4.8 / 5", change: "18.5% dari minggu lalu", icon: LuStar, color: "text-amber-600 bg-amber-50" },
    { label: "Total Ulasan", value: "187", change: "12.3% dari minggu lalu", icon: LuMessageSquare, color: "text-purple-600 bg-purple-50" },
  ];

  const operationalHours = [
    { day: "Senin", hours: "08.00 - 20.00", isClosed: false },
    { day: "Selasa", hours: "08.00 - 20.00", isClosed: false },
    { day: "Rabu", hours: "08.00 - 20.00", isClosed: false },
    { day: "Kamis", hours: "08.00 - 20.00", isClosed: false },
    { day: "Jumat", hours: "08.00 - 20.00", isClosed: false },
    { day: "Sabtu", hours: "08.00 - 20.00", isClosed: false },
    { day: "Minggu", hours: "Tutup", isClosed: true },
  ];

  return (
    <div className="flex flex-col gap-8 text-base">

      {/* ================= ATAS: TIGA KARTU INFORMASI UTAMA ================= */}
      <section className="grid grid-rows-[1fr_auto] grid-cols-3 gap-6 *:w-full *:h-full items-center">

        {/* Kartu 1: Informasi Toko */}
        <div className="bg-white border row-span-2 border-slate-100 rounded-3xl p-6 shadow-xs flex flex-col justify-between min-h-115">
          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-bold text-slate-900">Informasi Toko</h3>

            <div className="flex items-start gap-4">
              <div className="w-24 h-24 relative rounded-2xl overflow-hidden shrink-0 border border-slate-100">
                <Image src="https://picsum.photos/200/200?random=200" fill className="object-cover" alt="Dapur Nona" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-slate-400 font-medium block">Nama Toko</span>
                <div className="flex items-center gap-2">
                  <h4 className="text-xl font-bold text-slate-900">Dapur Nona</h4>
                  <span className="bg-emerald-50 text-emerald-700 text-base font-bold px-2 py-0.5 rounded-md">Terverifikasi</span>
                </div>
                <p className="text-slate-500 font-semibold mt-1">🍽️ Kuliner</p>
              </div>
            </div>

            <div className="flex flex-col gap-3 text-slate-600 font-medium border-t border-slate-50 pt-4">
              <p className="flex items-start gap-3"><LuMapPin size={22} className="text-slate-400 shrink-0 mt-0.5" /> <span>Jl. Diponegoro No.12, Sleman, Yogyakarta</span></p>
              <p className="flex items-center gap-3"><LuPhone size={22} className="text-slate-400 shrink-0" /> <span>0812 3456 7890</span></p>
              <p className="flex items-center gap-3"><LuMail size={22} className="text-slate-400 shrink-0" /> <span>dapurnona@gmail.com</span></p>
              <p className="flex items-center gap-3"><LuGlobe size={22} className="text-slate-400 shrink-0" /> <span className="text-slate-400">-</span></p>
              <p className="flex items-center gap-3"><LuInstagram size={22} className="text-slate-400 shrink-0" /> <span>@dapurnona.id</span></p>
              <p className="flex items-center gap-3"><LuFacebook size={22} className="text-slate-400 shrink-0" /> <span>Dapur Nona</span></p>
            </div>
          </div>

          <button className="w-full border border-slate-200 text-slate-700 font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors mt-6">
            <Edit size={20} /> Edit Profil
          </button>
        </div>

        {/* Kolom Kanan Kanan (Tentang Toko & Galeri) */}

        {/* Kartu 2: Tentang Toko */}
        <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-xs flex flex-col justify-between min-h-55">
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Tentang Toko</h3>
            <p className="text-slate-600 font-medium leading-relaxed">
              Dapur Nona Merupakan UMKM kuliner yang menyediakan berbagai menu rumahan seperti ayam geprek, nasi goreng, dan anek lauk lezat lainnya. Kami selalu menggunakan bahan segar dan berkualitas untuk memberikan rasa terbaik bagi pelanggan
            </p>
          </div>
          <button className="w-fit border border-slate-200 text-slate-700 font-bold px-4 py-2.5 rounded-xl flex items-center gap-2 hover:bg-slate-50 transition-colors mt-4">
            <Edit size={18} /> Edit Deskripsi
          </button>
        </div>
        {/* Kartu 4: Jam Operasional */}
        <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-xs flex flex-col justify-between min-h-110">
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Jam Operasional</h3>
            <div className="flex flex-col gap-3">
              {operationalHours.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center border-b border-slate-50 pb-2 last:border-0 last:pb-0 font-medium">
                  <span className="text-slate-600">{item.day}</span>
                  <span className={`font-bold ${item.isClosed ? "text-rose-600" : "text-slate-900"}`}>
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <button className="w-full border border-slate-200 text-slate-700 font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors mt-6">
            <Edit size={20} /> Edit Jam Operasional
          </button>
        </div>
        {/* Kartu 3: Galeri Toko */}
        <div className="bg-white border col-span-2 border-slate-100 rounded-3xl p-6 shadow-xs">
          <h3 className="text-xl font-bold text-slate-900 mb-4">Galeri Toko</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {gallery.map((imgUrl, idx) => (
              <div key={idx} className="relative aspect-square rounded-2xl overflow-hidden border border-slate-100 bg-slate-50">
                <Image src={imgUrl} fill className="object-cover" alt={`Galeri ${idx + 1}`} />
              </div>
            ))}
            <button className="border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center text-center gap-2 p-4 text-slate-400 hover:border-[#15803d] hover:text-[#15803d] transition-colors aspect-square">
              <LuPlus size={24} />
              <span className="font-bold">Tambah Foto</span>
            </button>
          </div>
        </div>

      </section>

      {/* ================= TENGAH: RINGKASAN TOKO STATUS STATS ================= */}
      <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-xs">
        <h3 className="text-xl font-bold text-slate-900 mb-6">Ringkasan Toko</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-slate-50/60 border border-slate-100 rounded-2xl p-5 flex items-center gap-4">
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${stat.color}`}>
                <stat.icon size={26} />
              </div>
              <div>
                <span className="text-slate-400 font-semibold block">{stat.label}</span>
                <h4 className="text-3xl font-black text-slate-900 mt-1">{stat.value}</h4>
                <span className="text-slate-400 font-medium block mt-1 text-base">{stat.change}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= BAWAH: PENGATURAN AKUN LIST MENUS ================= */}
      <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-xs flex flex-col gap-4">
        <h3 className="text-xl font-bold text-slate-900 mb-2">Pengaturan Akun</h3>

        <div className="flex flex-col border border-slate-100 rounded-2xl overflow-hidden divide-y divide-slate-100">

          {/* Menu 1: Ubah Password */}
          <button className="flex items-center justify-between p-5 hover:bg-slate-50/80 transition-colors w-full text-left">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500">
                <LuLock size={22} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Ubah Password</h4>
                <p className="text-slate-400 font-medium mt-0.5">Atur ulang password kamu</p>
              </div>
            </div>
            <LuChevronRight className="text-slate-400" size={24} />
          </button>

          {/* Menu 2: Bahasa */}
          <button className="flex items-center justify-between p-5 hover:bg-slate-50/80 transition-colors w-full text-left">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500">
                <LuLanguages size={22} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Bahasa</h4>
                <p className="text-slate-400 font-medium mt-0.5">Bahasa yang digunakan di aplikasi</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-slate-400 font-bold">
              <span>Bahasa Indonesia</span>
              <LuChevronRight size={24} />
            </div>
          </button>

          {/* Menu 3: Mode Gelap */}
          <button className="flex items-center justify-between p-5 hover:bg-slate-50/80 transition-colors w-full text-left">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500">
                <LuMoon size={22} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Mode Gelap</h4>
                <p className="text-slate-400 font-medium mt-0.5">Ubah tampilan aplikasi</p>
              </div>
            </div>
            <LuChevronRight className="text-slate-400" size={24} />
          </button>

          {/* Menu 4: Logout */}
          <button className="flex items-center justify-between p-5 hover:bg-rose-50/40 transition-colors w-full text-left group">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-100/60 flex items-center justify-center text-rose-500 group-hover:bg-rose-100 transition-colors">
                <LuLogOut size={22} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 group-hover:text-rose-600 transition-colors">Logout</h4>
                <p className="text-slate-400 font-medium mt-0.5">Keluar dari akun</p>
              </div>
            </div>
            <LuChevronRight className="text-slate-400" size={24} />
          </button>

        </div>
      </div>

    </div>
  );
}