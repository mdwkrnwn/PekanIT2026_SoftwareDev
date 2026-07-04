"use client";

import { LucideLineChart } from "lucide-react";
import { LuArrowRight } from "react-icons/lu";
import { AnalyticsButton as AnalyticsButtonType } from "../assistant.type";

interface AnalyticsButtonProps {
  button: AnalyticsButtonType;
}

export default function AnalyticsButton({
  button,
}: AnalyticsButtonProps) {
  return (
    <button
      onClick={() => alert("🚀 Fitur akan segera tersedia!")}
      className="mb-5 flex w-full items-center justify-center gap-2 rounded-xl border border-[#D0D5DD] bg-white py-3 text-[13px] font-medium text-[#344054] transition hover:bg-[#F9FAFB]"
    >
      <LucideLineChart size={16} />

      <span>{button.text}</span>

      <LuArrowRight size={15} />
    </button>
  );
}