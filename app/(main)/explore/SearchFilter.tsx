"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { FaSearch } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { categories } from "@/lib/mockData";
import { useDebounce } from "@/lib/debounce";

interface SearchFilterProps {
  initialSearch: string;
  initialCategory: string;
}

export default function SearchFilter({ initialSearch, initialCategory }: SearchFilterProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(initialSearch);
  const debouncedSearch = useDebounce(search, 300);

  const createQueryString = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value && value !== "Semua") {
      params.set(name, value);
    } else {
      params.delete(name);
    }
    return params.toString();
  };

  useEffect(() => {
    router.replace(`${pathname}?${createQueryString("search", debouncedSearch)}`, { scroll: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearch, pathname, router]);

  const handleCategoryChange = (category: string) => {
    router.replace(`${pathname}?${createQueryString("category", category)}`, { scroll: false });
  };

  return (
    <section>
      <div className="relative mb-6">
        <FaSearch
          size={20}
          className="text-muted-foreground top-1/2 right-6 absolute -translate-y-1/2"
        />
        <input
          type="text"
          placeholder="Cari UMKM, produk, kategori..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border-border focus:ring-primary/20 focus:border-primary bg-background focus:ring-4 w-full h-16 px-6 pr-16 text-lg transition-all border rounded-full outline-none"
        />
      </div>

      <div className="flex flex-wrap items-center gap-4 mb-10">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <button
              key={category.name}
              onClick={() => handleCategoryChange(category.name)}
              className={cn(
                "border-primary/40 text-primary hover:bg-primary hover:text-white flex items-center gap-2 rounded-full border px-5 py-2.5 font-medium transition-all",
                initialCategory === category.name && "bg-primary text-white"
              )}
            >
              <Icon size={20} />
              {category.name}
            </button>
          );
        })}
      </div>
    </section>
  );
}