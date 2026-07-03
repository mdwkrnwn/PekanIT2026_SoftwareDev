"use client";

import { LuInstagram, LuMapPin, LuPhone } from "react-icons/lu";

interface Props {
  formData: {
    address: string;
    city: string;
    phone: string;
    instagram: string;
  };
  setFormData: React.Dispatch<
    React.SetStateAction<{
      name: string;
      category_id: string;
      description: string;
      address: string;
      city: string;
      phone: string;
      instagram: string;
      open_time: string;
      close_time: string;
    }>
  >;
}

export default function LocationContactForm({
  formData,
  setFormData,
}: Props) {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="flex items-center gap-2 text-xl font-bold text-slate-900">
        <LuMapPin className="text-[#15803d]" />
        Lokasi & Kontak
      </h3>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Alamat */}
        <div className="flex flex-col gap-2">
          <label className="font-bold text-slate-900">
            Alamat Lengkap <span className="text-rose-500">*</span>
          </label>

          <input
            type="text"
            value={formData.address}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                address: e.target.value,
              }))
            }
            className="rounded-xl border border-slate-200 p-4 font-medium text-slate-800 focus:border-[#15803d] focus:outline-none"
          />
        </div>

        {/* Kota */}
        <div className="flex flex-col gap-2">
          <label className="font-bold text-slate-900">
            Kota / Kabupaten <span className="text-rose-500">*</span>
          </label>

          <input
            type="text"
            value={formData.city}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                city: e.target.value,
              }))
            }
            className="rounded-xl border border-slate-200 p-4 font-medium text-slate-800 focus:border-[#15803d] focus:outline-none"
          />
        </div>

        {/* WhatsApp */}
        <div className="flex flex-col gap-2">
          <label className="font-bold text-slate-900">
            Nomor WhatsApp <span className="text-rose-500">*</span>
          </label>

          <div className="relative flex items-center">
            <LuPhone
              size={20}
              className="absolute left-4 text-slate-400"
            />

            <input
              type="text"
              value={formData.phone}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  phone: e.target.value,
                }))
              }
              className="w-full rounded-xl border border-slate-200 p-4 pl-12 font-medium text-slate-800 focus:border-[#15803d] focus:outline-none"
            />
          </div>
        </div>

        {/* Instagram */}
        <div className="flex flex-col gap-2">
          <label className="font-bold text-slate-900">
            Link Instagram{" "}
            <span className="font-normal text-slate-400">
              (opsional)
            </span>
          </label>

          <div className="relative flex items-center">
            <LuInstagram
              size={20}
              className="absolute left-4 text-slate-400"
            />

            <input
              type="text"
              value={formData.instagram}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  instagram: e.target.value,
                }))
              }
              className="w-full rounded-xl border border-slate-200 p-4 pl-12 font-medium text-slate-800 focus:border-[#15803d] focus:outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}