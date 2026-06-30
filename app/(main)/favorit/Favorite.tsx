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
        item.category?.toLowerCase().includes(term)
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
      <section
        data-aos="fade-down"
        data-aos-duration="800"
        className="mb-4 flex flex-row items-center justify-between lg:-mt-10"
      >
        <div className="flex flex-row items-center gap-4">
          <FaHeart
            size={80}
            className="fill-primary-foreground"
          />

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

        <div
          data-aos="fade-left"
          data-aos-delay="200"
          className="hidden md:block"
        >
          <Image
            src="/bakulFavorit.png"
            width={450}
            height={300}
            alt="Favorite Image"
          />
        </div>
      </section>

      {/* SEARCH */}
      <div
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <FilterFavorite />
      </div>

      {/* CONTENT */}
      {filtered.length === 0 ? (
        <div
          data-aos="zoom-in"
          className="border-border bg-background rounded-3xl border border-dashed py-20 text-center"
        >
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
            className="bg-primary mt-5 inline-block rounded-xl px-5 py-2 text-white"
          >
            Jelajahi UMKM
          </Link>
        </div>
      ) : (
        <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {filtered.map((item, index) => (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration="700"
              className="relative"
            >
              <button
                className="absolute right-3 top-3 z-10 rounded-full bg-red-100 p-2 text-red-600 transition hover:scale-110"
                onClick={() =>
                  deleteFavorite(item.id, item.name)
                }
              >
                <FaTrash />
              </button>

              <Link href={`/detail/${item.id}?src=favorit`}>
                <div className="border-border bg-background overflow-hidden rounded-[1.75rem] border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={item.gallery[0]}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />

                    <span
                      className={cn(
                        "absolute bottom-4 left-4 rounded-full px-3 py-1 text-xs font-semibold text-white",
                        categoryBadgeColor[item.category]
                      )}
                    >
                      {item.category}
                    </span>
                  </div>

                  <div className="p-5">
                    <h2 className="text-foreground mb-2 text-[1.45rem] font-bold">
                      {item.name}
                    </h2>

                    <p className="text-foreground mb-5 line-clamp-2 text-sm leading-relaxed">
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
      <section
        data-aos="fade-up"
        className="relative mt-20 rounded-lg bg-[#E6F5EF] text-white"
      >
        <div className="grid h-full grid-cols-1 items-center gap-6 px-10 md:grid-cols-2">
          <div
            data-aos="fade-right"
            data-aos-delay="150"
            className="mt-5 space-y-10 md:my-5"
          >
            <h2 className="text-2xl font-semibold text-[#125C4C] md:text-4xl">
              Belum menemukan favorit lain?
            </h2>

            <p className="text-lg font-semibold text-[#0B0F1F] md:text-xl">
              Jelajahi lebih banyak UMKM lokal dan
              temukan produk serta layanan terbaik di
              sekitarmu.
            </p>

            <Link
              href="/explore"
              className="bg-primary border-primary-foreground hover:bg-primary-foreground dark:hover:text-primary inline-block rounded-2xl px-6 py-3 font-semibold text-white transition"
            >
              Jelajahi Sekarang
            </Link>
          </div>

          <div
            data-aos="fade-left"
            data-aos-delay="250"
            className="relative flex size-full justify-center"
          >
            <Image
              src="/bakulFavorit2.png"
              alt="Explore"
              width={600}
              height={600}
            />
          </div>
        </div>
      </section>
    </div>
  );
}