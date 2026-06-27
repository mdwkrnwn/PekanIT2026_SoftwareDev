import { BsArrowRightCircleFill } from "react-icons/bs";
import Image from "next/image";

export function CTA() {
  return (
    <div className="w-[80vw] mx-auto bg-primary text-white rounded-[2rem] flex flex-row items-center px-8 py-8 md:py-16 mt-20 relative overflow-hidden shadow-lg justify-between">
      <div className="w-1/3 *:leading-[-2]">
        <h2 className="md:text-4xl z-10 mb-4 text-2xl font-bold">
          Saatnya UMKM Naik Kelas Bersama Bakool
        </h2>
        <p className="md:text-xl z-10 mb-8">
          Gabung sekarang dan rasakan manfaat teknologi untuk pertumbuhan bisnis anda
        </p>
        <button className="hover:bg-slate-100 text-primary z-10 flex items-end gap-2 px-6 py-4 text-xl font-semibold text-center transition-colors bg-white rounded-md shadow-md">
          Mulai Konsultasi Gratis <BsArrowRightCircleFill size={24} />
        </button>
      </div>
      <div>
        <Image
          src="/UMKMnaik.png"
          width={600}
          height={286}
          alt="Decoration"
          className=""
        />
      </div>
    </div>
  );
}
