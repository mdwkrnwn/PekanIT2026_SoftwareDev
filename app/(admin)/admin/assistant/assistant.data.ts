import { LucideBarChart3 } from "lucide-react";
import {
  LuClock,
  LuStar,
  LuThumbsUp,
  LuEye,
  LuUsers,
  LuHeart,
} from "react-icons/lu";

export const popularQuestions = [
  {
    icon: LucideBarChart3,
    text: "Kenapa toko saya sepi minggu ini?",
  },
  {
    icon: LuStar,
    text: "Produk mana yang paling potensial?",
  },
  {
    icon: LuClock,
    text: "Jam berapa sebaiknya buat promo?",
  },
  {
    icon: LuThumbsUp,
    text: "Bagaimana cara meningkatkan rating?",
  },
];

import { LuTag } from "react-icons/lu";

export const quickSuggestions = [
  {
    icon: LuTag,
    text: "Buat Promo makan siang",
  },
  {
    icon: LuTag,
    text: "Produk apa yang laku?",
  },
  {
    icon: LuTag,
    text: "Analisis lebih detail",
  },
];

function random(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomGrowth() {
  return (Math.random() * 10 + 0.5).toFixed(1) + "%";
}

export const summaryStats = [
  {
    title: "Total Dilihat",
    value: random(1000, 2500).toLocaleString("id-ID"),
    growth: randomGrowth(),
    icon: LuEye,
  },
  {
    title: "Total Pengunjung",
    value: random(200, 800).toLocaleString("id-ID"),
    growth: randomGrowth(),
    icon: LuUsers,
  },
  {
    title: "Interaksi",
   value: random(100, 500).toLocaleString("id-ID"),
    growth: randomGrowth(),
    icon: LuHeart,
  },
];

export const storeVisit = {
  total: random(1000, 3000).toLocaleString("id-ID"),
  growth: randomGrowth(),
  chart: "/chart-kunjungan.png",
};

export const busyHour = {
  time: "17.00 - 20.00",
  visitors: `${random(200, 500)} kunjungan`,
  chart: "/chart-jam-kunjungan.png",
};

export const aiRecommendation = {
  title: "Rekomendasi AI untukmu",
  description:
    'Buat promo "Paket Hemat Siang" pada jam 11.00 - 13.00 untuk meningkatkan kunjungan hingga 15 - 20%.',
  buttonText: "Buat Promo Sekarang",
};

export const analyticsButton = {
  text: "Lihat Analisis Lengkap di Analytics",
};

export const topProducts = [
  {
    name: "Nasi Ayam Geprek",
    views: "324 dilihat",
    img: "/assets/umkm/makanan/dapurnona/ayamgeprek.jpeg",
  },
  {
    name: "Es Teh Manis",
    views: "210 dilihat",
    img: "/assets/umkm/makanan/dapurnona/esteh.jpeg",
  },
  {
    name: "Sambal Cumi",
    views: "210 dilihat",
    img: "/assets/umkm/makanan/dapurnona/sambalcumi.jpeg",
  },
];
