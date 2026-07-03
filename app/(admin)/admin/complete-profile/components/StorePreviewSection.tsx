import Image from "next/image";
import {
  LuClock,
  LuInstagram,
  LuMapPin,
  LuPhone,
  LuStore,
} from "react-icons/lu";

interface StorePreviewSectionProps {
  coverPreview: string;
  avatarPreview: string;
  formData: {
    name: string;
    city: string;
    open_time: string;
    close_time: string;
    phone: string;
    instagram: string;
    description: string;
  };
  selectedCategory?: {
    name: string;
  } | null;
}

export default function StorePreviewSection({
  coverPreview,
  avatarPreview,
  formData,
  selectedCategory,
}: StorePreviewSectionProps) {
  return (
    <div className="bg-white border border-border rounded-3xl p-6 shadow-xs">
      <div className="flex items-center gap-2 text-slate-500 font-bold mb-6">
        <LuStore className="text-[#15803d]" size={22} />
        <h3>Preview Toko Kamu</h3>
      </div>

      <div className="border border-slate-100 rounded-2xl overflow-hidden shadow-xs bg-white">
        <div className="relative h-48 w-full bg-slate-100">
          <Image
            src={coverPreview}
            fill
            className="object-cover"
            alt="Cover Toko"
          />
        </div>

        <div className="p-5 flex flex-col gap-4 relative">
          <div className="w-16 h-16 relative rounded-xl overflow-hidden border-2 border-white shadow-md -mt-12 z-10 bg-white">
            <Image
              src={avatarPreview}
              fill
              className="object-cover"
              alt="Avatar UMKM"
            />
          </div>

          <div>
            <div className="flex justify-between items-center">
              <h4 className="text-xl font-bold text-slate-900">
                {formData.name || "Nama UMKM"}
              </h4>

              <span className="bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded-md text-base">
                Buka
              </span>
            </div>

            <p className="text-slate-500 font-medium mt-1">
              {selectedCategory?.name || "Kategori"} • ★ 0.0
            </p>
          </div>

          <div className="flex flex-col gap-2 border-t border-b border-slate-50 py-3 text-slate-600 font-medium">
            <p className="flex items-center gap-2">
              <LuMapPin size={18} className="text-slate-400" />
              {formData.city || "Kota"}
            </p>

            <p className="flex items-center gap-2">
              <LuClock size={18} className="text-slate-400" />
              {formData.open_time || "--.--"} -{" "}
              {formData.close_time || "--.--"}
            </p>

            <p className="flex items-center gap-2">
              <LuPhone size={18} className="text-slate-400" />
              {formData.phone || "-"}
            </p>

            <p className="flex items-center gap-2">
              <LuInstagram size={18} className="text-slate-400" />
              {formData.instagram || "-"}
            </p>
          </div>

          <p className="text-slate-500 leading-relaxed font-medium">
            {formData.description ||
              "Deskripsi toko akan tampil di sini."}
          </p>
        </div>
      </div>
    </div>
  );
}