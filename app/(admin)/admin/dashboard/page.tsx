"use client";
import { stats } from "./dashboard.data";
import { reviews } from "./dashboard.data";
import { popularProducts } from "./dashboard.data";
import { visitData } from "@/lib/dashboard";
import { aiInsight } from "./dashboard.data";
import { quickActions } from "./dashboard.data";

import DashboardStats from "./components/DashboardStats";
import VisitPerformance from "./components/VisitPerformance";
import PopularProducts from "./components/PopularProducts";
import RecentReviews from "./components/RecentReviews";
import AIInsight from "./components/AI";
import QuickActions from "./components/QuickActions";

export default function DashboardPage() {
  return (
    <>
      <div className="flex flex-col gap-8">
        {/* Top Stats Cards */}
        <DashboardStats stats={stats} />

        {/* Middle Grid */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 xl:grid-cols-3">
          <VisitPerformance visitData={visitData} />

          <PopularProducts products={popularProducts} />
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 xl:grid-cols-3">
          <RecentReviews reviews={reviews} />
          <AIInsight insight={aiInsight} />
        </div>

        {/* Quick Actions */}
        <QuickActions actions={quickActions} />
      </div>
    </>
  );
}
