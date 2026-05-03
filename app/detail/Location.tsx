import Image from "next/image";
import { FaMapMarkerAlt, FaExternalLinkAlt } from "react-icons/fa";

export function Location({ }) {
  return <section className="mb-12">
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
  </section>;
}
