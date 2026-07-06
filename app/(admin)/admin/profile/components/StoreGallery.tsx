"use client";

import Image from "next/image";
import { LuPlus } from "react-icons/lu";
import { Skeleton } from "@/components/ui/skeleton";

interface GalleryPhoto {
  id: number;
  image_url: string;
}

interface StoreGalleryProps {
  gallery?: GalleryPhoto[];
  loading: boolean;
  addPhoto: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function StoreGallery({
  gallery,
  loading,
  addPhoto,
}: StoreGalleryProps) {
  if (loading) {
    return (
      <div className="md:col-span-2 rounded-3xl border border-[#EAECF0] bg-white p-6 shadow-xs">
        <Skeleton className="w-40 h-6 mb-4" />

        <div className="md:grid-cols-5 grid grid-cols-2 gap-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <Skeleton
              key={index}
              className="aspect-square rounded-2xl"
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="md:col-span-2 rounded-3xl border border-[#EAECF0] bg-white p-6 shadow-xs">
      <h3 className="text-slate-900 mb-4 text-xl font-bold">
        Galeri Toko
      </h3>

      <div className="md:grid-cols-5 grid grid-cols-2 gap-4">
        {gallery?.map((photo) => (
          <div
            key={photo.id}
            className="aspect-square rounded-2xl relative overflow-hidden"
          >
            <Image
              src={photo.image_url}
              alt="Gallery"
              fill
              className="object-cover"
            />
          </div>
        ))}

        <label
          htmlFor="photo"
          className="flex aspect-square cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-[#85D0AD] p-4 text-center text-[#047948] transition-colors hover:border-white hover:bg-[#047948] hover:text-white"
        >
          <LuPlus size={24} />

          <span className="font-bold">
            Tambah Foto
          </span>
        </label>

        <input
          id="photo"
          name="photo"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={addPhoto}
        />
      </div>
    </div>
  );
}