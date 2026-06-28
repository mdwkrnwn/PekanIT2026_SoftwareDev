import { UMKM } from "@/data/UMKM";
import Explore from "./Explore";

interface ExplorePageProps {
  searchParams: Promise<{ search?: string; category?: string }>;
}

export default async function ExplorePage({ searchParams }: ExplorePageProps) {
  const resolvedParams = await searchParams;
  const search = resolvedParams.search?.toLowerCase() || "";
  const activeCategory = resolvedParams.category || "Semua";

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