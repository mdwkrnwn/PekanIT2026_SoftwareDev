"use client";
import Image from "next/image";
import {
  LuEye,
  LuPlus,
  LuTag,
  LuSearch,
  LuFilter,
  LuMessageSquareMore,
  LuMapPin,
  LuChevronLeft,
  LuSparkles,
  LuLightbulb,
  LuPencil,
  LuTrash2,
  LuChevronRight,
  LuEllipsisVertical,
} from "react-icons/lu";
import usePromo from "./hooks/usePromo";

import { useEffect } from "react";
import PromoStats from "./components/PromoStats";
import PromoFilter from "./components/PromoFilter";
import PromoModal from "./PromoModal";
import PromoTable from "./components/PromoTable";
import PromoPagination from "./components/PromoPagination";
export default function PromoPage() {
  const {
    activeCategory,
    setActiveCategory,

    search,
    setSearch,

    sortBy,
    setSortBy,

    currentPage,
    setCurrentPage,

    isFilterOpen,
    setIsFilterOpen,

    filteredPromos,
    paginatedPromos,
    totalPages,
    categories,
    itemsPerPage,

    isModalOpen,
    setIsModalOpen,

    isEditMode,
    setIsEditMode,

    promoData,
    setPromoData,

    promoImage,
    setPromoImage,

    openMenuId,
    setOpenMenuId,

    handlePromoImage,
    resetPromoForm,
    handleEditPromo,
    getPromos,

    handleSavePromo,

    handleUpdatePromo,

    handleDeletePromo,
  } = usePromo();

  useEffect(() => {
    getPromos();
  }, []);
  return (
    <>
      <div className="flex flex-col gap-8">
        {/* Top Stats Cards */}
        <PromoStats />
      </div>

      <PromoFilter
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        search={search}
        setSearch={setSearch}
        sortBy={sortBy}
        setSortBy={setSortBy}
        isFilterOpen={isFilterOpen}
        setIsFilterOpen={setIsFilterOpen}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        isEditMode={isEditMode}
        setIsEditMode={setIsEditMode}
        promoData={promoData}
        setPromoData={setPromoData}
        promoImage={promoImage}
        setPromoImage={setPromoImage}
        handlePromoImage={handlePromoImage}
        handleSavePromo={handleSavePromo}
        handleUpdatePromo={handleUpdatePromo}
      />

      <div className="mt-8 grid grid-cols-[2.8fr_1fr] gap-6">
        <div>
          <PromoTable
            promos={paginatedPromos}
            openMenuId={openMenuId}
            setOpenMenuId={setOpenMenuId}
            onEdit={handleEditPromo}
            onDelete={handleDeletePromo}
          />

          <PromoPagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
            itemsPerPage={itemsPerPage}
            totalItems={filteredPromos.length}
          />
        </div>
        
        <div className="space-y-5">
          {/* Performa Promo */}
          <div className="rounded-2xl border border-[#EAECF0] bg-white p-5">
            <div className="flex items-center justify-between">
              <h3 className="text-[19px] font-semibold text-[#101828]">
                Performa Promo
              </h3>

              <button className="rounded-lg border border-[#D0D5DD] px-3 py-2 text-[13px] text-[#344054]">
                7 hari Terakhir
              </button>
            </div>

            <p className="mt-6 text-[18px] font-semibold text-[#101828]">
              Total Dilihat
            </p>

            <h2 className="mt-1 text-[33px] font-bold text-[#101828]">1.240</h2>

            <div className="mt-2 flex items-center gap-1 text-[13px]">
              <span className="font-semibold text-[#158A62]">▲ 18.5%</span>

              <span className="text-[#667085]">dari minggu lalu</span>
            </div>

            <div className="mt-5">
              <Image
                src="/chartpromo.png"
                alt="Performa Promo"
                width={400}
                height={220}
                className="object-contain w-full"
              />
            </div>
          </div>

          {/* Sumber Interaksi */}
          <div className="rounded-2xl border border-[#EAECF0] bg-white p-5">
            <h3 className="mb-5 text-[15px] font-semibold text-[#101828]">
              Sumber Interaksi Promo
            </h3>

            <Image
              src="/donut.png"
              alt="Donut"
              width={400}
              height={180}
              className="object-contain w-full"
            />
          </div>

          {/* Promo Terbaik */}

          {/* Tips */}
          <div className="rounded-2xl border border-[#EAECF0] bg-white p-5">
            <div className="flex items-center gap-2">
              <LuLightbulb className="text-[#F59E0B]" size={20} />

              <h3 className="text-[22px] font-semibold text-[#101828]">
                Tips Menarik
              </h3>
            </div>

            <p className="mt-4 text-[15px] leading-7 text-[#344054]">
              Gunakan promo di jam ramai <b>(11.00 – 13.00 & 17.00 – 20.00)</b>{" "}
              untuk hasil maksimal!
            </p>

            <button className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-[#158A62] font-semibold text-[#158A62] transition hover:bg-[#E8F7EF]">
              Lihat Rekomendasi AI
              <LuSparkles size={18} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
