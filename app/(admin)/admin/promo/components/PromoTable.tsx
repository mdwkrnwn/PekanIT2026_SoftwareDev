"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { LuTicketX } from "react-icons/lu";
import { Promo } from "../promo.type";
import PromoActionMenu from "./PromoActionMenu";
import PromoImage from "./PromoImage";
interface PromoTableProps {
  promos: Promo[];
  loading: boolean;
  openMenuId: number | null;
  setOpenMenuId: React.Dispatch<React.SetStateAction<number | null>>;

  onEdit: (promo: Promo) => void;
  onDelete: (id: number) => void;
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function PromoTable({
  promos,
  loading,
  openMenuId,
  setOpenMenuId,
  onEdit,
  onDelete,
}: PromoTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#EAECF0] bg-white">
      {/* Header */}
      <div className="grid grid-cols-[420px_150px_120px_120px_110px_70px_60px] border-b border-[#EAECF0] bg-[#FCFCFD] px-6 py-4 text-[15px] font-semibold text-[#667085]">
        <p>Promo</p>
        <p>Periode</p>
        <p>Jenis Promo</p>
        <p>Target</p>
        <p>Status</p>
        <p>Dilihat</p>
        <p className="text-center">Aksi</p>
      </div>

      {/* Body */}
      {loading ? (
        Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="grid grid-cols-[450px_150px_120px_120px_110px_70px_60px] items-center border-b border-[#EAECF0] px-6 py-5"
          >
            <div className="flex gap-4">
              <Skeleton className="h-[90px] w-[160px] rounded-lg" />

              <div className="space-y-3">
                <Skeleton className="h-5 w-52" />
                <Skeleton className="h-3 w-44" />
                <Skeleton className="h-3 w-36" />
              </div>
            </div>

            <Skeleton className="h-4 w-28" />
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-8 w-20 rounded-full" />
            <Skeleton className="h-4 w-10" />

            <div className="flex justify-center">
              <Skeleton className="h-8 w-8 rounded-full" />
            </div>
          </div>
        ))
      ) : promos.length === 0 ? (
        <div className="flex h-72 items-center justify-center">
          <div className="text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#F4F7FA]">
              <LuTicketX size={38} className="text-[#98A2B3]" />
            </div>

            <h3 className="mt-5 text-lg font-semibold text-[#101828]">
              Belum Ada Promo
            </h3>

            <p className="mt-2 max-w-md text-sm text-[#667085]">
              Kamu belum memiliki promo. Buat promo pertama untuk menarik lebih
              banyak pelanggan ke tokomu.
            </p>
          </div>
        </div>
      ) : (
        promos.map((promo) => (
          <div
            key={promo.id}
            className="grid grid-cols-[420px_150px_120px_120px_110px_70px_60px] items-center border-b border-[#EAECF0] px-6 py-5 last:border-none"
          >
            {/* Promo */}
            <div className="flex items-start gap-4">
              <PromoImage src={promo.image_url} alt={promo.title} />

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
            <p className="text-[13px] leading-5 text-[#475467]">
              {formatDate(promo.start_date)}
              <br />
              {formatDate(promo.end_date)}
            </p>

            {/* Jenis Promo */}
            <p className="text-[14px] text-[#475467]">{promo.promo_type}</p>

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
        ))
      )}
    </div>
  );
}
