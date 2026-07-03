import {
  LuEye,
  LuHeart,
  LuStar,
  LuMapPin,
} from "react-icons/lu";
import { MessageSquare } from "lucide-react";

export const stats = [
  {
    title: "Total Dilihat",
    value: "1.240",
    growth: "+18.5%",
    icon: LuEye,
    color: "bg-[#E8F7EF] text-[#158A62]",
    chartColor: "#16A34A",
    data: [
      280, 410, 560, 490, 680, 840, 790, 920, 880,
      1020, 970, 1130, 1090, 1180, 1150, 1210, 1240,
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
      52, 68, 74, 69, 83, 91, 86, 104, 98,
      112, 118, 126, 121, 142, 151, 169, 187,
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
      4.12, 4.18, 4.15, 4.24, 4.2, 4.31, 4.42,
      4.4, 4.36, 4.48, 4.55, 4.51, 4.6,
      4.66, 4.72, 4.76, 4.8,
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
      80, 96, 92, 110, 105, 125, 118, 145, 160,
      155, 176, 170, 198, 214, 235, 278, 312,
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
      380, 520, 610, 540, 720, 680, 790, 910, 860,
      980, 940, 1080, 1040, 1150, 1110, 1200, 1240,
    ],
  },
];