"use client";

import Image from "next/image";
import { BusyHour } from "../assistant.type";

interface BusyHoursProps {
  busyHour: BusyHour;
}

export default function BusyHours({
  busyHour,
}: BusyHoursProps) {
  return (
    <div className="rounded-2xl border border-[#EAECF0] bg-white p-5">
      <h3 className="text-[15px] font-semibold text-[#101828]">
        Jam Paling Ramai
      </h3>

      <p className="mt-2 text-[16px] font-bold text-[#101828]">
        {busyHour.time}
      </p>

      <p className="text-[11px] text-[#667085]">
        {busyHour.visitors}
      </p>

      <div className="mt-3">
        <Image
          src={busyHour.chart}
          alt="Grafik Jam Paling Ramai"
          width={400}
          height={100}
          className="w-full object-contain"
        />
      </div>
    </div>
  );
}