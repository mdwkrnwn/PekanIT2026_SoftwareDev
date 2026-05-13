import Image from "next/image";
import Link from "next/link";
import { FaCircleArrowRight } from "react-icons/fa6";

export function HeroBanner() {
  return (
    <div className="w-[86vw] bg-linear-to-t to-secondary from-secondary-foreground text-white rounded-[2rem] p-12 flex sm:flex-col lg:flex-row items-center justify-between mt-12 overflow-hidden shadow-lg gap-4 relative *:sm:w-full">
      <div className="h-115 md:block md:w-full relative z-10 hidden">
        <Image src="/home.png" fill className="object-cover" alt="Hero Background" />
      </div>
      <div className="md:w-full z-10 w-full h-full">
        <h2 className="mb-6  md:text-[2.5rem] -mt-20 text-3xl font-semibold leading-tight">Belanja Lokal, Untungnya <br /> Double Buat Kamu <br /> dan UMKM!</h2>
        <button className="hover:bg-slate-100 text-primary flex items-center justify-center gap-4 px-6 py-3 font-bold text-lg md:text-[1.25rem] transition-colors bg-white rounded-full ">
          <Link href={'/explore'}>
            Eksplor Sekarang
          </Link>
          <FaCircleArrowRight className="size-8" size={25} />
        </button>
      </div>
    </div>);
}