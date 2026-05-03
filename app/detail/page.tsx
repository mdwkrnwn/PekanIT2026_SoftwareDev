import Image from "next/image";
import { FaStar, FaRegClock, FaHeart, FaMapMarkerAlt, FaExternalLinkAlt } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
import { MdOutlineFoodBank, MdAttachMoney, MdVerified } from "react-icons/md";
import { cn } from "@/lib/utils";

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
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-slate-900 text-xl font-bold">Menu Andalan</h3>
          <button className="text-primary hover:underline text-sm font-bold">
            Lihat Semua
          </button>
        </div>
        <div className="grid grid-cols-5 gap-4">
          {[
            { name: "Nasi Ayam Geprek", price: "Rp 18.000" },
            { name: "Nasi Telur Dadar", price: "Rp 10.000" },
            { name: "Sambal Cumi", price: "Rp 15.000" },
            { name: "Es Teh", price: "Rp 5.000" },
            { name: "Puding Cokelat", price: "Rp 8.000" }
          ].map((item, i) => (
            <div key={i} className="group rounded-xl hover:shadow-xl flex flex-col pb-4 transition-all shadow-md cursor-pointer">
              <div className="relative w-full h-32 mb-3 overflow-hidden">
                <Image src={`https://picsum.photos/300/300?random=${i + 10}`} className="group-hover:scale-110 object-cover transition-transform duration-300 rounded-tl-lg rounded-tr-lg" fill alt={item.name} />
              </div>
              <div className="mx-4">

                <h4 className="text-foreground text-lg font-bold">{item.name}</h4>
                <p className="text-foreground/70">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Location Section */}
      <section className="mb-12">
        <h3 className="text-slate-900 mb-6 text-xl font-bold">Lokasi</h3>
        <div className="flex flex-row gap-8">
          <div className="w-100 rounded-2xl shrink-0 border-slate-200 relative h-48 overflow-hidden border">
            <Image src="https://picsum.photos/800/400?random=100" fill className="object-cover" alt="Map Location" />
            <div className="absolute inset-0 flex items-center justify-center">
              <FaMapMarkerAlt size={40} className="text-primary drop-shadow-md" />
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div className="flex flex-col">
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-primary shrink-0 mt-1" size={25} />
                <p className="text-foreground wrap-break-word text-xl font-bold">Jl. Soekarno Hatta No.32 Lowokwaru, Malang, Jawa Timur</p>
              </div>
              <p className="text-foreground">1.2 km dari lokasimu</p>
            </div>
            <button className="border-primary text-primary hover:bg-primary hover:text-background bg-background w-fit flex items-center justify-center gap-2 px-6 py-2 text-lg font-bold transition-colors border rounded-lg cursor-pointer">
              Buka di Google Maps <FaExternalLinkAlt size={12} />
            </button>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-slate-900 text-xl font-bold">Ulasan Pelanggan</h3>
          <button className="text-primary hover:underline font-bold">Lihat Semua</button>
        </div>

        <div className="grid grid-cols-[1fr_2.5fr] gap-12 border border-slate-200 rounded-2xl p-8">
          {/* Aggregate Stats */}
          <div className="border-slate-200 flex flex-col items-center pr-12 border-r">
            <div className="text-[4rem] font-bold text-foreground mb-2">4.5</div>
            <div className="flex gap-1 mb-2 text-xl text-yellow-400">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar className="text-slate-200" />
            </div>
            <p className="text-slate-500 mb-6">(20 ulasan)</p>

            <div className="flex flex-col w-full gap-2">
              {[
                { star: 5, count: 12, width: "w-[60%]" },
                { star: 4, count: 8, width: "w-[40%]" },
                { star: 3, count: 0, width: "w-0" },
                { star: 2, count: 0, width: "w-0" },
                { star: 1, count: 0, width: "w-0" },
              ].map((row) => (
                <div key={row.star} className="flex items-center gap-3 text-sm">
                  <span className="text-foreground/70 w-2 font-bold">{row.star}</span>
                  <FaStar className="w-3 text-yellow-400" size={12} />
                  <div className="bg-slate-100 flex-1 h-2 overflow-hidden rounded-full">
                    <div className={cn("h-full bg-primary rounded-full", row.width)}></div>
                  </div>
                  <span className="text-foreground/50 w-4 text-xs text-right">{row.count}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Review List */}
          <div className="flex flex-col gap-8">
            {[
              { name: "Rina Kartika", time: "2 Hari yang lalu", text: "Enak banget, rasa rumahan asli! Porsi dapet dan harga terjangkau." },
              { name: "Dimas Pratama", time: "1 Minggu yang lalu", text: "Enak banget, rasa rumahan asli! Porsi dapet dan harga terjangkau." },
              { name: "Siti Aisyah", time: "2 Minggu yang lalu", text: "Menu buat keluarga. Sambalnya juara!" }
            ].map((review, i) => (
              <div key={i} className="border-slate-100 last:border-0 flex flex-col border-b">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-4">
                    <div className="shrink-0 relative w-10 h-10 overflow-hidden rounded-full">
                      <Image src={`https://picsum.photos/100/100?random=${i + 200}`} fill className="object-cover" alt={review.name} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-foreground mb-1 text-lg font-bold">{review.name}</span>
                      <div className="flex text-yellow-400 gap-0.5">
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                      </div>
                    </div>
                  </div>
                  <span className="text-foreground/50">{review.time}</span>
                </div>
                <p className="text-foreground ml-14 text-lg">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}