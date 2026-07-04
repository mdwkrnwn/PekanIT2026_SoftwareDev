"use client";

import Image from "next/image";
import { PopularProduct } from "../dashboard.type";

interface PopularProductsProps {
  products: PopularProduct[];
}

export default function PopularProducts({
  products,
}: PopularProductsProps) {
  return (
    <div className="flex flex-col justify-between rounded-2xl border-2 border-[#F3F4F7] bg-white p-6 shadow-xs">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-xl font-semibold text-[#0B0F1F]">
          Produk / Menu Terpopuler
        </h3>

        <button
          onClick={() => alert("🚀 Coming Soon!")}
          className="font-bold text-[#15803D]"
        >
          Lihat semua
        </button>
      </div>

      {/* List */}
      <div className="flex flex-1 flex-col gap-4">
        {products.map((product) => (
          <div
            key={product.rank}
            className="flex items-center gap-4 rounded-xl p-2 transition-colors hover:bg-slate-50"
          >
            <span className="w-6 text-lg font-black text-[#0B0F1F]">
              {product.rank}
            </span>

            <div className="relative h-14 w-25 shrink-0 overflow-hidden rounded-xl">
              <Image
                src={product.image}
                fill
                alt={product.name}
                className="object-cover"
              />
            </div>

            <div className="flex-1">
              <h4 className="font-bold text-slate-900">
                {product.name}
              </h4>

              <p className="font-medium text-slate-400">
                {product.count}
              </p>
            </div>

            <span
              className={`rounded-md px-2 py-1 font-bold ${product.tagCol}`}
            >
              {product.tag}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}