import { BsArrowRightCircleFill } from "react-icons/bs";
import Image from "next/image";

export function CTA() {
  return <div className="w-[66vw] mx-auto bg-primary text-white rounded-[2rem] flex flex-col items-center justify-center py-16 mt-20 mb-16 relative overflow-hidden shadow-lg">
    <Image src="https://picsum.photos/200" width={120} height={120} alt="Decoration" className="top-8 left-16 rounded-2xl -rotate-12 opacity-60 absolute" />
    <Image src="https://picsum.photos/201" width={100} height={100} alt="Decoration" className="bottom-8 right-20 rotate-15 opacity-60 absolute rounded-full" />

    <h2 className="z-10 mb-4 text-4xl font-bold text-center">Saatnya Jelajahi Lokal Bareng UFinder</h2>
    <p className="opacity-90 z-10 max-w-lg mb-8 text-xl text-center">Ayo bagikan pengalamanmu, temukan UMKM lokal terbaik, dan dukung pertumbuhan ekonomi sekitar!</p>
    <button className="hover:bg-slate-100 text-primary bg-background z-10 flex items-end gap-2 p-2 px-4 text-lg font-bold transition-colors rounded-full shadow-md">
      Daftar Sekarang <BsArrowRightCircleFill size={24} />
    </button>
  </div>;
}