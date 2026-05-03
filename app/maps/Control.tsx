import Link from "next/link";
import Image from "next/image";
import { MdMyLocation } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
export function Control() {
  return <div className="border border-slate-100 rounded-[2rem] p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] bg-white flex flex-col max-h-200">

    {
      /* Search */
    }
    <div className="flex gap-3 mb-6">
      <input type="text" placeholder="Cari UMKM atau jasa..." className="border-slate-200 rounded-xl focus:outline-primary focus:border-primary placeholder:text-slate-400 flex-1 px-4 py-3 text-sm border" />
      <button className="bg-primary rounded-xl hover:bg-primary/90 aspect-square flex items-center justify-center p-3 text-white transition-colors">
        <MdMyLocation size={20} />
      </button>
    </div>

    {
      /* Radius Slider */
    }
    <div className="mb-6">
      <div className="flex items-center justify-between mb-3 font-bold">
        <span className="text-slate-900">Radius:</span>
        <span className="text-primary">5 km</span>
      </div>
      <input className="bg-primary w-full" type="range" min={0} max={5000} name="" id="" />
    </div>

    {
      /* List */
    }
    <div className="custom-scrollbar flex flex-col flex-1 gap-5 pr-2 overflow-y-auto">
      {[{
        name: "Bang Keriting Malang",
        cat: "Makanan & Minuman",
        dist: "4.1 km",
        rating: "4.5"
      }, {
        name: "Goodlaptop Service",
        cat: "Jasa",
        dist: "3.7 km",
        rating: "4.2"
      }, {
        name: "Sego Sambel Cak UUT Suhat",
        cat: "Makanan & Minuman",
        dist: "3.8 km",
        rating: "4.8"
      }, {
        name: "Bakso Sayur UB Malang",
        cat: "Makanan & Minuman",
        dist: "3.5 km",
        rating: "4.3"
      }, {
        name: "Warung Kopi Ambyar",
        cat: "Makanan & Minuman",
        dist: "4.5 km",
        rating: "4.1"
      }].map((item, i) => <Link href={'/detail'} key={i} className="group hover:bg-slate-200 rounded-xl hover: flex items-center gap-4 p-2 transition-colors cursor-pointer">
        <div className="rounded-xl shrink-0 relative w-16 h-16 overflow-hidden">
          <Image src={`https://picsum.photos/800/800?random=${i + 50}`} fill className="object-cover" alt={item.name} />
        </div>
        <div className="flex flex-col flex-1 min-w-0">
          <h4 className="font-bold text-slate-900 text-[0.95rem] truncate mb-0.5">{item.name}</h4>
          <p className="text-slate-500 text-[0.8rem] mb-1">{item.cat}</p>
          <p className="text-primary text-[0.8rem] font-semibold flex items-center gap-1">
            <FaMapMarkerAlt size={12} /> {item.dist}
          </p>
        </div>
        <div className="text-primary h-fit shrink-0 px-2 py-1 text-xs font-bold bg-blue-100 rounded-md">
          {item.rating}
        </div>
      </Link>)}
    </div>
  </div>;
}
