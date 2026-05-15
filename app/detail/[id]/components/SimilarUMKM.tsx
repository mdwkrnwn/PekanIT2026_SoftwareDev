"use client";

import Link from "next/link";
import Image from "next/image";
import { FaHeart, FaStar } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { categoryBadgeColor } from "@/lib/mockData";

interface SimilarUMKMProps {
  filtered: Array<{
    id: number;
    name: string;
    category: string;
    description: string;
    gallery: string[];
    rating: number;
  }>;
  wishlist: number[];
  onToggleWishlist: (id: number, name: string) => void;
}

export default function SimilarUMKM({
  filtered,
  wishlist,
  onToggleWishlist,
}: SimilarUMKMProps) {
  return (
    <section className="scroll-mt-25 px-4 pb-10 mx-auto mt-6" id="produk">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-primary text-xl font-bold">UMKM Serupa</h3>
        <span className="text-sm text-gray-500">{filtered.length} ditemukan</span>
      </div>

      {filtered.length === 0 ? (
        <p className="text-sm text-gray-500">Belum ada UMKM serupa.</p>
      ) : (
        <div className="sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid gap-6">
          {[...filtered]
            .sort((a, b) => b.rating - a.rating)
            .map((item) => (
              <div key={item.id} className="relative">
                <button
                  className={`absolute top-3 right-3 p-2 rounded-full transition z-10 ${wishlist.includes(item.id)
                      ? "bg-red-100 text-red-600"
                      : "bg-white text-gray-600 hover:bg-gray-100"
                    }`}
                  onClick={() => onToggleWishlist(item.id, item.name)}
                >
                  <FaHeart />
                </button>
                <Link href={`/detail/` + item.id}>
                  <div className="h-120 border-border overflow-hidden rounded-[1.75rem] border bg-background transition-all hover:-translate-y-1 hover:shadow-xl">
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
        </div>
      )}
    </section>
  );
}
