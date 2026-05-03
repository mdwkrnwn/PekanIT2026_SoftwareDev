import Image from "next/image";
import { FaPlus, FaMinus } from "react-icons/fa";
export function MapsArea({ }) {
  return <div className="relative border border-slate-100 rounded-[2rem] overflow-hidden bg-slate-100 h-200 shadow-[0_4px_20px_-4px_black]">
    <Image src="https://picsum.photos/1200/800?grayscale&blur=2" fill className="opacity-80 object-cover" alt="Map Area" />

    {
      /* Overlay Info Badge */
    }
    <div className="absolute top-6 left-6 bg-white px-4 py-2.5 rounded-full shadow-md font-bold text-sm flex items-center gap-2 z-10 border border-slate-100">
      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
      <span className="text-slate-600">Radius: 5 km</span>
      <span className="text-slate-300">|</span>
      <span className="text-slate-900">15 UMKM ditemukan</span>
    </div>

    {
      /* Map Controls */
    }
    <div className="bottom-6 right-6 border-slate-100 absolute z-10 flex flex-col overflow-hidden bg-white border rounded-lg shadow-md">
      <button className="hover:bg-slate-50 border-slate-100 text-slate-600 p-3 transition-colors border-b">
        <FaPlus size={14} />
      </button>
      <button className="hover:bg-slate-50 text-slate-600 p-3 transition-colors">
        <FaMinus size={14} />
      </button>
    </div>
  </div>;
}
