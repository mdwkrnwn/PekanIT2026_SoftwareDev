import { LuEye, LuHeart, LuStar } from "react-icons/lu";
import { IconType } from "react-icons";

export interface ProductInsightItem {
  title: string;
  subtitle: string;
  value: string;
  suffix: string;
  icon: IconType;
  iconColor: string;
  iconBg: string;
}

export function getProductInsights(data: {
  mostViewed: any;
  mostFavorite: any;
  highestRating: {
    name: string;
    rating: string;
    reviews: number;
  };
}): ProductInsightItem[] {
  return [
    {
      title: "Produk Paling Dilihat",
      subtitle: data.mostViewed?.name ?? "-",
      value: String(data.mostViewed?.views ?? 0),
      suffix: "kali dilihat",
      icon: LuEye,
      iconColor: "text-[#158A62]",
      iconBg: "bg-[#E8F7EF]",
    },
    {
      title: "Produk Paling Favorit",
      subtitle: data.mostFavorite?.name ?? "-",
      value: String(data.mostFavorite?.favorite ?? 0),
      suffix: "kali difavoritkan",
      icon: LuHeart,
      iconColor: "text-[#E11D48]",
      iconBg: "bg-[#FDECEF]",
    },
    {
      title: "Rating Tertinggi",
      subtitle: data.highestRating.name,
      value: data.highestRating.rating,
      suffix: `dari ${data.highestRating.reviews} ulasan`,
      icon: LuStar,
      iconColor: "text-[#F59E0B]",
      iconBg: "bg-[#FFF4E5]",
    },
  ];
}