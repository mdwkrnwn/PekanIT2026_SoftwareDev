"use client";

import { useState, useMemo } from "react";
import { UMKM } from "@/data/UMKM";
import { addToWishlist, removeFromWishlist } from "@/lib/wishlist";
import Swal from "sweetalert2";
import { useWishlist } from "@/hooks/useWishlist";
import GallerySection from "./components/GallerySection";
import InfoPanel from "./components/InfoPanel";
import ReviewsSection from "./components/ReviewsSection";
import DiscussionSection from "./components/DiscussionSection";
import RatingSummary from "./components/RatingSummary";
import SimilarUMKM from "./components/SimilarUMKM";
import ReviewForm from "./components/ReviewForm";

export default function ProductPage({ product, review, discussions }: {
  product: typeof UMKM[number]
  review: Array<{
    id: number;
    name: string;
    comment: string;
    rating: number;
    verified?: boolean;
    images?: string[];
    timeago?: string;
    likes?: number;
  }>;
  discussions: Array<{
    id: number;
    name: string;
    comment: string;
    replies: Array<{ id: number; name: string; comment: string }>;
  }>;
}) {
  const [mainImage, setMainImage] = useState(product?.gallery?.[0]);
  const wishes = useWishlist().map(item => item.id);
  const [wishlist, setWishlist] = useState(wishes);
  const [tab, setTab] = useState("reviews");
  const [reviews, setReviews] = useState(review);
  const [discussion, setDiscussion] = useState(discussions);

  const toggleWishlist = (id: number, name: string) => {
    const isInWishlist = wishlist.includes(id);
    if (isInWishlist) {
      removeFromWishlist(id);
      setWishlist((prev) => prev.filter((x) => x !== id));
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
      setWishlist((prev) => [...prev, id]);
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

  const filtered = useMemo(() => {
    if (!product) return [] as typeof UMKM;
    const base = UMKM.filter(
      (u) => u.category === product.category && u.id !== product.id
    );
    return base.filter((u) => u.name.toLowerCase());
  }, [product]);

  const isWish = wishlist.includes(product.id);
  const rating = (
    review?.reduce((sum: number, r: { rating: number }) => sum + r.rating, 0) / review?.length
  ).toFixed(1);


  return (
    <>
      <div className="w-[86vw]">
        {/* Grid Utama */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 pb-8">
          <GallerySection
            mainImage={mainImage}
            setMainImage={setMainImage}
            gallery={product.gallery}
            productName={product.name}
            description={product.description}

          />

          <InfoPanel
            product={product}
            isWish={isWish}
            onToggleWishlist={toggleWishlist} rating={rating}
            reviewCount={review?.length || 0}
          />
        </div>

        {/* Tabs Section */}
        <section className="mt-14">
          {/* Tabs Navigation */}
          <div className="flex gap-3 pb-2 overflow-x-auto">
            {["reviews", "discussion"].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-5 py-2 rounded-full text-sm font-semibold capitalize transition-all whitespace-nowrap ${tab === t
                  ? "bg-primary text-white shadow-md"
                  : "text-muted-foreground outline-1 outline-border hover:bg-primary/5 hover:text-primary"
                  }`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="mt-8">
            {tab === "reviews" && (
              <div className="flex flex-col gap-8">
                {/* Top Section: Summary (Left) and Form (Right) */}
                <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6  rounded-xl bg-card">
                  <RatingSummary reviews={reviews} />

                  <ReviewForm
                    onSubmit={(newReview) => {
                      setReviews((prev) => [newReview, ...prev]);
                    }}
                  />
                </div>

                {/* Bottom Section: Filters and Review List */}
                <div className="w-full">
                  <ReviewsSection
                    reviews={reviews}
                    onUpdate={setReviews}
                  />
                </div>
              </div>
            )}

            {tab === "discussion" && (
              <DiscussionSection discussion={discussion} onUpdate={setDiscussion} />
            )}
          </div>
        </section>

        {/* Similar UMKM Section */}
        <SimilarUMKM
          filtered={filtered}
          wishlist={wishlist}
          onToggleWishlist={toggleWishlist}
        />
      </div>
    </>
  );
}
