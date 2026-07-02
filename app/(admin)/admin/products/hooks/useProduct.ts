"use client";

import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/lib/supabase";
import {
  getProducts as fetchProducts,
  createProduct,
  updateProduct,
  deleteProduct as removeProduct,
} from "../services/product.service";
export function useProduct() {
  const [menuData, setMenuData] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
  });

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const [sortBy, setSortBy] = useState("newest");

  const [productImage, setProductImage] = useState<File | null>(null);

  const [activeCategory, setActiveCategory] = useState("Semua Produk");

  const [search, setSearch] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const [products, setProducts] = useState<any[]>([]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isEditMode, setIsEditMode] = useState(false);

  const [editingId, setEditingId] = useState<number | null>(null);

  const [openMenuId, setOpenMenuId] = useState<number | null>(null);

  const handleProductImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const MAX_SIZE = 5 * 1024 * 1024;

    if (!file.type.startsWith("image/")) {
      alert("File harus berupa gambar.");
      return;
    }

    if (file.size > MAX_SIZE) {
      alert("Ukuran maksimal 5 MB.");
      return;
    }

    setProductImage(file);
  };

  const handleUpdateProduct = async () => {
    if (editingId === null) return;

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      alert("Silakan login kembali.");
      return;
    }

    try {
      await updateProduct({
        editingId,
        userId: user.id,
        menuData,
        productImage,
      });

      await getProducts();

      alert("Produk berhasil diperbarui.");

      resetForm();

      setIsModalOpen(false);
    } catch (error: any) {
      alert(error.message);
    }
  };

  const handleEditProduct = (product: any) => {
    setIsEditMode(true);

    setEditingId(product.id);

    setMenuData({
      name: product.name,
      description: product.description,
      category: product.category,
      price: String(product.price),
    });

    setProductImage(null);

    setIsModalOpen(true);
  };

  const handleDeleteProduct = async (id: number) => {
    const confirmDelete = window.confirm("Yakin ingin menghapus produk ini?");

    if (!confirmDelete) return;

    try {
      await removeProduct(id);

      await getProducts();

      alert("Produk berhasil dihapus.");
    } catch (error: any) {
      alert(error.message);
    }
  };

  const resetForm = () => {
    setMenuData({
      name: "",
      description: "",
      category: "",
      price: "",
    });

    setProductImage(null);
    setEditingId(null);
    setIsEditMode(false);
  };

  const getProducts = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;

    try {
      const data = await fetchProducts(user.id);

      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSaveProduct = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      alert("Silakan login kembali.");
      return;
    }

    if (
      !menuData.name ||
      !menuData.category ||
      !menuData.price ||
      !productImage
    ) {
      alert("Lengkapi semua data.");
      return;
    }

    try {
      await createProduct({
        userId: user.id,
        menuData,
        productImage,
      });

      await getProducts();

      alert("Produk berhasil ditambahkan.");

      resetForm();

      setIsModalOpen(false);
    } catch (error: any) {
      alert(error.message);
    }
  };

  return {
    menuData,
    setMenuData,

    isFilterOpen,
    setIsFilterOpen,

    sortBy,
    setSortBy,

    productImage,
    setProductImage,

    activeCategory,
    setActiveCategory,

    search,
    setSearch,

    currentPage,
    setCurrentPage,

    products,
    setProducts,

    isModalOpen,
    setIsModalOpen,

    isEditMode,
    setIsEditMode,

    editingId,
    setEditingId,

    openMenuId,
    setOpenMenuId,

    handleProductImage,
    resetForm,
    getProducts,
    handleSaveProduct,

    handleDeleteProduct,
    handleUpdateProduct,
    handleEditProduct
  };
}
