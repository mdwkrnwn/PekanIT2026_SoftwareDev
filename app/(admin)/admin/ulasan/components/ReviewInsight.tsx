"use client";

import {
  LuLightbulb,
  LuSparkles,
  LuThumbsUp,
} from "react-icons/lu";

export default function ReviewInsight() {
  return (
    <div className="rounded-2xl border border-[#EAECF0] bg-white p-5">
      <h3 className="text-[15px] font-semibold text-[#101828]">
        Insight Ulasan
      </h3>

      <div className="mt-4 space-y-3">
        <div className="flex items-start gap-3 rounded-xl bg-[#F9FAFB] p-3">
          <LuThumbsUp
            size={18}
            className="mt-0.5 text-[#158A62]"
          />

          <p className="text-[13px] text-[#344054]">
            Pelanggan paling suka dengan rasa, makanan, dan kecepatan
            pengiriman.
          </p>
        </div>

        <div className="flex items-start gap-3 rounded-xl bg-[#FFFBEB] p-3">
          <LuLightbulb
            size={18}
            className="mt-0.5 text-[#F59E0B]"
          />

          <p className="text-[13px] text-[#344054]">
            Beberapa pelanggan berharap sambal lebih pedas dan ayam
            lebih empuk.
          </p>
        </div>
      </div>

      <button
        onClick={() => alert("🚀 Coming Soon!")}
        className="mt-4 flex h-10 w-full items-center justify-center gap-2 rounded-xl border border-[#158A62] text-[13px] font-semibold text-[#158A62] transition hover:bg-[#E8F7EF]"
      >
        Lihat Rekomendasi AI
        <LuSparkles size={16} />
      </button>
    </div>
  );
}