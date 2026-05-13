"use client";

import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa6";
import Swal from "sweetalert2";
import { addToWishlist, getWishlist, removeFromWishlist } from "@/lib/wishlist";

interface WishlistCardProps {
  id: number;
  name: string;
}

export default function WishlistCard({ id, name }: WishlistCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const ids = getWishlist();
    setIsWishlisted(ids.includes(id));
  }, [id]);

  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (isWishlisted) {
      removeFromWishlist(id);
      setIsWishlisted(false);
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
      setIsWishlisted(true);
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

  if (!mounted) return <div className="absolute top-3 right-3 p-2 w-8 h-8 z-10" />; // Prevent layout shift during hydration

  return (
    <button
      className={`absolute top-3 right-3 p-2 rounded-full transition z-10 ${isWishlisted
          ? "bg-red-100 text-red-600"
          : "bg-white text-gray-600 hover:bg-gray-100"
        }`}
      onClick={toggleWishlist}
    >
      <FaHeart />
    </button>
  );
}