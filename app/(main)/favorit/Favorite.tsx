// app/favorite/Favorite.tsx
"use client";

import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import { removeFromWishlist } from "@/lib/wishlist";
import { categoryBadgeColor } from "@/lib/mockData";
import { FaStar, FaTrash } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import Swal from "sweetalert2";
import { useWishlist } from "@/hooks/useWishlist";
import FilterFavorite from "./FavoriteFilter";

interface FavoriteProps {
  search?: string;
}

export default function Favorite({
  search = "",
}: FavoriteProps) {
  const favorites = useWishlist();

  const filtered = useMemo(() => {
    if (!search) return favorites;

    const term = search.toLowerCase();

    return favorites.filter(
      (item) =>
        item.name.toLowerCase().includes(term) ||
        item.category?.toLowerCase().includes(term),
    );
  }, [favorites, search]);

  const deleteFavorite = (id: number, name: string) => {
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
  };

  return (
    <div className="w-[80vw]">
      {/* HEADER */}
      <section className="flex flex-row items-center justify-between mb-4 lg:-mt-10">
        <div className="flex flex-row items-center gap-4">
          <FaHeart size={80} className="fill-primary-foreground" />

          <div>
            <h1 className="pb-2 text-4xl font-semibold">
              UMKM Favoritmu
            </h1>

            <p className="text-muted-foreground text-xl">
              Temukan dan kelola UMKM yang kamu simpan
              <br />
              sebagai favorit.
            </p>
          </div>
        </div>

        <div className="md:block hidden">
          <Image
            src="/bakulFavorit.png"
            width={450}
            height={300}
            alt="Favorite Image"
          />
        </div>
      </section>

      {/* SEARCH */}
      <FilterFavorite />

      {/* CONTENT */}
      {filtered.length === 0 ? (
        <div className="rounded-3xl bg-background border-border py-20 text-center border border-dashed">
          <FaHeart className="text-primary mx-auto mb-4 text-4xl" />

          <h3 className="text-lg font-semibold">
            {search
              ? "Tidak ada hasil pencarian"
              : "Belum ada favorit"}
          </h3>

          <p className="text-muted-foreground mt-2 text-sm">
            {search
              ? "Coba cari dengan kata kunci lain"
              : "Tambahkan UMKM ke favorit untuk melihatnya di sini"}
          </p>

          <Link
            href="/explore"
            className="bg-primary rounded-xl inline-block px-5 py-2 mt-5 text-white"
          >
            Jelajahi UMKM
          </Link>
        </div>
      ) : (
        <section className="sm:grid-cols-2 xl:grid-cols-4 grid grid-cols-1 gap-8">
          {filtered.map((item) => (
            <div key={item.id} className="relative">
              <button
                className="top-3 right-3 absolute z-10 p-2 text-red-600 transition bg-red-100 rounded-full"
                onClick={() =>
                  deleteFavorite(item.id, item.name)
                }
              >
                <FaTrash />
              </button>

              <Link href={`/detail/${item.id}?src=favorit`}>
                <div className="border-border bg-background hover:-translate-y-1 overflow-hidden rounded-[1.75rem] border transition-all hover:shadow-xl">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={item.gallery[0]}
                      alt={item.name}
                      fill
                      className="hover:scale-105 object-cover transition-transform duration-300"
                    />

                    <span
                      className={cn(
                        "absolute bottom-4 left-4 rounded-full px-3 py-1 text-xs font-semibold text-white",
                        categoryBadgeColor[item.category],
                      )}
                    >
                      {item.category}
                    </span>
                  </div>

                  <div className="p-5">
                    <h2 className="text-foreground mb-2 text-[1.45rem] font-bold">
                      {item.name}
                    </h2>

                    <p className="text-foreground line-clamp-2 mb-5 text-sm leading-relaxed">
                      {item.description}
                    </p>

                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1 text-yellow-500">
                        <FaStar size={15} />

                        <span className="text-foreground/70 font-semibold">
                          {item.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </section>
      )}

      {/* CTA */}
      <section className="relative mt-20 rounded-lg bg-[#E6F5EF] text-white">
        <div className="md:grid-cols-2 grid items-center h-full grid-cols-1 gap-6 px-10">
          <div className="md:my-5 mt-5 space-y-10">
            <h2 className="text-[#125C4C] md:text-4xl text-2xl font-semibold">
              Belum menemukan favorit lain?
            </h2>

            <p className="text-[#0B0F1F] font-semibold md:text-xl text-lg">
              Jelajahi lebih banyak UMKM lokal dan
              temukan produk serta layanan terbaik di
              sekitarmu.
            </p>

            <Link
              href="/explore"
              className="bg-primary border-primary-foreground hover:bg-primary-foreground dark:hover:text-primary rounded-2xl inline-block px-6 py-3 font-semibold text-white transition"
            >
              Jelajahi Sekarang
            </Link>
          </div>

          <div className="size-full relative flex justify-center">
            <Image
              src="/bakulFavorit2.png"
              alt="Explore"
              width={600}
              height={600}
              className=""
            />
          </div>
        </div>
      </section>
    </div>
  );
}