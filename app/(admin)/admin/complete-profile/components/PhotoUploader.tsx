"use client";

import Image from "next/image";
import { UploadCloudIcon } from "lucide-react";
import { LuX } from "react-icons/lu";

interface Props {
  uploadedPhotos: string[];
  handlePhotoUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleRemovePhoto: (index: number) => void;
}

export default function PhotoUploader({
  uploadedPhotos,
  handlePhotoUpload,
  handleRemovePhoto,
}: Props) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-xl font-bold text-slate-900">
          Foto UMKM
        </h3>

        <p className="mt-1 font-medium text-slate-400">
          Upload foto terbaik untuk tokomu. Maksimal 5 foto.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
        {/* Upload Card */}
        {uploadedPhotos.length < 5 ? (
          <label className="flex min-h-30 cursor-pointer select-none flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-slate-200 p-4 text-center transition-colors hover:border-[#15803d]">
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handlePhotoUpload}
              className="hidden"
            />

            <UploadCloudIcon
              size={28}
              className="text-[#15803d]"
            />

            <span className="font-bold text-slate-900">
              Upload Foto
            </span>
          </label>
        ) : (
          <div className="flex min-h-30 select-none flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-slate-100 bg-slate-50 p-4 text-center opacity-60">
            <UploadCloudIcon
              size={28}
              className="text-slate-300"
            />

            <span className="font-bold text-slate-400">
              Slot Penuh
            </span>
          </div>
        )}

        {/* Preview */}
        {uploadedPhotos.map((photoUrl, index) => (
          <div
            key={index}
            className="group relative aspect-square overflow-hidden rounded-2xl border border-slate-100 bg-slate-50"
          >
            <Image
              src={photoUrl}
              alt={`Foto ${index + 1}`}
              fill
              className="object-cover"
            />

            <button
              type="button"
              onClick={() => handleRemovePhoto(index)}
              className="absolute right-2 top-2 z-10 rounded-full bg-black/60 p-2 text-white transition-colors hover:bg-rose-600"
            >
              <LuX size={16} />
            </button>
          </div>
        ))}
      </div>

      <span className="block font-medium text-slate-400">
        {uploadedPhotos.length} / 5 foto diupload
      </span>
    </div>
  );
}