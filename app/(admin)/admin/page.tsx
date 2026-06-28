"use client";

import { useState } from "react";
import Image from "next/image";
import {
  LuTicket,
  LuSparkles,
  LuPlus,
  LuTrendingUp,
  LuHeart,
  LuStar,
  LuMapPin,
  LuSend
} from "react-icons/lu";


export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("Dashboard");

  // Mock Data untuk statistik atas (Dashboard / Analytics / Produk)
  const stats = [
    { label: "Total Dilihat", value: "1.240", change: "+18.5%", icon: LuTrendingUp, color: "text-emerald-600 bg-emerald-50" },
    { label: "Total Favorit", value: "187", change: "+12.3%", icon: LuHeart, color: "text-pink-600 bg-pink-50" },
    { label: "Rating Rata-rata", value: "4.8 / 5", change: "+0.2%", icon: LuStar, color: "text-amber-600 bg-amber-50" },
    { label: "Klik ke Maps", value: "312", change: "+22.1%", icon: LuMapPin, color: "text-blue-600 bg-blue-50" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-row text-base text-slate-800">
      {/* ================= MAIN CONTENT CONTAINER ================= */}
      <main className="flex-1 p-12 overflow-y-auto max-h-screen">
        {/* Header Profile Top Right */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              {activeTab === "Dashboard" ? "Selamat pagi, Ryn" : activeTab}
            </h1>
            <p className="text-slate-500 mt-1 text-lg">
              {activeTab === "Dashboard" ? "Kelola usahamu dan tingkatkan performa bisnismu hari ini." : `Manajemen data dan fitur ${activeTab} milikmu.`}
            </p>
          </div>

          <div className="flex items-center gap-4 bg-white p-3 rounded-2xl border border-slate-100 shadow-xs">
            <div className="w-12 h-12 relative rounded-full overflow-hidden">
              <Image src="https://picsum.photos/100?random=41" fill className="object-cover" alt="User Profile" />
            </div>
            <div className="text-left">
              <h4 className="font-bold text-slate-900 text-base">Ryn Askara</h4>
              <p className="text-slate-400 font-medium">Pemilik</p>
            </div>
          </div>
        </div>

        {/* Dynamic Panel Content Rendering */}
        {activeTab === "Dashboard" && (
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
                  <p className="text-emerald-600 font-bold text-base mt-2">{stat.change} <span className="text-slate-400 font-normal">dari minggu lalu</span></p>
                </div>
              ))}
            </div>

            {/* Middle Dashboard Section (Main Graph and Popular Menu) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Traffic Outline Box */}
              <div className="lg:col-span-2 bg-white border border-slate-100 rounded-2xl p-6 shadow-xs flex flex-col justify-between min-h-[350px]">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold text-slate-900">Performa Kunjungan</h3>
                  <div className="flex gap-4 text-base font-medium">
                    <span className="flex items-center gap-2 text-emerald-600"><span className="w-3 h-3 bg-emerald-600 rounded-full" /> Dilihat</span>
                    <span className="flex items-center gap-2 text-slate-500"><span className="w-3 h-3 bg-slate-400 rounded-full" /> Favorit</span>
                  </div>
                </div>
                <div className="flex-1 relative mt-6 min-h-[220px] bg-slate-50 rounded-xl overflow-hidden">
                  <Image src="https://picsum.photos/800/400?random=42" fill className="object-cover" alt="Graph Placeholder" />
                </div>
              </div>

              {/* Popular Products Sidebar List */}
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

            {/* Bottom Dashboard Section (Reviews & AI Insights) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Reviews List */}
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
                          <LuStar className="fill-amber-400 text-amber-400" size={16} />
                          <LuStar className="fill-amber-400 text-amber-400" size={16} />
                          <LuStar className="fill-amber-400 text-amber-400" size={16} />
                          <LuStar className="fill-amber-400 text-amber-400" size={16} />
                          <LuStar className="fill-amber-400 text-amber-400" size={16} />
                        </div>
                        <p className="text-slate-600 font-medium mt-1">{review.comment}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI Insight Block */}
              <div className="bg-emerald-900 text-white rounded-2xl p-6 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-emerald-800 rounded-xl flex items-center justify-center text-emerald-300">
                      <LuSparkles size={22} />
                    </div>
                    <h3 className="text-xl font-bold">Insight AI Assistant</h3>
                  </div>
                  <p className="text-emerald-100/90 leading-relaxed font-medium">
                    Kunjungan tokomu meningkat <span className="text-emerald-300 font-bold">18.5%</span> minggu ini. Produk Nasi Ayam Geprek paling banyak dilihat pada jam 17.00 - 21.00. Coba buat promo di jam tersebut untuk meningkatkan volume omzet!
                  </p>
                </div>
                <button className="w-full bg-white text-emerald-900 font-bold py-3 rounded-xl hover:bg-emerald-50 transition-colors mt-6 text-center">
                  Lihat Rekomendasi Lengkap →
                </button>
              </div>
            </div>

            {/* Quick Actions Action bar footer bottom */}
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
        )}

        {/* ================= ACTIVE TAB: PRODUK & MENU ================= */}
        {activeTab === "Produk & Menu" && (
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-xs">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
              <div className="flex gap-3 border-b border-slate-100 w-full md:w-auto">
                {["Semua Produk (24)", "Makanan (17)", "Minuman (5)"].map((tab, idx) => (
                  <button key={idx} className={`pb-4 px-2 font-bold transition-colors ${idx === 0 ? "border-b-2 border-[#15803d] text-[#15803d]" : "text-slate-400 hover:text-slate-800"}`}>
                    {tab}
                  </button>
                ))}
              </div>
              <button className="bg-[#15803d] text-white font-bold px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-[#166534] transition-colors self-stretch md:self-auto justify-center">
                <LuPlus size={22} /> Tambah Produk
              </button>
            </div>

            {/* Products Interactive Inventory Table List view */}
            <div className="flex flex-col gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex flex-row items-center justify-between border border-slate-100 rounded-2xl p-4 hover:bg-slate-50/50 transition-colors gap-6">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-20 h-20 relative rounded-xl overflow-hidden shrink-0">
                      <Image src="https://picsum.photos/150?random=45" fill className="object-cover" alt="Nasi Ayam Geprek" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900">Nasi Ayam Geprek</h4>
                      <p className="text-slate-400 font-medium max-w-md mt-0.5">Ayam geprek dengan sambal bawang khas Dapur Nona yang gurih pedas nikmat.</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-12 shrink-0 font-bold text-slate-900">
                    <div>
                      <span className="text-slate-400 font-medium block">Kategori</span>
                      <span className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-md mt-1 inline-block">Makanan</span>
                    </div>
                    <div>
                      <span className="text-slate-400 font-medium block">Harga</span>
                      <span className="mt-1 block">Rp 22.000</span>
                    </div>
                    <div>
                      <span className="text-slate-400 font-medium block">Dilihat</span>
                      <span className="mt-1 block text-center">28</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= ACTIVE TAB: AI BUSINESS ASSISTANT ================= */}
        {activeTab === "AI Bussines Assistant" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Chat Box Panel */}
            <div className="lg:col-span-2 bg-white border border-slate-200 rounded-3xl p-6 flex flex-col h-[65dvh] justify-between shadow-xs">
              <div className="flex items-center gap-4 border-b border-slate-100 pb-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center text-white font-black text-xl">
                  B
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Bakool AI Assistant</h3>
                  <span className="text-emerald-600 font-bold flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full inline-block" /> Online
                  </span>
                </div>
              </div>

              {/* Chat Log History */}
              <div className="flex-1 overflow-y-auto flex flex-col gap-4 py-2 pr-2 text-base font-medium">
                <div className="bg-emerald-50 text-emerald-900 p-4 rounded-2xl rounded-tl-none max-w-[85%] self-start border border-emerald-100/50">
                  Halo Dapur Nona! Ada yang bisa saya bantu untuk menganalisis laporan performa produk kuliner atau pengaturan promo tokomu hari ini?
                </div>
                <div className="bg-slate-100 text-slate-800 p-4 rounded-2xl rounded-tr-none max-w-[85%] self-end">
                  Kenapa tingkat kunjungan menu minuman saya cenderung menurun drastis dalam 3 hari terakhir?
                </div>
              </div>

              {/* Message Composer Input Form bar */}
              <div className="flex gap-3 items-center border-t border-slate-100 pt-4 mt-4">
                <input
                  type="text"
                  placeholder="Ketik pertanyaanmu di sini..."
                  className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-slate-800 placeholder-slate-300 focus:outline-none focus:border-[#15803d]"
                />
                <button className="w-14 h-14 bg-[#15803d] text-white rounded-xl flex items-center justify-center hover:bg-[#166534] transition-colors shrink-0 shadow-xs">
                  <LuSend size={22} />
                </button>
              </div>
            </div>

            {/* Side Analytics Summary Card */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs">
              <h3 className="font-bold text-slate-900 text-xl mb-4">Ringkasan Data Tokomu</h3>
              <div className="flex flex-col gap-4">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-slate-400 font-semibold block">Total Pengunjung</span>
                  <h4 className="text-2xl font-black text-slate-900 mt-1">1.240</h4>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-slate-400 font-semibold block">Interaksi Menu</span>
                  <h4 className="text-2xl font-black text-slate-900 mt-1">4.8 / 5</h4>
                </div>
              </div>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}