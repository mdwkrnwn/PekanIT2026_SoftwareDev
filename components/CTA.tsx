import { BsArrowRightCircleFill } from "react-icons/bs";
import Image from "next/image";

export function CTA() {
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="900"
      data-aos-once="true"
      className="w-[80vw] mx-auto bg-primary text-white rounded-[2rem] flex flex-row items-center px-8 py-8 md:py-16 mt-20 relative overflow-hidden shadow-lg justify-between"
    >
      <div className="w-1/3">
        <h2
          data-aos="fade-right"
          data-aos-delay="100"
          className="md:text-4xl z-10 mb-4 text-2xl font-bold"
        >
          Saatnya UMKM Naik Kelas Bersama Bakool
        </h2>

        <p
          data-aos="fade-right"
          data-aos-delay="250"
          className="md:text-xl z-10 mb-8"
        >
          Gabung sekarang dan rasakan manfaat teknologi untuk
          pertumbuhan bisnis anda
        </p>

        <button
          data-aos="zoom-in-up"
          data-aos-delay="400"
          className="hover:bg-slate-100 text-primary z-10 flex items-end gap-2 px-6 py-4 text-xl font-semibold text-center transition-colors bg-white rounded-md shadow-md"
        >
          Mulai Konsultasi Gratis
          <BsArrowRightCircleFill size={24} />
        </button>
      </div>

      <div
        data-aos="fade-left"
        data-aos-delay="300"
        data-aos-duration="1000"
      >
        <Image
          src="/UMKMnaik.png"
          width={600}
          height={286}
          alt="Decoration"
        />
      </div>
    </div>
  );
}