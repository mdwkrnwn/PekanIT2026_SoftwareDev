import {
  LuStar,
  LuMessageSquare,
  LuSmile,
  LuFrown,
  LuMessageSquareOff,
} from "react-icons/lu";

import {
  Review,
  ReviewTab,
  ReviewStat,
  RatingBreakdown,
  TopReviewedProduct,
} from "./review.type";

export const reviews: Review[] = [
  {
      id: 1,
      name: "Siti Nurhaliza",
      avatar: "/ava1.png",
      verified: true,
      rating: 5,
      review:
        "Makanannya enak banget!, Nasi Ayam Geprek sambalnya nampol Pengiriman juga cepat dan packing rapi.",
      menu: ["Nasi Ayam Geprek", "Es Teh"],
      createdAt: "25 Mei 2025 • 19:45",
      replied: true,
      replyDate: "25 Mei 2025 • 20:10",
      reply:
        "Terima Kasih banyak kak Siti! Senang banget kalau kakak suka, Ditunggu orderannya lagi ya!",
    },
    {
      id: 2,
      name: "Budi Santoso",
      avatar: "/ava2.png",
      verified: true,
      rating: 5,
      review:
        "Makanannya enak banget!, Nasi Ayam Geprek sambalnya nampol Pengiriman juga cepat dan packing rapi.",
      menu: ["Nasi Ayam Geprek", "Es Teh"],
      createdAt: "25 Mei 2025 • 19:45",
      replied: true,
      replyDate: "25 Mei 2025 • 20:10",
      reply:
        "Terima Kasih banyak kak Siti! Senang banget kalau kakak suka, Ditunggu orderannya lagi ya!",
    },
    {
      id: 3,
      name: "Dimas Drajat",
      avatar: "/ava.png",
      verified: true,
      rating: 5,
      review:
        "Ayamnya agak alot dan nasi sedikit kurang hangat. Semoga bisa lebih baik lagi ya.",
      menu: ["Nasi Ayam Geprek", "Es Teh"],
      createdAt: "25 Mei 2025 • 19:45",
      replied: false,
    },
    {
      id: 4,
      name: "Rina Febriani",
      avatar: "/ava3.png",
      verified: true,
      rating: 5,
      review:
        "Ayamnya agak alot dan nasi sedikit kurang hangat. Semoga bisa lebih baik lagi ya.",
      menu: ["Nasi Ayam Geprek", "Es Teh"],
      createdAt: "25 Mei 2025 • 19:45",
      replied: false,
    },
    {
      id: 5,
      name: "Siti Aisyah",
      avatar: "/ava1.png",
      verified: true,
      rating: 5,
      review:
        "Ayamnya agak alot dan nasi sedikit kurang hangat. Semoga bisa lebih baik lagi ya.",
      menu: ["Nasi Ayam Geprek", "Es Teh"],
      createdAt: "25 Mei 2025 • 19:45",
      replied: false,
    },
];

export const tabs = [
  {
    key: "Semua Ulasan",
    title: "Semua Ulasan",
  },
  {
    key: "Belum Dibalas",
    title: "Belum Dibalas",
  },
  {
    key: "Ulasan Positif",
    title: "Ulasan Positif",
  },
  {
    key: "Ulasan Negatif",
    title: "Ulasan Negatif",
  },
];

export const stats: ReviewStat[] = [
  {
    title: "Rating Rata-rata",
    value: "4.8 /5",
    growth: "12.3%",
    icon: LuStar,
    color: "bg-[#FFF4E5] text-[#F59E0B]",
  },
  {
    title: "Total Ulasan",
    value: "187",
    growth: "12.3%",
    icon: LuMessageSquare,
    color: "bg-[#F3E8FF] text-[#8B5CF6]",
  },
  {
    title: "Ulasan Positif",
    value: "162",
    growth: "12.3%",
    icon: LuSmile,
    color: "bg-[#E8F7EF] text-[#158A62]",
  },
  {
    title: "Ulasan Negatif",
    value: "25",
    growth: "12.3%",
    icon: LuFrown,
    color: "bg-[#FFF0F3] text-[#EF4444]",
  },
  {
    title: "Belum Dibalas",
    value: "8",
    growth: "12.3%",
    icon: LuMessageSquareOff,
    color: "bg-[#EAF2FF] text-[#2563EB]",
  },
];

export const ratingBreakdown: RatingBreakdown[] = [
  { star: 5, count: 12 },
  { star: 4, count: 8 },
  { star: 3, count: 0 },
  { star: 2, count: 0 },
  { star: 1, count: 0 },
];

export const totalRatingCount = 20;

export const topProducts: TopReviewedProduct[] = [
  {
    name: "Nasi Ayam Geprek",
    rating: 4.8,
    count: 124,
    img: "/assets/umkm/makanan/dapurnona/ayamgeprek.jpeg",
  },
  {
    name: "Sambal Cumi",
    rating: 4.7,
    count: 89,
    img: "/assets/umkm/makanan/dapurnona/sambalcumi.jpeg",
  },
  {
    name: "Nasi Telur Dadar",
    rating: 4.6,
    count: 56,
    img: "/assets/umkm/makanan/dapurnona/nasitelurdadar.jpeg",
  },
  {
    name: "Es Teh Manis",
    rating: 4.6,
    count: 46,
    img: "/assets/umkm/makanan/dapurnona/esteh.jpeg",
  },
];