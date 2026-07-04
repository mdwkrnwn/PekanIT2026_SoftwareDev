"use client";

import { LuCalendarDays, LuChevronDown } from "react-icons/lu";
import { SummaryStat } from "../assistant.type";

interface StoreSummaryProps {
  summaryStats: SummaryStat[];
}

export default function StoreSummary({
  summaryStats,
}: StoreSummaryProps) {
  return (
    <div className="rounded-2xl border border-[#EAECF0] bg-white p-5">
      <div className="flex items-center justify-between">
        <h3 className="text-[15px] font-semibold text-[#101828]">
          Ringkasan Data Tokomu
        </h3>
      </div>

      <button
        onClick={() =>
          alert("🚀 Filter rentang tanggal akan segera tersedia!")
        }
        className="mt-2 flex items-center gap-2 rounded-lg border border-[#D0D5DD] px-3 py-1.5 text-[12px] text-[#344054] transition hover:bg-[#F9FAFB]"
      >
        <LuCalendarDays size={15} className="text-[#0B0F1F]" />

        <span>20 Mei - 26 Mei 2026</span>

        <LuChevronDown size={14} />
      </button>

      <div className="mt-4 grid grid-cols-3 gap-2">
        {summaryStats.map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-[#EAECF0] p-3"
          >
            <item.icon size={16} className="text-[#667085]" />

            <p className="mt-2 text-[18px] font-bold text-[#101828]">
              {item.value}
            </p>

            <p className="text-[11px] text-[#667085]">
              {item.title}
            </p>

            <p className="mt-1 text-[10px] font-semibold text-[#16A34A]">
              {item.growth} dari minggu lalu
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}