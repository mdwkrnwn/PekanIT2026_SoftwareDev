"use client";

import { QuickSuggestion } from "../assistant.type";

interface QuickSuggestionsProps {
  suggestions: QuickSuggestion[];
  loading: boolean;
  handleSend: (text: string) => void;
}

export default function QuickSuggestions({
  suggestions,
  loading,
  handleSend,
}: QuickSuggestionsProps) {
  return (
    <div className="border-t border-[#EAECF0] pt-4">
      <p className="mb-3 text-[13px] font-medium text-[#667085]">
        Saran tindakan lanjut:
      </p>

      <div className="flex flex-wrap gap-3">
        {suggestions.map((item) => (
          <button
            key={item.text}
            onClick={() => handleSend(item.text)}
            disabled={loading}
            className="flex items-center gap-2 rounded-xl border border-[#D0D5DD] px-4 py-2.5 text-[13px] font-medium text-[#158A62] transition hover:bg-[#F6FCF9] disabled:cursor-not-allowed disabled:opacity-50"
          >
            <item.icon size={15} />
            <span>{item.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
}