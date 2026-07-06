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
      <div className="flex items-center justify-between mb-6">
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
      <div className="flex flex-col flex-1 gap-4">
        {products.map((product) => (
          <div
            key={product.rank}
            className="rounded-xl hover:bg-slate-50 flex flex-wrap items-center gap-4 p-2 transition-colors"
          >
            <span className="w-6 text-lg font-black text-[#0B0F1F]">
              {product.rank}
            </span>

            <div className="h-14 w-25 shrink-0 rounded-xl relative overflow-hidden">
              <Image
                src={product.image}
                fill
                alt={product.name}
                className="object-cover"
              />
            </div>

            <div className="flex-1">
              <h4 className="text-slate-900 font-bold">
                {product.name}
              </h4>

              <p className="text-slate-400 font-medium">
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