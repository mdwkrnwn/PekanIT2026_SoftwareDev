import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { categoryBadgeColor } from "@/lib/mockData";
import { FaLocationDot, FaStar } from "react-icons/fa6";
import SearchFilter from "./SearchFilter";
import WishlistCard from "./WishlistCard";
import { typeUMKM } from "@/lib/UMKM.types";

interface MainExploreProps {
  filteredUMKM: typeUMKM[];
  search: string;
  category: string;
}

export default function MainExplore({ filteredUMKM, search, category }: MainExploreProps) {
  return (
    <div className="w-[80vw]">
      {/* Pass the resolved params to the client-side filter */}
      <SearchFilter initialSearch={search} initialCategory={category} />

      {/* Cards Section */}
      {filteredUMKM.length > 0 ? (
        <section className="sm:grid-cols-2 xl:grid-cols-4 grid grid-cols-1 gap-8">
          {filteredUMKM.map((item) => (
            <div key={item.id} className="relative">
              <WishlistCard id={item.id} name={item.name} />

              <Link href={`/detail/${item.id}`}>
                <div className="border-border overflow-hidden rounded-[1.75rem] border bg-background transition-all hover:-translate-y-1 hover:shadow-xl">
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

                    <div className="text-muted-foreground flex items-center gap-2 mb-4 text-sm">
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
                        <FaLocationDot className="text-primary" size={13} />
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
        <div className="border-border h-60 rounded-3xl flex flex-col items-center justify-center text-center border border-dashed">
          <h3 className="text-xl font-semibold">UMKM tidak ditemukan</h3>
          <p className="text-muted-foreground mt-2 text-sm">
            Coba gunakan kata kunci atau kategori lain.
          </p>
        </div>
      )}

      {/* CTA Section */}
      <section className="bg-primary relative mt-20 overflow-hidden rounded-[2rem] bg-linear-to-r from-primary to-primary-foreground text-white">
        <div className="lg:grid-cols-2 lg:px-16 grid items-center grid-cols-1 px-8 py-12">
          <div className="z-10 space-y-5">
            <h2 className="lg:text-5xl text-3xl font-bold leading-tight">
              Temukan lebih banyak
              <br />
              UMKM lokal favoritmu
            </h2>

            <p className="text-white/90 lg:text-xl text-lg leading-relaxed">
              Dukung usaha lokal dan jadilah bagian dari pertumbuhan ekonomi daerah.
            </p>

            <Link
              href="/explore"
              className="text-primary rounded-2xl hover:bg-slate-100 inline-flex px-6 py-3 font-semibold transition-all bg-white"
            >
              Jelajahi Sekarang
            </Link>
          </div>

          <div className="lg:flex relative justify-center hidden">
            <Image
              src="/Explore.png"
              alt="Explore"
              width={1106}
              height={738}
              className="h-105 object-contain w-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
}