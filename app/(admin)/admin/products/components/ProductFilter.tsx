"use client";

import { LuFilter, LuPlus, LuSearch } from "react-icons/lu";

interface Category {
  name: string;
  count: number;
}

interface ProductFilterProps {
  categories: Category[];

  activeCategory: string;
  setActiveCategory: (value: string) => void;

  search: string;
  setSearch: (value: string) => void;

  sortBy: string;
  setSortBy: (value: string) => void;

  isFilterOpen: boolean;
  setIsFilterOpen: React.Dispatch<React.SetStateAction<boolean>>;

  onAddProduct: () => void;
}

export default function ProductFilter({
  categories,
  activeCategory,
  setActiveCategory,
  search,
  setSearch,
  sortBy,
  setSortBy,
  isFilterOpen,
  setIsFilterOpen,
  onAddProduct,
}: ProductFilterProps) {
  return (
    <div className="flex items-center justify-between mt-8">
      {/* Left */}
      <div className="flex-1 overflow-x-auto scrollbar-hide">
        <div className="flex w-max items-center gap-8">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`relative pb-3 text-[15px] transition ${
                activeCategory === category.name
                  ? "font-semibold text-[#158A62]"
                  : "font-medium text-[#667085] hover:text-[#101828]"
              }`}
            >
              {category.name} ({category.count})

              {activeCategory === category.name && (
                <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-[#158A62]" />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="w-5 shrink-0" />

      {/* Right */}
      <div className="flex shrink-0 items-center gap-3">
        {/* Search */}
        <div className="relative">
          <LuSearch
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[#98A2B3]"
            size={18}
          />

          <input
            type="text"
            placeholder="Cari Produk..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-11 w-[220px] rounded-xl border border-[#D0D5DD] pl-10 pr-4 text-[14px] outline-none focus:border-[#158A62]"
          />
        </div>

        {/* Filter */}
        <div className="relative">
          <button
            onClick={() => setIsFilterOpen((prev) => !prev)}
            className="flex h-11 items-center gap-2 rounded-xl border border-[#D0D5DD] px-4 text-[14px] font-medium text-[#344054]"
          >
            <LuFilter size={16} />
            Filter
          </button>

          {isFilterOpen && (
            <div className="absolute right-0 top-14 z-50 w-64 rounded-2xl border border-[#EAECF0] bg-white p-5 shadow-xl">
              <h3 className="mb-4 font-semibold">
                Urutkan Produk
              </h3>

              <div className="space-y-3">
                {[
                  { label: "Produk Terbaru", value: "newest" },
                  { label: "Harga Termurah", value: "lowest" },
                  { label: "Harga Termahal", value: "highest" },
                  { label: "Nama A-Z", value: "az" },
                  { label: "Nama Z-A", value: "za" },
                ].map((item) => (
                  <label
                    key={item.value}
                    className="flex items-center gap-3 cursor-pointer"
                  >
                    <input
                      type="radio"
                      checked={sortBy === item.value}
                      onChange={() => setSortBy(item.value)}
                    />

                    <span>{item.label}</span>
                  </label>
                ))}
              </div>

              <div className="mt-6 flex justify-end gap-3">
                <button
                  onClick={() => {
                    setSortBy("newest");
                    setIsFilterOpen(false);
                  }}
                  className="rounded-lg border px-4 py-2"
                >
                  Reset
                </button>

                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="rounded-lg bg-[#158A62] px-4 py-2 text-white"
                >
                  Terapkan
                </button>
              </div>
            </div>
          )}
        </div>

        <button
          onClick={onAddProduct}
          className="flex h-11 items-center gap-2 rounded-xl bg-[#158A62] px-6 text-white"
        >
          <LuPlus size={18} />
          Tambah Produk
        </button>
      </div>
    </div>
  );
}