import { Cards } from './Cards';
import Image from "next/image";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { categories, umkmData } from "@/lib/mockData";

export default function ExplorePage() {
  return (
    <div className="w-[86vw]">
      <section>
        <div className="relative mb-6">
          <FaSearch
            size={22}
            className="text-muted-foreground top-1/2 right-6 absolute -translate-y-1/2"
          />
          <input
            type="text"
            placeholder="Cari UMKM, produk, kategori......"
            className="focus:ring-primary border-border focus:ring-2 w-full h-16 px-6 pr-16 text-lg bg-transparent border-2 rounded-full"
          />
        </div>

        <div className="mb-10 flex flex-wrap items-center gap-6.5">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <button
                key={category.name}
                className={cn(
                  "border-primary text-primary hover:bg-primary hover:text-white flex items-center text-lg gap-2 rounded-full border px-5 py-2.5 font-semibold transition-all cursor-pointer",
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

      <Cards umkmData={umkmData} />

      <section className="relative mt-20 bg-primary overflow-hidden rounded-[2rem] bg-linear-to-r from-primary to-primary-foreground text-white h-fit">
        <div className="grid items-center justify-between h-full grid-cols-2 px-16">
          <div className="z-10 w-[82vw] grid grid-rows-3 gap-4 items-center-safe align-middle">
            <h2 className="text-4xl font-semibold leading-tight">
              Temukan lebih banyak <br /> UMKM lokal favoritmu
            </h2>

            <p className="text-2xl text-white">
              Dukung usaha lokal dan jadilah bagian dari <br /> pertumbuhan
              ekonomi daerah.
            </p>

            <Link href={'/explore'} className="text-primary-foreground h-fit w-fit rounded-2xl bg-background cursor-pointer p-7 py-3.5 text-xl font-bold transition-colors hover:bg-slate-100">
              Jelajahi Sekarang
            </Link>
          </div>

          <div className="relative flex justify-center">
            <Image src={"/Explore.png"} alt="Explore" width={1106} height={738} className="h-115 w-auto" />
          </div>
        </div>
      </section>
    </div>
  );
}