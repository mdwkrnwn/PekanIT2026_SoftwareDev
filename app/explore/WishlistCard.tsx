"use client";

import { useSyncExternalStore } from "react";

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

export default function WishlistCard({
  id,
  name,
}: WishlistCardProps) {
  const wishlist = useSyncExternalStore(
    subscribeWishlist,
    getWishlistSnapshot,
    () => EMPTY,
  );

  const isWishlisted = wishlist.includes(id);

  const toggleWishlist = (
    e: React.MouseEvent,
  ) => {
    e.preventDefault();
    e.stopPropagation();

    if (isWishlisted) {
      removeFromWishlist(id);

      Swal.fire({
        icon: "error",
        title: "Dihapus!",
        text: `${name} dihapus dari wishlist 💔`,
        timer: 1500,
        showConfirmButton: false,
        position: "top-end",
        toast: true,
        background: "#fef2f2",
        color: "#991b1b",
      });
    } else {
      addToWishlist(id);

      Swal.fire({
        icon: "success",
        title: "Ditambahkan!",
        text: `${name} berhasil ditambahkan ke wishlist ❤️`,
        timer: 1500,
        showConfirmButton: false,
        position: "top-end",
        toast: true,
        background: "#f0fdf4",
        color: "#065f46",
      });
    }
  };

  return (
    <button
      className={`absolute top-3 right-3 p-2 rounded-full transition z-10 ${isWishlisted
          ? "bg-blue-100 text-blue-600"
          : "bg-white text-gray-600 hover:bg-gray-100"
        }`}
      onClick={toggleWishlist}
    >
      <FaHeart />
    </button>
  );
}