import Image from "next/image";
import Link from "next/link";
import {
  FaLocationDot,
  FaStar,
} from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";

import { cn } from "@/lib/utils";
import { categoryBadgeColor, umkmData } from "@/lib/mockData";

export default function FavoritePage() {
  return (
    <div className="w-[86vw] -mt-10">
      <section className="flex flex-row items-center justify-between">
        <div className="flex flex-row gap-4">
          <FaHeart size={90} className="fill-primary" />
          <div>
            <h1 className="pb-2 text-4xl font-semibold">UMKM Favoritmu</h1>
            <p className="text-xl">
              Temukan dan kelola UMKM yang kamu simpan <br />
              sebagai favorit.
            </p>
          </div>
        </div>
        <div>
          <Image src={"/Favorite.png"} width={450} height={300} alt="Favorite Image" />
        </div>
      </section>

      <section className="sm:grid-cols-2 xl:grid-cols-4 grid grid-cols-1 gap-8">
        {umkmData.map((item, i) => (
          <Link key={i} href={`/${item.title.replaceAll(" ", "-")}`}>
            <article
              key={item.title}
              className="border-border overflow-hidden rounded-[1.75rem] border bg-background transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="hover:scale-105 object-cover transition-transform duration-300"
                />

                <button className="absolute top-4 right-4 flex size-9 items-center justify-center rounded-full hover:bg-foreground cursor-pointer hover:*:stroke-background bg-background">
                  <FaHeart size={22} className="stroke-primary fill-primary stroke-2" />
                </button>

                <span
                  className={cn(
                    "absolute bottom-4 left-4 rounded-full px-3 py-1 text-xs font-bold text-white",
                    categoryBadgeColor[item.category]
                  )}
                >
                  {item.category}
                </span>
              </div>

              <div className="p-5">
                <h2 className="text-primary-foreground mb-2 text-[1.45rem] font-bold">
                  {item.title}
                </h2>

                <p className="text-muted-foreground line-clamp-2 mb-5 text-sm leading-relaxed">
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
                    <FaLocationDot size={13} />
                    <span>{item.distance}</span>
                  </div>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </section>

      <section className="relative mt-20 bg-primary overflow-hidden rounded-[2rem] bg-linear-to-r from-[#8EAFE5] to-[#E5EEFD] text-white h-fit">
        <div className="grid items-center justify-between h-full grid-cols-2 px-16">
          <div className="items-center-safe z-10 grid grid-rows-3 gap-4 align-middle">
            <h2 className="text-primary text-5xl font-semibold">
              Belum menemukan favorit lain?
            </h2>

            <p className="text-foreground wrap-break-word text-3xl">
              Jelajahi lebih banyak UMKM lokal dan temukan produk
              serta layan terbaik di sekitarmu,
            </p>

            <Link href={'/explore'} className="text-white hover:text-primary-foreground cursor-pointer h-fit w-fit rounded-2xl bg-primary p-7 py-3.5 text-2xl font-bold transition-colors hover:bg-slate-100">
              Jelajahi Sekarang
            </Link>
          </div>

          <div className="relative flex justify-center">
            <Image src={"/Favourite2.png"} alt="Explore" width={1106} height={738} className="h-115 w-auto" />
          </div>
        </div>
      </section>
    </div>
  );
}