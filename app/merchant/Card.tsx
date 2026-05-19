"use client"

import Image from "next/image";
import Link from "next/link";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Swal from "sweetalert2";
import { useSyncExternalStore } from "react";
import { typeUMKM } from "@/lib/UMKM.types";
import { removeFromWishlist, addToWishlist, subscribeWishlist, getWishlistSnapshot } from "@/lib/wishlist";
import { cn } from "@/lib/utils";

export function Card({ UMKM }: { UMKM: typeUMKM[] }) {
  const wishlistItems = useSyncExternalStore(
    subscribeWishlist,
    getWishlistSnapshot,
    () => [],
  );

  const toggleWishlist = (id: number, name: string) => {
    const isInWishlist = wishlistItems.includes(id);

    if (isInWishlist) {
      removeFromWishlist(id);
      Swal.fire({
        icon: "error",
        title: "Dihapus!",
        text: `${name} dihapus dari wishlist 💔`,
        timer: 1500,
        showConfirmButton: false,
        position: "top-end",
        toast: true,
        background: "#fef2f2",
        color: "#991b1b",
      });
    } else {
      addToWishlist(id);
      Swal.fire({
        icon: "success",
        title: "Ditambahkan!",
        text: `${name} berhasil ditambahkan ke wishlist ❤️`,
        timer: 1500,
        showConfirmButton: false,
        position: "top-end",
        toast: true,
        background: "#f0fdf4",
        color: "#065f46",
      });
    }
  };
  return (
    <section className="mt-14 lg:grid-cols-2 2xl:grid-cols-4 grid gap-8">
      {UMKM.map((merchant) => {
        const isWishlisted = wishlistItems.includes(merchant.id);

        return (
          <Link
            href={`/detail/${merchant.id}?src=merchant`}
            key={merchant.id}
            className="border-border overflow-hidden rounded-[2rem] border bg-background transition-all hover:-translate-y-1 hover:shadow-xl cursor-pointer"
          >
            {/* Image Container */}
            <div className="h-80 relative overflow-hidden">
              <Image
                src={merchant.gallery[0]}
                alt={merchant.name}
                fill
                className="hover:scale-105 object-cover transition-transform duration-300"
              />

              <button
                className={cn(
                  "absolute top-5 right-5 flex size-10 items-center justify-center rounded-full bg-background text-foreground hover:bg-primary hover:*:text-background cursor-pointer",
                  isWishlisted && "text-primary"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  toggleWishlist(merchant.id, merchant.name);
                }}
              >
                {isWishlisted ? (
                  <FaHeart size={22} />
                ) : (
                  <FaRegHeart size={22} />
                )}
              </button>

              <span className="bg-primary absolute top-5 left-5 rounded-full px-4 py-1.5 text-sm font-bold text-white">
                {merchant.category}
              </span>
            </div>

            {/* Content */}
            <div className="p-5">
              <h2 className="text-foreground text-xl font-bold">
                {merchant.name}
              </h2>

              <p className="text-muted-foreground line-clamp-2 mt-4 leading-relaxed">
                {merchant.description}
              </p>

              {/* Location */}
              <div className="text-muted-foreground flex items-center justify-between mt-6">
                <div className="flex items-center gap-3">
                  <FaLocationDot size={16} />
                  <span>{merchant.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaLocationDot className="text-primary" size={16} />
                  <span>{merchant.distance}</span>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-4">
                <FaStar className="text-yellow-500" size={20} />
                <span className="font-semibold text-yellow-600">
                  {merchant.rating}
                </span>
                <span className="text-muted-foreground">
                  ({merchant.reviews})
                </span>
              </div>
            </div>
          </Link>
        );
      })}
    </section>
  );
}