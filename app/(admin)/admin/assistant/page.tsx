"use client";

import Image from "next/image";
import { useState } from "react";
import { LucideBarChart3, LucideLineChart } from "lucide-react";
import { IconType } from "react-icons";

import {
  LuSend,
  LuSparkles,
  LuStar,
  LuClock,
  LuThumbsUp,
  LuHistory,
  LuPaperclip,
  LuChevronDown,
  LuTag,
  LuArrowRight,
  LuBot,
  LuEye,
  LuUsers,
  LuHeart,
  LuPackage,
  LuUser,
} from "react-icons/lu";

export default function AiAssistantPage() {
  const [message, setMessage] = useState("");

  const popularQuestions = [
    { icon: LucideBarChart3, text: "Kenapa toko saya sepi minggu ini?" },
    { icon: LuStar, text: "Produk mana yang paling potensial?" },
    { icon: LuClock, text: "Jam berapa sebaiknya buat promo?" },
    { icon: LuThumbsUp, text: "Bagaimana cara meningkatkan rating?" },
  ];

  // export interface ProductStat {
  //   title: string;
  //   value: string;
  //   growth: string;
  //   icon: IconType;
  //   color: string;
  // }

  const productStats = [
    {
      title: "Total Dilihat",
      value: "187",
      growth: "+12.3%",
      icon: LuEye,
      color: "bg-[#E8F7EF] text-[#158A62]",
    },
    {
      title: "Total Pengunjung",
      value: "12",
      growth: "+0.2%",
      icon: LuUser,
      color: "bg-[#FFF0F3] text-[#E11D48]",
    },
    {
      title: "Total Interaksi",
      value: "162",
      growth: "+0.2%",
      icon: LuPackage,
      color: "bg-[#EAF2FF] text-[#2563EB]",
    },
  ];

  const summaryStats = [
    { title: "Total Dilihat", value: "162", growth: "0.2%", icon: LuEye },
    { title: "Total Pengunjung", value: "162", growth: "0.2%", icon: LuUsers },
    { title: "Interaksi", value: "162", growth: "0.2%", icon: LuHeart },
  ];

  const produkTerlaris = [
    { name: "Nasi Ayam Geprek", views: "324 dilihat", img: "/menu1.png" },
    { name: "Es Teh Manis", views: "210 dilihat", img: "/menu2.png" },
    { name: "Ayam Penyet", views: "210 dilihat", img: "/menu3.png" },
  ];

  const sumberKunjungan = [
    { label: "Explore", value: "45%", color: "bg-[#158A62]" },
    { label: "Pencarian", value: "28%", color: "bg-[#F59E0B]" },
    { label: "Favorit", value: "17%", color: "bg-[#3B82F6]" },
    { label: "Rekomendasi", value: "10%", color: "bg-[#8B5CF6]" },
  ];

  return (
    <div className="grid grid-cols-[2.4fr_1fr] gap-6">
      {/* LEFT: Chat area */}
      <div className="flex flex-col gap-6">
        {/* Pertanyaan Populer */}
        <div className="rounded-2xl border border-[#EAECF0] bg-white p-5">
          <h3 className="text-[15px] font-semibold text-[#101828]">
            Pertanyaan Populer
          </h3>
          <div className="mt-4 grid grid-cols-4 gap-3">
            {popularQuestions.map((q, i) => (
              <button
                key={i}
                onClick={() => setMessage(q.text)}
                className="flex items-center gap-2 rounded-xl border border-[#EAECF0] bg-white px-3 py-3 text-left text-[12px] font-medium text-[#344054] transition hover:border-[#158A62] hover:bg-[#F6FCF9]"
              >
                <q.icon size={16} className="shrink-0 text-[#158A62]" />
                {q.text}
              </button>
            ))}
          </div>
        </div>

        {/* Chat box */}
        <div className="flex h-[840px] flex-col rounded-2xl border border-[#EAECF0] bg-white p-5">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[#EAECF0] pb-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-transparent text-white">
                <Image
                  src="/ai.png"
                  alt="AI Assistant"
                  width={22}
                  height={22}
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-[15px] font-semibold text-[#101828]">
                    Bakool AI Assistant
                  </h3>
                  <span className="rounded bg-[#E8F7EF] px-1.5 py-0.5 text-[10px] font-semibold text-[#158A62]">
                    AI
                  </span>
                </div>
                <span className="flex items-center gap-1.5 text-[12px] font-medium text-[#158A62]">
                  <span className="h-2 w-2 rounded-full bg-[#158A62]" />
                  Online
                </span>
              </div>
            </div>
            <button className="flex items-center gap-2 rounded-full border border-[#D0D5DD] px-4 py-2 text-[12px] font-medium text-[#344054] transition hover:bg-[#F9FAFB]">
              <LuHistory size={14} />
              Riwayat Chat
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 space-y-4 overflow-y-auto py-4">
            {/* User message */}
            <div className="flex justify-end">
              <div>
                <div className="max-w-[420px] rounded-2xl rounded-tr-sm bg-[#E8F7EF] px-4 py-3 text-[14px] text-[#101828]">
                  Kenapa kunjungan minggu ini turun?
                </div>
                <p className="mt-1 text-right text-[11px] text-[#98A2B3]">
                  10:21 ✓✓
                </p>
              </div>
            </div>

            {/* AI analysis message */}
            <div className="max-w-[560px] space-y-3 rounded-2xl rounded-tl-sm bg-[#F9FAFB] p-4">
              <p className="text-[14px] font-medium text-[#344054]">
                Berdasarkan data tokomu, berikut analisisnya 👇
              </p>
              <ul className="space-y-2 text-[13px] text-[#344054]">
                <li className="flex gap-2">
                  <span>📉</span>
                  <span>Kunjungan turun 12% dibanding minggu lalu.</span>
                </li>
                <li className="flex gap-2">
                  <span>👁️</span>
                  <span>
                    Produk paling banyak dilihat adalah Nasi Ayam Geprek, tetapi
                    konversinya (dari dilihat ke pesan/rekomendasi) rendah (8%).
                  </span>
                </li>
                <li className="flex gap-2">
                  <span>🕐</span>
                  <span>
                    Tidak ada promo aktif pada jam 11.00 - 13.00, jam paling
                    ramai pengunjung.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span>⭐</span>
                  <span>
                    Rating tokomu stabil di 4.8 (bagus!), pertahankan ya!
                  </span>
                </li>
              </ul>
              <p className="text-right text-[11px] text-[#98A2B3]">10:21</p>
            </div>

            {/* AI recommendation message */}
            <div className="max-w-[560px] space-y-2 rounded-2xl rounded-tl-sm bg-[#F9FAFB] p-4">
              <p className="flex items-center gap-2 text-[14px] font-semibold text-[#101828]">
                Rekomendasi untukmu 💡
              </p>
              <p className="text-[13px] leading-6 text-[#344054]">
                Coba buat promo paket makan siang untuk Nasi Ayam Geprek pada
                jam 11.00 - 13.00. Berdasarkan data, ini bisa meningkatkan
                kunjungan hingga 15-20%!
              </p>
              <p className="text-right text-[11px] text-[#98A2B3]">10:21</p>
            </div>
          </div>

          {/* Saran tindakan lanjut */}
          <div className="border-t border-[#EAECF0] pt-4">
            <p className="mb-3 text-[13px] font-medium text-[#667085]">
              Saran tindakan lanjut:
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="flex items-center gap-2 rounded-xl border border-[#D0D5DD] px-4 py-2.5 text-[13px] font-medium text-[#158A62] transition hover:bg-[#F6FCF9]">
                <LuTag size={15} />
                Buat Promo makan siang
              </button>
              <button className="flex items-center gap-2 rounded-xl border border-[#D0D5DD] px-4 py-2.5 text-[13px] font-medium text-[#158A62] transition hover:bg-[#F6FCF9]">
                <LuTag size={15} />
                Produk apa yang laku?
              </button>
              <button className="flex items-center gap-2 rounded-xl border border-[#D0D5DD] px-4 py-2.5 text-[13px] font-medium text-[#158A62] transition hover:bg-[#F6FCF9]">
                <LuTag size={15} />
                Analisis lebih detail
              </button>
            </div>
          </div>

          {/* Input */}
          <div className="mt-4 flex items-center gap-3 rounded-xl border border-[#D0D5DD] px-4 py-2">
            <button className="text-[#98A2B3]">
              <LuPaperclip size={18} />
            </button>
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              type="text"
              placeholder="Ketik Pertanyaanmu di sini...."
              className="flex-1 bg-transparent py-2 text-[14px] text-[#344054] placeholder-[#98A2B3] focus:outline-none"
            />
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#158A62] text-white transition hover:bg-[#12704F]">
              <LuSend size={17} />
            </button>
          </div>
          <p className="mt-3 text-center text-[11px] text-[#98A2B3]">
            AI dapat membuat kesalahan. Gunakan hasil rekomendasi dengan
            pertimbanganmu sendiri.
          </p>
        </div>
      </div>

      {/* RIGHT: Sidebar */}
      <div className="space-y-5">
        {/* Ringkasan Data Tokomu */}
        <div className="rounded-2xl border border-[#EAECF0] bg-white p-5">
          <div className="flex items-center justify-between">
            <h3 className="text-[15px] font-semibold text-[#101828]">
              Ringkasan Data Tokomu
            </h3>
          </div>
          <button className="mt-2 flex items-center gap-2 rounded-lg border border-[#D0D5DD] px-3 py-1.5 text-[12px] text-[#344054]">
            📅 20 Mei - 26 Mei 2026
            <LuChevronDown size={14} />
          </button>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {summaryStats.map((s) => (
              <div
                key={s.title}
                className="rounded-xl border border-[#EAECF0] p-3"
              >
                <s.icon size={16} className="text-[#667085]" />
                <p className="mt-2 text-[18px] font-bold text-[#101828]">
                  {s.value}
                </p>
                <p className="text-[11px] text-[#667085]">{s.title}</p>
                <p className="mt-1 text-[10px] font-semibold text-[#16A34A]">
                  {s.growth} dari minggu lalu
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Kunjungan Toko */}
        <div className="rounded-2xl border border-[#EAECF0] bg-white p-5">
          <div className="flex items-center justify-between">
            <h3 className="text-[15px] font-semibold text-[#101828]">
              Kunjungan Toko
            </h3>
            <button className="flex items-center gap-1 rounded-lg border border-[#D0D5DD] px-2.5 py-1 text-[11px] text-[#344054]">
              7 hari Terakhir
              <LuChevronDown size={12} />
            </button>
          </div>
          <h2 className="mt-3 text-[26px] font-bold text-[#101828]">1.240</h2>
          <p className="text-[11px] font-semibold text-[#16A34A]">
            0.2% dari minggu lalu
          </p>
          {/* Placeholder chart */}
          <div className="mt-3">
            <Image
              src="/chart-kunjungan-placeholder.png"
              alt="Grafik Kunjungan Toko"
              width={400}
              height={160}
              className="w-full object-contain"
            />
          </div>
        </div>

        {/* Produk Terlaris */}
        <div className="rounded-2xl border border-[#EAECF0] bg-white p-5">
          <div className="flex items-center justify-between">
            <h3 className="text-[15px] font-semibold text-[#101828]">
              Produk Terlaris
            </h3>
            <button className="text-[12px] font-medium text-[#158A62]">
              Lihat Semua
            </button>
          </div>
          <div className="mt-4 space-y-3">
            {produkTerlaris.map((p, i) => (
              <div key={p.name} className="flex items-center gap-3">
                <span className="text-[12px] font-medium text-[#98A2B3]">
                  {i + 1}
                </span>
                <Image
                  src={p.img}
                  alt={p.name}
                  width={36}
                  height={36}
                  className="h-9 w-9 rounded-lg object-cover"
                />
                <div>
                  <p className="text-[13px] font-medium text-[#101828]">
                    {p.name}
                  </p>
                  <p className="text-[11px] text-[#667085]">{p.views}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Jam Paling Ramai */}
        <div className="rounded-2xl border border-[#EAECF0] bg-white p-5">
          <h3 className="text-[15px] font-semibold text-[#101828]">
            Jam Paling Ramai
          </h3>
          <p className="mt-2 text-[16px] font-bold text-[#101828]">
            17.00 - 20.00
          </p>
          <p className="text-[11px] text-[#667085]">312 kunjungan</p>
          <div className="mt-3">
            <Image
              src="/chart-jam-ramai-placeholder.png"
              alt="Grafik Jam Paling Ramai"
              width={400}
              height={100}
              className="w-full object-contain"
            />
          </div>
        </div>

        {/* Sumber Kunjungan */}
        <div className="rounded-2xl border border-[#EAECF0] bg-white p-5">
          <h3 className="text-[15px] font-semibold text-[#101828]">
            Sumber Kunjungan
          </h3>
          <div className="mt-4 flex items-center gap-4">
            <Image
              src="/donut-sumber-kunjungan-placeholder.png"
              alt="Donut Sumber Kunjungan"
              width={90}
              height={90}
              className="h-[90px] w-[90px] object-contain"
            />
            <div className="space-y-2">
              {sumberKunjungan.map((s) => (
                <div
                  key={s.label}
                  className="flex items-center gap-2 text-[12px] text-[#344054]"
                >
                  <span className={`h-2.5 w-2.5 rounded-full ${s.color}`} />
                  {s.label}
                  <span className="font-semibold">{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Rekomendasi AI untukmu */}
        <div className="rounded-2xl border border-[#F5C563] bg-[#FFFBEB] p-5">
          <h3 className="flex items-center gap-2 text-[14px] font-semibold text-[#101828]">
            <LuSparkles className="text-[#F59E0B]" size={16} />
            Rekomendasi AI untukmu
          </h3>
          <p className="mt-2 text-[13px] leading-6 text-[#344054]">
            Buat promo &quot;Paket Hemat Siang&quot; pada jam 11.00 - 13.00
            untuk meningkatkan kunjungan hingga 15 - 20%.
          </p>
          <button className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-[#F59E0B] bg-white py-2.5 text-[13px] font-semibold text-[#B45309] transition hover:bg-[#FFFBEB]">
            Buat Promo Sekarang
            <LuArrowRight size={15} />
          </button>
        </div>

        {/* Lihat Analisis Lengkap */}
        <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#D0D5DD] bg-white py-3 text-[13px] font-medium text-[#344054] transition hover:bg-[#F9FAFB]">
          <LucideLineChart size={16} />
          Lihat Analisis Lengkap di Analytics
          <LuArrowRight size={15} />
        </button>
      </div>
    </div>
  );
}
