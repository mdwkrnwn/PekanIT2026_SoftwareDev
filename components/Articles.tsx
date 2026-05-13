import Image from "next/image";
import Link from "next/link";
import { FaRegClock } from "react-icons/fa6";

export function Articles() {
  return (
    <div className="w-[80vw] mx-auto mt-16">
      <h3 className="text-primary mb-8 text-3xl font-bold">
        Cerita & Tips Pilihan
      </h3>
      <div className="md:grid-cols-3 grid grid-cols-1 gap-8">
        {[...Array(6)].map((_, i) => <Link href={'/article'} key={i} className="border-slate-200 rounded-2xl hover:shadow-lg group flex flex-col overflow-hidden transition-shadow bg-white border">
          <div className="relative h-56 overflow-hidden">
            <Image src={`https://picsum.photos/400/300?random=${i + 30}`} fill className="group-hover:scale-110 object-cover transition-all" alt="Article Cover" />
            <span className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
              {i % 2 === 0 ? 'Tips' : 'Cerita'}
            </span>
          </div>
          <div className="flex flex-col flex-1 p-6">
            <h4 className="line-clamp-2 text-slate-800 mb-3 text-xl font-bold">Cara Efektif Membangun Branding Bisnis Lokal di Era Digital</h4>
            <p className="text-slate-600 line-clamp-3 mb-6 text-sm leading-relaxed">
              Temukan strategi terbaik yang bisa kamu terapkan untuk mengembangkan usahamu agar semakin sukses. Pelajari langkah-langkah praktis dari pakar industri.
            </p>
            <div className="text-slate-500 border-slate-100 flex items-center justify-between pt-4 mt-auto text-xs font-medium border-t">
              <span>12 Okt 2023</span>
              <span className="flex items-center gap-1.5">
                <FaRegClock size={14} /> 5 min read</span>
            </div>
          </div>
        </Link>)}
      </div>
    </div>
  );
}
