"use client";

import { useMemo, useSyncExternalStore } from "react";

import { UMKM } from "@/data/UMKM.dummy";

import {
  getWishlistSnapshot,
  subscribeWishlist,
} from "@/lib/wishlist";

const EMPTY: number[] = [];

export function useWishlist() {
  const wishlistIds = useSyncExternalStore(
    subscribeWishlist,
    getWishlistSnapshot,
    () => EMPTY,
  );

  return useMemo(() => {
    return UMKM.filter((u) => wishlistIds.includes(u.id));
  }, [wishlistIds]);
}