"use client";
import { Edit, MoreVerticalIcon } from "lucide-react";
import Image from "next/image";
import {
  LuStar,
  LuMessageSquare,
  LuSmile,
  LuFrown,
  LuImage,
  LuCalendar,
  LuTrash2,
} from "react-icons/lu";

export const reviewStats = [
  {
    title: "Rating Rata-rata",
    value: "4.8 /5",
    growth: "18.5%",
    icon: LuStar,
    iconColor: "text-[#FBBF24] dark:text-yellow-400",
    bg: "bg-[#FFF8EB] dark:bg-yellow-900/30",
  },
  {
    title: "Total Ulasan",
    value: "187",
    growth: "12.3%",
    icon: LuMessageSquare,
    iconColor: "text-[#8B5CF6] dark:text-violet-400",
    bg: "bg-[#F3E8FF] dark:bg-violet-900/30",
  },
  {
    title: "Ulasan Positif",
    value: "162",
    growth: "0.2%",
    icon: LuSmile,
    iconColor: "text-[#158A62] dark:text-emerald-400",
    bg: "bg-[#E8F7EF] dark:bg-emerald-900/30",
  },
  {
    title: "Ulasan Negatif",
    value: "25",
    growth: "22.1%",
    icon: LuFrown,
    iconColor: "text-[#F43F5E] dark:text-red-400",
    bg: "bg-[#FDECEC] dark:bg-red-900/30",
  },
  {
    title: "Foto Diunggah",
    value: "8",
    growth: "22.1%",
    icon: LuImage,
    iconColor: "text-[#3B82F6] dark:text-blue-400",
    bg: "bg-[#EAF2FF] dark:bg-blue-900/30",
  },
];
export default function MyReviewsPage() {
  const reviews = [
    {
      id: 1,
      target: "Sambal Cumi",
      cat: "Kuliner",
      rating: 5,
      text: "Sambal cuminya pedas gurih dengan cumi yang empuk. Cocok disantap bersama nasi hangat, porsinya pas dan rasanya bikin ketagihan.",
      date: "12 Juni 2026",
      photos: 2,
      image: "/assets/umkm/makanan/dapurnona/sambalcumi.jpeg",
    },
    {
      id: 2,
      target: "Es Teh",
      cat: "Minuman",
      rating: 5,
      text: "Es tehnya segar dengan rasa manis yang pas. Sangat cocok untuk menemani hidangan utama, apalagi saat cuaca panas.",
      date: "15 Juni 2026",
      photos: 1,
      image: "/assets/umkm/makanan/dapurnona/esteh.jpeg",
    },
    {
      id: 3,
      target: "Nasi Telur Dadar",
      cat: "Kuliner",
      rating: 4,
      text: "Nasi telur dadarnya sederhana tetapi lezat. Telurnya tebal dan gurih, ditambah sambal yang nikmat membuat makan semakin lahap.",
      date: "18 Juni 2026",
      photos: 3,
      image: "/assets/umkm/makanan/dapurnona/nasitelurdadar.jpeg",
    },
    {
      id: 4,
      target: "Puding Cokelat",
      cat: "Dessert",
      rating: 5,
      text: "Puding cokelatnya lembut dengan rasa cokelat yang kaya. Tidak terlalu manis sehingga cocok dijadikan hidangan penutup.",
      date: "21 Juni 2026",
      photos: 2,
      image: "/assets/umkm/makanan/dapurnona/pudingcokelat.jpeg",
    },
    {
      id: 5,
      target: "Ayam Geprek",
      cat: "Kuliner",
      rating: 5,
      text: "Ayam gepreknya renyah di luar, lembut di dalam, dengan sambal yang pedasnya mantap. Salah satu menu favorit yang wajib dicoba.",
      date: "24 Juni 2026",
      photos: 2,
      image: "/assets/umkm/makanan/dapurnona/ayamgeprek.jpeg",
    },
  ];

  return (
    <div className="p-12 bg-slate-50 dark:bg-slate-950 text-base transition-colors">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold dark:text-white text-[#0B0F1F]">
          Ulasan Saya
        </h1>
        <p className="mt-1 text-lg text-slate-500 dark:text-slate-400">
          Lihat semua ulasan yang telah kamu berikan kepada UMKM di Bakool.
        </p>
      </div>

      {/* Top Aggregation Row Blocks */}
      <div className="mb-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
        {reviewStats.map((item) => (
          <div
            key={item.title}
            className="
              rounded-2xl
              border border-[#EAECF0]
              dark:border-slate-800
              bg-white
              dark:bg-slate-900
              p-5
              transition-colors
            "
          >
            <div className="flex items-start gap-4">
              {/* Icon */}
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-xl ${item.bg}`}
              >
                <item.icon
                  size={28}
                  className={item.iconColor}
                  strokeWidth={2.2}
                />
              </div>

              {/* Content */}
              <div>
                <p className="text-[15px] font-medium text-[#344054] dark:text-slate-300">
                  {item.title}
                </p>

                <h3 className="mt-1 text-[18px] font-bold text-[#101828] dark:text-white">
                  {item.value}
                </h3>

                <div className="mt-1 flex items-center gap-1 text-[12px]">
                  <span className="font-semibold text-[#158A62]">
                    ▲ {item.growth}
                  </span>

                  <span className="text-[#667085] dark:text-slate-500">
                    dari minggu lalu
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Category Filter Controls */}
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        {/* Filter */}
        <div className="flex items-center gap-2">
          {["Semua", "5 ★", "4 ★", "3 ★", "2 ★"].map((filter, index) => (
            <button
              key={filter}
              onClick={() => alert("Coming Soon 🚀")}
              className={`flex h-10 items-center rounded-lg border px-5 text-[14px] font-semibold transition ${
                index === 0
                  ? "border-transparent bg-[#EAF7F1] text-[#158A62] dark:bg-emerald-900/30 dark:text-emerald-400"
                  : "border-[#EAECF0] dark:border-slate-700 bg-white dark:bg-slate-900 text-[#344054] dark:text-slate-300 hover:bg-[#F9FAFB] dark:hover:bg-slate-800"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Sort */}
        <select
          onChange={() => alert("Coming Soon 🚀")}
          className="
            h-10
            rounded-lg
            border
            border-[#EAECF0]
            dark:border-slate-700
            bg-white
            dark:bg-slate-900
            px-4
            text-[14px]
            font-medium
            text-[#344054]
            dark:text-slate-300
            outline-none
            transition-colors
          "
        >
          <option>Terbaru</option>
          <option>Terlama</option>
        </select>
      </div>

      {/* Feed List Items Card */}
      <div className="flex flex-col gap-4">
        {reviews.map((item) => (
          <div
            key={item.id}
            className="relative flex rounded-2xl border border-[#EAECF0] dark:border-slate-800 bg-white dark:bg-slate-900 p-5 transition-colors"
          >
            {/* Menu */}
            <button className="absolute right-5 top-5 text-[#98A2B3] dark:text-slate-500 hover:text-[#667085] dark:hover:text-slate-300 transition-colors">
              <MoreVerticalIcon size={20} />
            </button>

            {/* Image */}
            <div className="relative h-[100px] w-[130px] shrink-0 overflow-hidden rounded-xl">
              <Image
                src={item.image}
                alt={item.target}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="ml-6 flex flex-1 flex-col">
              {/* Header */}
              <div className="flex items-center gap-3">
                <h3 className="text-[18px] font-semibold text-[#101828] dark:text-white">
                  {item.target}
                </h3>

                <span className="rounded-full bg-[#EAF7F1] dark:bg-emerald-900/30 px-3 py-1 text-[11px] font-medium text-[#158A62] dark:text-emerald-400">
                  {item.cat}
                </span>
              </div>

              {/* Rating */}
              <div className="mt-2 flex gap-0.5">
                {[...Array(item.rating)].map((_, i) => (
                  <LuStar
                    key={i}
                    size={30}
                    className="fill-[#FDB022] text-[#FDB022]"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="mt-2 max-w-[520px] text-[14px] leading-6 text-[#101828] dark:text-slate-300">
                {item.text}
              </p>

              {/* Footer */}
              <div className="mt-3 flex items-center gap-5 text-[13px] text-[#98A2B3] dark:text-slate-500">
                <div className="flex items-center gap-1.5">
                  <LuCalendar size={16} />
                  {item.date}
                </div>

                <div className="flex items-center gap-1.5">
                  <LuImage size={16} />
                  {item.photos} Foto
                </div>
              </div>
            </div>

            {/* Action */}
            <div className="absolute bottom-5 right-5 flex gap-3">
              <button
                onClick={() => alert("Coming Soon 🚀")}
                className="flex h-8 items-center gap-1 rounded-lg border border-[#D0D5DD] dark:border-slate-700 bg-white dark:bg-slate-800 px-4 text-[12px] font-medium text-[#158A62] dark:text-emerald-400 transition hover:bg-[#F6FCF9] dark:hover:bg-slate-700"
              >
                <Edit size={14} />
                Edit
              </button>

              <button
                onClick={() => alert("Coming Soon 🚀")}
                className="flex h-8 items-center gap-1 rounded-lg border border-[#FECACA] dark:border-red-900 bg-white dark:bg-slate-800 px-4 text-[12px] font-medium text-[#EF4444] dark:text-red-400 transition hover:bg-[#FEF2F2] dark:hover:bg-red-950/30"
              >
                <LuTrash2 size={14} />
                Hapus
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
