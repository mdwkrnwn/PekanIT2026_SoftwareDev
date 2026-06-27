import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

const USERS = [
  {
    name: "Om Shanti",
    comment: "Sistem monitoring penjualan membantu UMKM memetakan area bisnis yang potensial serta efisiensi manajemen produk digital.",
    img: "https://picsum.photos/150?random=1"
  },
  {
    name: "Budi Pratama",
    comment: "Sistem keuangan otomatis sangat transparan membantu memangkas waktu manajemen pembukuan setiap bulan.",
    img: "https://picsum.photos/150?random=2"
  },
  {
    name: "Nasya Lestari",
    comment: "Dashboard analitik mudah dipahami bahkan oleh pemula. Analisis performa sangat mendalam.",
    img: "https://picsum.photos/150?random=3"
  },
];

export function Testimonials() {
  return (
    <div className="w-[80vw] mx-auto mt-24 text-center pb-12">
      <h3 className="text-slate-900 text-3xl font-bold tracking-tight">Kisah Sukses Mitra Bakool</h3>
      <p className="text-slate-500 max-w-xl mx-auto mt-2 text-sm">
        Mereka telah membuktikan transformasi digital bersama ekosistem data cerdas kami.
      </p>

      {/* Grid Layout Configuration matching Home.jpg */}
      <div className="md:grid-cols-3 grid grid-cols-1 gap-6 mt-12 text-left">
        {USERS.map((user, i) => (
          <div key={i} className="border-slate-100 rounded-2xl bg-slate-50/50 flex flex-row items-start gap-4 p-4 border shadow-xs">
            <div className="rounded-xl shrink-0 relative w-20 h-20 overflow-hidden">
              <Image src={user.img} fill className="grayscale object-cover" alt={user.name} />
            </div>

            <div className="flex flex-col flex-1 gap-2">
              <p className="text-slate-700 text-xs font-medium leading-relaxed">
                &quot;{user.comment}&quot;
              </p>

              <div>
                <h4 className="text-slate-900 text-xs font-bold">{user.name}</h4>
                <div className="flex text-amber-400 gap-0.5 mt-0.5 items-center">
                  <span className="text-slate-900 mr-1 text-xs font-bold">5.0</span>
                  <AiFillStar size={12} /><AiFillStar size={12} /><AiFillStar size={12} /><AiFillStar size={12} /><AiFillStar size={12} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="border-slate-300 text-slate-700 hover:bg-slate-50 inline-flex items-center gap-2 px-6 py-2 mt-10 text-xs font-bold transition-colors border rounded-lg shadow-xs">
        Lihat semua testimoni ➔
      </button>
    </div>
  );
}