"use client";

import { useMemo, useState } from "react";
import { Cards } from "./Cards";
import Image from "next/image";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { categories } from "@/lib/mockData";
import { UMKM } from "@/data/UMKM";
import { useDebounce } from "@/lib/debounce";

export default function ExplorePage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Semua");
  const debounce = useDebounce(search, 750);

  // Filter UMKM
  const filteredUMKM = useMemo(() => {
    return UMKM.filter((item) => {
      const matchSearch =
        item.name.toLowerCase().includes(debounce.toLowerCase()) ||
        item.description
          ?.toLowerCase()
          .includes(debounce.toLowerCase());

      const matchCategory =
        activeCategory === "Semua" ||
        item.category === activeCategory;

      return matchSearch && matchCategory;
    });
  }, [debounce, activeCategory]);

  return (
    <div className="w-[80vw]">
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
                onClick={() =>
                  setActiveCategory(category.name)
                }
                className={cn(
                  "border-primary/20 text-primary hover:bg-primary hover:text-white flex items-center gap-2 rounded-full border px-5 py-2.5 font-medium transition-all",
                  activeCategory === category.name &&
                    "bg-primary text-white",
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
        <Cards umkmData={filteredUMKM} />
      ) : (
        <div className="border-border flex h-60 flex-col items-center justify-center rounded-3xl border border-dashed text-center">
          <h3 className="text-xl font-semibold">
            UMKM tidak ditemukan
          </h3>

          <p className="text-muted-foreground mt-2 text-sm">
            Coba gunakan kata kunci atau kategori lain.
          </p>
        </div>
      )}

      {/* CTA Section */}
      <section className="bg-primary relative mt-20 overflow-hidden rounded-[2rem] bg-gradient-to-r from-primary to-primary-foreground text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center px-8 lg:px-16 py-12">
          {/* Text */}
          <div className="z-10 space-y-5">
            <h2 className="text-3xl lg:text-5xl font-bold leading-tight">
              Temukan lebih banyak
              <br />
              UMKM lokal favoritmu
            </h2>

            <p className="text-white/90 text-lg lg:text-xl leading-relaxed">
              Dukung usaha lokal dan jadilah bagian dari
              pertumbuhan ekonomi daerah.
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
              className="h-[420px] w-auto object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
}