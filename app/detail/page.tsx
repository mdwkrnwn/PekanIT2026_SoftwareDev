import { Reviews } from './Reviews';
import { Location } from './Location';
import { Menu } from './Menu';
import Image from "next/image";
import { FaStar, FaRegClock, FaHeart, FaMapMarkerAlt } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
import { MdOutlineFoodBank, MdAttachMoney, MdVerified } from "react-icons/md";

export default function MerchantDetail() {
  return (
    <div className="w-[86vw]">
      {/* Hero Section */}
      <div className="grid grid-cols-[2fr_1fr] gap-10 border-solid border-b border-border mb-4.5 pb-6">
        {/* Images Grid */}
        <div className="grid grid-rows-[2fr_auto] gap-4">
          <Image src="https://picsum.photos/1000/600?random=1" className="h-70 rounded-2xl object-cover w-full" alt="Dapur Nona Main" height={600} width={1000} />
          <div className="grid h-32 grid-cols-4 gap-4">
            <div className="rounded-xl relative overflow-hidden">
              <Image src="https://picsum.photos/300/200?random=2" fill className="object-cover" alt="Gallery 1" />
            </div>
            <div className="rounded-xl relative overflow-hidden">
              <Image src="https://picsum.photos/300/200?random=3" fill className="object-cover" alt="Gallery 2" />
            </div>
            <div className="rounded-xl relative overflow-hidden">
              <Image src="https://picsum.photos/300/200?random=4" fill className="object-cover" alt="Gallery 3" />
            </div>
            <button className="rounded-xl bg-black/50 hover:opacity-90 relative flex flex-col items-center justify-center overflow-hidden text-white transition-opacity">
              <span className="text-2xl font-bold">2+</span>
              <span className="text-sm font-medium">Lihat Semua</span>
            </button>
          </div>
        </div>

        {/* Info Panel */}
        <div className="grid grid-rows-[2fr_1fr]">
          <div className="grid">
            <div>
              <h1 className="text-[2.5rem] font-bold mb-3 text-foreground">
                Dapur Nona
              </h1>
              <div className="text-foreground/60 flex items-center gap-2 mb-2 text-sm">
                <span className="flex items-center gap-1 text-base font-bold text-yellow-400">
                  <FaStar />
                  4.5
                </span>
                <span>(20 ulasan)</span>
                <span className="mx-1">•</span>
                <span className="flex items-center gap-1">
                  <FaMapMarkerAlt className="text-slate-400" />
                  1.2 km
                </span>
              </div>
              <p className="text-slate-500 mb-6 text-sm">
                Restoran, Makanan Rumahan
              </p>
              <div className="flex items-center gap-4 mb-8 text-sm">
                <span className="font-bold text-green-600">Buka Sekarang</span>
                <span className="flex items-center gap-1.5 text-slate-500">
                  <FaRegClock size={16} />
                  09.00 - 21.00</span>
              </div>
            </div>
            <div className="flex gap-4">
              <button className="bg-primary hover:bg-primary/90 flex flex-row items-center gap-2 px-5 font-bold text-white transition-colors rounded-lg">
                <FaHeart /> Simpan
              </button>
              <button className="border-primary text-primary hover:bg-blue-50 flex flex-row items-center gap-2 px-5 font-bold transition-colors border rounded-lg">
                <LuMapPin size={18} /> Lihat di Map
              </button>
            </div>
          </div>
          <div className="border-border flex items-center gap-6 mt-4 border-t border-solid">
            <div className="flex flex-row items-center gap-1">
              <div className="bg-primary/20 text-primary p-2 rounded-full">
                <MdOutlineFoodBank size={24} />
              </div>
              <span className="text-lg font-semibold text-center">
                Masakan Rumahan
              </span>
            </div>
            <div className="flex flex-row items-center gap-1">
              <div className="bg-primary/20 text-primary p-2 rounded-full">
                <MdAttachMoney size={24} />
              </div>
              <span className="text-lg font-semibold text-center">
                Harga Terjangkau
              </span>
            </div>
            <div className="flex flex-row items-center gap-1">
              <div className="bg-primary/20 text-primary p-2 rounded-full">
                <MdVerified size={24} />
              </div>
              <span className="text-lg font-semibold text-center">Halal</span>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="mb-12">
        <h3 className="text-foreground mb-4 text-2xl font-bold">
          Tentang Dapur Nona
        </h3>
        <p className="text-foreground max-w-1/2 text-lg">
          Dapur Nona menyajikan aneka masakan rumahan dengan cita rasa lezat dan harga terjangkau. Semua menu dibuat dengan bahan segar pilihan dan resep turun-temurun keluarga.
        </p>
      </section>

      {/* Menu Section */}
      <Menu />
      {/* Location Section */}
      <Location />
      {/* Reviews Section */}
      <Reviews />
    </div>
  );
}