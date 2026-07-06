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
      <div className="md:row-span-2 flex min-h-180 flex-col justify-between rounded-3xl border border-[#EAECF0] bg-white p-8 shadow-sm">
        <div>
          <Skeleton className="w-40 h-6 mb-8" />

          {/* Header */}
          <div className="flex gap-6">
            <Skeleton className="h-30 w-35 rounded-3xl" />

            <div className="flex-1">
              <Skeleton className="w-24 h-4" />

              <div className="flex items-center gap-3 mt-3">
                <Skeleton className="h-7 w-40" />
                <Skeleton className="w-24 h-6 rounded-full" />
              </div>

              <div className="mt-5">
                <Skeleton className="w-20 h-4" />

                <div className="flex items-center gap-3 mt-3">
                  <Skeleton className="w-5 h-5 rounded-full" />
                  <Skeleton className="w-28 h-5" />
                </div>
              </div>
            </div>
          </div>

          {/* Detail */}
          <div className="space-y-7 mt-10">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="flex items-start gap-4">
                <Skeleton className="w-6 h-6 rounded-md" />

                <div className="flex-1">
                  <Skeleton className="w-24 h-4" />
                  <Skeleton className="w-52 h-5 mt-2" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <Skeleton className="h-14 rounded-xl w-full mt-10" />
      </div>
    );
  }
  return (
    <div className="md:row-span-2 flex flex-col justify-between rounded-3xl border border-[#EAECF0] bg-white p-8 shadow-sm">
      <div>
        <h3 className="mb-8 text-[18px] font-semibold text-[#0B0F1F]">
          Informasi Toko
        </h3>

        {/* Header */}
        <div className="flex flex-wrap gap-6">
          <div className="size-35 shrink-0 rounded-3xl relative overflow-hidden">
            <Image
              src={umkm?.cover_image || "/placeholder-cover.jpg"}
              alt={umkm?.name || "UMKM"}
              fill
              className=" object-cover"
            />
          </div>

          <div className="flex-1">
            <p className="text-[15px] font-medium text-[#98A2B3]">Nama Toko</p>

            <div className="flex flex-wrap items-center gap-3 mt-2">
              <h4 className="text-[20px] font-semibold leading-none text-[#0B0F1F]">
                {umkm?.name}
              </h4>

              <span className="rounded-full bg-[#E8F7EF] px-3 py-1 text-[12px] font-semibold text-[#158A62]">
                Terverifikasi
              </span>
            </div>

            <div className="flex items-start gap-3 mt-2">
              <LuLayoutGrid size={18} className="mt-1 text-[#98A2B3]" />

              <div>
                <p className="text-[15px] font-medium text-[#98A2B3]">
                  Kategori
                </p>

                <div className="flex items-center gap-3 mt-2">
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
        <div className="space-y-7 mt-10">
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

        <p className="mt-1 text-[17px] font-semibold break-all text-[#0B0F1F]">{value}</p>
      </div>
    </div>
  );
}
