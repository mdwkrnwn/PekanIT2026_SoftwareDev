import { BsArrowRightCircleFill } from "react-icons/bs";
import Image from "next/image";

export function CTA() {
  return (
    <div className="w-[66vw] mx-auto bg-primary text-white rounded-[2rem] flex flex-col items-center justify-center py-16 mt-20 mb-16 relative overflow-hidden shadow-lg">
      <Image
        src="/banner.png"
        width={140}
        height={140}
        alt="Decoration"
        className="top-8 left-16 rounded-2xl -rotate-12 absolute"
      />
      <Image
        src="/banner2.png"
        width={140}
        height={140}
        alt="Decoration"
        className="bottom-8 right-20 rotate-15 absolute rounded-full"
      />

      <h2 className="z-10 mb-4 text-4xl font-bold text-center">
        Saatnya Jelajahi Lokal Bareng UFinder
      </h2>
      <p className="opacity-90 z-10 max-w-lg mb-8 text-xl text-center">
        Ayo bagikan pengalamanmu, temukan UMKM lokal terbaik, dan dukung
        pertumbuhan ekonomi sekitar!
      </p>
      <button className="hover:bg-slate-100 text-primary bg-background z-10 flex items-end gap-2 p-2 px-4 text-lg font-bold transition-colors rounded-full shadow-md">
        Daftar Sekarang <BsArrowRightCircleFill size={24} />
      </button>
    </div>
  );
}
