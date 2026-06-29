import { cn } from "@/lib/utils";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";

const USERS = [
  {
    name: "Om Shanti",
    comment: "Sistem monitoring penjualan membantu UMKM memetakan area bisnis yang potensial serta efisiensi manajemen produk digital.",
    img: "https://picsum.photos/176/205?random=1"
  },
  {
    name: "Budi Pratama",
    comment: "Sistem keuangan otomatis sangat transparan membantu memangkas waktu manajemen pembukuan setiap bulan.",
    img: "https://picsum.photos/176/205?random=2"
  },
  {
    name: "Nasya Lestari",
    comment: "Dashboard analitik mudah dipahami bahkan oleh pemula. Analisis performa sangat mendalam.",
    img: "https://picsum.photos/176/205?random=3"
  },
];

export function Testimonials() {
  return (
    <div className="w-[80vw] mx-auto mt-24 text-center pb-12">
      <h3 className="text-foreground text-3xl font-bold tracking-tight">Kisah Sukses Mitra Bakool</h3>
      <p className="text-slate-500 max-w-xl mx-auto mt-2 text-sm">
        Mereka telah membuktikan transformasi digital bersama ekosistem data cerdas kami.
      </p>

      {/* Grid Layout Configuration matching Home.jpg */}
      <div className="2xl:grid-cols-3 md:grid-cols-2 grid grid-cols-1 gap-6 mt-12 text-left">
        {USERS.map((user, i) => (
          <div key={i} className={cn("border-border max-w-screen rounded-2xl bg-accent flex items-start gap-4 p-4 border shadow-lg 2xl:last:col-span-1",
            USERS.length % 2 == 1 && "last:col-span-2"
          )}>
            <div className="rounded-xl shrink-0 w-44 relative h-full overflow-hidden">
              <Image src={user.img} fill className="object-cover h-full" alt={user.name} />
            </div>

            <div className="flex flex-col h-full gap-2">
              <p className="text-foreground/80 grow font-medium leading-relaxed">
                &quot;{user.comment}&quot;
              </p>

              <div>
                <h4 className="text-foreground/80 font-bold">{user.name}</h4>
                <div className="flex text-amber-400 gap-0.5 mt-0.5 items-center">
                  <span className="text-foreground/70 mr-1 font-bold">5.0</span>
                  <AiFillStar size={12} /><AiFillStar size={12} /><AiFillStar size={12} /><AiFillStar size={12} /><AiFillStar size={12} />
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