"use client";

import { LuFilter, LuPlus, LuSearch } from "react-icons/lu";
import PromoModal from "../PromoModal";
import { PromoFormData } from "../promo.type";
interface Category {
  name: string;
  count: number;
}

interface PromoFilterProps {
  categories: Category[];

  activeCategory: string;
  setActiveCategory: React.Dispatch<React.SetStateAction<string>>;

  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;

  sortBy: string;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;

  isFilterOpen: boolean;
  setIsFilterOpen: React.Dispatch<React.SetStateAction<boolean>>;

  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;

  isEditMode: boolean;
  setIsEditMode: React.Dispatch<React.SetStateAction<boolean>>;

  promoData: PromoFormData;

  setPromoData: React.Dispatch<React.SetStateAction<PromoFormData>>;

  promoImage: File | null;
  setPromoImage: React.Dispatch<React.SetStateAction<File | null>>;

  handlePromoImage: (e: React.ChangeEvent<HTMLInputElement>) => void;

  handleSavePromo: () => void;
  handleUpdatePromo: () => void;
}

export default function PromoFilter({
  categories,

  activeCategory,
  setActiveCategory,

  search,
  setSearch,

  sortBy,
  setSortBy,

  isFilterOpen,
  setIsFilterOpen,

  isModalOpen,
  setIsModalOpen,

  isEditMode,
  setIsEditMode,

  promoData,
  setPromoData,

  promoImage,
  setPromoImage,

  handlePromoImage,

  handleSavePromo,
  handleUpdatePromo,
}: PromoFilterProps) {
  return (
    <div className="mt-8 flex items-center justify-between">
      {/* Left */}
      <div className="flex items-center gap-8">
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
              <span className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-[#158A62]" />
            )}
          </button>
        ))}
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        {/* Search */}
        <div className="relative">
          <LuSearch
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[#98A2B3]"
            size={18}
          />

          <input
            type="text"
            placeholder="Cari Promo..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-11 w-[220px] rounded-xl border border-[#D0D5DD] pl-10 pr-4 text-[14px] outline-none focus:border-[#158A62]"
          />
        </div>

        {/* Filter */}
        <div className="relative">
          <button
            onClick={() => setIsFilterOpen((prev) => !prev)}
            className="flex h-11 items-center gap-2 rounded-xl border border-[#D0D5DD] px-4 text-[14px] font-medium text-[#344054] hover:bg-[#F9FAFB]"
          >
            <LuFilter size={16} />
            Filter
          </button>

          {isFilterOpen && (
            <div className="absolute right-0 top-14 z-50 w-64 rounded-2xl border border-[#EAECF0] bg-white p-5 shadow-xl">
              <h3 className="mb-4 text-[15px] font-semibold">Urutkan Promo</h3>

              <div className="space-y-3">
                {[
                  {
                    label: "Promo Terbaru",
                    value: "newest",
                  },
                  {
                    label: "Promo Terlama",
                    value: "oldest",
                  },
                  {
                    label: "Diskon Tertinggi",
                    value: "highest_discount",
                  },
                  {
                    label: "Diskon Terendah",
                    value: "lowest_discount",
                  },
                  {
                    label: "Judul A-Z",
                    value: "az",
                  },
                  {
                    label: "Judul Z-A",
                    value: "za",
                  },
                ].map((item) => (
                  <label
                    key={item.value}
                    className="flex cursor-pointer items-center gap-3"
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

        {/* Tambah Promo */}
        <button
          onClick={() => {
            setIsEditMode(false);

            setPromoData({
              title: "",
              description: "",
              promo_type: "",
              discount: "",
              target: "",
              schedule: "",
              start_date: "",
              end_date: "",
              status: "Aktif",
            });

            setPromoImage(null);

            setIsModalOpen(true);
          }}
          className="flex h-11 items-center gap-2 rounded-xl bg-[#158A62] px-6 text-[14px] font-semibold text-white transition hover:bg-[#127553]"
        >
          <LuPlus size={18} />
          Tambah Promo
        </button>

        <PromoModal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          promoData={promoData}
          setPromoData={setPromoData}
          promoImage={promoImage}
          handlePromoImage={handlePromoImage}
          onSubmit={isEditMode ? handleUpdatePromo : handleSavePromo}
          isEdit={isEditMode}
        />
      </div>
    </div>
  );
}
