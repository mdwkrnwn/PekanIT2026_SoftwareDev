import { cn } from "@/lib/utils";
import { AiFillStar } from "react-icons/ai";
import { BsArrowRightCircleFill } from "react-icons/bs";
import animation from "./page.module.css";
import Image from "next/image";



export function Testimonials() {
  return <div className="bg-[linear-gradient(180deg,#1974FF_0%,#0F4599_100%)] md:py-16 flex flex-row justify-center w-screen px-5 py-8 mt-16 overflow-hidden text-white">
    <div className="w-full md:w-[80vw] flex flex-col justify-center md:flex-row gap-4 items-center lg:*:w-1/2 *:w-full">
      <div className="md:w-[35%]">
        <h3 className="mb-2 wrap-break-word text-[clamp(1.5rem,3.125rem,3vw)] font-bold">Kata Mereka Tentang <br /> UFinder 👀</h3>
        <p className="opacity-90 font-normal md:mb-8 wrap-break-word text-[clamp(1.25rem,2rem,2vw)]">Pengalaman seru dari pengguna yang sudah dukung UMKM lokal.</p>
        <button className="hover:bg-slate-100 text-primary md:flex items-center hidden gap-2 px-6 py-3 font-bold transition-colors bg-white rounded-full">
          Lihat Semua Ulasan <BsArrowRightCircleFill className="md:block hidden" size={20} />
        </button>
      </div>
      <div className={cn("md:w-[65%] flex flex-col gap-6",
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
      <button className="hover:bg-slate-100 text-primary-foreground md:hidden flex items-center justify-between gap-2 px-6 py-3 font-bold transition-colors bg-white rounded-full">
        Lihat Semua Ulasan <BsArrowRightCircleFill size={20} />
      </button>
    </div>
  </div >
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