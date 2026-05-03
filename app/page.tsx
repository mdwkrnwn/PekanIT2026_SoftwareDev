import animation from "./page.module.css";
import { FaHome, FaStore, FaRegClock } from "react-icons/fa";
import { MdFastfood } from "react-icons/md";
import { LuHandPlatter, LuMousePointer2 } from "react-icons/lu";
import { RiShirtFill } from "react-icons/ri";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FaCircleArrowRight } from "react-icons/fa6";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-foreground mt-8 mb-4 text-4xl font-bold text-center">
        Cari UMKM keren, dukung lokal bareng!
      </h1>
      <p className="text-[1.344rem] text-center mb-8">
        Dari usaha rumahan sampai produk lokal favorit banyak orang, semua <br /> bisa kamu jelajahi dengan lebih mudah di sini.
      </p>

      {/* Categories Filter */}
      <div className={cn(
        "text-foreground flex justify-center items-center gap-6",
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

      {/* Hero Banner */}
      <div className="w-[86vw] mx-auto bg-linear-to-t to-secondary from-secondary-foreground text-white rounded-[2rem] p-12 flex items-center justify-between mt-12 overflow-hidden shadow-lg gap-4 relative">
        <div className="z-10 w-1/2">
          <Image src="https://picsum.photos/600/400" width={600} height={400} alt="Hero Background" />
        </div>
        <div className="z-10 w-1/2">
          <h2 className="mb-4 text-[2.5rem] font-semibold leading-snug">Belanja Lokal, Untungnya Double Buat Kamu dan UMKM!</h2>
          <button className="hover:bg-slate-100 text-primary-foreground flex items-center justify-center gap-4 px-6 py-3 font-bold text-[1.25rem] transition-colors bg-white rounded-full ">
            <Link href={'/explore'}>
              Eksplor Sekarang
            </Link>
            <FaCircleArrowRight size={25} />
          </button>
        </div>
      </div>

      {/* Buat Kamu Nih */}
      <div className="w-[86vw] mx-auto mt-16">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h3 className="text-primary-foreground text-[1.375rem] font-bold">Buat Kamu nih 👀</h3>
            <p className="text-[1.063rem] mt-1">UMKM pilihan yang mungkin kamu suka.</p>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-6">
          {['Kafe', 'Jajanan', 'Hobi', 'Toko Kelontong'].map((cat, i) => (
            <Link href={'/explore'} key={i} className="rounded-2xl group relative h-48 overflow-hidden cursor-pointer">
              <Image src={`https://picsum.photos/400/300?random=${i}`} fill className="group-hover:scale-115 object-cover transition-transform duration-300" alt={cat} />
              <div className="bg-linear-to-t from-primary/80 via-primary/10 to-transparent group-hover:from-primary group-hover:via-primary/40 absolute inset-0"></div>
              <span className="bottom-4 left-4 absolute text-xl font-bold text-white">{cat}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Trending Section (Vertical Marquee) */}
      <div className="w-[86vw] mx-auto mt-16">
        <div className="flex items-end justify-between">
          <div>
            <h3 className="text-primary-foreground text-[1.375rem] font-bold">Hidden Gem Sekitarmu</h3>
            <p className="text-[1.063rem] mt-1">Temuin hidden gem deket rumah kamu</p>
          </div>
          <Link href={'/maps'} className="hover:bg-blue-50 text-primary border-primary flex items-center gap-2 px-5 py-2 font-bold transition-colors border-2 rounded-full">
            <span className="bg-primary p-1 rounded-full">
              <LuMousePointer2 className="scale-x-[-1] fill-background" strokeWidth={0} size={16} />
            </span> Lokasi Saya
          </Link>
        </div>
        <div className="w-[86vw] mx-auto bg-primary text-white rounded-[2rem] px-12 flex mt-8 h-92 overflow-hidden relative shadow-lg" >
          <div className="z-10 flex flex-col justify-center w-1/2 pr-10">
            <h3 className="mb-3 text-[3.125rem] wrap-break-word font-bold">Yang Lagi Naik Daun Nih 👀</h3>
            <p className="opacity-90 mb-8 text-xl">Cari produk lokal yang lagi viral dibahas banyak orang.</p>
            <Link href={'/explore'} className="w-fit hover:bg-slate-100 text-primary-foreground flex items-center gap-2 px-6 py-3 font-bold transition-colors bg-white rounded-full">
              Eksplor Sekarang <BsArrowRightCircleFill size={20} />
            </Link>
          </div>
          <div className={cn("relative z-0 flex w-1/2 gap-6 overflow-hidden", "*:w-1/2")} >
            {/* Column 1: Scrolling Up */}
            <div style={{ WebkitMaskImage: 'linear-gradient(to top, transparent, black 10%, black 90%, transparent)' }}>
              <div className={cn(animation['animate_scroll_y_up'], "flex flex-col gap-6 pb-6")}>
                {[...Array(8)].map((_, i) => (
                  <div key={`up-${i}`} className="rounded-2xl shrink-0 relative h-48 overflow-hidden shadow-md">
                    <Image src={`https://picsum.photos/300/200?random=${i + 10}`} fill className="object-cover" alt="Trending Item" />
                  </div>
                ))}
              </div>
              <div className={cn(animation['animate_scroll_y_up'], "flex flex-col gap-6 pb-6")}>
                {[...Array(8)].map((_, i) => (
                  <div key={`up-${i}`} className="rounded-2xl shrink-0 relative h-48 overflow-hidden shadow-md">
                    <Image src={`https://picsum.photos/300/200?random=${i + 10}`} fill className="object-cover" alt="Trending Item" />
                  </div>
                ))}
              </div>
            </div>
            {/* Column 2: Scrolling Down */}
            <div className="mask-[linear-gradient(to_top,transparent,black_10%,black_90%,transparent)]">
              <div className={cn(animation['animate_scroll_y_down'], "flex flex-col gap-6 pb-6")}>
                {[...Array(4)].map((_, i) => (
                  <div key={`down-${i}`} className="rounded-2xl shrink-0 relative h-48 overflow-hidden shadow-md">
                    <Image src={`https://picsum.photos/300/200?random=${i + 20}`} fill className="object-cover" alt="Trending Item" />
                  </div>
                ))}
              </div>
              <div className={cn(animation['animate_scroll_y_down'], "flex flex-col gap-6 pb-6")}>
                {[...Array(4)].map((_, i) => (
                  <div key={`down-${i}`} className="rounded-2xl shrink-0 relative h-48 overflow-hidden shadow-md">
                    <Image src={`https://picsum.photos/300/200?random=${i + 20}`} fill className="object-cover" alt="Trending Item" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div >
      </div >


      {/* Testimonials (Horizontal Marquee) */}
      <div className="bg-primary w-screen py-16 mt-16 overflow-hidden text-white" >
        <div className="w-[86vw] mx-auto flex items-center">
          <div className="w-[35%]">
            <h3 className="mb-4 text-[3.125rem] font-bold">Kata Mereka Tentang UFinder 👀</h3>
            <p className="opacity-90 mb-8 text-[1.25rem]">Pengalaman seru dari pengguna yang sudah <br /> dukung UMKM lokal.</p>
            <button className="hover:bg-slate-100 text-primary-foreground flex items-center gap-2 px-6 py-3 font-bold transition-colors bg-white rounded-full">
              Lihat Semua Ulasan <BsArrowRightCircleFill size={20} />
            </button>
          </div>
          <div className={cn("w-[65%] flex flex-col gap-6",
            "*:flex *:flex-row")} style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)' }}>
            {/* Row 1: Scrolling Left */}
            <div>
              <div className={cn(animation.animate_scroll_x_left, "w-max flex gap-6 pr-6")}>
                {[...Array(5)].map((_, i) => (
                  <TestimonialCard key={`l-${i}`} name="Budi Santoso" text="Aplikasi ini sangat membantu saya menemukan supplier bahan baku lokal dengan harga terbaik dan kualitas juara." />
                ))}
              </div>
              <div className={cn(animation.animate_scroll_x_left, "w-max flex gap-6 pr-6")}>
                {[...Array(5)].map((_, i) => (
                  <TestimonialCard key={`l-${i}`} name="Budi Santoso" text="Aplikasi ini sangat membantu saya menemukan supplier bahan baku lokal dengan harga terbaik dan kualitas juara." />
                ))}
              </div>
            </div>
            {/* Row 2: Scrolling Right */}
            <div>
              <div className={cn(animation.animate_scroll_x_right, "w-max flex gap-6 pr-6")}>
                {[...Array(5)].map((_, i) => (
                  <TestimonialCard key={`r-${i}`} name="Siti Aminah" text="Berkat UFinder, jangkauan pasar toko kue saya jadi lebih luas. Fitur ulasannya sangat transparan." />
                ))}
              </div>
              <div className={cn(animation.animate_scroll_x_right, "w-max flex gap-6 pr-6")}>
                {[...Array(5)].map((_, i) => (
                  <TestimonialCard key={`r-${i}`} name="Siti Aminah" text="Berkat UFinder, jangkauan pasar toko kue saya jadi lebih luas. Fitur ulasannya sangat transparan." />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div >

      {/* Articles & Tips */}
      <div className="w-[86vw] mx-auto mt-16" >
        <h3 className="text-primary mb-8 text-3xl font-bold">Cerita & Tips Pilihan</h3>
        <div className="grid grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <Link href={'/article'} key={i} className="border-slate-200 rounded-2xl hover:shadow-lg group flex flex-col overflow-hidden transition-shadow bg-white border">
              <div className="relative h-56 overflow-hidden">
                <Image src={`https://picsum.photos/400/300?random=${i + 30}`} fill className="group-hover:scale-110 object-cover transition-all" alt="Article Cover" />
                <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
                  {i % 2 === 0 ? 'Tips' : 'Cerita'}
                </span>
              </div>
              <div className="flex flex-col flex-1 p-6">
                <h4 className="line-clamp-2 text-slate-800 mb-3 text-xl font-bold">Cara Efektif Membangun Branding Bisnis Lokal di Era Digital</h4>
                <p className="text-slate-600 line-clamp-3 mb-6 text-sm leading-relaxed">
                  Temukan strategi terbaik yang bisa kamu terapkan untuk mengembangkan usahamu agar semakin sukses. Pelajari langkah-langkah praktis dari pakar industri.
                </p>
                <div className="text-slate-500 border-slate-100 flex items-center justify-between pt-4 mt-auto text-xs font-medium border-t">
                  <span>12 Okt 2023</span>
                  <span className="flex items-center gap-1.5"><FaRegClock size={14} /> 5 min read</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div >

      {/* Bottom CTA */}
      <div className="w-[86vw] mx-auto bg-primary text-white rounded-[2rem] flex flex-col items-center justify-center py-16 mt-20 mb-16 relative overflow-hidden shadow-lg" >
        <Image src="https://picsum.photos/200" width={120} height={120} alt="Decoration" className="top-8 left-16 rounded-2xl -rotate-12 opacity-60 absolute" />
        <Image src="https://picsum.photos/201" width={100} height={100} alt="Decoration" className="bottom-8 right-20 rotate-15 opacity-60 absolute rounded-full" />

        <h2 className="z-10 mb-4 text-4xl font-bold text-center">Saatnya Jelajahi Lokal Bareng UFinder</h2>
        <p className="opacity-90 z-10 max-w-lg mb-8 text-xl text-center">Ayo bagikan pengalamanmu, temukan UMKM lokal terbaik, dan dukung pertumbuhan ekonomi sekitar!</p>
        <button className="hover:bg-slate-100 text-primary bg-background z-10 flex items-end gap-2 p-2 px-4 text-lg font-bold transition-colors rounded-full shadow-md">
          Daftar Sekarang <BsArrowRightCircleFill size={24} />
        </button>
      </div >
    </>
  );
}

function TestimonialCard({ name, text }: { name: string, text: string }) {
  return (
    <div className="text-slate-800 rounded-2xl w-80 shrink-0 flex flex-col gap-3 p-5 bg-white shadow-md">
      <div className="flex items-center gap-4">
        {/* eslint-disable-next-line react-hooks/purity */}
        <Image src={`https://picsum.photos/50?random=${Math.random()}`} width={48} height={48} className="object-cover rounded-full" alt="User Avatar" />
        <div>
          <h4 className="text-sm font-bold">{name}</h4>
          <div className="flex text-yellow-400 text-xs mt-0.5">
            <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
          </div>
        </div>
        <span className="ml-auto text-[10px] text-blue-600 font-bold bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full whitespace-nowrap">
          UMKM Kuliner
        </span>
      </div>
      <p className="text-slate-600 text-sm italic leading-relaxed">&quot;{text}&quot;</p>
    </div>
  );
}