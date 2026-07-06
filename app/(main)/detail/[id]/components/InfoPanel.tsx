"use client";

import { TAGS } from "@/data/TAGS";
import { UMKM } from "@/data/UMKM";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FaHeart, FaMapMarkerAlt, FaRegClock, FaStar } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuMapPin } from "react-icons/lu";
import Swal from "sweetalert2";
import { LoaderCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

interface InfoPanelProps {
  product: (typeof UMKM)[number];
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
  reviewCount,
}: InfoPanelProps) {
  const tagIds = product.tagIds;
  const router = useRouter();
  const [loadingFavorite, setLoadingFavorite] = useState(false);
  const tags = TAGS.filter((item) => tagIds.includes(item.id));
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
            <FaMapMarkerAlt className="text-primary-foreground" />
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
        <div className="md:flex-row flex flex-col gap-3 mt-8">
          <button
            disabled={loadingFavorite}
            onClick={async () => {
              setLoadingFavorite(true);

              try {
                const {
                  data: { user },
                } = await supabase.auth.getUser();

                if (!user) {
                  setLoadingFavorite(false);

                  const result = await Swal.fire({
                    icon: "warning",
                    title: "Login Diperlukan",
                    text: "Silakan login terlebih dahulu untuk menambahkan UMKM ke favorit.",
                    showCancelButton: true,
                    confirmButtonText: "Login",
                    cancelButtonText: "Batal",
                    confirmButtonColor: "#158A62",
                  });

                  if (result.isConfirmed) {
                    router.push("/login");
                  }

                  return;
                }

                onToggleWishlist(product.id, product.name);
              } finally {
                setLoadingFavorite(false);
              }
            }}
            className={`flex flex-1 items-center justify-center gap-2 rounded-2xl border py-3 font-medium text-white transition-all duration-200 ${loadingFavorite
              ? "cursor-not-allowed opacity-70"
              : isWish
                ? "border-primary/20 bg-primary"
                : "border-primary bg-primary hover:bg-primary/90"
              }`}
          >
            {loadingFavorite ? (
              <>
                <LoaderCircle className="animate-spin w-5 h-5" />
                <span>Memproses...</span>
              </>
            ) : (
              <>
                <FaHeart className="fill-white text-sm" />
                <span>{isWish ? "Tersimpan" : "Tambah Favorit"}</span>
              </>
            )}
          </button>
          <Link
            href={"/maps"}
            target="_blank"
            className="border-primary text-primary-foreground hover:bg-primary/5 rounded-xl flex items-center justify-center flex-1 gap-2 py-3 font-semibold transition-all border"
          >
            <LuMapPin size={18} />
            Lihat Map
          </Link>
        </div>
      </div>
      {/* Tags Cards */}
      <div className="outline-border rounded-xl outline-1 grid grid-cols-2">
        {tags.map((item) => (
          <div
            key={item.id}
            className={cn(
              `rounded-2xl flex  md:flex-row flex-col items-center gap-2 p-4 `,
              tags.length % 2 != 0 && "last:col-span-2 last:justify-center",
            )}
          >
            <div className="border-primary text-primary-foreground p-3 border-2 rounded-full">
              <item.icon size={22} />
            </div>
            <span className="text-sm font-medium text-center">{item.name}</span>
          </div>
        ))}
      </div>
      {/* Location Info */}
      <div className="md:grid gap-4 flex flex-col md:grid-cols-[auto_1fr] outline-border items-center rounded-xl outline-1 p-4">
        <div className="flex w-full">
          <span className="border-primary rounded-2xl flex items-center w-full gap-2 p-4 border">
            <FaMapMarkerAlt size={25} className="fill-primary-foreground" />
            Alamat
          </span>
        </div>
        {product.address}
        <div className="flex w-full">
          <span className="border-primary rounded-2xl flex items-center w-full gap-2 p-4 border">
            <HiOutlineLocationMarker
              size={25}
              className="stroke-primary-foreground"
            />
            Jarak
          </span>
        </div>
        {product.distance} Dari Lokasimu
        <Link
          href={
            "https://www.google.com/maps/place/" +
            product?.lat +
            "," +
            product.lng
          }
          target="_blank"
          className="border-primary text-primary-foreground hover:bg-primary hover:text-white rounded-xl flex items-center justify-center flex-1 w-full col-span-2 gap-2 py-3 font-semibold transition-all border"
        >
          <LuMapPin size={18} />
          Buka DI Google Maps
        </Link>
      </div>
    </aside>
  );
}
