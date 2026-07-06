"use client";

import { ReviewStat } from "../review.type";

interface ReviewStatsProps {
  stats: ReviewStat[];
}

export default function ReviewStats({
  stats,
}: ReviewStatsProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
      {stats.map((item) => (
        <div
          key={item.title}
          className="rounded-2xl border border-[#EAECF0] bg-white p-5"
        >
          <div className="flex items-start gap-4">
            <div
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${item.color}`}
            >
              <item.icon size={22} />
            </div>

            <div>
              <p className="text-[13px] font-medium text-[#667085]">
                {item.title}
              </p>

              <h2 className="mt-1 text-[22px] font-bold leading-none text-[#101828]">
                {item.value}
              </h2>

              <div className="mt-2 flex items-center gap-1 text-[12px]">
                <span className="font-semibold text-[#16A34A]">
                  ▲ {item.growth}
                </span>

                <span className="text-[#667085]">
                  dari minggu lalu
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}