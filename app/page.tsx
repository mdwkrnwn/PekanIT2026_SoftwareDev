import { FaHome, FaStore } from "react-icons/fa";
import { MdFastfood } from "react-icons/md";
import { LuHandPlatter } from "react-icons/lu";
import { RiShirtFill } from "react-icons/ri";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <>
      <h1 className="text-primary-foreground mb-4 text-3xl font-bold text-center">
        Cari UMKM keren, dukung lokal bareng!
      </h1>
      <p className="text-[1.344rem] text-center mb-8">
        Dari usaha rumahan sampai produk lokal favorit banyak orang, semua <br /> bisa kamu jelajahi dengan lebih mudah di sini.
      </p>
      <div className={cn(
        "text-primary-foreground flex justify-center items-center gap-6",
        "*:font-bold *:flex *:items-center *:gap-2 *:border *:border-primary-foreground *:border-solid *:rounded-full *:w-fit *:justify-center *:px-5 *:py-1")}>
        <div>
          <FaHome />
          Semua
        </div>
        <div>
          <MdFastfood />
          Makanan
        </div>
        <div>
          <FaStore />
          Toko Kelontong
        </div>
        <div>
          <LuHandPlatter className="fill-primary-foreground" />
          Jasa
        </div>
        <div>
          <RiShirtFill />
          Fashion
        </div>
      </div>
    </>
  );
}
