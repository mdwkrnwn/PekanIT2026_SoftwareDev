"use client";

import Image from "next/image";
import {
  LuStore,
  LuMapPin,
  LuPhone,
  LuInstagram,
  LuClock,
  LuX,
  LuArrowLeft,
  LuArrowRight,
} from "react-icons/lu";

import { UploadCloudIcon, CheckCircle2 } from "lucide-react";
import { ChangeEvent, useState } from "react";
import Link from "next/link";

export default function CompleteProfilePage() {
  const [uploadedPhotos, setUploadedPhotos] = useState<string[]>([]);
  const handlePhotoUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);

      if (uploadedPhotos.length + filesArray.length > 5) {
        alert("Maksimal foto yang dapat diunggah adalah 5 foto.");
        return;
      }

      const newPhotoUrls = filesArray.map((file) => URL.createObjectURL(file));
      setUploadedPhotos((prev) => [...prev, ...newPhotoUrls]);
      e.target.value = "";
    }
  };
  const handleRemovePhoto = (indexToRemove: number) => {
    setUploadedPhotos((prev) => prev.filter((_, idx) => idx !== indexToRemove));
  };
  return (
    <div className="min-h-screen text-base">
      <div className=" w-full">
        {/* ================= HEADER SECTION ================= */}
        <div className="flex flex-col md:flex-row  items-start md:items-center  pb-8 gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-[#15803d]">
              <LuStore size={36} />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Lengkapi Profil UMKM</h1>
              <p className="text-slate-500 mt-1 text-lg">Hanya beberapa langkah lagi sebelum tokomu tampil di Bakool.</p>
            </div>
          </div>

          {/* Stepper Status */}
          <div className="flex items-center gap-6 bg-white border border-slate-100 p-4 rounded-2xl shadow-xs font-bold">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-emerald-600" size={24} />
              <div>
                <span className="text-slate-900 block">Akun</span>
                <span className="text-slate-400 font-medium block">Selesai</span>
              </div>
            </div>
            <div className="w-12 h-0.5 bg-slate-200" />
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border-2 border-[#15803d] rounded-full flex items-center justify-center text-[#15803d]">
                2
              </div>
              <div>
                <span className="text-[#15803d] block">Profil UMKM</span>
                <span className="text-slate-400 font-medium block">2 / 2</span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= MAIN CONTENT LAYOUT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

          {/* LEFT: Form Inputs (2 Columns Wide) */}
          <div className="lg:col-span-2 bg-white  rounded-3xl p-8 shadow-xs flex flex-col gap-10">

            {/* Group 1: Informasi UMKM */}
            <div className="flex flex-col gap-6">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <LuStore className="text-[#15803d]" /> Informasi UMKM
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-bold text-slate-900">Nama UMKM <span className="text-rose-500">*</span></label>
                  <input type="text" defaultValue="Dapur Nona" className="border border-slate-200 rounded-xl p-4 text-slate-800 font-medium focus:outline-none focus:border-[#15803d]" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-bold text-slate-900">Kategori UMKM <span className="text-rose-500">*</span></label>
                  <select className="border border-slate-200 rounded-xl p-4 text-slate-800 font-medium bg-white focus:outline-none focus:border-[#15803d]">
                    <option>Makanan & Minuman</option>
                    <option>Kerajinan</option>
                    <option>Toko Kelontong</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-bold text-slate-900">Deskripsi Singkat <span className="text-rose-500">*</span></label>
                <textarea rows={3} defaultValue="Menyediakan aneka makanan rumahan sehat, lezat dan higienis dengan bahan pilihan terbaik." className="border border-slate-200 rounded-xl p-4 text-slate-800 font-medium focus:outline-none focus:border-[#15803d] resize-none" />
              </div>
            </div>

            {/* Group 2: Lokasi & Kontak */}
            <div className="flex flex-col gap-6">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <LuMapPin className="text-[#15803d]" /> Lokasi & Kontak
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-bold text-slate-900">Alamat Lengkap <span className="text-rose-500">*</span></label>
                  <input type="text" defaultValue="Jl. Soekarno Hatta No.45, Lowokwaru" className="border border-slate-200 rounded-xl p-4 text-slate-800 font-medium focus:outline-none focus:border-[#15803d]" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-bold text-slate-900">Kota / Kabupaten <span className="text-rose-500">*</span></label>
                  <input type="text" defaultValue="Malang" className="border border-slate-200 rounded-xl p-4 text-slate-800 font-medium focus:outline-none focus:border-[#15803d]" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-bold text-slate-900">Nomor Whatsapp <span className="text-rose-500">*</span></label>
                  <div className="relative flex items-center">
                    <LuPhone className="absolute left-4 text-slate-400" size={20} />
                    <input type="text" defaultValue="0812-3456-7890" className="w-full border border-slate-200 rounded-xl p-4 pl-12 text-slate-800 font-medium focus:outline-none focus:border-[#15803d]" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-bold text-slate-900">Link Instagram <span className="text-slate-400 font-normal">(opsional)</span></label>
                  <div className="relative flex items-center">
                    <LuInstagram className="absolute left-4 text-slate-400" size={20} />
                    <input type="text" defaultValue="@dapurnona.id" className="w-full border border-slate-200 rounded-xl p-4 pl-12 text-slate-800 font-medium focus:outline-none focus:border-[#15803d]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Group 3: Operasional */}
            <div className="flex flex-col gap-6">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <LuClock className="text-[#15803d]" /> Operasional
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-bold text-slate-900">Jam Buka <span className="text-rose-500">*</span></label>
                  <input type="text" defaultValue="08.00" className="border border-slate-200 rounded-xl p-4 text-slate-800 font-medium focus:outline-none focus:border-[#15803d]" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-bold text-slate-900">Jam Tutup <span className="text-rose-500">*</span></label>
                  <input type="text" defaultValue="20.00" className="border border-slate-200 rounded-xl p-4 text-slate-800 font-medium focus:outline-none focus:border-[#15803d]" />
                </div>
              </div>
            </div>

            {/* Group 4: Foto UMKM */}
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900">Foto UMKM</h3>
                <p className="text-slate-400 font-medium mt-1">Upload foto terbaik untuk tokomu. Maksimal 5 foto.</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {/* Pre-uploaded Item Previews */}
                {uploadedPhotos.length < 5 ? (
                  <label className="border-2 border-dashed border-slate-200 rounded-2xl p-4 flex flex-col items-center justify-center text-center gap-2 cursor-pointer hover:border-[#15803d] transition-colors min-h-30 select-none">
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handlePhotoUpload}
                      className="hidden"
                    />
                    <UploadCloudIcon className="text-[#15803d]" size={28} />
                    <span className="font-bold text-slate-900 block">Upload Foto</span>
                  </label>
                ) : (
                  <div className="border-2 border-dashed border-slate-100 rounded-2xl p-4 flex flex-col items-center justify-center text-center gap-2 bg-slate-50 opacity-60 min-h-30 select-none">
                    <UploadCloudIcon className="text-slate-300" size={28} />
                    <span className="font-bold text-slate-400 block">Slot Penuh</span>
                  </div>
                )}
                {uploadedPhotos.map((photoUrl, idx) => (
                  <div key={idx} className="relative aspect-square rounded-2xl overflow-hidden group border border-slate-100 bg-slate-50">
                    <Image
                      src={photoUrl}
                      fill
                      className="object-cover"
                      alt={`Uploaded Preview ${idx + 1}`}
                    />
                    <button
                      type="button"
                      onClick={() => handleRemovePhoto(idx)}
                      className="absolute top-2 right-2 bg-black/60 text-white rounded-full p-2 hover:bg-rose-600 transition-colors z-10"
                    >
                      <LuX size={16} />
                    </button>
                  </div>
                ))}
              </div>
              <span className="text-slate-400 font-medium block">
                {uploadedPhotos.length} / 5 foto diupload
              </span>
            </div>

            {/* Form Nav Actions Footer */}
            <div className="flex justify-between items-center border-t border-slate-100 pt-8 mt-4">
              <button className="border border-slate-200 text-slate-700 font-bold px-6 py-4 rounded-xl flex items-center gap-2 hover:bg-slate-50 transition-colors">
                <LuArrowLeft size={20} /> Sebelumnya
              </button>
              <Link href={"/admin/dashboard"} className="bg-[#15803d] text-white font-bold px-6 py-4 rounded-xl flex items-center gap-2 hover:bg-[#166534] transition-colors shadow-xs">
                Simpan & Masuk Dashboard <LuArrowRight size={20} />
              </Link>
            </div>

          </div>

          {/* RIGHT: Live Preview Sticky Card Container Component */}
          <div className="lg:col-span-1 flex flex-col gap-6 sticky top-8">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs">
              <div className="flex items-center gap-2 text-slate-500 font-bold mb-6">
                <LuStore className="text-[#15803d]" size={22} />
                <h3>Preview Toko Kamu</h3>
              </div>

              {/* Main Visual Component mimicking Customer App View */}
              <div className="border border-slate-100 rounded-2xl overflow-hidden shadow-xs bg-white">
                <div className="relative h-48 w-full bg-slate-100">
                  <Image src="https://picsum.photos/400/300?random=110" fill className="object-cover" alt="Cover Toko" />
                </div>

                <div className="p-5 flex flex-col gap-4 relative">
                  {/* Miniature Avatar Floating Overlay */}
                  <div className="w-16 h-16 relative rounded-xl overflow-hidden border-2 border-white shadow-md -mt-12 z-10 bg-white">
                    <Image src="https://picsum.photos/100?random=111" fill className="object-cover" alt="Mini Avatar" />
                  </div>

                  <div>
                    <div className="flex justify-between items-center">
                      <h4 className="text-xl font-bold text-slate-900">Dapur Nona</h4>
                      <span className="bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded-md text-base">Buka</span>
                    </div>
                    <p className="text-slate-500 font-medium mt-1">Makanan Rumahan • ★ 4.8 (128)</p>
                  </div>

                  <div className="flex flex-col gap-2 border-t border-b border-slate-50 py-3 text-slate-600 font-medium">
                    <p className="flex items-center gap-2"><LuMapPin size={18} className="text-slate-400" /> Lowokwaru, Malang</p>
                    <p className="flex items-center gap-2"><LuClock size={18} className="text-slate-400" /> 08.00 - 20.00</p>
                    <p className="flex items-center gap-2"><LuPhone size={18} className="text-slate-400" /> 0812-3456-7890</p>
                    <p className="flex items-center gap-2"><LuInstagram size={18} className="text-slate-400" /> @dapurnona.id</p>
                  </div>

                  <p className="text-slate-500 leading-relaxed font-medium">
                    Menyediakan aneka makanan rumahan sehat, lezat dan higienis dengan bahan pilihan terbaik.
                  </p>
                </div>
              </div>
            </div>

            {/* Security Note Alert Banner */}
            <div className="bg-emerald-50 text-emerald-800 border border-emerald-100/50 p-4 rounded-2xl font-medium leading-relaxed">
              Setelah disimpan, tokomu akan diverifikasi oleh tim Bakool sebelum tampil di platform.
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}