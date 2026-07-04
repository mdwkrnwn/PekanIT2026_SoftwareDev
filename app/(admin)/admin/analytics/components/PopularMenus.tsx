"use client";

import Image from "next/image";
import { PopularMenu } from "../analytics.type";

interface PopularMenusProps {
  menus: PopularMenu[];
}

export default function PopularMenus({
  menus,
}: PopularMenusProps) {
  return (
    <div className="rounded-2xl border border-[#EAECF0] bg-white p-6">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-[18px] font-semibold text-[#101828]">
          Produk / Menu Terpopuler
        </h3>

        <button
          onClick={() => alert("🚀 Fitur akan segera tersedia!")}
          className="text-[15px] font-semibold text-[#158A62] transition hover:underline"
        >
          Lihat Semua
        </button>
      </div>

      {/* List Menu */}
      <div className="space-y-5">
        {menus.map((menu) => (
          <div
            key={menu.rank}
            className="border-b border-[#EAECF0] pb-5 last:border-none last:pb-0"
          >
            <div className="flex items-center gap-4">
              {/* Ranking */}
              <span className="w-6 text-[18px] font-semibold text-[#101828]">
                {menu.rank}
              </span>

              {/* Image */}
              <Image
                src={menu.image}
                alt={menu.name}
                width={72}
                height={60}
                className="h-[60px] w-[72px] rounded-xl object-cover"
              />

              {/* Info */}
              <div className="flex-1">
                <h4 className="text-[15px] font-semibold text-[#101828]">
                  {menu.name}
                </h4>

                <p className="mt-1 text-[14px] text-[#667085]">
                  {menu.count} dilihat
                </p>
              </div>

              {/* Progress */}
              <div className="w-[45%]">
                <div className="mb-2 flex justify-end">
                  <span className="text-[14px] font-medium text-[#667085]">
                    {menu.percent}%
                  </span>
                </div>

                <div className="h-[5px] overflow-hidden rounded-full bg-[#EAECF0]">
                  <div
                    className="h-full rounded-full bg-[#158A62]"
                    style={{
                      width: `${menu.percent}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}