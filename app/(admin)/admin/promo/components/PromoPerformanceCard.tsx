import Image from "next/image";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { LuChevronDown } from "react-icons/lu";
import { fetchPromoPerformance } from "../services/promo.service";

export default function PromoPerformanceCard() {
  const [performance, setPerformance] = useState({
    totalViews: 0,
    growth: "0.0",
  });

  useEffect(() => {
    const loadPerformance = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return;

      const data = await fetchPromoPerformance(user.id);
      setPerformance(data);
    };

    loadPerformance();
  }, []);
  return (
    <div className="rounded-2xl border border-[#EAECF0] bg-white p-5">
      <div className="flex items-center justify-between">
        <h3 className="text-[18px] font-semibold text-[#101828]">
          Performa Promo
        </h3>

        <button
          onClick={() => alert("🚀 Coming Soon!")}
          className="flex items-center gap-2 rounded-lg border border-[#D0D5DD] px-3 py-2 text-[12px] font-medium text-[#344054] transition-colors hover:bg-gray-50"
        >
          <span>7 Hari Terakhir</span>
          <LuChevronDown className="h-4 w-4" />
        </button>
      </div>

      <p className="mt-6 text-[18px] font-semibold text-[#101828]">
        Total Dilihat
      </p>

      <h2 className="mt-1 text-[33px] font-bold text-[#101828]">
        {performance.totalViews.toLocaleString("id-ID")}
      </h2>

      <div className="mt-2 flex items-center gap-1 text-[13px]">
        <span className="font-semibold text-[#158A62]">
          ▲ {performance.growth}%
        </span>

        <span className="text-[#667085]">dari minggu lalu</span>
      </div>

      <div className="mt-5">
        <Image
          src="/chartpromo.png"
          alt="Performa Promo"
          width={400}
          height={220}
          className="w-full object-contain"
        />
      </div>
    </div>
  );
}
