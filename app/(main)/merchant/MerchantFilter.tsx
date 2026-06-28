"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { categoriesMerchant } from "@/lib/mockData";

export default function MerchantFilter({ activeCategory }: { activeCategory: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleCategoryChange = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (category && category !== "Semua") {
      params.set("category", category);
    } else {
      params.delete("category");
    }

    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex flex-wrap items-center gap-5">
      {categoriesMerchant.map((category) => {
        const Icon = category.icon;
        // Check if the current category matches the active state
        const isActive = activeCategory === category.name ||
          (activeCategory === "Semua" && category.name === "Semua");

        return (
          <button
            key={category.name}
            onClick={() => handleCategoryChange(category.name)}
            className={cn(
              "border text-foreground hover:bg-primary hover:text-white flex items-center gap-3 rounded-full border-border px-4 py-2 font-semibold transition-colors cursor-pointer",
              isActive && "bg-primary text-white"
            )}
          >
            <Icon size={18} />
            {category.name}
          </button>
        );
      })}
    </div>
  );
}