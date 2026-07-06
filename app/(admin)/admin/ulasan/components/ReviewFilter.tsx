"use client";

import { LuChevronDown, LuSlidersHorizontal } from "react-icons/lu";
import { ReviewTabWithCount } from "../review.type";
interface ReviewFilterProps {
  tabs: ReviewTabWithCount[];
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function ReviewFilter({
  tabs,
  activeTab,
  setActiveTab,
  setCurrentPage,
}: ReviewFilterProps) {
  return (
    <div className="mt-6 flex items-center flex-wrap gap-6 justify-between border-b border-[#EAECF0]">
      <div className="flex items-center gap-8">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => {
              setActiveTab(tab.key);
              setCurrentPage(1);
            }}
            className={`relative pb-3 text-[14px] font-semibold transition ${activeTab === tab.key
              ? "text-[#158A62]"
              : "text-[#667085] hover:text-[#101828]"
              }`}
          >
            {tab.label}

            {activeTab === tab.key && (
              <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-[#158A62]" />
            )}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-3 pb-2">
        <button
          onClick={() => alert("🚀 Coming Soon!")}
          className="flex h-10 items-center gap-2 rounded-xl border border-[#D0D5DD] bg-white px-4 text-[13px] font-medium text-[#344054] transition hover:bg-[#F9FAFB]"
        >
          <LuSlidersHorizontal size={16} />
          Filter
        </button>

        <button
          onClick={() => alert("🚀 Coming Soon!")}
          className="flex h-10 items-center gap-2 rounded-xl border border-[#D0D5DD] bg-white px-4 text-[13px] font-medium text-[#344054] transition hover:bg-[#F9FAFB]"
        >
          Terbaru
          <LuChevronDown size={16} />
        </button>
      </div>
    </div>
  );
}
