"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Edit } from "lucide-react";

interface StoreDescriptionProps {
  description?: string | null;
  loading: boolean;
}

export default function StoreDescription({
  description,
  loading,
}: StoreDescriptionProps) {
  if (loading) {
    return (
      <div className="flex min-h-55 flex-col justify-between rounded-3xl border border-[#EAECF0] bg-white p-6 shadow-xs">
        <div>
          <Skeleton className="mb-4 h-6 w-40" />

          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-[95%]" />
            <Skeleton className="h-4 w-[85%]" />
            <Skeleton className="h-4 w-[75%]" />
          </div>
        </div>

        <Skeleton className="mt-6 h-11 w-40 rounded-[7px]" />
      </div>
    );
  }

  return (
    <div className="flex min-h-55 flex-col justify-between rounded-3xl border border-[#EAECF0] bg-white p-6 shadow-xs">
      <div>
        <h3 className="mb-3 text-xl font-semibold text-[#0B0F1F]">
          Tentang Toko
        </h3>

        <p className="leading-relaxed font-medium text-slate-600">
          {description || "Belum ada deskripsi toko."}
        </p>
      </div>

      <button
        onClick={() => alert("🚀 Coming Soon!")}
        className="mt-4 flex w-fit items-center gap-2 rounded-[7px] border border-[#85D0AD] px-4 py-2.5 font-semibold text-[#047948] transition-colors hover:bg-[#047948] hover:text-white"
      >
        <Edit size={18} />
        Edit Deskripsi
      </button>
    </div>
  );
}