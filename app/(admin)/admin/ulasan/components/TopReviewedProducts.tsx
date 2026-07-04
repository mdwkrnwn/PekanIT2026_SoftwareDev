"use client";

import Image from "next/image";
import { TopReviewedProduct } from "../review.type";

interface TopReviewedProductsProps {
  products: TopReviewedProduct[];
}

export default function TopReviewedProducts({
  products,
}: TopReviewedProductsProps) {
  return (
    <div className="rounded-2xl border border-[#EAECF0] bg-white p-5">
      <h3 className="text-[15px] font-semibold text-[#101828]">
        Top Produk Diulas
      </h3>

      <div className="mt-4 space-y-4">
        {products.map((product, index) => (
          <div
            key={product.name}
            className="flex items-center gap-3"
          >
            <span className="w-4 text-center text-[13px] font-medium text-[#98A2B3]">
              {index + 1}
            </span>

            <Image
              src={product.img}
              alt={product.name}
              width={40}
              height={40}
              className="h-10 w-10 rounded-lg object-cover"
            />

            <div className="flex-1">
              <p className="text-[13px] font-medium text-[#101828]">
                {product.name}
              </p>

              <p className="text-[12px] text-[#667085]">
                {product.rating} ({product.count} ulasan)
              </p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => alert("🚀 Coming Soon!")}
        className="mt-4 flex h-10 w-full items-center justify-center rounded-xl border border-[#D0D5DD] text-[13px] font-medium text-[#344054] transition hover:bg-[#F9FAFB]"
      >
        Lihat Semua Produk
      </button>
    </div>
  );
}