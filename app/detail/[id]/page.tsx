import { Reviews } from "./Reviews";
import { Location } from "./Location";
import { Menu } from "./Menu";
import Image from "next/image";
import { FaStar, FaRegClock, FaHeart, FaMapMarkerAlt } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
import { MdOutlineFoodBank, MdAttachMoney, MdVerified } from "react-icons/md";
import { Metadata } from "next";
import { UMKM } from "@/data/UMKM.dummy";
import ProductPage from "./Product";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const umkm = UMKM.find(
    (item: { id: number }) => item?.id == parseInt(params.id),
  );

  return {
    title: umkm?.name ?? "Not Found",
    description:
      umkm?.description ??
      "Please return to our homepage, we apologize for the inconvenience.",
  };
}


export default function ProductDetailPage() {
  return <ProductPage />
}
