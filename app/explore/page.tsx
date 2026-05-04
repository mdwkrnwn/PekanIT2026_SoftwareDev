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
        <div className="grid items-center justify-between h-fit lg:h-115 md:grid-cols-2 md:px-16 p-6">
          <div className="w-fit  gap-4 md:items-center z-10 flex flex-col md:grid md:grid-rows-3 items-start align-middle *:wrap-break-word">
            <h2 className=" text-2xl md:text-4xl font-semibold leading-tight">
              Temukan lebih banyak UMKM lokal favoritmu
            </h2>

            <p className="text-xl md:text-2xl text-white">
              Dukung usaha lokal dan jadilah bagian dari pertumbuhan
              ekonomi daerah.
            </p>

            <Link href={'/explore'} className="text-primary-foreground h-fit w-fit rounded-2xl bg-background cursor-pointer p-7 py-3.5 md:text-xl font-bold transition-colors hover:bg-slate-100">
              Jelajahi Sekarang
            </Link>
          </div>

          <div className="hidden md:flex relative justify-center h-full w-auto ">
            <Image src={"/Explore.png"} alt="Explore" fill className="object-cover" />
          </div>
        </div>
      </section>
    </div>
  );
}