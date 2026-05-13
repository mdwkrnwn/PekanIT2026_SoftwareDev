"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaHeart, FaSearch } from "react-icons/fa";
import { UMKM } from "@/data/UMKM.dummy";
import { getWishlist, removeFromWishlist } from "@/lib/wishlist";
import { categoryBadgeColor } from "@/lib/mockData";
import { FaStar, FaTrash } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import Swal from "sweetalert2";

export default function FavoritePage() {
  const [favorites, setFavorites] = useState<any[]>([]);
  const [query, setQuery] = useState("");

  /** Load favorite dari localStorage */
  const loadFavorites = () => {
    try {
      const raw = getWishlist();

      const items = UMKM.filter((u) => raw.includes(u.id));
      setFavorites(items);
    } catch (err) {
      console.error(err);
      setFavorites([]);
    }
  };

  const deleteFavorite = (id: number, name: string) => {
    removeFromWishlist(id);
    loadFavorites();
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

  useEffect(() => {
    loadFavorites();

    const sync = (e: StorageEvent) => {
      if (e.key === "tm_wishlist_items") {
        loadFavorites();
      }
    };

    window.addEventListener("storage", sync);
    window.addEventListener("tmWishlist:changed", loadFavorites);

    return () => {
      window.removeEventListener("storage", sync);
      window.removeEventListener("tmWishlist:changed", loadFavorites);
    };
  }, []);

  /** Filter search */
  const filtered = useMemo(() => {
    if (!query) return favorites;

    const term = query.toLowerCase();

    return favorites.filter(
      (item) =>
        item.name.toLowerCase().includes(term) ||
        item.category?.toLowerCase().includes(term),
    );
  }, [query, favorites]);

  return (
    <div className="w-[86vw] -mt-10">
      {/* HEADER */}
      <section className="flex flex-row items-center justify-between">
        <div className="flex flex-row gap-4 items-center">
          <FaHeart size={80} className="fill-primary" />

          <div>
            <h1 className="pb-2 text-4xl font-semibold">UMKM Favoritmu</h1>
            <p className="text-xl text-muted-foreground">
              Temukan dan kelola UMKM yang kamu simpan <br />
              sebagai favorit.
            </p>
          </div>
        </div>

        <div>
          <Image
            src={"/Favorite.png"}
            width={450}
            height={300}
            alt="Favorite Image"
          />
        </div>
      </section>

      {/* SEARCH BAR */}
      <div className="mt-10 mb-6 flex items-center gap-3">
        <div className="relative w-full max-w-md">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari favorit UMKM..."
            className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
          />
        </div>
      </div>

      {/* CONTENT */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 border border-dashed rounded-3xl bg-white">
          <FaHeart className="mx-auto text-4xl text-primary mb-4" />
          <h3 className="text-lg font-semibold">Belum ada favorit</h3>
          <p className="text-sm text-muted-foreground mt-2">
            Tambahkan UMKM ke favorit untuk melihatnya di sini
          </p>

          <Link
            href="/explore"
            className="inline-block mt-5 bg-primary text-white px-5 py-2 rounded-xl"
          >
            Jelajahi UMKM
          </Link>
        </div>
      ) : (
        <section className="sm:grid-cols-2 xl:grid-cols-4 grid grid-cols-1 gap-8">
          {filtered.map((item) => (
            <div key={item.id} className="relative">
              <button
                className={`absolute top-3 right-3 p-2 rounded-full transition z-10 bg-red-100 text-red-600`}
                onClick={() => deleteFavorite(item.id, item.name)}
              >
                <FaTrash />
              </button>

              <Link key={item.id} href={`/detail/` + item.id}>
                <div
                  key={item.name}
                  className="h-120 border-border overflow-hidden rounded-[1.75rem] border bg-background transition-all hover:-translate-y-1 hover:shadow-xl"
                >
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
                        <span className="text-slate-700 font-semibold">
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
      <section className="relative mt-20 bg-primary overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#8EAFE5] to-[#E5EEFD] text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center px-10 py-10 gap-6">
          <div className="space-y-5">
            <h2 className="text-primary text-4xl font-semibold">
              Belum menemukan favorit lain?
            </h2>

            <p className="text-foreground text-xl">
              Jelajahi lebih banyak UMKM lokal dan temukan produk serta layanan
              terbaik di sekitarmu.
            </p>

            <Link
              href="/explore"
              className="inline-block bg-[#1974FF] text-white px-6 py-3 rounded-2xl font-semibold hover:bg-blue-600 transition"
            >
              Jelajahi Sekarang
            </Link>
          </div>

          <div className="flex justify-center">
            <Image
              src={"/Favourite2.png"}
              alt="Explore"
              width={600}
              height={400}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
