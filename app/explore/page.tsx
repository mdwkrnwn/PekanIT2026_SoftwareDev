import Image from "next/image";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  FaLocationDot,
  FaStar,
  FaStore,
} from "react-icons/fa6";
import { FaCoffee, FaGamepad, FaRegHeart, FaSearch } from "react-icons/fa";

import {
  MdFastfood,
  MdOutlineMiscellaneousServices,
} from "react-icons/md";
import { RiShirtFill } from "react-icons/ri";
import { cn } from "@/lib/utils";
import { CiHeart } from "react-icons/ci";
import { categories, categoryBadgeColor, umkmData } from "@/lib/mockData";

export default function ExplorePage() {
  return (
    <>
      <div className="mb-7 flex items-center gap-3">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbSeparator size={25} />
              <BreadcrumbLink asChild>
                <Link className="text-[1.375rem] font-semibold" href="/">Kembali</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator size={25} />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-[1.375rem] font-semibold" >Explore</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <section>
        <div className="relative mb-6">
          <FaSearch
            size={22}
            className="text-muted-foreground absolute top-1/2 right-6 -translate-y-1/2"
          />
          <input
            type="text"
            placeholder="Cari UMKM, produk, kategori......"
            className="border-2 focus:ring-primary h-16 w-full rounded-full border-border bg-transparent px-6 pr-16 text-lg focus:ring-2"
          />
        </div>

        <div className="mb-10 flex flex-wrap items-center gap-6.5">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <button
                key={category.name}
                className={cn(
                  "border-primary text-primary hover:bg-primary hover:text-white flex items-center text-lg gap-2 rounded-full border px-5 py-2.5 font-semibold transition-all",
                  category.active && "bg-primary text-white"
                )}
              >
                <Icon size={25} />
                {category.name}
              </button>
            );
          })}
        </div>
      </section>

      <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
        {umkmData.map((item, i) => (
          <Link key={i} href={`/${item.title.replaceAll(" ", "-")}`}>
            <div
              key={item.title}
              className="border-border overflow-hidden rounded-[1.75rem] border bg-background transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />

                <button className="absolute top-4 right-4 flex size-9 items-center justify-center rounded-full hover:bg-foreground hover:cursor-pointer hover:*:stroke-background bg-background">
                  <FaRegHeart size={22} className="stroke-2 stroke-foreground" />
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

                <p className="text-muted-foreground mb-5 line-clamp-2 text-sm leading-relaxed">
                  {item.description}
                </p>

                <div className="text-muted-foreground mb-4 flex items-center gap-2 text-sm">
                  <FaLocationDot size={14} />
                  <span>{item.location}</span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1 text-yellow-500">
                    <FaStar size={15} />
                    <span className="font-semibold text-slate-700">
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
        ))}
      </section>

      <section className="relative mt-20 bg-primary overflow-hidden rounded-[2rem] bg-linear-to-r from-primary to-primary-foreground text-white h-fit">
        <div className="grid items-center grid-cols-2 px-16 h-full justify-between">
          <div className="z-10 w-[82vw] grid grid-rows-3 gap-4 items-center-safe align-middle">
            <h2 className="text-5xl font-semibold">
              Temukan lebih banyak <br /> UMKM lokal favoritmu
            </h2>

            <p className="text-3xl text-white">
              Dukung usaha lokal dan jadilah bagian dari <br /> pertumbuhan
              ekonomi daerah.
            </p>

            <button className="text-primary-foreground h-fit w-fit rounded-2xl bg-muted p-7 py-3.5 text-2xl font-bold transition-colors hover:bg-slate-100">
              Jelajahi Sekarang
            </button>
          </div>

          <div className="relative flex justify-center">
            <Image src={"/Explore.png"} alt="Explore" width={1106} height={738} className="h-115 w-auto" />
          </div>
        </div>
      </section>
    </>
  );
}