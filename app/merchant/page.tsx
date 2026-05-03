import Image from "next/image";
import {
  FaLocationDot,
  FaStore,
  FaChevronDown,
  FaStar,
  FaRegHeart,
} from "react-icons/fa6";
import { cn } from "@/lib/utils";
import { categoriesMerchant, merchants } from "@/lib/mockData";
import Link from "next/link";



export default function MerchantPage() {
  return (
    <div className="w-[86vw]">
      {/* Header */}
      <section className="flex items-center gap-8 pt-6">
        <div className="bg-primary/10 size-26 flex items-center justify-center rounded-full">
          <FaStore className="text-primary" size={50} />
        </div>

        <div>
          <h1 className="text-foreground text-4xl font-bold">
            Merchant <span className="text-primary">Makanan</span>
          </h1>

          <p className="text-muted-foreground mt-4 text-xl">
            Jelajahi merchant berdasarkan kategori pilihanmu.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="flex items-center justify-between gap-8 mt-16">
        <div className="flex flex-wrap items-center gap-5">
          {categoriesMerchant.map((category) => {
            const Icon = category.icon;

            return (
              <button
                key={category.name}
                className={cn(
                  "border-primary text-primary-foreground hover:bg-primary hover:text-white flex items-center gap-3 rounded-full border px-4 py-2 text-lg font-semibold transition-colors cursor-pointer",
                  category.active && "bg-primary text-white"
                )}
              >
                <Icon size={18} />
                {category.name}
              </button>
            );
          })}
        </div>

        <button className="border-primary-foreground/40 hover:bg-secondary hover:text-background flex items-center gap-4 px-4 py-2 text-lg font-medium transition-colors border rounded-full cursor-pointer">
          Urutkan
          <FaChevronDown size={16} />
        </button>
      </section>

      {/* Cards */}
      <section className="mt-14 lg:grid-cols-2 2xl:grid-cols-4 grid gap-8">
        {merchants.map((merchant) => (
          <Link href={'/detail'}
            key={merchant.title}
            className="border-border overflow-hidden rounded-[2rem] border bg-white transition-all hover:-translate-y-1 hover:shadow-xl cursor-pointer "
          >
            {/* Image */}
            <div className="h-80 relative overflow-hidden">
              <Image
                src={merchant.image}
                alt={merchant.title}
                fill
                className="hover:scale-105 object-cover transition-transform duration-300"
              />

              <button className="absolute top-5 right-5 flex size-10 items-center justify-center rounded-full bg-white text-foreground hover:bg-primary hover:*:text-background cursor-pointer">
                <FaRegHeart
                  size={22}
                />
              </button>

              <span className="bg-primary absolute top-5 left-5 rounded-full px-4 py-1.5 text-sm font-bold text-white">
                {merchant.category}
              </span>
            </div>

            {/* Content */}
            <div className="p-7">
              <h2 className="text-foreground text-3xl font-bold">
                {merchant.title}
              </h2>
              <p className="text-muted-foreground mt-4 text-xl leading-relaxed">
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
    </div>
  );
}