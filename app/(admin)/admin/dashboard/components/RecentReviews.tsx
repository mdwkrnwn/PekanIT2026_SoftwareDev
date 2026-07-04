"use client";

import Image from "next/image";
import { LuStar } from "react-icons/lu";
import { DashboardReview } from "../dashboard.type";

interface RecentReviewsProps {
  reviews: DashboardReview[];
}

export default function RecentReviews({
  reviews,
}: RecentReviewsProps) {
  return (
    <div className="rounded-2xl border border-[#EAECF0] bg-white p-6 lg:col-span-2">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-[25px] font-semibold text-[#101828]">
          Ulasan Terbaru
        </h3>

        <button
          onClick={() => alert("🚀 Coming Soon!")}
          className="font-semibold text-[#158A62] hover:underline"
        >
          Lihat semua
        </button>
      </div>

      {/* List */}
      <div className="space-y-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="flex items-start gap-5 border-b border-[#EAECF0] pb-6 last:border-none last:pb-0"
          >
            <Image
              src={review.image}
              alt={review.name}
              width={70}
              height={70}
              className="rounded-full object-cover"
            />

            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-4">
                    <h4 className="text-[20px] font-semibold text-[#101828]">
                      {review.name}
                    </h4>

                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <LuStar
                          key={i}
                          size={18}
                          className="fill-[#F59E0B] text-[#F59E0B]"
                        />
                      ))}

                      <span className="ml-2 rounded-full bg-[#E8F7EF] px-2 py-0.5 text-xs font-semibold text-[#158A62]">
                        {review.rating.toFixed(1)}
                      </span>
                    </div>
                  </div>

                  <p className="mt-2 text-[17px] text-[#64748B]">
                    {review.comment}
                  </p>
                </div>

                <span className="text-sm text-[#64748B]">
                  {review.time}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}