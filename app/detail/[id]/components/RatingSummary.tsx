"use client";

import { FaStar } from "react-icons/fa";

interface RatingSummaryProps {
  reviews: Array<{
    id: number;
    name: string;
    comment: string;
    rating: number;
    verified?: boolean;
    images?: string[];
  }>;
}

export default function RatingSummary({ reviews }: RatingSummaryProps) {
  const averageRating = (
    reviews.reduce((a, b) => a + b.rating, 0) / reviews.length
  ).toFixed(1);

  const recommendationPercentage = (() => {
    if (reviews.length === 0) return 0;
    const fiveAndFourStars = reviews.filter((r) => r.rating >= 4).length;
    return Math.round((fiveAndFourStars / reviews.length) * 100);
  })();

  return (
    <aside className="rounded-2xl h-fit lg:sticky top-24 bg-background border border-border p-6 shadow-sm">
      {/* Main Rating */}
      <div className="mb-6 text-center">
        <div className="inline-flex items-baseline gap-1 mb-3">
          <div className="text-5xl font-bold text-foreground">{averageRating}</div>
          <div className="text-lg text-foreground mb-0.5">/ 5</div>
        </div>

        <div className="flex justify-center gap-1 mb-3">
          {Array.from({ length: 5 }, (_, i) => (
            <FaStar
              key={i}
              className={`${i < Math.round(parseFloat(averageRating))
                ? "text-yellow-400"
                : "text-gray-300"
                }`}
              size={16}
            />
          ))}
        </div>

        <p className="text-foreground text-sm">
          ({reviews.length}) ulasan
        </p>

        {/* Recommendation Percentage */}
        <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800 font-semibold text-sm">
            {recommendationPercentage}%
          </p>
          <p className="text-green-700 text-xs">merekomendasikan</p>
        </div>
      </div>

      {/* Distribution */}
      <div className="space-y-3 border-t border-gray-200 pt-6">
        {[5, 4, 3, 2, 1].map((star) => {
          const count = reviews.filter((r) => r.rating === star).length;
          const percentage = reviews.length > 0 ? (count / reviews.length) * 100 : 0;

          return (
            <div key={star} className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <span className="text-sm font-medium text-foreground w-4">
                  {star}
                </span>
                <FaStar className="text-xs text-yellow-400" />
              </div>

              <div className="flex-1 h-2 overflow-hidden bg-gray-200 rounded-full">
                <div
                  className="h-full bg-yellow-400 rounded-full transition-all"
                  style={{
                    width: `${percentage}%`,
                  }}
                />
              </div>

              <span className="text-foreground text-xs font-medium w-6 text-right">
                {count}
              </span>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
