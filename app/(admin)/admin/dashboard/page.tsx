"use client";
import Image from "next/image";
import {
  LuEye,
  LuHeart,
  LuPlus,
  LuTicket,
  LuMessageCircle,
  LuShare2,
  LuStar,
  LuMapPin,
  LuBadgePercent,
} from "react-icons/lu";
import { ArrowRight } from "lucide-react";
import { HiChartBar } from "react-icons/hi";
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
  const reviews = [
    {
      name: "Siti Nurhaliza",
      image: "/ava1.png",
      comment:
        "Makanannya enak banget, sambalnya nampol! Porsi pas dan harga terjangkau",
      rating: 5.0,
      time: "2 jam yang lalu",
    },
    {
      name: "Rizky Pratama",
      image: "/ava2.png",
      comment: "Enak dan cocok buat makan siang. Ayamnya Juicy!",
      rating: 5.0,
      time: "2 jam yang lalu",
    },
    {
      name: "Dewi Lestari",
      image: "/ava3.png",
      comment: "Langganan sejak lama, rasanya konsisten. Recommended!!",
      rating: 5.0,
      time: "2 jam yang lalu",
    },
    {
      name: "Dewi Lestari",
      image: "/ava3.png",
      comment: "Langganan sejak lama, rasanya konsisten. Recommended!!",
      rating: 5.0,
      time: "2 jam yang lalu",
    },
  ];
  const quickActions = [
    {
      title: "Tambah Menu",
      icon: LuPlus,
      color: "text-[#158A62]",
    },
    {
      title: "Buat Promo",
      icon: LuTicket,
      color: "text-[#E11D48]",
    },
    {
      title: "Balas Ulasan",
      icon: LuMessageCircle,
      color: "text-[#2563EB]",
    },
    {
      title: "Lihat Analytics",
      icon: HiChartBar,
      color: "text-[#158A62]",
    },
    {
      title: "Bagikan Toko",
      icon: LuShare2,
      color: "text-[#9333EA]",
    },
  ];
  return (
    <>
      <div className="flex flex-col gap-8">
        {/* Top Stats Cards */}
        <div className="grid grid-cols-5 gap-4">
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
                <div className="focus:outline-none mt-5 outline-none">
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
        <div className="lg:grid-cols-3 grid grid-cols-1 gap-8">
          <div className="lg:col-span-2 rounded-2xl border border-[#EAECF0] bg-white p-6">
            {/* Header */}
            <div className="mb-6">
              <h3 className="text-[22px] font-semibold text-[#101828]">
                Performa Kunjungan
              </h3>

              <div className="flex items-center gap-6 mt-3 text-sm font-medium">
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

          <div className="bg-white border-2 border-[#F3F4F7] rounded-2xl p-6 shadow-xs flex flex-col justify-between">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-[#0B0F1F]">
                Produk / Menu Terpopuler
              </h3>
              <button className="text-[#15803d] font-bold">Lihat semua</button>
            </div>
            <div className="flex flex-col flex-1 gap-4">
              {[
                {
                  rank: 1,
                  name: "Nasi Ayam Geprek",
                  count: "324 dilihat",
                  tag: "Terlaris",
                  image: "/assets/umkm/makanan/dapurnona/ayamgeprek.jpeg",
                  tagCol: "bg-emerald-50 text-emerald-700",
                },
                {
                  rank: 2,
                  name: "Es Teh Manis",
                  count: "210 dilihat",
                  tag: "Populer",
                  image: "/assets/umkm/makanan/dapurnona/esteh.jpeg",
                  tagCol: "bg-blue-50 text-blue-700",
                },
                {
                  rank: 3,
                  name: "Sambal Cumi",
                  count: "145 dilihat",
                  tag: "Stabil",
                  image: "/assets/umkm/makanan/dapurnona/sambalcumi.jpeg",
                  tagCol: "bg-slate-100 text-slate-700",
                },
                {
                  rank: 4,
                  name: "Nasi Telur Dadar",
                  count: "120 dilihat",
                  tag: "Baru",
                  image: "/assets/umkm/makanan/dapurnona/nasitelurdadar.jpeg",
                  tagCol: "bg-amber-50 text-amber-700",
                },
              ].map((food, idx) => (
                <div
                  key={idx}
                  className="hover:bg-slate-50 rounded-xl flex items-center gap-4 p-2 transition-colors"
                >
                  <span className="font-black text-[#0B0F1F] text-lg w-6">
                    {food.rank}
                  </span>

                  <div className="w-25 h-14 rounded-xl shrink-0 relative overflow-hidden">
                    <Image
                      src={food.image}
                      fill
                      className="object-cover"
                      alt={food.name}
                    />
                  </div>

                  <div className="flex-1">
                    <h4 className="text-slate-900 font-bold">{food.name}</h4>
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
        <div className="lg:grid-cols-3 grid grid-cols-1 gap-8">
          <div className="lg:col-span-2 rounded-2xl border border-[#EAECF0] bg-white p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-[25px] font-semibold text-[#101828]">
                Ulasan Terbaru
              </h3>

              <button className="font-semibold text-[#158A62] hover:underline">
                Lihat semua
              </button>
            </div>

            <div className="space-y-6">
              {reviews.map((review, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-5 border-b border-[#EAECF0] pb-6 last:border-none last:pb-0"
                >
                  {/* Avatar */}
                  <Image
                    src={review.image}
                    alt={review.name}
                    width={70}
                    height={70}
                    className="object-cover rounded-full"
                  />

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-4">
                          <h4 className="text-[20px] font-semibold text-[#101828]">
                            {review.name}
                          </h4>

                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <LuStar
                                key={i}
                                size={18}
                                className="fill-[#F59E0B] text-[#F59E0B]"
                              />
                            ))}

                            <span className="ml-2 rounded-full bg-[#E8F7EF] px-2 py-0.5 text-xs font-semibold text-[#158A62]">
                              {review.rating.toFixed(1)}
                            </span>
                          </div>
                        </div>

                        <p className="mt-2 text-[17px] text-[#64748B]">
                          {review.comment}
                        </p>
                      </div>

                      <span className="text-sm text-[#64748B]">
                        {review.time}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[#EAECF0] bg-white p-8">
            <h3 className="text-[22px] font-semibold text-[#158A62]">
              Insight dari AI Business Assistant
            </h3>

            <div className="flex items-start gap-6 mt-8">
              {/* Robot */}
              <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-[#E8F7EF]">
                <Image
                  src="/robot.png"
                  alt="AI Assistant"
                  width={80}
                  height={80}
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <p className="text-[16px] leading-9 text-[#101828]">
                  <span className="font-semibold">
                    Kunjungan tokomu meningkat <b>18.5%</b> minggu ini!
                  </span>
                  <br />
                  Produk <b>Nasi Ayam Geprek</b> paling banyak dilihat pada jam
                  <b> 17.00 – 21.00.</b>
                  <br />
                  Coba buat promo di jam tersebut untuk meningkatkan penjualan
                  lebih banyak lagi!
                </p>

                <button className="mt-8 flex h-14 w-[300px] items-center justify-between rounded-2xl bg-[#158A62] px-6 font-semibold text-white transition hover:bg-[#127553]">
                  <span>Lihat rekomendasi lengkap</span>

                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="rounded-2xl border border-[#EAECF0] bg-white p-6">
          <h3 className="mb-5 text-[22px] font-semibold text-[#101828]">
            Aksi Cepat
          </h3>

          <div className="grid grid-cols-5 gap-4">
            {quickActions.map((action) => (
              <button
                key={action.title}
                className="flex h-12 items-center justify-center gap-3 rounded-xl border border-[#EAECF0] bg-white transition hover:bg-[#F9FAFB]"
              >
                <action.icon size={18} className={action.color} />

                <span className="text-[14px] font-medium text-[#101828]">
                  {action.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
