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

export default function MainExplore({
  filteredUMKM,
  search,
  category,
}: MainExploreProps) {
  return (
    <div className="w-[80vw]">
      {/* Search Filter */}
      <div
        data-aos="fade-down"
        data-aos-duration="700"
        data-aos-once="true"
      >
        <SearchFilter
          initialSearch={search}
          initialCategory={category}
        />
      </div>

      {/* Cards Section */}
      {filteredUMKM.length > 0 ? (
        <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {filteredUMKM.map((item, index) => (
            <div
              key={item.id}
              className="relative"
              data-aos={
                index % 4 === 0
                  ? "fade-right"
                  : index % 4 === 3
                  ? "fade-left"
                  : "fade-up"
              }
              data-aos-delay={index * 100}
              data-aos-duration="800"
              data-aos-once="true"
            >
              <WishlistCard
                id={item.id}
                name={item.name}
              />

              <Link href={`/detail/${item.id}`}>
                <div
                  className="
                    group
                    border-border overflow-hidden rounded-[1.75rem]
                    border bg-background
                    transition-all duration-500
                    hover:-translate-y-3
                    hover:shadow-2xl
                    hover:shadow-primary/10
                  "
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={item.gallery[0]}
                      alt={item.name}
                      fill
                      className="
                        object-cover
                        transition-transform duration-700
                        group-hover:scale-110
                      "
                    />

                    <span
                      className={cn(
                        `
                          absolute bottom-4 left-4
                          rounded-full px-3 py-1
                          text-xs font-semibold text-white
                          transition-all duration-300
                          group-hover:scale-105
                        `,
                        categoryBadgeColor[item.category]
                      )}
                    >
                      {item.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h2
                      className="
                        text-foreground mb-2 text-[1.45rem]
                        font-bold transition-colors duration-300
                        group-hover:text-primary
                      "
                    >
                      {item.name}
                    </h2>

                    <p className="text-foreground mb-5 line-clamp-2 text-sm leading-relaxed">
                      {item.description}
                    </p>

                    <div className="text-muted-foreground mb-4 flex items-center gap-2 text-sm">
                      <FaLocationDot size={14} />
                      <span>{item.location}</span>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1 text-yellow-500">
                        <FaStar size={15} />

                        <span className="text-muted-foreground font-semibold">
                          {item.rating}
                        </span>

                        <span className="text-muted-foreground">
                          ({item.reviews})
                        </span>
                      </div>

                      <div className="text-muted-foreground flex items-center gap-1">
                        <FaLocationDot
                          className="text-primary"
                          size={13}
                        />

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
        <div
          data-aos="zoom-in"
          data-aos-duration="800"
          data-aos-once="true"
          className="
            border-border flex h-60 flex-col
            items-center justify-center rounded-3xl
            border border-dashed text-center
          "
        >
          <h3 className="text-xl font-semibold">
            UMKM tidak ditemukan
          </h3>

          <p className="text-muted-foreground mt-2 text-sm">
            Coba gunakan kata kunci atau kategori lain.
          </p>
        </div>
      )}

      {/* CTA */}
      <section
        data-aos="zoom-in"
        data-aos-duration="900"
        data-aos-once="true"
        className="
          bg-primary relative mt-20 overflow-hidden
          rounded-[2rem]
          bg-linear-to-r
          from-primary
          to-primary-foreground
          text-white
        "
      >
        <div className="grid grid-cols-1 items-center px-8 py-6 lg:grid-cols-2 lg:px-12">
          <div
            data-aos="fade-right"
            data-aos-delay="150"
            className="z-10 space-y-5"
          >
            <h2 className="text-3xl font-bold leading-tight lg:text-5xl">
              Temukan lebih banyak
              <br />
              UMKM lokal favoritmu
            </h2>

            <p className="text-lg leading-relaxed text-white/90 lg:text-xl">
              Dukung usaha lokal dan jadilah bagian dari pertumbuhan ekonomi
              daerah.
            </p>

            <Link
              href="/explore"
              data-aos="zoom-in-up"
              data-aos-delay="350"
              className="
                text-primary inline-flex rounded-2xl
                bg-white px-6 py-3 font-semibold
                transition-all duration-300
                hover:-translate-y-1
                hover:scale-105
                hover:bg-slate-100
                hover:shadow-xl
              "
            >
              Jelajahi Sekarang
            </Link>
          </div>

          <div
            data-aos="fade-left"
            data-aos-delay="250"
            data-aos-duration="1000"
            className="relative hidden justify-center lg:flex"
          >
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