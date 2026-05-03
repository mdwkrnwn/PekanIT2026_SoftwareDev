import Image from "next/image";
import Link from "next/link";
import { FaChevronLeft, FaMapMarkerAlt, FaPlus, FaMinus } from "react-icons/fa";
import { BsMap, BsGrid } from "react-icons/bs";
import { MdMyLocation } from "react-icons/md";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function Maps() {
  return (
    <div className="flex flex-col w-[86vw] pt-4">
      <Breadcrumb className="mb-9">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbSeparator size={25}>
              <FaChevronLeft size={20} className="text-slate-400 mr-2" />
            </BreadcrumbSeparator>
            <BreadcrumbLink asChild>
              <Link className="text-[1.375rem] font-semibold text-slate-400 hover:text-slate-800" href="/">Kembali</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <FaChevronLeft size={20} className="text-slate-400 mx-2" />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage className="text-[1.375rem] font-bold text-slate-900">Maps</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex gap-4 mb-8">
        <button className="flex text-lg items-center gap-2 px-6 py-2.5 border border-primary text-background bg-primary rounded-xl font-semibold transition-colors">
          <BsMap size={25} /> Map View
        </button>
        <button className="flex text-lg items-center gap-2 px-6 py-2.5 border border-border text-foreground hover:bg-primary cursor-pointer hover:text-background rounded-xl font-semibold transition-colors">
          <BsGrid size={25} /> Grid View
        </button>
      </div>

      <div className="grid grid-cols-[380px_1fr] gap-6 mb-12">
        {/* Sidebar Controls & List */}
        <div className="border border-slate-100 rounded-[2rem] p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] bg-white flex flex-col max-h-200">

          {/* Search */}
          <div className="flex gap-3 mb-6">
            <input
              type="text"
              placeholder="Cari UMKM atau jasa..."
              className="border-slate-200 rounded-xl focus:outline-primary focus:border-primary placeholder:text-slate-400 flex-1 px-4 py-3 text-sm border"
            />
            <button className="bg-primary rounded-xl hover:bg-primary/90 aspect-square flex items-center justify-center p-3 text-white transition-colors">
              <MdMyLocation size={20} />
            </button>
          </div>

          {/* Radius Slider */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3 font-bold">
              <span className="text-slate-900">Radius:</span>
              <span className="text-primary">5 km</span>
            </div>
            <input className="bg-primary w-full" type="range" min={0} max={5000} name="" id="" />
          </div>

          {/* List */}
          <div className="custom-scrollbar flex flex-col flex-1 gap-5 pr-2 overflow-y-auto">
            {[
              { name: "Bang Keriting Malang", cat: "Makanan & Minuman", dist: "4.1 km", rating: "4.5" },
              { name: "Goodlaptop Service", cat: "Jasa", dist: "3.7 km", rating: "4.2" },
              { name: "Sego Sambel Cak UUT Suhat", cat: "Makanan & Minuman", dist: "3.8 km", rating: "4.8" },
              { name: "Bakso Sayur UB Malang", cat: "Makanan & Minuman", dist: "3.5 km", rating: "4.3" },
              { name: "Warung Kopi Ambyar", cat: "Makanan & Minuman", dist: "4.5 km", rating: "4.1" }
            ].map((item, i) => (
              <Link href={'/detail'} key={i} className="group hover:bg-slate-200 rounded-xl hover: flex items-center gap-4 p-2 transition-colors cursor-pointer">
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
              </Link>
            ))}
          </div>
        </div>

        {/* Map Area */}
        <div className="relative border border-slate-100 rounded-[2rem] overflow-hidden bg-slate-100 h-200 shadow-[0_4px_20px_-4px_black]">
          <Image src="https://picsum.photos/1200/800?grayscale&blur=2" fill className="opacity-80 object-cover" alt="Map Area" />

          {/* Overlay Info Badge */}
          <div className="absolute top-6 left-6 bg-white px-4 py-2.5 rounded-full shadow-md font-bold text-sm flex items-center gap-2 z-10 border border-slate-100">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <span className="text-slate-600">Radius: 5 km</span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-900">15 UMKM ditemukan</span>
          </div>

          {/* Map Controls */}
          <div className="bottom-6 right-6 border-slate-100 absolute z-10 flex flex-col overflow-hidden bg-white border rounded-lg shadow-md">
            <button className="hover:bg-slate-50 border-slate-100 text-slate-600 p-3 transition-colors border-b">
              <FaPlus size={14} />
            </button>
            <button className="hover:bg-slate-50 text-slate-600 p-3 transition-colors">
              <FaMinus size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}