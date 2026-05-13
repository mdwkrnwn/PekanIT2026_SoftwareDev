"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { categories, categoryBadgeColor } from "@/lib/mockData";
import { UMKM } from "@/data/UMKM";
import { useDebounce } from "@/lib/debounce";
import { addToWishlist, getWishlist, removeFromWishlist } from "@/lib/wishlist";
import Swal from "sweetalert2";
import { FaHeart, FaLocationDot, FaStar } from "react-icons/fa6";

export default function ExplorePage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [wishlist, setWishlist] = useState<number[]>([]);
  const debounce = useDebounce(search, 750);

  const toggleWishlist = (id: number, name: string) => {
    const isInWishlist = wishlist.includes(id);
    if (isInWishlist) {
      removeFromWishlist(id);
      setWishlist((prev) => prev.filter((x) => x !== id));
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
      setWishlist((prev) => [...prev, id]);
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

  useEffect(() => {
    const ids = getWishlist();
    setWishlist(ids);
  }, []);

  // Filter UMKM
  const filteredUMKM = useMemo(() => {
    return UMKM.filter((item) => {
      const matchSearch =
        item.name.toLowerCase().includes(debounce.toLowerCase()) ||
        item.description?.toLowerCase().includes(debounce.toLowerCase());

      const matchCategory =
        activeCategory === "Semua" || item.category === activeCategory;

      return matchSearch && matchCategory;
    });
  }, [debounce, activeCategory]);

  return (
    <div className="w-[86vw]">
      {/* Search & Category */}
      <section>
        {/* Search */}
        <div className="relative mb-6">
          <FaSearch
            size={20}
            className="text-muted-foreground absolute top-1/2 right-6 -translate-y-1/2"
          />

          <input
            type="text"
            placeholder="Cari UMKM, produk, kategori..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border-border focus:ring-primary/20 focus:border-primary w-full h-16 rounded-full border bg-white px-6 pr-16 text-lg outline-none transition-all focus:ring-4"
          />
        </div>

        {/* Categories */}
        <div className="mb-10 flex flex-wrap items-center gap-4">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={cn(
                  "border-primary/20 text-primary hover:bg-primary hover:text-white flex items-center gap-2 rounded-full border px-5 py-2.5 font-medium transition-all",
                  activeCategory === category.name && "bg-primary text-white",
                )}
              >
                <Icon size={20} />
                {category.name}
              </button>
            );
          })}
        </div>
      </section>

      {/* Cards */}
      {filteredUMKM.length > 0 ? (
        <section className="sm:grid-cols-2 xl:grid-cols-4 grid grid-cols-1 gap-8">
          {filteredUMKM.map((item) => (
            <div key={item.id} className="relative">
              <button
                className={`absolute top-3 right-3 p-2 rounded-full transition z-10 ${wishlist.includes(item.id)
                  ? "bg-red-100 text-red-600"
                  : "bg-white text-gray-600 hover:bg-gray-100"
                  }`}
                onClick={() => toggleWishlist(item.id, item.name)}
              >
                <FaHeart />
              </button>
              <Link href={`/detail/` + item.id}>
                <div
                  key={item.name}
                  className="border-border overflow-hidden rounded-[1.75rem] border bg-background transition-all hover:-translate-y-1 hover:shadow-xl"
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

                    <div className="text-black flex items-center gap-2 mb-4 text-sm">
                      <FaLocationDot size={14} />
                      <span>{item.location}</span>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1 text-yellow-500">
                        <FaStar size={15} />
                        <span className="text-slate-700 font-semibold">
                          {item.rating}
                        </span>
                        <span className="text-muted-foreground">
                          ({item.reviews})
                        </span>
                      </div>

                      <div className="text-muted-foreground flex items-center gap-1">
                        <FaLocationDot size={13} />
                        <span>{item.distance}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </section>
      ) : (
        <div className="border-border flex h-60 flex-col items-center justify-center rounded-3xl border border-dashed text-center">
          <h3 className="text-xl font-semibold">UMKM tidak ditemukan</h3>

          <p className="text-muted-foreground mt-2 text-sm">
            Coba gunakan kata kunci atau kategori lain.
          </p>
        </div>
      )}

      {/* CTA Section */}
      <section className="bg-primary relative mt-20 overflow-hidden rounded-[2rem] bg-linear-to-r from-primary to-primary-foreground text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center px-8 lg:px-16 py-12">
          {/* Text */}
          <div className="z-10 space-y-5">
            <h2 className="text-3xl lg:text-5xl font-bold leading-tight">
              Temukan lebih banyak
              <br />
              UMKM lokal favoritmu
            </h2>

            <p className="text-white/90 text-lg lg:text-xl leading-relaxed">
              Dukung usaha lokal dan jadilah bagian dari pertumbuhan ekonomi
              daerah.
            </p>

            <Link
              href="/explore"
              className="text-primary inline-flex rounded-2xl bg-white px-6 py-3 font-semibold transition-all hover:bg-slate-100"
            >
              Jelajahi Sekarang
            </Link>
          </div>

          {/* Image */}
          <div className="relative hidden lg:flex justify-center">
            <Image
              src="/Explore.png"
              alt="Explore"
              width={1106}
              height={738}
              className="h-105 w-auto object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
