import { Promo } from "../promo.type";
import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/lib/supabase";
import {
  fetchPromos,
  createPromo,
  updatePromo,
  deletePromo,
} from "../services/promo.service";
export default function usePromo() {
  const [promos, setPromos] = useState<Promo[]>([]);

  const [activeCategory, setActiveCategory] = useState("Semua Promo");

  const [search, setSearch] = useState("");

  const [sortBy, setSortBy] = useState("newest");

  const [currentPage, setCurrentPage] = useState(1);

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const itemsPerPage = 6;

  const filteredPromos = useMemo(() => {
    let result = promos.filter((promo) => {
      const matchCategory =
        activeCategory === "Semua Promo" || promo.status === activeCategory;

      const keyword = search.toLowerCase();

      const matchSearch =
        promo.title.toLowerCase().includes(keyword) ||
        promo.description.toLowerCase().includes(keyword) ||
        promo.target.toLowerCase().includes(keyword) ||
        promo.promo_type.toLowerCase().includes(keyword);

      return matchCategory && matchSearch;
    });

    switch (sortBy) {
      case "highest_discount":
        result.sort((a, b) => b.discount - a.discount);
        break;

      case "lowest_discount":
        result.sort((a, b) => a.discount - b.discount);
        break;

      case "az":
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;

      case "za":
        result.sort((a, b) => b.title.localeCompare(a.title));
        break;

      case "oldest":
        result.sort(
          (a, b) =>
            new Date(a.created_at).getTime() - new Date(b.created_at).getTime(),
        );
        break;

      case "newest":
        result.sort(
          (a, b) =>
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
        );
        break;
    }

    return result;
  }, [promos, activeCategory, search, sortBy]);

  const totalPages = Math.ceil(filteredPromos.length / itemsPerPage);

  const paginatedPromos = filteredPromos.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const categories = [
    {
      name: "Semua Promo",
      count: promos.length,
    },
    ...Array.from(new Set(promos.map((promo) => promo.status))).map(
      (status) => ({
        name: status,
        count: promos.filter((promo) => promo.status === status).length,
      }),
    ),
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [editingId, setEditingId] = useState<number | null>(null);

  const [isEditMode, setIsEditMode] = useState(false);

  const [promoData, setPromoData] = useState({
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

  const [promoImage, setPromoImage] = useState<File | null>(null);

  const [openMenuId, setOpenMenuId] = useState<number | null>(null);

  const handlePromoImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("File harus berupa gambar.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("Ukuran maksimal 5 MB.");
      return;
    }

    setPromoImage(file);
  };

  const resetPromoForm = () => {
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
    setEditingId(null);
    setIsEditMode(false);
  };

  const handleEditPromo = (promo: Promo) => {
    setIsEditMode(true);

    setEditingId(promo.id);

    setPromoData({
      title: promo.title,
      description: promo.description,
      promo_type: promo.promo_type,
      discount: String(promo.discount),
      target: promo.target,
      schedule: promo.schedule,
      start_date: promo.start_date,
      end_date: promo.end_date,
      status: promo.status,
    });

    setPromoImage(null);

    setOpenMenuId(null);

    setIsModalOpen(true);
  };
  const getPromos = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;

    try {
      const data = await fetchPromos(user.id);
      setPromos(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSavePromo = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      alert("Silakan login kembali.");
      return;
    }

    if (
      !promoData.title ||
      !promoData.promo_type ||
      !promoData.discount ||
      !promoData.target ||
      !promoData.schedule ||
      !promoData.start_date ||
      !promoData.end_date ||
      !promoImage
    ) {
      alert("Lengkapi semua data.");
      return;
    }

    try {
      await createPromo({
        userId: user.id,
        promoData,
        promoImage,
      });

      await getPromos();

      alert("Promo berhasil ditambahkan.");

      resetPromoForm();

      setIsModalOpen(false);
    } catch (error: any) {
      alert(error.message);
    }
  };

  const handleUpdatePromo = async () => {
    if (editingId === null) return;

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;

    try {
      await updatePromo({
        editingId,
        userId: user.id,
        promoData,
        promoImage,
      });

      await getPromos();

      alert("Promo berhasil diperbarui.");

      resetPromoForm();

      setIsModalOpen(false);
    } catch (error: any) {
      alert(error.message);
    }
  };

  const handleDeletePromo = async (id: number) => {
    const confirmDelete = window.confirm("Yakin ingin menghapus promo ini?");

    if (!confirmDelete) return;

    try {
      await deletePromo(id);

      await getPromos();

      setOpenMenuId(null);

      alert("Promo berhasil dihapus.");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return {
    promos,
    setPromos,

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

    // modal
    isModalOpen,
    setIsModalOpen,

    editingId,
    setEditingId,

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
  };
}
