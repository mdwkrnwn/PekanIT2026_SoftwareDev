import { FaStore, FaChevronDown } from "react-icons/fa6";
import { UMKM as merchants } from '@/data/UMKM';
import { Card } from './Card';
import MerchantFilter from './MerchantFilter';

export default async function MerchantPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const resolvedParams = await searchParams;
  const activeCategory = resolvedParams.category || "Semua";

  // Server-side filtering
  const filteredMerchants = merchants.filter((merchant) => {
    if (activeCategory === "Semua") return true;
    return merchant.category === activeCategory;
  });

  return (
    <div className="w-[86vw]">
      {/* Header */}
      <section className="flex items-center gap-8 pt-6">
        <div className="md:bg-primary/10 size-26 flex items-center justify-center rounded-full">
          <FaStore className="text-primary" size={50} />
        </div>

        <div>
          <h1 className="text-foreground text-4xl font-bold">
            Merchant <span className="text-primary">
              {activeCategory !== "Semua" ? activeCategory : "Pilihan"}
            </span>
          </h1>

          <p className="text-muted-foreground mt-4 text-xl">
            Jelajahi merchant berdasarkan kategori pilihanmu.
          </p>
        </div>
      </section>

      {/* Filter and Sort */}
      <section className="flex items-center justify-between gap-8 mt-16">
        {/* Extracted Client Component for URL-based filtering */}
        <MerchantFilter activeCategory={activeCategory} />
      </section>

      {/* Cards */}
      {filteredMerchants.length > 0 ? (
        <Card UMKM={filteredMerchants} />
      ) : (
        <div className="border-border mt-14 flex h-60 flex-col items-center justify-center rounded-3xl border border-dashed text-center">
          <h3 className="text-xl font-semibold">Merchant tidak ditemukan</h3>
          <p className="text-muted-foreground mt-2 text-sm">
            Kategori ini belum memiliki merchant.
          </p>
        </div>
      )}
    </div>
  );
}