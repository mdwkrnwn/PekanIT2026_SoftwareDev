import { CheckCircle2 } from "lucide-react";
import { LuStore } from "react-icons/lu";

export default function CompleteProfileHeader() {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-8 gap-6">
      {/* Title */}
      <div className="flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-[#15803d]">
          <LuStore size={36} />
        </div>

        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Lengkapi Profil UMKM
          </h1>
          <p className="mt-1 text-lg text-slate-500">
            Hanya beberapa langkah lagi sebelum tokomu tampil di Bakool.
          </p>
        </div>
      </div>

      {/* Stepper */}
      <div className="flex items-center gap-6 rounded-2xl border border-border bg-white p-4 font-bold shadow-xs">
        <div className="flex items-center gap-2">
          <CheckCircle2
            size={24}
            className="text-emerald-600"
          />

          <div>
            <span className="block text-slate-900">Akun</span>
            <span className="block font-medium text-slate-400">
              Selesai
            </span>
          </div>
        </div>

        <div className="h-0.5 w-12 bg-slate-200" />

        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#15803d] text-[#15803d]">
            2
          </div>

          <div>
            <span className="block text-[#15803d]">
              Profil UMKM
            </span>
            <span className="block font-medium text-slate-400">
              2 / 2
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}