"use client";
import {
  stats,
  visitData,
  quickActions,
  popularMenus,
  trafficInsight,
  days,
  hours,
  heatmap,
  heatmapColors,
} from "./analytics.data";

import StatsCards from "./components/StatsCard";
import VisitPerformance from "./components/VisitPerformance";
import PopularMenus from "./components/PopularMenus";
import QuickActions from "./components/QuickActions";
import TrafficInsight from "./components/TrafficInsight";
import VisitHeatmap from "./components/VisitHeatmap";

export default function AnalyticsPage() {
  
  return (
    <>
      <div className="flex flex-col gap-8">
        {/* Top Stats Cards */}
        <StatsCards stats={stats} />

        {/* Middle Grid */}
        <div className="lg:grid-cols-3 grid grid-cols-1 gap-8">
          <VisitPerformance data={visitData} />

          <PopularMenus menus={popularMenus} />
        </div>

        {/* Bottom Grid */}
        <div className="lg:grid-cols-3 grid w-full grid-cols-1 gap-8">
          <VisitHeatmap
            days={days}
            hours={hours}
            heatmap={heatmap}
            colors={heatmapColors}
          />

          <TrafficInsight insight={trafficInsight} />
        </div>

        {/* Quick Actions */}
        <QuickActions actions={quickActions} />
      </div>
    </>
  );
}
