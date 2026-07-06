"use client";

import Image from "next/image";
import {
  LuEllipsisVertical,
  LuMessageSquareReply,
  LuPencil,
  LuStar,
} from "react-icons/lu";
import { Review } from "../review.type";

interface ReviewListProps {
  reviews: Review[];
}

export default function ReviewList({
  reviews,
}: ReviewListProps) {
  return (
    <div className="space-y-4">
      {reviews.map((review) => (
        <div
          key={review.id}
          className="rounded-2xl border border-[#EAECF0] bg-white p-5"
        >
          <div className="flex justify-between gap-4">
            {/* LEFT */}
            <div className="flex gap-4">
              <Image
                src={review.avatar}
                alt={review.name}
                width={48}
                height={48}
                className="shrink-0 object-cover w-12 h-12 rounded-full"
              />

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-[16px] font-semibold text-[#101828]">
                    {review.name}
                  </h3>

                  {review.verified && (
                    <span className="rounded-full bg-[#E8F7EF] px-2.5 py-0.5 text-[11px] font-medium text-[#158A62]">
                      Verified
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2 mt-1">
                  <div className="flex gap-0.5">
                    {Array.from({ length: review.rating }).map((_, index) => (
                      <LuStar
                        key={index}
                        size={14}
                        className="fill-[#F59E0B] text-[#F59E0B]"
                      />
                    ))}
                  </div>

                  <span className="text-[13px] text-[#344054]">
                    {review.rating}.0
                  </span>
                </div>

                <p className="mt-2 max-w-130 text-[14px] leading-6 text-[#344054]">
                  {review.review}
                </p>

                <div className="flex flex-wrap items-center gap-2 mt-3">
                  {review.menu.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-[#F2F4F7] px-2.5 py-0.5 text-[11px] text-[#667085]"
                    >
                      {item}
                    </span>
                  ))}

                  <span className="text-[11px] text-[#98A2B3]">
                    • {review.createdAt}
                  </span>
                </div>

                {review.replied && (
                  <div className="mt-4 rounded-xl bg-[#F9FAFB] p-4">
                    <p className="text-[13px] font-semibold text-[#101828]">
                      Balasan Anda:
                    </p>

                    <div className="md:flex-row flex flex-col items-start justify-between gap-6 mt-2">
                      <p className="text-[13px] text-[#667085]">
                        {review.reply}
                      </p>

                      <div className="flex shrink-0 items-center gap-3 text-[11px] text-[#98A2B3]">
                        <span>{review.replyDate}</span>

                        <button
                          onClick={() =>
                            alert("🚀 Coming Soon!")
                          }
                        >
                          <LuPencil size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* RIGHT */}
            <div className=" shrink-0 md:flex flex-col items-end hidden gap-3">
              <div className="flex items-center gap-2">
                <span
                  className={`rounded-lg px-3 py-1.5 text-[12px] font-medium ${review.replied
                    ? "bg-[#E8F7EF] text-[#158A62]"
                    : "bg-[#FFF4E5] text-[#F59E0B]"
                    }`}
                >
                  {review.replied ? "Dibalas" : "Belum Dibalas"}
                </span>

                <button
                  onClick={() =>
                    alert("🚀 Coming Soon!")
                  }
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#EAECF0]"
                >
                  <LuEllipsisVertical size={16} />
                </button>
              </div>

              <span className="text-[11px] text-[#98A2B3]">
                25 Mei 2025
              </span>

              {!review.replied && (
                <button
                  onClick={() =>
                    alert("🚀 Coming Soon!")
                  }
                  className="mt-2 flex h-9 items-center gap-2 rounded-lg border border-[#D0D5DD] px-4 text-[13px] font-medium text-[#158A62]"
                >
                  <LuMessageSquareReply size={15} />
                  Balas Ulasan
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}