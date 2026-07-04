import {
  LuBadgePercent,
  LuEye,
  LuHeart,
  LuMapPin,
  LuMessageCircle,
  LuPlus,
  LuShare2,
  LuStar,
  LuTicket,
} from "react-icons/lu";
import { HiChartBar } from "react-icons/hi";

import {
  DashboardReview,
  DashboardStat,
  PopularProduct,
  QuickAction,
  VisitData,
  AIInsight
} from "./dashboard.type";

export const stats: DashboardStat[] = [
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

export const visitData: VisitData[] = [
  { day: "20 Mei", viewed: 200, favorite: 70 },
  { day: "21 Mei", viewed: 250, favorite: 72 },
  { day: "22 Mei", viewed: 205, favorite: 108 },
  { day: "23 Mei", viewed: 340, favorite: 55 },
  { day: "24 Mei", viewed: 225, favorite: 92 },
  { day: "25 Mei", viewed: 175, favorite: 55 },
  { day: "26 Mei", viewed: 260, favorite: 110 },
];

export const reviews: DashboardReview[] = [
  {
    name: "Siti Nurhaliza",
    image: "/ava1.png",
    comment:
      "Makanannya enak banget, sambalnya nampol! Porsi pas dan harga terjangkau",
    rating: 5,
    time: "2 jam yang lalu",
  },
  {
    name: "Rizky Pratama",
    image: "/ava2.png",
    comment: "Enak dan cocok buat makan siang. Ayamnya Juicy!",
    rating: 5,
    time: "2 jam yang lalu",
  },
  {
    name: "Dewi Lestari",
    image: "/ava3.png",
    comment: "Langganan sejak lama, rasanya konsisten. Recommended!!",
    rating: 5,
    time: "2 jam yang lalu",
  },
  {
    name: "Dewi Lestari",
    image: "/ava3.png",
    comment: "Langganan sejak lama, rasanya konsisten. Recommended!!",
    rating: 5,
    time: "2 jam yang lalu",
  },
];

export const quickActions: QuickAction[] = [
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

export const popularProducts: PopularProduct[] = [
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
];

export const aiInsight: AIInsight = {
  title: "Insight dari AI Business Assistant",
  image: "/robot.png",
  description:
    "Kunjungan tokomu meningkat 18.5% minggu ini! Produk Nasi Ayam Geprek paling banyak dilihat pada jam 17.00 – 21.00. Coba buat promo di jam tersebut untuk meningkatkan penjualan lebih banyak lagi!",
};