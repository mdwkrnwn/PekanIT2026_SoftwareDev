"use client";

import { Edit } from "lucide-react";

interface OperationalHour {
  day: string;
  hours: string;
  isClosed: boolean;
}

interface OperatingHoursProps {
  operationalHours: OperationalHour[];
}

export default function OperatingHours({
  operationalHours,
}: OperatingHoursProps) {
  return (
    <div className="flex min-h-110 flex-col justify-between rounded-3xl border border-[#EAECF0] bg-white p-6 shadow-xs">
      <div>
        <h3 className="mb-6 text-xl font-semibold text-[#0B0F1F]">
          Jam Operasional
        </h3>

        <div className="space-y-3">
          {operationalHours.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between border-b border-slate-50 pb-3 last:border-0 last:pb-0"
            >
              <span className="font-medium text-slate-600">
                {item.day}
              </span>

              <span
                className={`font-semibold ${
                  item.isClosed
                    ? "text-rose-600"
                    : "text-[#0B0F1F]"
                }`}
              >
                {item.hours}
              </span>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => alert("🚀 Coming Soon!")}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-[7px] border border-[#85D0AD] py-3 font-semibold text-[#047948] transition-colors hover:bg-[#047948] hover:text-white"
      >
        <Edit size={20} />
        Edit Jam Operasional
      </button>
    </div>
  );
}