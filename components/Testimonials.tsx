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
    <div className="w-[80vw] mx-auto mt-24 text-center pb-12">
      <h3 className="text-foreground text-3xl font-semibold tracking-tight">
        Kisah Sukses Mitra Bakool
      </h3>
      <p className="text-slate-500 max-w-2xl mx-auto mt-2 text-sm">
        Mereka telah membuktikan transformasi digital bersama ekosistem data
        cerdas kami.
      </p>

      {/* Grid Layout Configuration matching Home.jpg */}
      <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3">
        {USERS.map((user, index) => (
          <div
            key={index}
            className="flex overflow-hidden rounded-2xl border border-[#EEF0F2] bg-white"
          >
            {/* Image */}
            <div className="relative h-[235px] w-[165px] shrink-0">
              <Image
                src={user.img}
                alt={user.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col justify-between p-5">
              <p className="text-[14px] text-start leading-6 text-[#374151]">
                "{user.comment}"
              </p>

              <div className="">
                <h4 className="text-[17px] text-start font-bold text-[#0B0F1F]">
                  {user.name}
                </h4>

                <p className="mt-1 text-[13px] text-start text-[#98A2B3]">{user.role}</p>

                <div className="mt-3 flex items-center gap-1">
                  <span className="mr-2 text-[15px] font-bold">5.0</span>

                  {Array.from({ length: 5 }).map((_, i) => (
                    <AiFillStar key={i} size={15} className="text-[#FFB800]" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="border-[#0C7C61] hover:bg-[#0C7C61] hover:text-white inline-flex items-center gap-2 px-6 py-2 text-[#0C7C61] mt-10 font-bold transition-colors border rounded-lg shadow-xs">
        Lihat semua testimoni <BsArrowRight />
      </button>
    </div>
  );
}
