"use client";

import { LuClock } from "react-icons/lu";

interface Props {
  formData: {
    open_time: string;
    close_time: string;
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

export default function OperatingHoursForm({
  formData,
  setFormData,
}: Props) {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="flex items-center gap-2 text-xl font-bold text-slate-900">
        <LuClock className="text-[#15803d]" />
        Operasional
      </h3>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Jam Buka */}
        <div className="flex flex-col gap-2">
          <label className="font-bold text-slate-900">
            Jam Buka <span className="text-rose-500">*</span>
          </label>

          <input
            type="time"
            value={formData.open_time}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                open_time: e.target.value,
              }))
            }
            className="rounded-xl border border-slate-200 p-4 font-medium text-slate-800 focus:border-[#15803d] focus:outline-none"
          />
        </div>

        {/* Jam Tutup */}
        <div className="flex flex-col gap-2">
          <label className="font-bold text-slate-900">
            Jam Tutup <span className="text-rose-500">*</span>
          </label>

          <input
            type="time"
            value={formData.close_time}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                close_time: e.target.value,
              }))
            }
            className="rounded-xl border border-slate-200 p-4 font-medium text-slate-800 focus:border-[#15803d] focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
}