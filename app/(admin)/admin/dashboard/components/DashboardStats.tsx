"use client";

import {
  Area,
  AreaChart,
  ResponsiveContainer,
} from "recharts";
import { DashboardStat } from "../dashboard.type";

interface DashboardStatsProps {
  stats: DashboardStat[];
}

export default function DashboardStats({
  stats,
}: DashboardStatsProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
      {stats.map((item, index) => {
        const chartData = item.data.map((value, i) => ({
          index: i,
          value,
        }));

        return (
          <div
            key={item.title}
            className="rounded-2xl border border-[#EAECF0] bg-white p-5 shadow-sm"
          >
            {/* Header */}
            <div className="flex items-start gap-4">
              <div
                className={`flex h-15 w-15 shrink-0 items-center justify-center rounded-xl ${item.color}`}
              >
                <item.icon size={30} />
              </div>

              <div>
                <p className="text-[14px] font-medium text-[#344054]">
                  {item.title}
                </p>

                <h2 className="mt-1 text-[30px] font-bold leading-none text-[#101828]">
                  {item.value}
                </h2>

                <div className="mt-2 flex items-center gap-1 text-[12px]">
                  <span className="font-semibold text-[#16A34A]">
                    ▲ {item.growth}
                  </span>

                  <span className="text-[#667085]">
                    dari minggu lalu
                  </span>
                </div>
              </div>
            </div>

            {/* Mini Chart */}
            <div className="mt-5 outline-none">
              <ResponsiveContainer
                width="100%"
                height={45}
              >
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient
                      id={`gradient-${index}`}
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor={item.chartColor}
                        stopOpacity={0.25}
                      />

                      <stop
                        offset="100%"
                        stopColor={item.chartColor}
                        stopOpacity={0}
                      />
                    </linearGradient>
                  </defs>

                  <Area
                    type="natural"
                    dataKey="value"
                    stroke={item.chartColor}
                    strokeWidth={2.5}
                    fill={`url(#gradient-${index})`}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        );
      })}
    </div>
  );
}