import { IconType } from "react-icons";
import { LuEye, LuHeart, LuStar } from "react-icons/lu";

export interface ProductInsightItem {
  title: string;
  subtitle: string;
  value: string;
  suffix: string;
  icon: IconType;
  iconColor: string;
  iconBg: string;
}

export const productInsights: ProductInsightItem[] = [
  {
    title: "Produk Paling Dilihat",
    subtitle: "Nasi Ayam Geprek",
    value: "560",
    suffix: "kali dilihat",
    icon: LuEye,
    iconColor: "text-[#158A62]",
    iconBg: "bg-[#E8F7EF]",
  },
  {
    title: "Produk Paling Favorit",
    subtitle: "Nasi Ayam Geprek",
    value: "124",
    suffix: "kali difavoritkan",
    icon: LuHeart,
    iconColor: "text-[#E11D48]",
    iconBg: "bg-[#FDECEF]",
  },
  {
    title: "Rating Tertinggi",
    subtitle: "Paket Keluarga",
    value: "4.9",
    suffix: "dari 56 ulasan",
    icon: LuStar,
    iconColor: "text-[#F59E0B]",
    iconBg: "bg-[#FFF4E5]",
  },
];