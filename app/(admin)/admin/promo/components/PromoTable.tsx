"use client";

import Image from "next/image";
import { Promo } from "../promo.type";
import PromoActionMenu from "./PromoActionMenu";

interface PromoTableProps {
  promos: Promo[];

  openMenuId: number | null;
  setOpenMenuId: React.Dispatch<React.SetStateAction<number | null>>;

  onEdit: (promo: Promo) => void;
  onDelete: (id: number) => void;
}

export default function PromoTable({
  promos,
  openMenuId,
  setOpenMenuId,
  onEdit,
  onDelete,
}: PromoTableProps) {
  return (
    <div>
      <div className="grid grid-cols-[420px_150px_120px_120px_110px_70px_60px] border-b border-[#EAECF0] bg-[#FCFCFD] px-6 py-4 text-[15px] font-semibold text-[#667085]">
        <p>Promo</p>
        <p>Periode</p>
        <p>Jenis Promo</p>
        <p>Target</p>
        <p>Status</p>
        <p>Dilihat</p>
        <p className="text-center">Aksi</p>
      </div>

      {promos.map((promo) => (
        <div
          key={promo.id}
          className="grid grid-cols-[420px_150px_120px_120px_110px_70px_60px] items-center border-b border-[#EAECF0] px-6 py-5 last:border-none"
        >
          {/* Promo */}
          <div className="flex items-start gap-4">
            <div className="h-[90px] w-[160px] shrink-0 overflow-hidden rounded">
              <Image
                src={promo.image_url}
                alt={promo.title}
                width={160}
                height={90}
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <h3 className="text-[16px] font-semibold text-[#101828]">
                {promo.title}
              </h3>

              <p className="mt-2 text-[12px] text-[#667085]">
                {promo.description}
              </p>

              <div className="mt-2 space-y-1 text-[12px] text-[#667085]">
                <p>
                  📅 {promo.start_date} - {promo.end_date}
                </p>

                <p>{promo.schedule}</p>
              </div>
            </div>
          </div>

          {/* Periode */}
          <p className="text-[13px] leading-6 text-[#475467]">
            {promo.start_date} - {promo.end_date}
          </p>

          {/* Jenis Promo */}
          <p className="text-[14px] text-[#475467]">
            {promo.promo_type}
          </p>

          {/* Target */}
          <p className="text-[14px] leading-6 text-[#475467]">
            {promo.target}
          </p>

          {/* Status */}
          <div>
            <span
              className={`rounded-full px-3 py-1 text-[12px] font-semibold ${
                promo.status === "Aktif"
                  ? "bg-[#E8F7EF] text-[#158A62]"
                  : promo.status === "Akan Datang"
                  ? "bg-[#EEF4FF] text-[#2563EB]"
                  : "bg-[#F2F4F7] text-[#667085]"
              }`}
            >
              {promo.status}
            </span>
          </div>

          {/* Dilihat */}
          <p className="text-center text-[15px] text-[#344054]">
            {promo.views}
          </p>

          {/* Aksi */}
          <PromoActionMenu
            open={openMenuId === promo.id}
            onToggle={() =>
              setOpenMenuId(openMenuId === promo.id ? null : promo.id)
            }
            onEdit={() => onEdit(promo)}
            onDelete={() => onDelete(promo.id)}
          />
        </div>
      ))}
    </div>
  );
}