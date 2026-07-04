"use client";

import { useSyncExternalStore } from "react";
import { supabase } from "@/lib/supabase";
import { FaHeart } from "react-icons/fa6";

import Swal from "sweetalert2";

import {
  addToWishlist,
  removeFromWishlist,
  subscribeWishlist,
  getWishlistSnapshot,
} from "@/lib/wishlist";

interface WishlistCardProps {
  id: number;
  name: string;
}

const EMPTY: number[] = [];

export default function WishlistCard({ id, name }: WishlistCardProps) {
  const wishlist = useSyncExternalStore(
    subscribeWishlist,
    getWishlistSnapshot,
    () => EMPTY,
  );

  const isWishlisted = wishlist.includes(id);

  const toggleWishlist = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // Cek login
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      Swal.fire({
        icon: "warning",
        title: "Login Diperlukan",
        text: "Silakan login terlebih dahulu untuk menambahkan UMKM ke favorit.",
        confirmButtonText: "Mengerti",
        confirmButtonColor: "#158A62",
      });

      return;
    }

    // Sudah login
    if (isWishlisted) {
      removeFromWishlist(id);

      Swal.fire({
        icon: "success",
        title: "Dihapus",
        text: `${name} dihapus dari favorit 💔`,
        timer: 1500,
        showConfirmButton: false,
        position: "top-end",
        toast: true,
        background: "#FEF2F2",
        color: "#991B1B",
      });
    } else {
      addToWishlist(id);

      Swal.fire({
        icon: "success",
        title: "Ditambahkan",
        text: `${name} berhasil ditambahkan ke favorit ❤️`,
        timer: 1500,
        showConfirmButton: false,
        position: "top-end",
        toast: true,
        background: "#F0FDF4",
        color: "#065F46",
      });
    }
  };

  return (
    <button
      className={`absolute top-3 right-3 p-2 rounded-full transition z-10 ${
        isWishlisted
          ? "bg-blue-100 text-primary"
          : "bg-white text-gray-600 hover:bg-gray-100"
      }`}
      onClick={toggleWishlist}
    >
      <FaHeart />
    </button>
  );
}
