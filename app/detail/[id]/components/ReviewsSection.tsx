"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState, useMemo } from "react";
import {
  FaStar,
  FaThumbsUp,
  FaCheckCircle,
} from "react-icons/fa";

interface Review {
  id: number;
  name: string;
  comment: string;
  rating: number;
  verified?: boolean;
  images?: string[];
  timeago?: string;
  likes?: number;
}

interface ReviewsSectionProps {
  reviews: Review[];
}

export default function ReviewsSection({
  reviews,
}: ReviewsSectionProps) {
  const [filter, setFilter] = useState("all");
  const [userLikes, setUserLikes] = useState<Record<number, boolean>>({});

  // Filter reviews based on selected filter
  const filteredReviews = useMemo(() => {
    let result = [...reviews];

    if (filter === "verified") {
      result = result.filter((r) => r.verified);
    } else if (filter === "photo") {
      result = result.filter((r) => r.images && r.images.length > 0);
    }

    // Sort by latest
    return result.sort((a, b) => {
      if (filter === "latest" || filter === "all") {
        return b.id - a.id;
      }
      return 0;
    });
  }, [reviews, filter]);

  // Calculate recommendation percentage
  const recommendationPercentage = useMemo(() => {
    if (reviews.length === 0) return 0;
    const fiveAndFourStars = reviews.filter((r) => r.rating >= 4).length;
    return Math.round((fiveAndFourStars / reviews.length) * 100);
  }, [reviews]);

  const toggleLike = (id: number) => {
    setUserLikes((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="space-y-6">
      {/* Filter Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 border-b border-gray-200">
        {[
          { id: "all", label: "Semua ulasan", icon: "📋" },
          { id: "verified", label: "Verified Visit", icon: "✓" },
          { id: "photo", label: "Dengan Foto", icon: "📸" },
          { id: "latest", label: "Terbaru", icon: "⏱️" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setFilter(tab.id)}
            className={`px-4 py-2 whitespace-nowrap text-sm font-medium transition-all ${filter === tab.id
              ? "text-primary border-b-2 border-primary"
              : "text-gray-600 hover:text-gray-900"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Recommendation Box */}
      <div className="bg-linear-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-4 flex items-center gap-3">
        <div className="text-2xl">👍</div>
        <div>
          <p className="font-semibold text-gray-900">
            {recommendationPercentage}% pengunjung merekomendasikan
          </p>
          <p className="text-xs text-gray-600">Berdasarkan rating 4-5 bintang</p>
        </div>
      </div>

      {/* Reviews List */}
      <div className="grid grid-cols-2 gap-8">
        {filteredReviews.length === 0 ? (
          <div className="rounded-2xl p-8 text-center bg-gray-50 border border-border col-span-2">
            <p className="text-gray-600 text-sm">
              {filter === "verified"
                ? "Belum ada review dari Verified Visit"
                : filter === "photo"
                  ? "Belum ada review dengan foto"
                  : "Belum ada ulasan"}
            </p>
          </div>
        ) : (
          filteredReviews.map((review) => (
            <div
              key={review.id}
              className={cn("rounded-2xl p-5 bg-white border border-gray-200 hover:shadow-md transition-shadow",
                filteredReviews.length % 2 != 0 && "last:col-span-2 last:justify-center"
              )}
            >
              {/* Header */}
              <div className="flex items-start gap-3 mb-3">
                <Image
                  width={40}
                  height={40}
                  src="/products/user.jpg"
                  alt={review.name}
                  className="w-10 h-10 rounded-full object-cover"
                />

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-gray-900">
                      {review.name}
                    </h4>
                    {review.verified && (
                      <div className="flex items-center gap-1 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                        <FaCheckCircle size={10} />
                        Verified Visit
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-0.5 text-yellow-400">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <FaStar key={i} size={12} />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500">
                        {review.timeago || "1 hari lalu"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comment */}
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                {review.comment}
              </p>

              {/* Images */}
              {review.images && review.images.length > 0 && (
                <div className="flex gap-2 mb-3 overflow-x-auto">
                  {review.images.map((img, idx) => (
                    <div key={idx} className="relative w-20 h-20 shrink-0">
                      <Image
                        src={img}
                        alt={`Review ${idx + 1}`}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* Likes */}
              <button
                onClick={() => toggleLike(review.id)}
                className={`flex items-center gap-2 text-sm font-medium transition-colors ${userLikes[review.id]
                  ? "text-blue-500"
                  : "text-gray-600 hover:text-blue-500"
                  }`}
              >
                <FaThumbsUp size={14} />
                <span>{(review.likes || 0) + (userLikes[review.id] ? 1 : 0)}</span>
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
