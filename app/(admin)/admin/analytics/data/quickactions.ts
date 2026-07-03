import {
  LuPlus,
  LuTicket,
  LuMessageCircle,
  LuShare2,
} from "react-icons/lu";
import { HiChartBar } from "react-icons/hi";

export interface QuickAction {
  title: string;
  icon: React.ElementType;
  color: string;
}

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