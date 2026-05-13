import { UMKM } from "@/data/UMKM.dummy";
import Explore from "./Explore";

// Next.js 15+ searchParams type
interface ExplorePageProps {
  searchParams: Promise<{ search?: string; category?: string }>;
}

export default async function ExplorePage({ searchParams }: ExplorePageProps) {
  // Await the promise to get the actual params
  const resolvedParams = await searchParams;
  const search = resolvedParams.search?.toLowerCase() || "";
  const activeCategory = resolvedParams.category || "Semua";

  // Server-side filtering
  const filteredUMKM = UMKM.filter((item) => {
    const matchSearch =
      item.name.toLowerCase().includes(search) ||
      item.description?.toLowerCase().includes(search);

    const matchCategory =
      activeCategory === "Semua" || item.category === activeCategory;

    return matchSearch && matchCategory;
  });

  return (
    <Explore
      filteredUMKM={filteredUMKM}
      search={search}
      category={activeCategory}
    />
  );
}