"use client";
import Image from "next/image";
import {
  LuUtensilsCrossed,
  LuEye,
  LuHeart,
  LuPackage,
  LuStar,
  LuPlus,
  LuPencil,
  LuLightbulb,
  LuSparkles,
  LuTrash2,
  LuEllipsisVertical,
  LuSearch,
  LuFilter,
  LuChevronLeft,
  LuChevronRight,
} from "react-icons/lu";
import { UploadCloudIcon } from "lucide-react";
import { useMemo, useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import ProductModal from "./ProductModal";
export default function ProductPage() {
  const [menuData, setMenuData] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
  });

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const [sortBy, setSortBy] = useState("newest");

  const [productImage, setProductImage] = useState<File | null>(null);

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

    // Cari UMKM milik owner
    const { data: umkm, error: umkmError } = await supabase
      .from("umkm")
      .select("id")
      .eq("owner_id", user.id)
      .single();

    if (umkmError) {
      alert("UMKM tidak ditemukan.");
      return;
    }

    // Upload foto
    const fileName = `${user.id}/${Date.now()}-${productImage.name}`;

    const { error: uploadError } = await supabase.storage
      .from("menus")
      .upload(fileName, productImage);

    if (uploadError) {
      alert(uploadError.message);
      return;
    }

    const {
      data: { publicUrl },
    } = supabase.storage.from("menus").getPublicUrl(fileName);

    // Simpan ke tabel menus
    const { error } = await supabase.from("menus").insert({
      umkm_id: umkm.id,
      name: menuData.name.trim(),
      description: menuData.description.trim(),
      category: menuData.category,
      price: Number(menuData.price),
      image_url: publicUrl,
    });

    if (error) {
      alert(error.message);
      return;
    }
    await getProducts();
    alert("Produk berhasil ditambahkan.");

    setMenuData({
      name: "",
      description: "",
      category: "",
      price: "",
    });

    setProductImage(null);
  };
  const stats = [
    {
      title: "Total Produk",
      value: "1.240",
      growth: "+18.5%",
      icon: LuUtensilsCrossed,
      color: "bg-[#E8F7EF] text-[#158A62]",
    },
    {
      title: "Total Dilihat",
      value: "187",
      growth: "+12.3%",
      icon: LuEye,
      color: "bg-[#E8F7EF] text-[#158A62]",
    },
    {
      title: "Total Favorit",
      value: "12",
      growth: "+0.2%",
      icon: LuHeart,
      color: "bg-[#FFF0F3] text-[#E11D48]",
    },
    {
      title: "Produk Unggulan",
      value: "312",
      growth: "+22.1%",
      icon: LuPackage,
      color: "bg-[#EAF2FF] text-[#2563EB]",
    },
    {
      title: "Rata-rata Rating",
      value: "4.8 / 5",
      growth: "+7.6%",
      icon: LuStar,
      color: "bg-[#FFF4E5] text-[#F59E0B]",
    },
  ];
  const [activeCategory, setActiveCategory] = useState("Semua Produk");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;
  const [products, setProducts] = useState<any[]>([]);
  const getProducts = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;

    // Ambil UMKM milik owner
    const { data: umkm, error: umkmError } = await supabase
      .from("umkm")
      .select("id, name")
      .eq("owner_id", user.id)
      .single();

    if (umkmError) {
      console.error(umkmError);
      return;
    }

    // Ambil semua menu
    const { data, error } = await supabase
      .from("menus")
      .select("*")
      .eq("umkm_id", umkm.id)
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
      return;
    }

    setProducts(
      data.map((item) => ({
        ...item,
        store: umkm.name,
        image: item.image_url,
      })),
    );
  };

  const handleDeleteProduct = async (id: number) => {
    const confirmDelete = window.confirm("Yakin ingin menghapus produk ini?");

    if (!confirmDelete) return;

    const { error } = await supabase.from("menus").delete().eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    // Refresh data
    getProducts();

    alert("Produk berhasil dihapus.");
  };

  useEffect(() => {
    getProducts();
  }, []);

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
    let result = products.filter((item) => {
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

  const popularProducts = [
    {
      rank: 1,
      name: "Nasi Ayam Geprek",
      views: 324,
      percent: 42,
      image: "/assets/umkm/makanan/dapurnona/ayamgeprek.jpeg",
    },
    {
      rank: 2,
      name: "Es Teh Manis",
      views: 210,
      percent: 27,
      image: "/assets/umkm/makanan/dapurnona/esteh.jpeg",
    },
    {
      rank: 3,
      name: "Ayam Penyet",
      views: 145,
      percent: 18,
      image: "/assets/umkm/makanan/dapurnona/ayamgeprek.jpeg",
    },
    {
      rank: 4,
      name: "Sambal Terasi",
      views: 132,
      percent: 9,
      image: "/assets/umkm/makanan/dapurnona/sambalcumi.jpeg",
    },
    {
      rank: 5,
      name: "Ayam Penyet",
      views: 145,
      percent: 6,
      image: "/assets/umkm/makanan/dapurnona/ayamgeprek.jpeg",
    },
    {
      rank: 6,
      name: "Ayam Penyet",
      views: 145,
      percent: 4,
      image: "/assets/umkm/makanan/dapurnona/ayamgeprek.jpeg",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isEditMode, setIsEditMode] = useState(false);
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
  const [editingId, setEditingId] = useState<number | null>(null);

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
  const handleUpdateProduct = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      alert("Silakan login kembali.");
      return;
    }

    if (!editingId) {
      alert("Produk tidak ditemukan.");
      return;
    }

    if (!menuData.name || !menuData.category || !menuData.price) {
      alert("Lengkapi semua data.");
      return;
    }

    let imageUrl: string | undefined;

    // Kalau user upload gambar baru
    if (productImage) {
      const fileName = `${user.id}/${Date.now()}-${productImage.name}`;

      const { error: uploadError } = await supabase.storage
        .from("menus")
        .upload(fileName, productImage);

      if (uploadError) {
        alert(uploadError.message);
        return;
      }

      const {
        data: { publicUrl },
      } = supabase.storage.from("menus").getPublicUrl(fileName);

      imageUrl = publicUrl;
    }

    const payload: any = {
      name: menuData.name.trim(),
      description: menuData.description.trim(),
      category: menuData.category,
      price: Number(menuData.price),
    };

    // update image hanya jika upload baru
    if (imageUrl) {
      payload.image_url = imageUrl;
    }

    const { error } = await supabase
      .from("menus")
      .update(payload)
      .eq("id", editingId);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Produk berhasil diperbarui.");

    await getProducts();

    setMenuData({
      name: "",
      description: "",
      category: "",
      price: "",
    });

    setProductImage(null);

    setEditingId(null);
    setIsEditMode(false);
    setIsModalOpen(false);
  };
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);
  return (
    <>
      <div className="flex flex-col gap-8">
        {/* Top Stats Cards */}
        <div className="grid grid-cols-5 gap-4">
          {stats.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-[#EAECF0] bg-white p-5"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`flex h-15 w-15 shrink-0 items-center justify-center rounded-xl ${item.color}`}
                >
                  <item.icon size={30} />
                </div>

                <div>
                  <p className="text-[14px] font-medium text-[#344054]">
                    {item.title}
                  </p>

                  <h2 className="mt-1 text-[30px] font-bold leading-none text-[#101828]">
                    {item.value}
                  </h2>

                  <div className="mt-2 flex items-center gap-1 text-[12px]">
                    <span className="font-semibold text-[#16A34A]">
                      ▲ {item.growth}
                    </span>

                    <span className="text-[#667085]">dari minggu lalu</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between mt-8">
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
                <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-[#158A62]" />
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
              className="flex h-11 items-center gap-2 rounded-xl border border-[#D0D5DD] px-4 text-[14px] font-medium text-[#344054] transition hover:bg-[#F9FAFB]"
            >
              <LuFilter size={16} />
              Filter
            </button>

            {isFilterOpen && (
              <div className="absolute right-0 top-14 z-50 w-64 rounded-2xl border border-[#EAECF0] bg-white p-5 shadow-xl">
                <h3 className="mb-4 text-[15px] font-semibold">
                  Urutkan Produk
                </h3>

                <div className="space-y-3">
                  {[
                    {
                      label: "Produk Terbaru",
                      value: "newest",
                    },
                    {
                      label: "Harga Termurah",
                      value: "lowest",
                    },
                    {
                      label: "Harga Termahal",
                      value: "highest",
                    },
                    {
                      label: "Nama A-Z",
                      value: "az",
                    },
                    {
                      label: "Nama Z-A",
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
          <button
            onClick={() => {
              setIsEditMode(false);
              setIsModalOpen(true);
            }}
            className="flex h-11 items-center gap-2 rounded-xl bg-[#158A62] px-6 text-[14px] font-semibold text-white transition hover:bg-[#127553]"
          >
            <LuPlus size={18} />
            Tambah Produk
          </button>

          {/* Add Product */}
          <ProductModal
            open={isModalOpen}
            onClose={() => {
              resetForm();
              setIsModalOpen(false);
            }}
            menuData={menuData}
            setMenuData={setMenuData}
            productImage={productImage}
            handleProductImage={handleProductImage}
            onSubmit={isEditMode ? handleUpdateProduct : handleSaveProduct}
            isEdit={isEditMode}
          />
        </div>
      </div>

      <div className="mt-8 grid grid-cols-[2.8fr_1fr] gap-6">
        {/* Left */}
        <div>
          <div className="overflow-hidden rounded-2xl border border-[#EAECF0] bg-white">
            {/* Header */}
            <div className="grid grid-cols-[3fr_1fr_1fr_1fr_1fr_90px] border-b border-[#EAECF0] bg-[#FCFCFD] px-6 py-4 text-[15px] font-semibold text-[#667085]">
              <p>Produk</p>
              <p>Kategori</p>
              <p>Harga</p>
              <p>Dilihat</p>
              <p>Favorit</p>
              <p className="text-center">Aksi</p>
            </div>

            {/* Body */}
            {paginatedProducts.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-[3fr_1fr_1fr_1fr_1fr_90px] items-center border-b border-[#EAECF0] px-6 py-5 last:border-none"
              >
                {/* Produk */}
                <div className="flex items-center gap-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={70}
                    height={70}
                    className="rounded-sm object-cover"
                  />

                  <div>
                    <h3 className="text-[18px] font-semibold text-[#101828]">
                      {item.name}
                    </h3>

                    <p className="mt-1 text-[14px] text-[#667085]">
                      {item.description}
                    </p>

                    <p className="text-[14px] text-[#667085]">{item.store}</p>
                  </div>
                </div>

                {/* Kategori */}
                <div>
                  <span className="rounded-full bg-[#E8F7EF] px-3 py-1 text-[12px] font-semibold text-[#158A62]">
                    {item.category}
                  </span>
                </div>

                {/* Harga */}
                <p className="text-[15px] text-[#344054]">
                  Rp {Number(item.price).toLocaleString("id-ID")}
                </p>

                {/* Dilihat */}
                <p className="text-[15px] text-[#344054]">{item.views}</p>

                {/* Favorit */}
                <p className="text-[15px] text-[#344054]">{item.favorite}</p>

                {/* Aksi */}
                <div className="flex justify-center gap-2">
                  <button
                    onClick={() => handleEditProduct(item)}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#EAECF0] hover:bg-[#F9FAFB]"
                  >
                    <LuPencil size={16} className="text-[#158A62]" />
                  </button>

                  <button
                    onClick={() => handleDeleteProduct(item.id)}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#EAECF0] hover:bg-[#FEF2F2]"
                  >
                    <LuTrash2 size={16} className="text-[#DC2626]" />
                  </button>

                  <div className="relative">
                    <button
                      onClick={() =>
                        setOpenMenuId(openMenuId === item.id ? null : item.id)
                      }
                      className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#EAECF0] hover:bg-[#F9FAFB]"
                    >
                      <LuEllipsisVertical
                        size={16}
                        className="text-[#667085]"
                      />
                    </button>

                    {openMenuId === item.id && (
                      <div className="absolute right-0 top-10 z-50 w-44 rounded-xl border border-[#EAECF0] bg-white shadow-lg">
                        <button
                          className="w-full px-4 py-3 text-left hover:bg-[#F9FAFB]"
                          onClick={() => {
                            navigator.clipboard.writeText(String(item.id));
                            alert("ID produk berhasil disalin.");
                            setOpenMenuId(null);
                          }}
                        >
                          Salin ID Produk
                        </button>

                        <button
                          className="w-full px-4 py-3 text-left hover:bg-[#F9FAFB]"
                          onClick={() => {
                            alert(
                              "🚧 Coming Soon!\n\nFitur Lihat Detail Produk sedang dalam pengembangan.",
                            );
                            setOpenMenuId(null);
                          }}
                        >
                          Lihat Detail
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between mt-5">
            <p className="text-[14px] text-[#667085]">
              Menampilkan{" "}
              <span className="font-medium">
                {(currentPage - 1) * itemsPerPage + 1}
              </span>{" "}
              –
              <span className="font-medium">
                {" "}
                {Math.min(currentPage * itemsPerPage, filteredProducts.length)}
              </span>{" "}
              dari{" "}
              <span className="font-medium">{filteredProducts.length}</span>{" "}
              produk
            </p>

            <div className="flex items-center gap-2">
              {/* Prev */}
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => p - 1)}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#D0D5DD] disabled:cursor-not-allowed disabled:opacity-40"
              >
                <LuChevronLeft size={18} />
              </button>

              {/* Page Number */}
              {Array.from({ length: totalPages }).map((_, index) => {
                const page = index + 1;

                return (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`flex h-10 w-10 items-center justify-center rounded-lg font-semibold transition ${
                      currentPage === page
                        ? "bg-[#158A62] text-white"
                        : "border border-[#D0D5DD] text-[#344054] hover:bg-[#F9FAFB]"
                    }`}
                  >
                    {page}
                  </button>
                );
              })}

              {/* Next */}
              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => p + 1)}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#D0D5DD] disabled:cursor-not-allowed disabled:opacity-40"
              >
                <LuChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="space-y-5">
          {/* Produk Terpopuler */}
          <div className="rounded-2xl border border-[#EAECF0] bg-white p-5">
            <h3 className="mb-5 text-[18px] font-semibold text-[#0B0F1F]">
              Produk Terpopuler
            </h3>

            <div className="space-y-4">
              {popularProducts.map((item) => (
                <div
                  key={item.rank}
                  className="border-b border-[#EAECF0] pb-4 last:border-none"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-4 text-[18px] font-semibold">
                      {item.rank}
                    </span>

                    <Image
                      src={item.image}
                      alt={item.name}
                      width={70}
                      height={70}
                      className="rounded-sm object-cover"
                    />

                    <div className="flex-1">
                      <h4 className="text-[15px] font-semibold">{item.name}</h4>

                      <p className="text-[13px] text-[#667085]">
                        {item.views} dilihat
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center gap-3 pl-[90px]">
                    <div className="h-[4px] flex-1 rounded-full bg-[#EEF2F6]">
                      <div
                        className="h-full rounded-full bg-[#158A62]"
                        style={{ width: `${item.percent}%` }}
                      />
                    </div>

                    <span className="w-8 text-right text-[12px] text-[#667085]">
                      {item.percent}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Insight */}
          <div className="rounded-2xl border border-[#EAECF0] bg-white p-5">
            <h3 className="mb-5 text-[18px] font-semibold text-[#0B0F1F]">
              Insight Produk
            </h3>

            <div className="grid grid-cols-3 gap-3">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E8F7EF]">
                  <LuEye className="text-[#158A62]" />
                </div>

                <p className="mt-2 text-[11px] text-[#667085]">
                  Produk Paling Dilihat
                </p>

                <p className="mt-2 text-[13px] font-medium">Nasi Ayam Geprek</p>

                <h4 className="mt-2 text-[18px] font-bold">560</h4>

                <p className="text-[13px] text-[#667085]">kali dilihat</p>
              </div>

              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FDECEF]">
                  <LuHeart className="text-[#E11D48]" />
                </div>

                <p className="mt-2 text-[11px] text-[#667085]">
                  Produk Paling Favorit
                </p>

                <p className="mt-2 text-[13px] font-medium">Nasi Ayam Geprek</p>

                <h4 className="mt-2 text-[20px] font-bold">124</h4>

                <p className="text-[13px] text-[#667085]">kali difavoritkan</p>
              </div>

              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF4E5]">
                  <LuStar className="text-[#F59E0B]" />
                </div>

                <p className="mt-2 text-[11px] text-[#667085]">
                  Rating Tertinggi
                </p>

                <p className="mt-8 text-[13px] font-medium">Paket Keluarga</p>

                <h4 className="mt-5 text-xl font-bold">
                  4.9
                  <span className="text-[15px]"> /5</span>
                </h4>

                <p className="text-[13px] text-[#667085]">dari 56 ulasan</p>
              </div>
            </div>
          </div>

          {/* Tips */}
          <div className="rounded-2xl border border-[#EAECF0] bg-white p-5">
            <div className="flex items-center gap-2">
              <LuLightbulb size={22} className="text-[#F59E0B]" />

              <h3 className="text-[24px] font-semibold">Tips Menarik</h3>
            </div>

            <p className="mt-5 text-[15px] leading-7 text-[#344054]">
              Tambahkan foto produk berkualitas tinggi dan deskripsi yang
              menarik untuk meningkatkan minat pelanggan.
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
