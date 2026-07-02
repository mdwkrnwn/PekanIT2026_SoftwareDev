import { IconType } from "react-icons";
import {
  LuUtensilsCrossed,
  LuEye,
  LuHeart,
  LuPackage,
  LuStar,
} from "react-icons/lu";

export interface ProductStat {
  title: string;
  value: string;
  growth: string;
  icon: IconType;
  color: string;
}

export const productStats: ProductStat[] = [
  {
    title: "Total Produk",
    value: "1.240",
    growth: "+18.5%",
    icon: LuUtensilsCrossed,
    color: "bg-[#E8F7EF] text-[#158A62]",
  },
  {
    title: "Total Dilihat",
    value: "187",
    growth: "+12.3%",
    icon: LuEye,
    color: "bg-[#E8F7EF] text-[#158A62]",
  },
  {
    title: "Total Favorit",
    value: "12",
    growth: "+0.2%",
    icon: LuHeart,
    color: "bg-[#FFF0F3] text-[#E11D48]",
  },
  {
    title: "Produk Unggulan",
    value: "312",
    growth: "+22.1%",
    icon: LuPackage,
    color: "bg-[#EAF2FF] text-[#2563EB]",
  },
  {
    title: "Rata-rata Rating",
    value: "4.8 / 5",
    growth: "+7.6%",
    icon: LuStar,
    color: "bg-[#FFF4E5] text-[#F59E0B]",
  },
];