import Image from "next/image";
import { popularProducts } from "../popularProduct";

export default function ProductPopular() {
  return (
    <div className="rounded-2xl border border-[#EAECF0] bg-white p-5">
      <h3 className="mb-5 text-[18px] font-semibold text-[#0B0F1F]">
        Produk Terpopuler
      </h3>

      <div className="space-y-4">
        {popularProducts.map((item) => (
          <div
            key={item.rank}
            className="border-b border-[#EAECF0] pb-4 last:border-none"
          >
            <div className="flex items-center gap-3">
              <span className="w-4 text-[18px] font-semibold">
                {item.rank}
              </span>

              <Image
                src={item.image}
                alt={item.name}
                width={70}
                height={70}
                className="rounded-sm object-cover"
              />

              <div className="flex-1">
                <h4 className="text-[15px] font-semibold">
                  {item.name}
                </h4>

                <p className="text-[13px] text-[#667085]">
                  {item.views} dilihat
                </p>
              </div>
            </div>

            <div className="mt-3 flex items-center gap-3 pl-[90px]">
              <div className="h-[4px] flex-1 rounded-full bg-[#EEF2F6]">
                <div
                  className="h-full rounded-full bg-[#158A62]"
                  style={{
                    width: `${item.percent}%`,
                  }}
                />
              </div>

              <span className="w-8 text-right text-[12px] text-[#667085]">
                {item.percent}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}