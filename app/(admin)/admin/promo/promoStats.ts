import { IconType } from "react-icons";
import {
  LuTag,
  LuEye,
  LuMessageSquareMore,
  LuMapPin,
} from "react-icons/lu";

export interface PromoStat {
  title: string;
  value: string;
  growth: string;
  icon: IconType;
  color: string;
}

export const promoStats: PromoStat[] = [
  {
    title: "Total Promo",
    value: "1.240",
    growth: "+12.3%",
    icon: LuTag,
    color: "bg-[#E8F7EF] text-[#158A62]",
  },
  {
    title: "Total Dilihat",
    value: "187",
    growth: "+12.3%",
    icon: LuEye,
    color: "bg-[#FFF0F3] text-[#E11D48]",
  },
  {
    title: "Total Interaksi",
    value: "112",
    growth: "+12.3%",
    icon: LuMessageSquareMore,
    color: "bg-[#FFF4E5] text-[#F97316]",
  },
  {
    title: "Klik ke Maps dari Promo",
    value: "45",
    growth: "+12.3%",
    icon: LuMapPin,
    color: "bg-[#EAF2FF] text-[#2563EB]",
  },
  {
    title: "Promo Aktif",
    value: "312",
    growth: "+12.3%",
    icon: LuTag,
    color: "bg-[#EAF2FF] text-[#2563EB]",
  },
];