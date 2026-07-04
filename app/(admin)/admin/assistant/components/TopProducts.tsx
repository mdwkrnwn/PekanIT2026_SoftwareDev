"use client";

import Image from "next/image";
import { TopProduct } from "../assistant.type";

interface TopProductsProps {
  products: TopProduct[];
}

export default function TopProducts({
  products,
}: TopProductsProps) {
  return (
    <div className="rounded-2xl border border-[#EAECF0] bg-white p-5">
      <div className="flex items-center justify-between">
        <h3 className="text-[15px] font-semibold text-[#101828]">
          Produk Terlaris
        </h3>

        <button
          onClick={() => alert("🚀 Coming Soon!")}
          className="text-[10px] font-medium text-[#158A62]"
        >
          Lihat Semua
        </button>
      </div>

      <div className="mt-4 space-y-3">
        {products.map((product, index) => (
          <div
            key={product.name}
            className="flex items-center gap-3"
          >
            <span className="text-[12px] font-medium text-[#98A2B3]">
              {index + 1}
            </span>

            <Image
              src={product.img}
              alt={product.name}
              width={36}
              height={36}
              className="h-9 w-9 shrink-0 rounded-lg object-cover"
            />

            <div className="min-w-0">
              <p className="truncate text-[13px] font-medium text-[#101828]">
                {product.name}
              </p>

              <p className="text-[11px] text-[#667085]">
                {product.views}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}