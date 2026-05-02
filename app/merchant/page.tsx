import Image from "next/image";
import {
  FaHeart,
  FaLocationDot,
  FaStore,
  FaUtensils,
  FaMugHot,
  FaBottleWater,
  FaChevronDown,
  FaBorderAll,
  FaStar,
  FaRegHeart,
} from "react-icons/fa6";
import { GiOpenedFoodCan } from "react-icons/gi";
import { cn } from "@/lib/utils";
import { categoriesMerchant, merchants } from "@/lib/mockData";
import { CiHeart } from "react-icons/ci";



export default function MerchantPage() {
  return (
    <>
      {/* Header */}
      <section className="flex items-center gap-8 pt-6">
        <div className="bg-primary/10 flex size-26 items-center justify-center rounded-full">
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
      <section className="mt-16 flex items-center justify-between gap-8">
        <div className="flex flex-wrap items-center gap-5">
          {categoriesMerchant.map((category) => {
            const Icon = category.icon;

            return (
              <button
                key={category.name}
                className={cn(
                  "border-primary text-primary hover:bg-primary hover:text-white flex items-center gap-3 rounded-full border px-4 py-2 text-xl font-semibold transition-colors",
                  category.active && "bg-primary text-white"
                )}
              >
                <Icon size={18} />
                {category.name}
              </button>
            );
          })}
        </div>

        <button className="border-primary-foreground/40 hover:bg-secondary flex items-center gap-4 rounded-full border px-4 py-2 text-xl font-medium transition-colors">
          Urutkan
          <FaChevronDown size={16} />
        </button>
      </section>

      {/* Cards */}
      <section className="mt-14 grid gap-8 lg:grid-cols-2 2xl:grid-cols-4">
        {merchants.map((merchant) => (
          <article
            key={merchant.title}
            className="border-border overflow-hidden rounded-[2rem] border bg-white transition-all hover:-translate-y-1 hover:shadow-xl cursor-pointer"
          >
            {/* Image */}
            <div className="relative h-80 overflow-hidden">
              <Image
                src={merchant.image}
                alt={merchant.title}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
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
              <h2 className="text-primary-foreground text-4xl font-bold">
                {merchant.title}
              </h2>

              <p className="text-muted-foreground mt-4 text-xl leading-relaxed">
                {merchant.description}
              </p>

              {/* Location */}
              <div className="text-muted-foreground mt-8 flex items-center justify-between text-lg">
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
              <div className="mt-6 flex items-center gap-2">
                <FaStar className="text-yellow-500" size={20} />

                <span className="text-lg font-semibold text-yellow-600">
                  {merchant.rating}
                </span>

                <span className="text-muted-foreground text-lg">
                  ({merchant.reviews})
                </span>
              </div>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}