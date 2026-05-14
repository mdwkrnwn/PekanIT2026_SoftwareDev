"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { FaSearch } from "react-icons/fa";

export default function FavoriteFilter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentSearch = searchParams.get("search") ?? "";

  const handleSearchChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value.trim()) {
      params.set("search", value);
    } else {
      params.delete("search");
    }

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex items-center w-full mt-10 mb-6">
      <div className="relative w-full">
        <FaSearch className="left-4 top-1/2 absolute text-gray-400 -translate-y-1/2" />

        <input
          value={currentSearch}
          onChange={(e) => handleSearchChange(e.target.value)}
          placeholder="Cari favorit UMKM..."
          className="rounded-2xl pl-11 focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:opacity-50 w-full py-3 pr-4 border border-gray-200 outline-none"
        />
      </div>
    </div>
  );
}