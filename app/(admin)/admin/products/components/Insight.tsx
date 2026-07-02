import { productInsights } from "../insight";
export default function ProductInsight() {
  return (
    <div className="rounded-2xl border border-[#EAECF0] bg-white p-5">
      <h3 className="mb-5 text-[18px] font-semibold text-[#0B0F1F]">
        Insight Produk
      </h3>

      <div className="grid grid-cols-3 gap-3">
        {productInsights.map((item) => (
          <div key={item.title}>
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.iconBg}`}
            >
              <item.icon className={item.iconColor} />
            </div>

            <p className="mt-2 text-[11px] text-[#667085]">
              {item.title}
            </p>

            <p
              className={`text-[13px] font-medium ${
                item.title === "Rating Tertinggi" ? "mt-8" : "mt-2"
              }`}
            >
              {item.subtitle}
            </p>

            <h4
              className={`font-bold ${
                item.title === "Rating Tertinggi"
                  ? "mt-5 text-xl"
                  : "mt-2 text-[20px]"
              }`}
            >
              {item.title === "Rating Tertinggi" ? (
                <>
                  {item.value}
                  <span className="text-[15px]"> /5</span>
                </>
              ) : (
                item.value
              )}
            </h4>

            <p className="text-[13px] text-[#667085]">
              {item.suffix}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}