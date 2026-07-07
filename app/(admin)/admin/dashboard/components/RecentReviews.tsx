"use client";

import Image from "next/image";
import { LuStar } from "react-icons/lu";
import { DashboardReview } from "../dashboard.type";

interface RecentReviewsProps {
  reviews: DashboardReview[];
}

export default function RecentReviews({ reviews }: RecentReviewsProps) {
  return (
    <div className="rounded-2xl border border-[#EAECF0] bg-white p-6 lg:col-span-2">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
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
            className="flex items-start gap-4 md:gap-5 border-b border-[#EAECF0] pb-6 last:border-none last:pb-0"
          >
            {/* Avatar */}
            <Image
              src={review.image}
              alt={review.name}
              width={70}
              height={70}
              className="h-14 w-14 md:h-[70px] md:w-[70px] rounded-full object-cover shrink-0"
            />

            {/* Content */}
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                <div className="flex-1">
                  {/* Nama + Rating */}
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                    <h4 className="text-lg md:text-[20px] font-semibold text-[#101828]">
                      {review.name}
                    </h4>

                    <div className="flex items-center gap-1 flex-wrap">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <LuStar
                          key={i}
                          size={16}
                          className="fill-[#F59E0B] text-[#F59E0B] md:w-[18px] md:h-[18px]"
                        />
                      ))}

                      <span className="ml-2 rounded-full bg-[#E8F7EF] px-2 py-0.5 text-xs font-semibold text-[#158A62]">
                        {review.rating.toFixed(1)}
                      </span>
                    </div>
                  </div>

                  {/* Komentar */}
                  <p className="mt-2 break-words text-[15px] md:text-[17px] text-[#64748B] leading-6">
                    {review.comment}
                  </p>
                </div>

                {/* Waktu */}
                <span className="text-xs md:text-sm text-[#64748B] whitespace-nowrap">
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
