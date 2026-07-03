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

function randomGrowth() {
  return (Math.random() * 15 + 5).toFixed(1);
}

export function getProductStats(stats: {
  totalProduk: number;
  totalDilihat: number;
  totalFavorit: number;
  produkUnggulan: number;
  rating: string;
}): ProductStat[] {
  return [
    {
      title: "Total Produk",
      value: stats.totalProduk.toString(),
      growth: randomGrowth(),
      icon: LuUtensilsCrossed,
      color: "bg-[#E8F7EF] text-[#158A62]",
    },
    {
      title: "Total Dilihat",
      value: stats.totalDilihat.toLocaleString(),
      growth: randomGrowth(),
      icon: LuEye,
      color: "bg-[#E8F7EF] text-[#158A62]",
    },
    {
      title: "Total Favorit",
      value: stats.totalFavorit.toString(),
      growth: randomGrowth(),
      icon: LuHeart,
      color: "bg-[#FFF0F3] text-[#E11D48]",
    },
    {
      title: "Produk Unggulan",
      value: stats.produkUnggulan.toString(),
      growth: randomGrowth(),
      icon: LuPackage,
      color: "bg-[#EAF2FF] text-[#2563EB]",
    },
    {
      title: "Rata-rata Rating",
      value: `${stats.rating} / 5`,
      growth: randomGrowth(),
      icon: LuStar,
      color: "bg-[#FFF4E5] text-[#F59E0B]",
    },
  ];
}