"use client";

import ProductFilter from "./components/ProductFilter";
import ProductStats from "./components/ProductStats";
import ProductTable from "./components/ProductTable";
import ProductPagination from "./components/ProductPagination";
import ProductModal from "./components/ProductModal";
import ProductPopular from "./components/ProductPopular";
import ProductInsight from "./components/Insight";
import ProductTips from "./components/ProductTips";
import { useMemo, useEffect } from "react";
import { useProduct } from "./hooks/useProduct";

export default function ProductPage() {
  const {
    menuData,
    setMenuData,

    isFilterOpen,
    setIsFilterOpen,

    sortBy,
    setSortBy,

    productImage,

    activeCategory,
    setActiveCategory,

    search,
    setSearch,
    loading,
    currentPage,
    setCurrentPage,

    products,

    isModalOpen,
    setIsModalOpen,

    isEditMode,
    setIsEditMode,
    refreshKey,

    openMenuId,
    setOpenMenuId,
    submitting,
    handleProductImage,
    resetForm,
    getProducts,

    handleSaveProduct,
    handleEditProduct,
    handleUpdateProduct,
    handleDeleteProduct,
  } = useProduct();

  const itemsPerPage = 10;

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const categories = [
    {
      name: "Semua Produk",
      count: products.length,
    },
    ...Array.from(new Set(products.map((item) => item.category))).map(
      (category) => ({
        name: category,
        count: products.filter((item) => item.category === category).length,
      }),
    ),
  ];

  const filteredProducts = useMemo(() => {
    const result = products.filter((item) => {
      const matchCategory =
        activeCategory === "Semua Produk" || item.category === activeCategory;

      const matchSearch =
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase()) ||
        item.store.toLowerCase().includes(search.toLowerCase());

      return matchCategory && matchSearch;
    });

    switch (sortBy) {
      case "lowest":
        result.sort((a, b) => a.price - b.price);
        break;

      case "highest":
        result.sort((a, b) => b.price - a.price);
        break;

      case "az":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;

      case "za":
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;

      case "newest":
        result.sort(
          (a, b) =>
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
        );
        break;
    }

    return result;
  }, [products, activeCategory, search, sortBy]);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,

    currentPage * itemsPerPage,
  );

  return (
    <>
      <div className="flex flex-col gap-8">
        {/* Top Stats Cards */}
        <ProductStats refreshKey={refreshKey} />
      </div>

      <ProductFilter
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        search={search}
        setSearch={setSearch}
        sortBy={sortBy}
        setSortBy={setSortBy}
        isFilterOpen={isFilterOpen}
        setIsFilterOpen={setIsFilterOpen}
        onAddProduct={() => {
          setIsEditMode(false);
          setIsModalOpen(true);
        }}
      />

      <ProductModal
        open={isModalOpen}
        onClose={() => {
          resetForm();
          setIsModalOpen(false);
        }}
        menuData={menuData}
        submitting={submitting}
        setMenuData={setMenuData}
        productImage={productImage}
        handleProductImage={handleProductImage}
        onSubmit={isEditMode ? handleUpdateProduct : handleSaveProduct}
        isEdit={isEditMode}
      />

      <div className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-[2.8fr_1fr]">
        {/* Left */}
        <div>
          <div className="overflow-x-auto">
            <ProductTable
              products={paginatedProducts}
              openMenuId={openMenuId}
              loading={loading}
              setOpenMenuId={setOpenMenuId}
              onEdit={handleEditProduct}
              onDelete={handleDeleteProduct}
            />
          </div>
          <ProductPagination
            currentPage={currentPage}
            totalPages={totalPages}
            itemsPerPage={itemsPerPage}
            totalItems={filteredProducts.length}
            onPageChange={setCurrentPage}
          />
        </div>

        {/* Right */}
        <div className="space-y-5">
          <ProductPopular refreshKey={refreshKey} />
          <ProductInsight refreshKey={refreshKey} />
          <ProductTips />
        </div>
      </div>
    </>
  );
}
