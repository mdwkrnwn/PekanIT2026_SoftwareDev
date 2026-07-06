"use client";

import { useState, useEffect } from "react";
import StoreInfo from "./components/StoreInfo";
import { categoryIcons } from "@/lib/category-icons";
import StoreDescription from "./components/StoreDescription";
import OperatingHours from "./components/OperatingHours";
import StoreSummary from "./components/StoreSummary";
import StoreGallery from "./components/StoreGallery";
import AccountSettings from "./components/AccountSettings";
import {
  LuTrendingDown,
  LuHeart,
  LuStar,
  LuMessageSquare,
} from "react-icons/lu";

import { Package } from "lucide-react";
import { supabase } from "@/lib/supabase";

type GalleryPhoto = {
  id: number;
  image_url: string;
};

type UmkmData = {
  description?: string | null;
  gallery?: GalleryPhoto[];
  categories?: {
    icon?: string | null;
  } | null;
  [key: string]: unknown;
};

export default function ProfilTokoView() {
  const [umkm, setUmkm] = useState<UmkmData | null>(null);
  const [loading, setLoading] = useState(true);
  const CategoryIcon =
    categoryIcons[umkm?.categories?.icon as keyof typeof categoryIcons] ||
    Package;
  useEffect(() => {
    const getUMKM = async () => {
      try {
        setLoading(true);

        const {
          data: { user },
        } = await supabase.auth.getUser();

        if (!user) return;

        const { data: umkm, error } = await supabase
          .from("umkm")
          .select(
            `
          *,
          categories(name, icon)
        `,
          )
          .eq("owner_id", user.id)
          .single();

        if (error) throw error;

        const { data: gallery, error: galleryError } = await supabase
          .from("gallery")
          .select("*")
          .eq("umkm_id", umkm.id);

        if (galleryError) throw galleryError;

        setUmkm({
          ...umkm,
          gallery,
        });
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getUMKM();
  }, []);

  const stats = [
    {
      label: "Total Dilihat",
      value: "25",
      change: "22.1%",
      icon: LuTrendingDown,
      color: "text-rose-600 bg-rose-50",
    },
    {
      label: "Total Favorit",
      value: "162",
      change: "0.2%",
      icon: LuHeart,
      color: "text-emerald-600 bg-emerald-50",
    },
    {
      label: "Rating Rata-rata",
      value: "4.8 / 5",
      change: "18.5%",
      icon: LuStar,
      color: "text-amber-600 bg-amber-50",
    },
    {
      label: "Total Ulasan",
      value: "187",
      change: "12.3%",
      icon: LuMessageSquare,
      color: "text-purple-600 bg-purple-50",
    },
  ];

  const operationalHours = [
    { day: "Senin", hours: "08.00 - 20.00", isClosed: false },
    { day: "Selasa", hours: "08.00 - 20.00", isClosed: false },
    { day: "Rabu", hours: "08.00 - 20.00", isClosed: false },
    { day: "Kamis", hours: "08.00 - 20.00", isClosed: false },
    { day: "Jumat", hours: "08.00 - 20.00", isClosed: false },
    { day: "Sabtu", hours: "08.00 - 20.00", isClosed: false },
    { day: "Minggu", hours: "Tutup", isClosed: true },
  ];

  const addPhoto = () => {
    alert("Coming Soon");
  };

  return (
    <div className="flex flex-col gap-8 text-base">
      {/* ================= ATAS: TIGA KARTU INFORMASI UTAMA ================= */}
      <section className="md:grid-cols-2 grid grid-cols-1 gap-6">
        {/* Kartu 1: Informasi Toko */}
        <StoreInfo loading={loading} umkm={umkm} CategoryIcon={CategoryIcon} />

        <StoreDescription loading={loading} description={umkm?.description} />

        <OperatingHours operationalHours={operationalHours} />

        <StoreGallery
          loading={loading}
          gallery={umkm?.gallery}
          addPhoto={addPhoto}
        />
      </section>

      {/* ================= TENGAH: RINGKASAN TOKO STATUS STATS ================= */}
      <StoreSummary stats={stats} />

      {/* ================= BAWAH: PENGATURAN AKUN LIST MENUS ================= */}
      <AccountSettings />
    </div>
  );
}
