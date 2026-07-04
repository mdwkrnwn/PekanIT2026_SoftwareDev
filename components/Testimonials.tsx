import { cn } from "@/lib/utils";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";

const USERS = [
  {
    name: "Siti Aisyah",
    role: "Pemilik Dapoer Nona",
    comment:
      "Setelah pakai Bakool, penjualan meningkat 30% dalam 2 bulan. Dashboardnya sangat membantu untuk memahami pelanggan.",
    img: "/testi1.png",
  },
  {
    name: "Rizki Pratama",
    role: "Pemilik Kopi Berkah",
    comment:
      "AI Assistant Bakool memberi banyak insight bisnis yang sebelumnya tidak terpikirkan oleh saya.",
    img: "/testi2.png",
  },
  {
    name: "Maya Lestari",
    role: "Pemilik Jajanan",
    comment:
      "UMKM kami jadi lebih mudah ditemukan dan dipercaya pelanggan berkat review terverifikasi Bakool.",
    img: "/testi3.png",
  },
];

export function Testimonials() {
  return (
    <div className="w-[80vw] mx-auto mt-24 pb-12 text-center">
      <h3
        data-aos="fade-down"
        data-aos-duration="800"
        className="text-3xl font-semibold tracking-tight text-[#0B0F1F] dark:text-white"
      >
        Kisah Sukses Mitra Bakool
      </h3>

      <p
        data-aos="fade-up"
        data-aos-delay="150"
        data-aos-duration="800"
        className="mx-auto mt-2 max-w-2xl text-sm text-slate-500 dark:text-slate-400"
      >
        Mereka telah membuktikan transformasi digital bersama ekosistem data
        cerdas kami.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3">
        {USERS.map((user, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 150}
            data-aos-duration="800"
            data-aos-once="true"
            className="
          group
          flex
          overflow-hidden
          rounded-2xl
          border-2
          border-[#EEF0F2]
          dark:border-slate-800
          bg-[#FEFEFE]
          dark:bg-slate-900
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-xl
          dark:hover:border-[#158A62]/40
          dark:hover:bg-slate-800
        "
          >
            {/* Image */}
            <div
              className="relative h-58.75 w-41.25 shrink-0 overflow-hidden"
              data-aos="zoom-in"
              data-aos-delay={index * 150 + 150}
            >
              <Image
                src={user.img}
                alt={user.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col justify-between p-5">
              <p className="text-start text-[14px] leading-6 text-slate-700 dark:text-slate-300">
                &quot;{user.comment}&quot;
              </p>

              <div>
                <h4 className="text-start text-[17px] font-bold text-[#0B0F1F] dark:text-white">
                  {user.name}
                </h4>

                <p className="mt-1 text-start text-[13px] text-slate-500 dark:text-slate-400">
                  {user.role}
                </p>

                <div className="mt-3 flex items-center gap-1">
                  <span className="mr-2 text-[15px] font-bold text-[#0B0F1F] dark:text-white">
                    5.0
                  </span>

                  {Array.from({ length: 5 }).map((_, i) => (
                    <AiFillStar key={i} size={15} className="text-[#FFB800]" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-duration="800"
        className="
      mt-10
      inline-flex
      items-center
      gap-2
      rounded-lg
      border
      border-[#158A62]
      px-6
      py-2
      font-bold
      text-[#158A62]
      transition-all
      duration-300
      hover:bg-[#158A62]
      hover:text-white
      dark:border-[#158A62]
      dark:bg-transparent
      dark:text-emerald-400
      dark:hover:bg-[#158A62]
      dark:hover:text-white
    "
      >
        Lihat semua testimoni
        <BsArrowRight />
      </button>
    </div>
  );
}
