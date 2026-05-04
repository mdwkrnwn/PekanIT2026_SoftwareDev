import { cn } from "@/lib/utils";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { FaStore } from "react-icons/fa6";
import { LuHandPlatter } from "react-icons/lu";
import { MdFastfood } from "react-icons/md";
import { RiShirtFill } from "react-icons/ri";

export function Welcome() {
  return <>
    <h1 className="text-foreground md:text-3xl wrap-break-word lg:text-4xl mt-8 mb-4 text-2xl font-bold text-center">
      Cari UMKM keren, dukung lokal bareng!
    </h1>
    <p className="sm:text-[1.344rem] text-lg text-center mb-8">
      Dari usaha rumahan sampai produk lokal favorit banyak orang, semua <br /> bisa kamu jelajahi dengan lebih mudah di sini.
    </p>

    { /* Categories Filter */}
    <div className={cn(
      "text-foreground flex w-full justify-center flex-wrap items-center gap-6",
      // Child Styles
      "*:font-bold *:flex *:items-center *:gap-2 *:outline-primary-foreground *:outline-1 *:rounded-full *:w-fit *:justify-center *:px-5 *:py-2 *:cursor-pointer *:hover:bg-primary *:hover:text-background *:transition-all")}>
      <Link href={'/'} className="bg-primary text-white">
        <FaHome />
        Semua
      </Link>
      <Link href={'/explore'}>
        <MdFastfood />
        Makanan
      </Link>
      <Link href="/merchant">
        <FaStore />
        Toko Kelontong
      </Link>
      <Link href={'explore'}>
        <LuHandPlatter />
        Jasa
      </Link>
      <Link href={'/explore'}>
        <RiShirtFill />
        Fashion
      </Link>
    </div>
  </>;
}
