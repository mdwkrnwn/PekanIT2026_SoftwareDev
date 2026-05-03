import { Card } from './Card';
import {
  FaStore,
  FaChevronDown,
} from "react-icons/fa6";
import { cn } from "@/lib/utils";
import { categoriesMerchant, merchants } from "@/lib/mockData";

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
      <Card merchants={merchants} />
    </div>
  );
}