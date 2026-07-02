import { promoStats } from "../promoStats";

export default function PromoStats() {
  return (
    <div className="grid grid-cols-5 gap-4">
      {promoStats.map((item, index) => (
        <div
          key={index}
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
                  ▲ {item.growth}
                </span>

                <span className="text-[#667085]">
                  dari minggu lalu
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}