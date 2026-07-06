"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { AIInsight as AIInsightType } from "../dashboard.type";

interface AIInsightProps {
  insight: AIInsightType;
}

export default function AI({ insight }: AIInsightProps) {
  return (
    <div className="rounded-2xl border border-[#EAECF0] bg-white p-8">
      <h3 className="text-[22px] font-semibold text-[#158A62]">
        {insight.title}
      </h3>

      <div className="flex items-start gap-6 mt-8">
        {/* Robot */}
        <div className="flex lg:size-24 size-12 shrink-0 items-center justify-center rounded-full bg-[#E8F7EF]">
          <Image
            src={insight.image}
            alt="AI Assistant"
            width={80}
            height={80}
          />
        </div>

        {/* Content */}
        <div className="flex-1">
          <p className="text-[16px] leading-9 text-[#101828]">
            {insight.description}
          </p>

          <button
            onClick={() => alert("🚀 Coming Soon!")}
            className="mt-8 flex items-center justify-between rounded-2xl bg-[#158A62] lg:px-6 px-4 py-4 font-semibold text-white transition hover:bg-[#127553]"
          >
            <span>Lihat rekomendasi lengkap</span>
            <ArrowRight size={20} className="shrink-0" />
          </button>
        </div>
      </div>
    </div>
  );
}