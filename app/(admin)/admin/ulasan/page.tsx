"use client";
import Image from "next/image";
import {
  LuSlidersHorizontal,
  LuChevronDown,
  LuStar,
  LuMessageSquare,
  LuSmile,
  LuFrown,
  LuMessageSquareOff,
  LuChevronLeft,
  LuChevronRight,
  LuEllipsisVertical,
  LuMessageSquareReply,
  LuPencil,
  LuSparkles,
  LuThumbsUp,
  LuLightbulb,
} from "react-icons/lu";
import { useState } from "react";
import {
  reviews,
  tabs,
  stats,
  ratingBreakdown,
  totalRatingCount,
  topProducts,
} from "./review.data";

import ReviewStats from "./components/ReviewStats";
import ReviewFilter from "./components/ReviewFilter";
import ReviewList from "./components/ReviewList";
import ReviewPagination from "./components/ReviewPagination";
import RatingSummary from "./components/RatingSummary";
import TopReviewedProducts from "./components/TopReviewedProducts";
import ReviewInsight from "./components/ReviewInsight";

export default function UlasanPage() {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("Semua Ulasan");

  const filteredReviews = reviews.filter((review) => {
    const keyword = search.toLowerCase();
    const matchesSearch =
      review.name.toLowerCase().includes(keyword) ||
      review.review.toLowerCase().includes(keyword) ||
      review.menu.some((item) => item.toLowerCase().includes(keyword));
    const matchesTab =
      activeTab === "Semua Ulasan" ||
      (activeTab === "Belum Dibalas" && !review.replied) ||
      (activeTab === "Ulasan Positif" && review.rating >= 4) ||
      (activeTab === "Ulasan Negatif" && review.rating <= 2);
    return matchesSearch && matchesTab;
  });

  const totalPages = Math.ceil(filteredReviews.length / itemsPerPage) || 1;
  const paginatedReviews = filteredReviews.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const reviewTabs = tabs.map((tab) => {
    let count = 0;

    switch (tab.key) {
      case "Semua Ulasan":
        count = reviews.length;
        break;

      case "Belum Dibalas":
        count = reviews.filter((r) => !r.replied).length;
        break;

      case "Ulasan Positif":
        count = reviews.filter((r) => r.rating >= 4).length;
        break;

      case "Ulasan Negatif":
        count = reviews.filter((r) => r.rating <= 2).length;
        break;
    }

    return {
      ...tab,
      label: `${tab.title} (${count})`,
    };
  });
  return (
    <>
      {/* Top Stats Cards */}
      <ReviewStats stats={stats} />

      {/* Tabs + Filter */}
      <ReviewFilter
        tabs={reviewTabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        setCurrentPage={setCurrentPage}
      />

      {/* Main content: reviews (left) + sidebar (right) */}
      <div className="mt-6 grid grid-cols-[2.6fr_1fr] gap-6">
        {/* LEFT: review list + pagination */}
        <div>
          <ReviewList reviews={paginatedReviews} />

          {/* Pagination */}
          <ReviewPagination
            currentPage={currentPage}
            totalPages={totalPages}
            itemsPerPage={itemsPerPage}
            totalItems={filteredReviews.length}
            onPageChange={setCurrentPage}
          />
        </div>

        {/* RIGHT: sidebar */}
        <div className="space-y-5">
          {/* Ringkasan Rating */}
          <RatingSummary
            averageRating={4.8}
            totalRatingCount={totalRatingCount}
            ratingBreakdown={ratingBreakdown}
          />

          {/* Top Produk Diulas */}
          <TopReviewedProducts products={topProducts} />

          {/* Insight Ulasan */}
          <ReviewInsight />
        </div>
      </div>
    </>
  );
}
