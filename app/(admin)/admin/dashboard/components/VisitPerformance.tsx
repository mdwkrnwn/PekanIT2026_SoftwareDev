"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { VisitData } from "../dashboard.type";

interface VisitPerformanceProps {
  visitData: VisitData[];
}

export default function VisitPerformance({
  visitData,
}: VisitPerformanceProps) {
  return (
    <div className="rounded-2xl border border-[#EAECF0] bg-white p-6 lg:col-span-2">
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-[22px] font-semibold text-[#101828]">
          Performa Kunjungan
        </h3>

        <div className="mt-3 flex items-center gap-6 text-sm font-medium">
          <div className="flex items-center gap-2">
            <div className="h-[3px] w-5 rounded-full bg-[#16A34A]" />
            <span className="text-[#344054]">Dilihat</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="h-[3px] w-5 rounded-full bg-[#667085]" />
            <span className="text-[#344054]">Favorit</span>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={visitData}
            margin={{
              top: 10,
              right: 10,
              left: -15,
              bottom: 0,
            }}
          >
            <CartesianGrid
              stroke="#F2F4F7"
              vertical={false}
            />

            <XAxis
              dataKey="day"
              tick={{
                fill: "#667085",
                fontSize: 13,
              }}
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              tick={{
                fill: "#667085",
                fontSize: 13,
              }}
              tickLine={false}
              axisLine={false}
            />

            <Tooltip
              cursor={false}
              contentStyle={{
                borderRadius: 12,
                border: "1px solid #EAECF0",
              }}
            />

            <Line
              type="monotone"
              dataKey="viewed"
              stroke="#16A34A"
              strokeWidth={3}
              dot={{
                r: 5,
                fill: "#16A34A",
              }}
              activeDot={{
                r: 7,
              }}
            />

            <Line
              type="monotone"
              dataKey="favorite"
              stroke="#667085"
              strokeWidth={3}
              dot={{
                r: 5,
                fill: "#667085",
              }}
              activeDot={{
                r: 7,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}