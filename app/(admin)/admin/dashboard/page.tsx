"use client";
import Image from "next/image";
import {
  LuEye,
  LuHeart,
  LuPlus,
  LuTicket,
  LuSparkles,
  LuStar,
  LuMapPin,
  LuBadgePercent,
} from "react-icons/lu";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { visitData } from "@/lib/dashboard";
import { IoChevronDown } from "react-icons/io5";

export default function DashboardPage() {
  const stats = [
    {
      title: "Total Dilihat",
      value: "1.240",
      growth: "+18.5%",
      icon: LuEye,
      color: "bg-[#E8F7EF] text-[#158A62]",
      chartColor: "#16A34A",
      data: [
        280, 410, 560, 490, 680, 840, 790, 920, 880, 1020, 970, 1130, 1090,
        1180, 1150, 1210, 1240,
      ],
    },
    {
      title: "Total Favorit",
      value: "187",
      growth: "+12.3%",
      icon: LuHeart,
      color: "bg-[#FDECEF] text-[#E11D48]",
      chartColor: "#F43F5E",
      data: [
        52, 68, 74, 69, 83, 91, 86, 104, 98, 112, 118, 126, 121, 142, 151, 169,
        187,
      ],
    },
    {
      title: "Rating Rata-rata",
      value: "4.8 / 5",
      growth: "+0.2%",
      icon: LuStar,
      color: "bg-[#FFF4E5] text-[#F59E0B]",
      chartColor: "#F59E0B",
      data: [
        4.12, 4.18, 4.15, 4.24, 4.2, 4.31, 4.42, 4.4, 4.36, 4.48, 4.55, 4.51,
        4.6, 4.66, 4.72, 4.76, 4.8,
      ],
    },
    {
      title: "Klik ke Maps",
      value: "312",
      growth: "+22.1%",
      icon: LuMapPin,
      color: "bg-[#EAF2FF] text-[#2563EB]",
      chartColor: "#2563EB",
      data: [
        80, 96, 92, 110, 105, 125, 118, 145, 160, 155, 176, 170, 198, 214, 235,
        278, 312,
      ],
    },
    {
      title: "Promo Dilihat",
      value: "1.240",
      growth: "+7.6%",
      icon: LuBadgePercent,
      color: "bg-[#F3E8FF] text-[#9333EA]",
      chartColor: "#9333EA",
      data: [
        380, 520, 610, 540, 720, 680, 790, 910, 860, 980, 940, 1080, 1040, 1150,
        1110, 1200, 1240,
      ],
    },
  ];

  const visitData = [
    { day: "20 Mei", viewed: 200, favorite: 70 },
    { day: "21 Mei", viewed: 250, favorite: 72 },
    { day: "22 Mei", viewed: 205, favorite: 108 },
    { day: "23 Mei", viewed: 340, favorite: 55 },
    { day: "24 Mei", viewed: 225, favorite: 92 },
    { day: "25 Mei", viewed: 175, favorite: 55 },
    { day: "26 Mei", viewed: 260, favorite: 110 },
  ];

  return (
    <>
      <div className="flex items-start mt-5 justify-between">
        <div>
          <h1 className="text-[30px] font-semibold text-[#0B0F1F]">
            Selamat pagi, Ryn
          </h1>

          <p className="mt-1 text-[#667085]">
            Kelola usahamu dan tingkatkan performa bisnismu hari ini.
          </p>
        </div>

        <div className="flex items-center gap-3 cursor-pointer">
          <Image
            src="/avatar.png"
            alt="Ryn Askara"
            width={56}
            height={56}
            className="rounded-full"
          />

          <div>
            <h3 className="font-semibold text-[#101828]">Ryn Askara</h3>

            <p className="text-sm text-[#667085]">Pemilik</p>
          </div>

          <IoChevronDown
            size={20}
            className="text-[#667085] transition-transform hover:text-[#101828]"
          />
        </div>
      </div>
      <div className="flex flex-col gap-8">
        {/* Top Stats Cards */}
        <div className="mt-8 grid grid-cols-5 gap-4">
          {stats.map((item, index) => {
            const chartData = item.data.map((value, i) => ({
              index: i,
              value,
            }));

            return (
              <div
                key={index}
                className="rounded-2xl border border-[#EAECF0] bg-white p-5 shadow-sm"
              >
                {/* Header */}
                <div className="flex items-start gap-4">
                  <div
                    className={`flex h-15 w-15 shrink-0 items-center justify-center rounded-xl ${item.color}`}
                  >
                    <item.icon size={30} />
                  </div>

                  <div>
                    <p className="text-[14px] font-medium text-[#344054]">
                      {item.title}
                    </p>

                    <h2 className="mt-1 text-[30px] font-bold leading-none text-[#101828]">
                      {item.value}
                    </h2>

                    <div className="mt-2 flex items-center gap-1 text-[12px]">
                      <span className="font-semibold text-[#16A34A]">
                        ▲ {item.growth}
                      </span>

                      <span className="text-[#667085]">dari minggu lalu</span>
                    </div>
                  </div>
                </div>

                {/* Mini Chart */}
                <div className="mt-5 outline-none focus:outline-none">
                  <ResponsiveContainer width="100%" height={45}>
                    <AreaChart data={chartData}>
                      <defs>
                        <linearGradient
                          id={`gradient-${index}`}
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            stopColor={item.chartColor}
                            stopOpacity={0.25}
                          />

                          <stop
                            offset="100%"
                            stopColor={item.chartColor}
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>

                      <Area
                        type="natural"
                        dataKey="value"
                        stroke={item.chartColor}
                        strokeWidth={2.5}
                        fill={`url(#gradient-${index})`}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            );
          })}
        </div>

        {/* Middle Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 rounded-2xl border border-[#EAECF0] bg-white p-6">
            {/* Header */}
            <div className="mb-6">
              <h3 className="text-[22px] font-semibold text-[#101828]">
                Performa Kunjungan
              </h3>

              <div className="mt-3 flex items-center gap-6 text-sm font-medium">
                <div className="flex items-center gap-2">
                  <div className="h-[3px] w-5 rounded-full bg-[#16A34A]" />
                  <span className="text-[#344054]">Dilihat</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="h-[3px] w-5 rounded-full bg-[#667085]" />
                  <span className="text-[#344054]">Favorit</span>
                </div>
              </div>
            </div>

            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={visitData}
                  margin={{
                    top: 10,
                    right: 10,
                    left: -15,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid stroke="#F2F4F7" vertical={false} />

                  <XAxis
                    dataKey="day"
                    tick={{
                      fill: "#667085",
                      fontSize: 13,
                    }}
                    tickLine={false}
                    axisLine={false}
                  />

                  <YAxis
                    tick={{
                      fill: "#667085",
                      fontSize: 13,
                    }}
                    tickLine={false}
                    axisLine={false}
                  />

                  <Tooltip
                    cursor={false}
                    contentStyle={{
                      borderRadius: 12,
                      border: "1px solid #EAECF0",
                    }}
                  />

                  <Line
                    type="monotone"
                    dataKey="viewed"
                    stroke="#16A34A"
                    strokeWidth={3}
                    dot={{
                      r: 5,
                      fill: "#16A34A",
                    }}
                    activeDot={{
                      r: 7,
                    }}
                  />

                  <Line
                    type="monotone"
                    dataKey="favorite"
                    stroke="#667085"
                    strokeWidth={3}
                    dot={{
                      r: 5,
                      fill: "#667085",
                    }}
                    activeDot={{
                      r: 7,
                    }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-xs flex flex-col justify-between">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-slate-900">
                Produk / Menu Terpopuler
              </h3>
              <button className="text-[#15803d] font-bold">Lihat semua</button>
            </div>
            <div className="flex flex-col gap-4 flex-1">
              {[
                {
                  rank: 1,
                  name: "Nasi Ayam Geprek",
                  count: "324 dilihat",
                  tag: "Terlaris",
                  tagCol: "bg-emerald-50 text-emerald-700",
                },
                {
                  rank: 2,
                  name: "Es Teh Manis",
                  count: "210 dilihat",
                  tag: "Populer",
                  tagCol: "bg-blue-50 text-blue-700",
                },
                {
                  rank: 3,
                  name: "Ayam Penyet",
                  count: "145 dilihat",
                  tag: "Stabil",
                  tagCol: "bg-slate-100 text-slate-700",
                },
              ].map((food, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-2 hover:bg-slate-50 rounded-xl transition-colors"
                >
                  <span className="font-black text-slate-400 text-lg w-6">
                    {food.rank}
                  </span>
                  <div className="w-14 h-14 relative rounded-xl overflow-hidden shrink-0">
                    <Image
                      src={`https://picsum.photos/100?random=${idx + 50}`}
                      fill
                      className="object-cover"
                      alt={food.name}
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-900">{food.name}</h4>
                    <p className="text-slate-400 font-medium">{food.count}</p>
                  </div>
                  <span
                    className={`px-2 py-1 font-bold rounded-md ${food.tagCol}`}
                  >
                    {food.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white border border-slate-100 rounded-2xl p-6 shadow-xs">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-slate-900">
                Ulasan Terbaru
              </h3>
              <button className="text-[#15803d] font-bold">Lihat semua</button>
            </div>
            <div className="flex flex-col gap-6">
              {[
                {
                  name: "Siti Nurhaliza",
                  comment:
                    "Makanannya enak banget, sambalnya nampol! Porsi pas dan harga terjangkau",
                  r: "2 jam yang lalu",
                },
                {
                  name: "Rizky Pratama",
                  comment: "Enak dan cocok buat makan siang. Ayamnya juicy!",
                  r: "3 jam yang lalu",
                },
              ].map((review, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 items-start border-b border-slate-50 pb-4 last:border-0 last:pb-0"
                >
                  <div className="w-12 h-12 relative rounded-full overflow-hidden shrink-0">
                    <Image
                      src={`https://picsum.photos/100?random=${idx + 60}`}
                      fill
                      className="object-cover"
                      alt="User Profile"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-slate-900">
                        {review.name}
                      </h4>
                      <span className="text-slate-400 font-medium">
                        {review.r}
                      </span>
                    </div>
                    <div className="flex text-amber-400 gap-0.5 my-1">
                      {[...Array(5)].map((_, s) => (
                        <LuStar
                          key={s}
                          className="fill-amber-400 text-amber-400"
                          size={16}
                        />
                      ))}
                    </div>
                    <p className="text-slate-600 font-medium mt-1">
                      {review.comment}
                    </p>
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
                Kunjungan tokomu meningkat{" "}
                <span className="text-emerald-300 font-bold">18.5%</span> minggu
                ini. Produk Nasi Ayam Geprek paling banyak dilihat pada jam
                17.00 - 21.00.
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
