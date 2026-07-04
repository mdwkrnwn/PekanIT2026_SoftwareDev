"use client";

import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { Edit } from "lucide-react";
import {
  LuFacebook,
  LuGlobe,
  LuInstagram,
  LuLayoutGrid,
  LuMail,
  LuMapPin,
  LuPhone,
} from "react-icons/lu";

interface StoreInfoProps {
  umkm: any;
  CategoryIcon: React.ElementType;
  loading: boolean;
}

export default function StoreInfo({
  umkm,
  CategoryIcon,
  loading,
}: StoreInfoProps) {
  if (loading) {
    return (
      <div className="row-span-2 flex min-h-[720px] flex-col justify-between rounded-3xl border border-[#EAECF0] bg-white p-8 shadow-sm">
        <div>
          <Skeleton className="mb-8 h-6 w-40" />

          {/* Header */}
          <div className="flex gap-6">
            <Skeleton className="h-[120px] w-[140px] rounded-3xl" />

            <div className="flex-1">
              <Skeleton className="h-4 w-24" />

              <div className="mt-3 flex items-center gap-3">
                <Skeleton className="h-7 w-40" />
                <Skeleton className="h-6 w-24 rounded-full" />
              </div>

              <div className="mt-5">
                <Skeleton className="h-4 w-20" />

                <div className="mt-3 flex items-center gap-3">
                  <Skeleton className="h-5 w-5 rounded-full" />
                  <Skeleton className="h-5 w-28" />
                </div>
              </div>
            </div>
          </div>

          {/* Detail */}
          <div className="mt-10 space-y-7">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="flex items-start gap-4">
                <Skeleton className="h-6 w-6 rounded-md" />

                <div className="flex-1">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="mt-2 h-5 w-52" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <Skeleton className="mt-10 h-14 w-full rounded-xl" />
      </div>
    );
  }
  return (
    <div className="row-span-2 flex min-h-[720px] flex-col justify-between rounded-3xl border border-[#EAECF0] bg-white p-8 shadow-sm">
      <div>
        <h3 className="mb-8 text-[18px] font-semibold text-[#0B0F1F]">
          Informasi Toko
        </h3>

        {/* Header */}
        <div className="flex gap-6">
          <div className="relative h-[120px] w-[140px] shrink-0 overflow-hidden rounded-3xl">
            <Image
              src={umkm?.cover_image || "/placeholder-cover.jpg"}
              alt={umkm?.name || "UMKM"}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex-1">
            <p className="text-[15px] font-medium text-[#98A2B3]">Nama Toko</p>

            <div className="mt-2 flex items-center gap-3">
              <h4 className="text-[20px] font-semibold leading-none text-[#0B0F1F]">
                {umkm?.name}
              </h4>

              <span className="rounded-full bg-[#E8F7EF] px-3 py-1 text-[12px] font-semibold text-[#158A62]">
                Terverifikasi
              </span>
            </div>

            <div className="mt-2 flex items-start gap-3">
              <LuLayoutGrid size={18} className="mt-1 text-[#98A2B3]" />

              <div>
                <p className="text-[15px] font-medium text-[#98A2B3]">
                  Kategori
                </p>

                <div className="mt-2 flex items-center gap-3">
                  <CategoryIcon size={16} className="-ml-7 text-[#667085]" />

                  <p className="font-semibold text-[#344054]">
                    {umkm?.categories?.name}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detail */}
        <div className="mt-10 space-y-7">
          <InfoItem
            icon={<LuMapPin size={24} className="mt-1 text-[#475467]" />}
            title="Alamat"
            value={umkm?.address}
          />

          <InfoItem
            icon={<LuPhone size={24} className="mt-1 text-[#475467]" />}
            title="No. Telepon"
            value={umkm?.phone}
          />

          <InfoItem
            icon={<LuMail size={24} className="mt-1 text-[#475467]" />}
            title="Email"
            value={umkm?.email}
          />

          <InfoItem
            icon={<LuGlobe size={24} className="mt-1 text-[#475467]" />}
            title="Website"
            value={umkm?.website || "-"}
          />

          <InfoItem
            icon={<LuInstagram size={24} className="mt-1 text-[#475467]" />}
            title="Instagram"
            value={umkm?.instagram || "-"}
          />

          <InfoItem
            icon={<LuFacebook size={24} className="mt-1 text-[#475467]" />}
            title="Facebook"
            value={umkm?.facebook || "-"}
          />
        </div>
      </div>

      <button
        onClick={() => alert("🚀 Coming Soon!")}
        className="mt-10 flex h-14 w-full items-center justify-center gap-2 rounded-xl border border-[#85D0AD] bg-white font-semibold text-[#047948] transition hover:bg-[#047948] hover:text-white"
      >
        <Edit size={20} />
        Edit Profil
      </button>
    </div>
  );
}

interface InfoItemProps {
  icon: React.ReactNode;
  title: string;
  value: string;
}

function InfoItem({ icon, title, value }: InfoItemProps) {
  return (
    <div className="flex items-start gap-4">
      {icon}

      <div>
        <p className="text-[15px] font-medium text-[#667085]">{title}</p>

        <p className="mt-1 text-[17px] font-semibold text-[#0B0F1F]">{value}</p>
      </div>
    </div>
  );
}
