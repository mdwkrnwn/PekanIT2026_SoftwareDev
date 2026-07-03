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
import { useState } from "react";
import { useEffect } from "react";
import PromoStats from "./components/PromoStats";
import PromoFilter from "./components/PromoFilter";
import PromoPerformanceCard from "./components/PromoPerformanceCard";
import PromoTable from "./components/PromoTable";
import PromoInteractionSource from "./components/PromoInteractionSource";
import PromoPagination from "./components/PromoPagination";
import Tips from "./components/Tips";
export default function PromoPage() {
  const {
    activeCategory,
    setActiveCategory,
    loading,
    search,
    setSearch,

    sortBy,
    setSortBy,
    refreshStats,
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
    handleEditPromo,
    getPromos,

    handleSavePromo,
    submitting,
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
        <PromoStats refreshKey={refreshStats} />
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
        submitting={submitting}
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
            loading={loading}
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
          <PromoPerformanceCard />

          {/* Sumber Interaksi */}
          <PromoInteractionSource />
          {/* Tips */}
          <Tips />
        </div>
      </div>
    </>
  );
}
