import {
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
  HeatmapCell,
  PopularMenu,
  QuickAction,
  Review,
  StatsCard,
  TrafficSource,
  VisitData,
  VisitSummary,
} from "./analytics.type";

const random = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const generateTrend = (start: number, end: number, points = 17) => {
  const step = (end - start) / (points - 1);

  return Array.from({ length: points }, (_, i) => {
    const base = start + step * i;
    return Math.round(base + random(-20, 20));
  });
};

export const visitData: VisitData[] = [
  {
    day: "20 Mei",
    viewed: 200,
    favorite: 70,
  },
  {
    day: "21 Mei",
    viewed: 250,
    favorite: 72,
  },
  {
    day: "22 Mei",
    viewed: 205,
    favorite: 108,
  },
  {
    day: "23 Mei",
    viewed: 340,
    favorite: 55,
  },
  {
    day: "24 Mei",
    viewed: 225,
    favorite: 92,
  },
  {
    day: "25 Mei",
    viewed: 175,
    favorite: 55,
  },
  {
    day: "26 Mei",
    viewed: 260,
    favorite: 110,
  },
];

export const stats: StatsCard[] = [
  {
    title: "Total Dilihat",
    value: random(1100, 1600).toLocaleString("id-ID"),
    growth: `+${random(8, 25)}%`,
    icon: LuEye,
    color: "bg-[#E8F7EF] text-[#158A62]",
    chartColor: "#16A34A",
    data: generateTrend(250, 1400),
  },
  {
    title: "Total Favorit",
    value: random(120, 280).toString(),
    growth: `+${random(5, 18)}%`,
    icon: LuHeart,
    color: "bg-[#FDECEF] text-[#E11D48]",
    chartColor: "#F43F5E",
    data: generateTrend(40, 220),
  },
  {
    title: "Rating Rata-rata",
    value: `${(4.5 + Math.random() * 0.5).toFixed(1)} / 5`,
    growth: `+${(Math.random() * 0.4).toFixed(1)}%`,
    icon: LuStar,
    color: "bg-[#FFF4E5] text-[#F59E0B]",
    chartColor: "#F59E0B",
    data: Array.from({ length: 17 }, () =>
      Number((4.3 + Math.random() * 0.6).toFixed(2)),
    ),
  },
  {
    title: "Klik ke Maps",
    value: random(200, 450).toString(),
    growth: `+${random(10, 30)}%`,
    icon: LuMapPin,
    color: "bg-[#EAF2FF] text-[#2563EB]",
    chartColor: "#2563EB",
    data: generateTrend(60, 340),
  },
  {
    title: "Total Ulasan",
    value: random(40, 120).toString(),
    growth: `+${random(2, 12)}%`,
    icon: LuMessageCircle,
    color: "bg-[#F3E8FF] text-[#9333EA]",
    chartColor: "#9333EA",
    data: generateTrend(8, 90),
  },
];

export const visitSummary: VisitSummary = {
  total: random(1000, 1800).toLocaleString("id-ID"),
  growth: `${random(1, 20)}%`,
  chart: "/chart-kunjungan.png",
};

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

export const popularMenus: PopularMenu[] = [
  {
    rank: 1,
    name: "Nasi Ayam Geprek",
    count: 324,
    percent: 92,
    image: "/assets/umkm/makanan/dapurnona/ayamgeprek.jpeg",
  },
  {
    rank: 2,
    name: "Es Teh Manis",
    count: 210,
    percent: 78,
    image: "/assets/umkm/makanan/dapurnona/esteh.jpeg",
  },
  {
    rank: 3,
    name: "Sambal Cumi",
    count: 198,
    percent: 65,
    image: "/assets/umkm/makanan/dapurnona/sambalcumi.jpeg",
  },
];

export const reviews: Review[] = [
  {
    user: "Andi",
    rating: 5,
    comment: "Makanannya enak sekali.",
    date: "2 jam lalu",
  },
  {
    user: "Salsa",
    rating: 4,
    comment: "Pelayanannya cepat.",
    date: "Kemarin",
  },
];

export const trafficSources: TrafficSource[] = [
  {
    name: "Pencarian",
    value: 48,
    color: "#158A62",
  },
  {
    name: "Promo",
    value: 27,
    color: "#2563EB",
  },
  {
    name: "Media Sosial",
    value: 15,
    color: "#F59E0B",
  },
  {
    name: "Lainnya",
    value: 10,
    color: "#E11D48",
  },
];

export const days = ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"];

export const hours = [
  "00.00",
  "03.00",
  "06.00",
  "09.00",
  "12.00",
  "15.00",
  "18.00",
];

export const heatmapColors = [
  "bg-[#EEF2F6]",
  "bg-[#BFEFD7]",
  "bg-[#55C88A]",
  "bg-[#158A62]",
];

export const heatmap = [
  [0, 0, 0, 0, 0, 1, 3, 3, 3, 3, 3, 3, 3],
  [0, 0, 0, 0, 0, 1, 3, 3, 0, 0, 3, 3, 3],
  [0, 0, 0, 0, 1, 1, 3, 3, 3, 3, 3, 3, 3],
  [0, 0, 0, 0, 0, 1, 3, 3, 3, 0, 3, 3, 3],
  [0, 0, 0, 0, 0, 1, 3, 0, 3, 3, 3, 3, 3],
  [0, 0, 0, 0, 0, 1, 3, 3, 3, 3, 3, 3, 3],
  [0, 0, 0, 0, 0, 1, 3, 3, 3, 3, 3, 3, 3],
];

import { TrafficInsight } from "./analytics.type";

export const trafficInsight: TrafficInsight = {
  title: "Sumber Trafik",
  image: "/robot.png",
  description:
    "📈 Kunjungan tokomu meningkat 18.5% minggu ini!\n\nProduk Nasi Ayam Geprek paling banyak dilihat pada pukul 17.00–21.00.\n\nCoba buat promo pada jam tersebut untuk meningkatkan peluang penjualan.",
  buttonText: "Lihat Rekomendasi Lengkap",
};
