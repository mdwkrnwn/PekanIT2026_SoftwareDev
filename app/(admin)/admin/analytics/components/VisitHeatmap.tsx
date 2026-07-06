"use client";

interface VisitHeatmapProps {
  days: string[];
  hours: string[];
  heatmap: number[][];
  colors: string[];
}

export default function VisitHeatmap({
  days,
  hours,
  heatmap,
  colors,
}: VisitHeatmapProps) {
  return (
    <div className="lg:col-span-2 rounded-2xl border border-[#EAECF0] bg-white p-6">
      <h3 className="mb-8 text-[22px] font-semibold text-[#101828]">
        Performa Kunjungan Berdasarkan Waktu
      </h3>

      <div className="flex gap-6">
        {/* Hari */}
        <div className="flex flex-col gap-3 pt-1">
          {days.map((day) => (
            <span
              key={day}
              className="h-8 text-[16px] font-medium text-[#101828]"
            >
              {day}
            </span>
          ))}
        </div>

        {/* Scrollable Container Container */}
        <div className="flex flex-col w-full min-w-0">
          {/* Heatmap Grid & Hours X-Axis Wrapper */}
          <div className="scrollbar-thin flex flex-col w-full gap-3 pb-2 overflow-x-auto">

            {/* Heatmap Matrix */}
            <div className="min-w-max flex flex-col gap-3">
              {heatmap.map((row, r) => (
                <div key={r} className="flex gap-1.5">
                  {row.map((cell, c) => (
                    <div
                      key={c}
                      className={`h-8 w-14 shrink-0 rounded-md ${colors[cell] || 'bg-[#EEF2F6]'}`}
                    />
                  ))}
                </div>
              ))}
            </div>

            {/* Jam */}
            <div className="mt-1 flex gap-1.5 min-w-max text-[14px] text-[#667085]">
              {hours.map(hour => (
                <span
                  key={hour}
                  className="w-14 shrink-0 text-xs text-center"
                >
                  {hour}
                </span>
              ))}
            </div>
          </div>

          {/* Legend - Outside scrollable area */}
          <div className="flex items-center justify-end gap-2 mt-5">
            <span className="text-xs text-[#667085]">R</span>
            <div className="h-5 w-5 rounded bg-[#EEF2F6]" />
            <div className="h-5 w-5 rounded bg-[#BFEFD7]" />
            <div className="h-5 w-5 rounded bg-[#158A62]" />
            <span className="text-xs text-[#667085]">T</span>
          </div>
        </div>
      </div>
    </div>
  );
}
