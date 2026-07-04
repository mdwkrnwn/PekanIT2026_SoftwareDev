"use client";

import { LuArrowRight, LuSparkles } from "react-icons/lu";
import { AIRecommendation as AIRecommendationType } from "../assistant.type";

interface AIRecommendationProps {
  recommendation: AIRecommendationType;
}

export default function AIRecommendation({
  recommendation,
}: AIRecommendationProps) {
  return (
    <div className="rounded-2xl border border-[#F5C563] bg-[#FFFBEB] p-5">
      <h3 className="flex items-center gap-2 text-[14px] font-semibold text-[#101828]">
        <LuSparkles
          className="text-[#F59E0B]"
          size={16}
        />

        {recommendation.title}
      </h3>

      <p className="mt-2 text-[13px] leading-6 text-[#344054]">
        {recommendation.description}
      </p>

      <button
        onClick={() => alert("🚀 Fitur akan segera tersedia!")}
        className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-[#F59E0B] bg-white py-2.5 text-[13px] font-semibold text-[#B45309] transition hover:bg-[#FFFBEB]"
      >
        {recommendation.buttonText}

        <LuArrowRight size={15} />
      </button>
    </div>
  );
}