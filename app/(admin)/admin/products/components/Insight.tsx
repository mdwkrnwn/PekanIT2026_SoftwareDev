import { Skeleton } from "@/components/ui/skeleton";
import { PackageSearch } from "lucide-react";
import { useProductInsight } from "../hooks/useProductInsight";
interface ProductInsightProps {
    refreshKey:number;
}

export default function ProductInsight({
    refreshKey,
}:ProductInsightProps){

    const { insights, loading } =
        useProductInsight(refreshKey);


  if (loading) {
    return (
      <div className="rounded-2xl border border-[#EAECF0] bg-white p-5">
        <Skeleton className="mb-5 h-6 w-40" />

        <div className="grid grid-cols-3 gap-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index}>
              <Skeleton className="h-12 w-12 rounded-xl" />
              <Skeleton className="mt-3 h-3 w-20" />
              <Skeleton className="mt-3 h-4 w-24" />
              <Skeleton className="mt-3 h-7 w-16" />
              <Skeleton className="mt-2 h-3 w-20" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (insights.length === 0) {
    return (
      <div className="rounded-2xl border border-[#EAECF0] bg-white p-5">
        <h3 className="mb-5 text-[18px] font-semibold text-[#0B0F1F]">
          Insight Produk
        </h3>

        <div className="flex h-48 items-center justify-center">
          <div className="text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#F9FAFB]">
              <PackageSearch className="h-10 w-10 text-[#98A2B3]" />
            </div>

            <h4 className="mt-5 text-lg font-semibold text-[#101828]">
              Insight belum tersedia
            </h4>

            <p className="mt-2 text-sm text-[#667085]">
              Tambahkan produk terlebih dahulu.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-[#EAECF0] bg-white p-5">
      <h3 className="mb-5 text-[18px] font-semibold text-[#0B0F1F]">
        Insight Produk
      </h3>

      <div className="grid grid-cols-3 gap-3">
        {insights.map((item) => (
          <div key={item.title} className="flex flex-col">
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.iconBg}`}
            >
              <item.icon className={item.iconColor} />
            </div>

            <p className="mt-2 text-[11px] text-[#667085]">{item.title}</p>
            <p
              className={`mt-2 min-h-[40px] text-[13px] font-medium ${
                item.title === "Rating Tertinggi" ? "mt-6" : ""
              }`}
            >
              {item.subtitle}
            </p>

            <h4 className="mt-2 text-[20px] font-bold">
              {item.title === "Rating Tertinggi" ? (
                <>
                  {item.value}
                  <span className="text-[15px]"> /5</span>
                </>
              ) : (
                item.value
              )}
            </h4>

            <p className="text-[13px] text-[#667085]">{item.suffix}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
