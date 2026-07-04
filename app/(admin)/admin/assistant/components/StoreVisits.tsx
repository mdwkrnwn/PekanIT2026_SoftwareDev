"use client";

import Image from "next/image";
import { LuChevronDown } from "react-icons/lu";
import { StoreVisit } from "../assistant.type";

interface StoreVisitsProps {
  visit: StoreVisit;
}

export default function StoreVisits({
  visit,
}: StoreVisitsProps) {
  return (
    <div className="rounded-2xl border border-[#EAECF0] bg-white p-5">
      <div className="flex items-center justify-between">
        <h3 className="text-[15px] font-semibold text-[#101828]">
          Kunjungan Toko
        </h3>

        <button
          onClick={() => alert("🚀 Filter akan segera tersedia!")}
          className="flex items-center gap-1 rounded-lg border border-[#D0D5DD] px-2.5 py-1 text-[11px] text-[#344054]"
        >
          <span>7 Hari Terakhir</span>

          <LuChevronDown size={12} />
        </button>
      </div>

      <h2 className="mt-3 text-[26px] font-bold text-[#101828]">
        {visit.total}
      </h2>

      <p className="text-[11px] font-semibold text-[#16A34A]">
        {visit.growth} dari minggu lalu
      </p>

      <div className="mt-3">
        <Image
          src={visit.chart}
          alt="Grafik Kunjungan"
          width={400}
          height={160}
          className="w-full object-contain"
        />
      </div>
    </div>
  );
}