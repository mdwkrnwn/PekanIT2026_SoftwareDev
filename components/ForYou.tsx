import Image from "next/image";
import Link from "next/link";

export function ForYou() {
  return (
    <div className="w-[80vw] mx-auto mt-16">
      <div className="flex items-end justify-between mb-6">
        <div>
          <h3 className="text-primary text-[1.375rem] font-bold">Buat Kamu nih 👀</h3>
          <p className="text-[1.063rem] mt-1">UMKM pilihan yang mungkin kamu suka.</p>
        </div>
      </div>
      <div className="lg:grid-cols-4 grid grid-cols-2 gap-6">
        {['Kafe', 'Jajanan', 'Hobi', 'Toko Kelontong'].map((cat, i) => <Link href={'/explore'} key={i} className="rounded-2xl group relative h-48 overflow-hidden cursor-pointer">
          <Image src={`https://picsum.photos/400/300?random=${i}`} fill className="group-hover:scale-115 object-cover transition-transform duration-300" alt={cat} />
          <div className="bg-linear-to-t from-primary/80 via-primary/10 to-transparent group-hover:from-primary group-hover:via-primary/40 absolute inset-0"></div>
          <span className="bottom-4 left-4 absolute text-xl font-bold text-white">{cat}</span>
        </Link>)}
      </div>
    </div>
  );
}
