import { IconType } from "react-icons";

interface StoreSummaryProps {
  stats: {
    label: string;
    value: string;
    change: string;
    icon: IconType;
    color: string;
  }[];
}

export default function StoreSummary({
  stats,
}: StoreSummaryProps) {
  return (
    <div className="rounded-3xl border border-[#EAECF0] bg-white p-6 shadow-xs">
      <h3 className="mb-6 text-[18px] font-bold text-[#0B0F1F]">
        Ringkasan Toko
      </h3>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex items-center gap-4 rounded-2xl border border-[#EAECF0] bg-white p-5"
          >
            <div
              className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl ${stat.color}`}
            >
              <stat.icon size={30} />
            </div>

            <div className="flex-1">
              <p className="text-[15px] font-medium text-[#344054]">
                {stat.label}
              </p>

              <h4 className="mt-1 text-[20px] font-bold leading-none text-[#0B0F1F]">
                {stat.value}
              </h4>

              <div className="mt-2 flex items-center gap-1 text-[13px]">
                <span className="font-semibold text-[#16A34A]">
                  ▲ {stat.change}
                </span>

                <span className="text-[#667085]">
                  dari minggu lalu
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}