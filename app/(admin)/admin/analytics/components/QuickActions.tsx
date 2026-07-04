"use client";

import { QuickAction } from "../analytics.type";

interface QuickActionsProps {
  actions: QuickAction[];
}

export default function QuickActions({
  actions,
}: QuickActionsProps) {
  return (
    <div className="rounded-2xl border border-[#EAECF0] bg-white p-6">
      <h3 className="mb-5 text-[22px] font-semibold text-[#101828]">
        Aksi Cepat
      </h3>

      <div className="grid grid-cols-5 gap-4">
        {actions.map((action) => (
          <button
            key={action.title}
            onClick={() =>
              alert(`🚀 ${action.title} akan segera tersedia!`)
            }
            className="flex h-12 items-center justify-center gap-3 rounded-xl border border-[#EAECF0] bg-white transition hover:bg-[#F9FAFB]"
          >
            <action.icon
              size={18}
              className={action.color}
            />

            <span className="text-[14px] font-medium text-[#101828]">
              {action.title}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}