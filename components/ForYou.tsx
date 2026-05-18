import Image from "next/image";
import Link from "next/link";

export function ForYou() {
  return (
    <div className="w-[80vw] mx-auto mt-16">
      <div className="flex items-end justify-between mb-6">
        <div>
          <h3 className="text-primary text-[1.375rem] font-bold">
            Buat Kamu nih 👀
          </h3>
          <p className="text-[1.063rem] mt-1">
            UMKM pilihan yang mungkin kamu suka.
          </p>
        </div>
      </div>
      <div className="lg:grid-cols-4 md:grid-cols-2 grid gap-6">
        {[
          { name: "Kafe", image: "/assets/buatkamu/cafe.jpg" },
          { name: "Jajanan", image: "/assets/buatkamu/jajanan.jpg" },
          { name: "Hobi", image: "/assets/buatkamu/hobi.jpg" },
          {
            name: "Toko Kelontong",
            image: "/assets/buatkamu/tokokelontong.jpg",
          },
        ].map((cat, i) => (
          <Link
            href={"/explore?category=" + cat.name}
            key={i}
            className="group relative h-48 overflow-hidden rounded-2xl cursor-pointer"
          >
            <Image
              src={cat.image}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              alt={cat.name}
            />

            <div className="absolute inset-0 bg-linear-to-t from-primary/80 via-primary/10 to-transparent" />
            <div
              className="absolute inset-0 bg-linear-to-t from-primary via-primary/40 to-transparent opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
            />

            <span className="absolute bottom-4 left-4 text-xl font-bold text-white">
              {cat.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
