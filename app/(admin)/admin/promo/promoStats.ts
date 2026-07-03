import { IconType } from "react-icons";
import { LuTag, LuEye, LuMapPin, LuCheckCheck } from "react-icons/lu";

interface PromoStatsProps {
  refreshKey: number;
}
export interface PromoStat {
  title: string;
  value: string;
  growth: string;
  icon: IconType;
  color: string;
}
function getRandomGrowth() {
  return (Math.random() * 15 + 5).toFixed(1); // 5.0 - 20.0%
}
export function getPromoStats(stats: {
  totalPromo: number;
  totalDilihat: number;
  totalKlik: number;
  promoAktif: number;
  promoSelesai: number;
}): PromoStat[] {
  return [
    {
      title: "Total Promo",
      value: stats.totalPromo.toString(),
      growth: getRandomGrowth(),
      icon: LuTag,
      color: "bg-[#E8F7EF] text-[#158A62]",
    },
    {
      title: "Total Dilihat",
      value: stats.totalDilihat.toLocaleString(),
      growth: getRandomGrowth(),
      icon: LuEye,
      color: "bg-[#FFF0F3] text-[#E11D48]",
    },
    {
      title: "Klik ke Maps",
      value: stats.totalKlik.toString(),
      growth: getRandomGrowth(),
      icon: LuMapPin,
      color: "bg-[#EAF2FF] text-[#2563EB]",
    },
    {
      title: "Promo Aktif",
      value: stats.promoAktif.toString(),
      growth: getRandomGrowth(),
      icon: LuTag,
      color: "bg-[#EAF2FF] text-[#2563EB]",
    },
    {
      title: "Promo Selesai",
      value: stats.promoSelesai.toString(),
      growth: getRandomGrowth(),
      icon: LuCheckCheck,
      color: "bg-[#F3F4F6] text-[#6B7280]",
    },
  ];
}
