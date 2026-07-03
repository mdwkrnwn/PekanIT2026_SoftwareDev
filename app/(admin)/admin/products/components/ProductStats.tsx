import { useProductStats } from "../hooks/useProductStats";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProductStats() {
  const { stats, loading } = useProductStats();

  if (loading) {
    return (
      <div className="grid grid-cols-5 gap-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="rounded-2xl border border-[#EAECF0] bg-white p-5"
          >
            <div className="flex items-start gap-4">
              <Skeleton className="h-15 w-15 rounded-xl" />

              <div className="flex-1 space-y-3">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-8 w-20" />
                <Skeleton className="h-3 w-32" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-5 gap-4">
      {stats.map((item) => (
        <div
          key={item.title}
          className="rounded-2xl border border-[#EAECF0] bg-white p-5"
        >
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
                  ▲ {item.growth}%
                </span>

                <span className="text-[#667085]">dari minggu lalu</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
