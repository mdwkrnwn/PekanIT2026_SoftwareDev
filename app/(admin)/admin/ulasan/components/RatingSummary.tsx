"use client";

import { LuStar } from "react-icons/lu";
import {
  RatingBreakdownItem,
} from "../review.type";

interface RatingSummaryProps {
  averageRating: number;
  totalRatingCount: number;
  ratingBreakdown: RatingBreakdownItem[];
}

export default function RatingSummary({
  averageRating,
  totalRatingCount,
  ratingBreakdown,
}: RatingSummaryProps) {
  return (
    <div className="rounded-2xl border border-[#EAECF0] bg-white p-5">
      <h3 className="text-[15px] font-semibold text-[#101828]">
        Ringkasan Rating
      </h3>

      <div className="mt-4 flex items-center gap-3">
        <span className="text-[30px] font-bold text-[#101828]">
          {averageRating}
        </span>

        <span className="text-[15px] text-[#667085]">
          / 5
        </span>

        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, index) => (
            <LuStar
              key={index}
              size={16}
              className="fill-[#F59E0B] text-[#F59E0B]"
            />
          ))}
        </div>
      </div>

      <p className="text-[12px] text-[#98A2B3]">
        ({totalRatingCount} ulasan)
      </p>

      <div className="mt-4 space-y-2">
        {ratingBreakdown.map((item) => (
          <div
            key={item.star}
            className="flex items-center gap-2"
          >
            <span className="flex w-4 items-center gap-1 text-[12px] text-[#344054]">
              {item.star}
            </span>

            <LuStar
              size={12}
              className="fill-[#F59E0B] text-[#F59E0B]"
            />

            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#F2F4F7]">
              <div
                className="h-full rounded-full bg-[#158A62]"
                style={{
                  width: `${
                    totalRatingCount === 0
                      ? 0
                      : (item.count / totalRatingCount) * 100
                  }%`,
                }}
              />
            </div>

            <span className="w-4 text-right text-[12px] text-[#667085]">
              {item.count}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}