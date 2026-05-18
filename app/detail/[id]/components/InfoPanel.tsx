"use client";

import { TAGS } from "@/data/TAGS";
import { UMKM } from "@/data/UMKM";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FaHeart, FaMapMarkerAlt, FaRegClock, FaStar } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuMapPin } from "react-icons/lu";
interface InfoPanelProps {
  product: typeof UMKM[number];
  isWish: boolean;
  onToggleWishlist: (id: number, name: string) => void;
  rating: string;
  reviewCount: number;
}

export default function InfoPanel({
  product,
  isWish,
  onToggleWishlist,
  rating,
  reviewCount
}: InfoPanelProps) {
  const tagIds = product.tagIds
  const tags = TAGS.filter((item) => tagIds.includes(item.id))
  return (
    <aside className="rounded-3xl flex flex-col justify-between gap-8">
      {/* Title */}
      <div>
        <div className="mb-5">
          <h1 className="text-foreground text-4xl font-bold leading-tight">
            {product.name}
          </h1>
        </div>

        {/* Rating & Distance */}
        <div className="mb-6 space-y-3">
          <div className=" flex items-center gap-2 rounded-full">
            <FaStar className="text-yellow-400" />
            <span className="text-sm font-semibold">
              {rating} ({reviewCount} ulasan)
            </span>
          </div>
          <p className="text-muted-foreground mt-2 text-sm">
            {product.category}
          </p>
          <div className="text-muted-foreground flex items-center gap-2 text-sm">
            <FaMapMarkerAlt className="text-primary" />
            <span>1.2 km dari lokasi kamu</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="dark:text-emerald-100 dark:bg-green-950 px-3 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded-full">
              Buka Sekarang
            </span>

            <span className="text-muted-foreground flex items-center gap-1 text-sm">
              <FaRegClock size={14} />
              09.00 - 21.00
            </span>
          </div>
        </div>
        {/* Action Buttons */}
        <div className="flex gap-3 mt-8">
          <button
            onClick={() => onToggleWishlist(product.id, product.name)}
            className={`flex-1 py-3 rounded-2xl font-medium transition-all duration-200 flex items-center justify-center gap-2 border ${isWish
              ? "bg-primary/10 text-primary border-primary/20"
              : "bg-primary text-white border-primary hover:bg-primary/90"
              }`}
          >
            <FaHeart
              className={`text-sm ${isWish ? "fill-primary" : "fill-white"}`}
            />

            <span>{isWish ? "Tersimpan" : "Tambah Favorit"}</span>
          </button>
          <Link
            href={"/maps"}
            target="_blank"
            className="border-primary text-primary hover:bg-primary/5 rounded-xl flex items-center justify-center flex-1 gap-2 py-3 font-semibold transition-all border"
          >
            <LuMapPin size={18} />
            Lihat Map
          </Link>
        </div>
      </div>
      {/* Tags Cards */}
      <div className="outline-border rounded-xl outline-1 grid grid-cols-2">
        {tags.map((item) => (
          <div key={item.id} className={cn(`rounded-2xl flex  flex-row items-center gap-2 p-4 `, tags.length % 2 != 0 && "last:col-span-2 last:justify-center"
          )}>
            <div className="bg-primary/10 text-primary p-3 rounded-full">
              <item.icon size={22} />
            </div>
            <span className="text-sm font-medium">{item.name}</span>
          </div>
        ))}
      </div>
      {/* Location Info */}
      <div className="grid gap-4 grid-cols-[auto_1fr] outline-border rounded-xl outline-1 p-4">
        <div className="flex">
          <span className="bg-primary/10 rounded-2xl flex items-center w-full gap-2 p-4">
            <FaMapMarkerAlt size={25} className="fill-primary" />
            Alamat
          </span>
        </div>
        {product.address}
        <div className="flex">
          <span className="bg-primary/10 rounded-2xl flex items-center w-full gap-2 p-4">
            <HiOutlineLocationMarker size={25} className="stroke-primary" />
            Jarak
          </span>
        </div>
        {product.distance} Dari Lokasimu
        <Link
          href={"https://www.google.com/maps/place/" + product?.lat + "," + product.lng}
          target="_blank"
          className="border-primary text-primary hover:bg-primary/5 rounded-xl flex items-center justify-center flex-1 col-span-2 gap-2 py-3 font-semibold transition-all border"
        >
          <LuMapPin size={18} />
          Buka DI Google Maps
        </Link>
      </div>
    </aside>
  );
}
