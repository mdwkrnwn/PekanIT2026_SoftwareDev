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
import { ArrowRight, MessageSquare } from "lucide-react";
import { HiChartBar } from "react-icons/hi";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  LineChart,
  Line,
  XAxis,
  PieChart,
  Pie,
  Cell,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { visitData } from "@/lib/dashboard";
import { IoChevronDown } from "react-icons/io5";

export default function AnalyticsPage() {
  const trafficData = [
    {
      name: "Pencarian Bakool",
      value: 496,
      percent: 40,
      color: "#158A62",
    },
    {
      name: "Halaman Kategori",
      value: 376,
      percent: 30,
      color: "#6F95F6",
    },
    {
      name: "Rekomendasi",
      value: 248,
      percent: 20,
      color: "#FFC54D",
    },
    {
      name: "Dari Favorit",
      value: 124,
      percent: 10,
      color: "#9D7BF7",
    },
  ];

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
      title: "Total Ulasan",
      value: "80",
      growth: "+7.6%",
      icon: MessageSquare,
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

  const popularMenus = [
    {
      rank: 1,
      name: "Nasi Ayam Geprek",
      count: 324,
      percent: 42,
      image: "/assets/umkm/makanan/dapurnona/ayamgeprek.jpeg",
    },
    {
      rank: 2,
      name: "Es Teh Manis",
      count: 210,
      percent: 27,
      image: "/assets/umkm/makanan/dapurnona/esteh.jpeg",
    },
    {
      rank: 3,
      name: "Nasi Telur Dadar",
      count: 145,
      percent: 18,
      image: "/assets/umkm/makanan/dapurnona/nasitelurdadar.jpeg",
    },
    {
      rank: 4,
      name: "Sambal Cumi",
      count: 132,
      percent: 9,
      image: "/assets/umkm/makanan/dapurnona/sambalcumi.jpeg",
    },
  ];

  const days = ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"];

  const hours = ["00.00", "03.00", "06.00", "09.00", "12.00", "15.00", "18.00"];

  const heatmap = [
    [0, 0, 0, 0, 0, 1, 3, 3, 3, 3, 3, 3, 3],
    [0, 0, 0, 0, 0, 1, 3, 3, 0, 0, 3, 3, 3],
    [0, 0, 0, 0, 1, 1, 3, 3, 3, 3, 3, 3, 3],
    [0, 0, 0, 0, 0, 1, 3, 3, 3, 0, 3, 3, 3],
    [0, 0, 0, 0, 0, 1, 3, 0, 3, 3, 3, 3, 3],
    [0, 0, 0, 0, 0, 1, 3, 3, 3, 3, 3, 3, 3],
    [0, 0, 0, 0, 0, 1, 3, 3, 3, 3, 3, 3, 3],
  ];

  const colors = [
    "bg-[#EEF2F6]",
    "bg-[#BFEFD7]",
    "bg-[#55C88A]",
    "bg-[#158A62]",
  ];
  return (
    <>
      <div className="flex items-start mt-5 justify-between">
        <div>
          <h1 className="text-[30px] font-semibold text-[#0B0F1F]">
            Analytics
          </h1>

          <p className="mt-1 text-[#667085]">
            Pantau dan analisis performa toko kamu secara menyeluruh.
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

          <div className="rounded-2xl border border-[#EAECF0] bg-white p-6">
            {/* Header */}
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-[18px] font-semibold text-[#101828]">
                Produk / Menu Terpopuler
              </h3>

              <button className="text-[15px] font-semibold text-[#158A62] hover:underline">
                Lihat semua
              </button>
            </div>

            <div className="space-y-5">
              {popularMenus.map((food) => (
                <div
                  key={food.rank}
                  className="border-b border-[#EAECF0] pb-5 last:border-none last:pb-0"
                >
                  <div className="flex items-center gap-4">
                    {/* Ranking */}
                    <span className="w-6 text-[18px] font-semibold text-[#101828]">
                      {food.rank}
                    </span>

                    {/* Image */}
                    <Image
                      src={food.image}
                      alt={food.name}
                      width={72}
                      height={60}
                      className="h-[60px] w-[72px] rounded-xl object-cover"
                    />

                    {/* Info */}
                    <div className="flex-1">
                      <h4 className="text-[15px] font-semibold text-[#101828]">
                        {food.name}
                      </h4>

                      <p className="mt-1 text-[14px] text-[#667085]">
                        {food.count} dilihat
                      </p>
                    </div>

                    {/* Progress */}
                    <div className="w-[45%]">
                      <div className="mb-2 flex justify-end">
                        <span className="text-[14px] font-medium text-[#667085]">
                          {food.percent}%
                        </span>
                      </div>

                      <div className="h-[5px] overflow-hidden rounded-full bg-[#EAECF0]">
                        <div
                          className="h-full rounded-full bg-[#158A62]"
                          style={{
                            width: `${food.percent}%`,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
          <div className="lg:col-span-2 rounded-2xl border border-[#EAECF0] bg-white p-6">
            <h3 className="mb-8 text-[22px] font-semibold text-[#101828]">
              Performa Kunjungan Berdasarkan Waktu
            </h3>

            <div className="flex gap-6">
              {/* Hari */}
              <div className="flex flex-col gap-3 pt-1">
                {days.map((day) => (
                  <span
                    key={day}
                    className="h-8 text-[16px] font-medium text-[#101828]"
                  >
                    {day}
                  </span>
                ))}
              </div>

              {/* Heatmap */}
              <div className="flex flex-col gap-3">
                {heatmap.map((row, r) => (
                  <div key={r} className="flex gap-1.5">
                    {row.map((cell, c) => (
                      <div
                        key={c}
                        className={`h-8 w-14 rounded-md ${colors[cell]}`}
                      />
                    ))}
                  </div>
                ))}

                {/* Jam */}
                <div className="mt-3 flex justify-between px-2 text-[14px] text-[#667085]">
                  {hours.map((hour) => (
                    <span key={hour}>{hour}</span>
                  ))}
                </div>

                <div className="mt-5 flex justify-end items-center gap-2">
                  <span className="text-xs text-[#667085]">R</span>

                  <div className="h-5 w-5 rounded bg-[#EEF2F6]" />

                  <div className="h-5 w-5 rounded bg-[#BFEFD7]" />

                  <div className="h-5 w-5 rounded bg-[#158A62]" />

                  <span className="text-xs text-[#667085]">T</span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-[#EAECF0] bg-white p-6">
            <h3 className="text-[22px] font-semibold text-[#158A62]">
              Sumber Trafik
            </h3>

            <div className="mt-8 flex items-start gap-6">
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
