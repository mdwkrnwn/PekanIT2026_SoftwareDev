import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { PackageOpen } from "lucide-react";
import { usePopularProducts } from "../hooks/usePopularProduct";
interface ProductPopularProps {
  refreshKey: number;
}
export default function ProductPopular({ refreshKey }: ProductPopularProps) {
  const { products, loading } = usePopularProducts(refreshKey);

  if (loading) {
    return (
      <div className="rounded-2xl border border-[#EAECF0] bg-white p-5">
        <Skeleton className="mb-5 h-6 w-40" />

        <div className="space-y-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="border-b border-[#EAECF0] pb-4 last:border-none"
            >
              <div className="flex items-center gap-3">
                <Skeleton className="h-5 w-5" />
                <Skeleton className="h-[70px] w-[70px] rounded-md" />

                <div className="flex-1 space-y-2">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-3 w-20" />
                </div>
              </div>

              <Skeleton className="mt-3 ml-[90px] h-1 w-full" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="rounded-2xl border border-[#EAECF0] bg-white p-5">
        <h3 className="mb-5 text-[18px] font-semibold text-[#0B0F1F]">
          Produk Terpopuler
        </h3>

        <div className="flex h-60 items-center justify-center">
          <div className="text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#F9FAFB]">
              <PackageOpen className="h-10 w-10 text-[#98A2B3]" />
            </div>

            <h4 className="mt-5 text-lg font-semibold text-[#101828]">
              Belum ada produk
            </h4>

            <p className="mt-2 text-sm text-[#667085]">
              Tambahkan produk untuk melihat produk terpopuler.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-[#EAECF0] bg-white p-5">
      <h3 className="mb-5 text-[18px] font-semibold text-[#0B0F1F]">
        Produk Terpopuler
      </h3>

      <div className="space-y-4">
        {products.map((item) => (
          <div
            key={item.rank}
            className="border-b border-[#EAECF0] pb-4 last:border-none"
          >
            <div className="flex items-center gap-3">
              <span className="w-4 text-[18px] font-semibold">{item.rank}</span>

              <Image
                src={item.image}
                alt={item.name}
                width={70}
                height={70}
                className="rounded-sm object-cover"
              />

              <div className="flex-1">
                <h4 className="text-[15px] font-semibold">{item.name}</h4>

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
