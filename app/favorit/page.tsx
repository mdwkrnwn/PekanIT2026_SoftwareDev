import { Cards } from './Cards';
import Image from "next/image";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";

import { umkmData } from "@/lib/mockData";

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

      <Cards umkmData={umkmData} />

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