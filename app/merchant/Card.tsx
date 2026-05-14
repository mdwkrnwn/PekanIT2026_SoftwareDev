import Image from "next/image";
import Link from "next/link";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { typeUMKM } from "@/lib/UMKM.types";

export function Card({ UMKM }: { UMKM: typeUMKM[] }) {
  return (
    <section className="mt-14 lg:grid-cols-2 2xl:grid-cols-4 grid gap-8">
      {UMKM.map((merchant) => (
        <Link
          href={`/detail/${merchant.id}`}
          key={merchant.name}
          className="border-border overflow-hidden rounded-[2rem] border bg-white transition-all hover:-translate-y-1 hover:shadow-xl cursor-pointer"
        >
          {/* Image Container */}
          <div className="h-80 relative overflow-hidden">
            <Image
              src={merchant.gallery[0]}
              alt={merchant.name}
              fill
              className="hover:scale-105 object-cover transition-transform duration-300"
            />

            <button className="absolute top-5 right-5 flex size-10 items-center justify-center rounded-full bg-white text-foreground hover:bg-primary hover:*:text-background cursor-pointer">
              <FaRegHeart size={22} />
            </button>

            <span className="bg-primary absolute top-5 left-5 rounded-full px-4 py-1.5 text-sm font-bold text-white">
              {merchant.category}
            </span>
          </div>

          {/* Content */}
          <div className="p-7">
            <h2 className="text-foreground text-3xl font-bold">
              {merchant.name}
            </h2>

            <p className="text-muted-foreground mt-4 text-xl leading-relaxed line-clamp-2">
              {merchant.description}
            </p>

            {/* Location */}
            <div className="text-muted-foreground flex items-center justify-between mt-8 text-lg">
              <div className="flex items-center gap-3">
                <FaLocationDot size={16} />
                <span>{merchant.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaLocationDot className="text-primary" size={16} />
                <span>{merchant.distance}</span>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-6">
              <FaStar className="text-yellow-500" size={20} />
              <span className="text-lg font-semibold text-yellow-600">
                {merchant.rating}
              </span>
              <span className="text-muted-foreground text-lg">
                ({merchant.reviews})
              </span>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
}