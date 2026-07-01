"use client";
import { supabase } from "@/lib/supabase";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { categoryIcons } from "@/lib/category-icons";

import { UploadCloudIcon, CheckCircle2 } from "lucide-react";
import { ChangeEvent, useState } from "react";
import Link from "next/link";

export default function CompleteProfilePage() {
  const [formData, setFormData] = useState({
    name: "",
    category_id: "",
    description: "",
    address: "",
    city: "",
    phone: "",
    instagram: "",
    open_time: "",
    close_time: "",
  });

  const router = useRouter();

  const [categories, setCategories] = useState<any[]>([]);
  const selectedCategory = categories.find(
    (item) => String(item.id) === formData.category_id,
  );

  const SelectedIcon =
    selectedCategory &&
    categoryIcons[selectedCategory.icon as keyof typeof categoryIcons];
  useEffect(() => {
    const getCategories = async () => {
      const { data, error } = await supabase
        .from("categories")
        .select("*")
        .order("name");

      console.log("DATA :", data);
      console.log("ERROR :", error);

      if (data) {
        setCategories(data);
      }
    };

    getCategories();
  }, []);

  const [uploadedPhotos, setUploadedPhotos] = useState<string[]>([]);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);

    const MAX_SIZE = 5 * 1024 * 1024; // 5 MB

    if (!files.length) return;

    for (const file of files) {
      if (!file.type.startsWith("image/")) {
        alert("File harus berupa gambar.");
        return;
      }

      if (file.size > MAX_SIZE) {
        alert("Ukuran foto maksimal 5 MB.");
        return;
      }
    }

    if (uploadedFiles.length + files.length > 5) {
      alert("Maksimal upload 5 foto.");
    }

    const newFiles = files.slice(0, 5 - uploadedFiles.length);

    const previewUrls = newFiles.map((file) => URL.createObjectURL(file));

    setUploadedFiles((prev) => [...prev, ...newFiles]);
    setUploadedPhotos((prev) => [...prev, ...previewUrls]);
  };

  const handleRemovePhoto = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));

    setUploadedPhotos((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    // Ambil user login
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      alert("Silakan login kembali.");
      return;
    }

    if (
      !formData.name ||
      !formData.category_id ||
      !formData.description ||
      !formData.address ||
      !formData.city ||
      !formData.phone ||
      !formData.open_time ||
      !formData.close_time
    ) {
      alert("Mohon lengkapi semua data.");
      return;
    }

    if (formData.open_time >= formData.close_time) {
      alert("Jam tutup harus lebih besar dari jam buka.");
      return;
    }

    if (uploadedFiles.length === 0) {
      alert("Silakan upload minimal 1 foto UMKM.");
      return;
    }

    let coverImage = "";
    const galleryImages: string[] = [];

    for (let i = 0; i < uploadedFiles.length; i++) {
      const file = uploadedFiles[i];

      const fileName = `${user.id}/${Date.now()}-${i}-${file.name}`;

      const { error: uploadError } = await supabase.storage
        .from("umkm")
        .upload(fileName, file);

      if (uploadError) {
        alert(uploadError.message);
        return;
      }

      const {
        data: { publicUrl },
      } = supabase.storage.from("umkm").getPublicUrl(fileName);

      galleryImages.push(publicUrl);

      if (i === 0) {
        coverImage = publicUrl;
      }
    }

    const { data: umkm, error } = await supabase
      .from("umkm")
      .insert({
        owner_id: user.id,

        name: formData.name.trim(),
        category_id: Number(formData.category_id),
        description: formData.description.trim(),

        address: formData.address.trim(),
        city: formData.city.trim(),
        email: user.email,
        phone: formData.phone.trim(),
        instagram: formData.instagram.trim(),

        open_time: formData.open_time.replace(".", ":"),
        close_time: formData.close_time.replace(".", ":"),

        cover_image: coverImage,
        status: "active",
      })
      .select()
      .single();

    if (error) {
      console.error(error);
      alert(error.message);
      return;
    }
    const galleryData = galleryImages.map((url) => ({
      umkm_id: umkm.id,
      image_url: url,
    }));

    const { error: galleryError } = await supabase
      .from("gallery")
      .insert(galleryData);

    if (galleryError) {
      alert(galleryError.message);
      return;
    }

    alert("Profil UMKM berhasil disimpan.");

    router.push("/admin/dashboard");
  };
  const avatarPreview = uploadedPhotos[0] || "/placeholder-avatar.png";
  const coverPreview =
    uploadedPhotos[1] || uploadedPhotos[0] || "/placeholder-cover.jpg";

  return (
    <>
      {/* ================= HEADER SECTION ================= */}
      <div className="flex flex-col md:flex-row items-start md:items-center  pb-8 gap-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-[#15803d]">
            <LuStore size={36} />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
              Lengkapi Profil UMKM
            </h1>
            <p className="text-slate-500 mt-1 text-lg">
              Hanya beberapa langkah lagi sebelum tokomu tampil di Bakool.
            </p>
          </div>
        </div>

        {/* Stepper Status */}
        <div className="flex items-center gap-6 bg-white border border-border p-4 rounded-2xl shadow-xs font-bold">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="text-emerald-600" size={24} />
            <div>
              <span className="text-slate-900 block">Akun</span>
              <span className="text-slate-400 font-medium block">
                Selesai
              </span>
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
        <div className="lg:col-span-2 bg-white  rounded-3xl p-8 shadow-xs flex flex-col gap-10 border-border border">
          {/* Group 1: Informasi UMKM */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <LuStore className="text-[#15803d]" /> Informasi UMKM
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-bold text-slate-900">
                  Nama UMKM <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                  className="border border-slate-200 rounded-xl p-4 text-slate-800 font-medium focus:outline-none focus:border-[#15803d]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-bold text-slate-900">
                  Kategori UMKM <span className="text-rose-500">*</span>
                </label>
                <Select
                  value={formData.category_id}
                  onValueChange={(value) =>
                    setFormData({
                      ...formData,
                      category_id: value,
                    })
                  }
                >
                  <SelectTrigger
                    className="w-full h-15 border border-slate-200 rounded-xl
                      px-4
                      text-slate-800
                      font-medium
                      bg-white
                      focus:outline-none
                      focus:border-[#15803d]"
                  >
                    {selectedCategory ? (
                      <div className="flex w-full items-center gap-4">
                        {SelectedIcon && (
                          <SelectedIcon
                            size={26}
                            className="text-[#667085]"
                          />
                        )}

                        <span className="text-[15px] font-semibold text-[#667085]">
                          {selectedCategory.name}
                        </span>
                      </div>
                    ) : (
                      <span className="text-[#98A2B3]">
                        Pilih kategori UMKM
                      </span>
                    )}
                  </SelectTrigger>

                  <SelectContent
                    position="popper"
                    className="w-125 rounded-2xl"
                  >
                    {categories.map((item) => {
                      const Icon =
                        categoryIcons[
                        item.icon as keyof typeof categoryIcons
                        ];

                      return (
                        <SelectItem
                          key={item.id}
                          value={String(item.id)}
                          className="h-12 cursor-pointer bg-white"
                        >
                          <div className="flex items-center gap-3">
                            {Icon && (
                              <Icon size={20} className="text-[#667085]" />
                            )}

                            <span className="font-medium">{item.name}</span>
                          </div>
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-bold text-slate-900">
                Deskripsi Singkat <span className="text-rose-500">*</span>
              </label>
              <textarea
                rows={3}
                value={formData.description}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    description: e.target.value,
                  })
                }
                className="border border-slate-200 rounded-xl p-4 text-slate-800 font-medium focus:outline-none focus:border-[#15803d] resize-none"
              />
            </div>
          </div>

          {/* Group 2: Lokasi & Kontak */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <LuMapPin className="text-[#15803d]" /> Lokasi & Kontak
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-bold text-slate-900">
                  Alamat Lengkap <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      address: e.target.value,
                    })
                  }
                  className="border border-slate-200 rounded-xl p-4 text-slate-800 font-medium focus:outline-none focus:border-[#15803d]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-bold text-slate-900">
                  Kota / Kabupaten <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      city: e.target.value,
                    })
                  }
                  className="border border-slate-200 rounded-xl p-4 text-slate-800 font-medium focus:outline-none focus:border-[#15803d]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-bold text-slate-900">
                  Nomor Whatsapp <span className="text-rose-500">*</span>
                </label>
                <div className="relative flex items-center">
                  <LuPhone
                    className="absolute left-4 text-slate-400"
                    size={20}
                  />
                  <input
                    type="text"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        phone: e.target.value,
                      })
                    }
                    className="w-full border border-slate-200 rounded-xl p-4 pl-12 text-slate-800 font-medium focus:outline-none focus:border-[#15803d]"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-bold text-slate-900">
                  Link Instagram{" "}
                  <span className="text-slate-400 font-normal">
                    (opsional)
                  </span>
                </label>
                <div className="relative flex items-center">
                  <LuInstagram
                    className="absolute left-4 text-slate-400"
                    size={20}
                  />
                  <input
                    type="text"
                    value={formData.instagram}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        instagram: e.target.value,
                      })
                    }
                    className="w-full border border-slate-200 rounded-xl p-4 pl-12 text-slate-800 font-medium focus:outline-none focus:border-[#15803d]"
                  />
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
                <label className="font-bold text-slate-900">
                  Jam Buka <span className="text-rose-500">*</span>
                </label>
                <input
                  type="time"
                  value={formData.open_time}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      open_time: e.target.value,
                    })
                  }
                  className="border border-slate-200 rounded-xl p-4 text-slate-800 font-medium focus:outline-none focus:border-[#15803d]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-bold text-slate-900">
                  Jam Tutup <span className="text-rose-500">*</span>
                </label>
                <input
                  type="time"
                  value={formData.close_time}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      close_time: e.target.value,
                    })
                  }
                  className="border border-slate-200 rounded-xl p-4 text-slate-800 font-medium focus:outline-none focus:border-[#15803d]"
                />
              </div>
            </div>
          </div>

          {/* Group 4: Foto UMKM */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Foto UMKM</h3>
              <p className="text-slate-400 font-medium mt-1">
                Upload foto terbaik untuk tokomu. Maksimal 5 foto.
              </p>
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
                  <span className="font-bold text-slate-900 block">
                    Upload Foto
                  </span>
                </label>
              ) : (
                <div className="border-2 border-dashed border-slate-100 rounded-2xl p-4 flex flex-col items-center justify-center text-center gap-2 bg-slate-50 opacity-60 min-h-30 select-none">
                  <UploadCloudIcon className="text-slate-300" size={28} />
                  <span className="font-bold text-slate-400 block">
                    Slot Penuh
                  </span>
                </div>
              )}
              {uploadedPhotos.map((photoUrl, idx) => (
                <div
                  key={idx}
                  className="relative aspect-square rounded-2xl overflow-hidden group border border-slate-100 bg-slate-50"
                >
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
          <div className="flex justify-between items-center border-t border-border pt-8 mt-4">
            <button className="border border-slate-200 text-slate-700 font-bold px-6 py-4 rounded-xl flex items-center gap-2 hover:bg-slate-50 transition-colors">
              <LuArrowLeft size={20} /> Sebelumnya
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="bg-[#15803d] text-white font-bold px-6 py-4 rounded-xl flex items-center gap-2 hover:bg-[#166534] transition-colors shadow-xs"
            >
              Simpan & Masuk Dashboard
              <LuArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* RIGHT: Live Preview Sticky Card Container Component */}
        <div className="lg:col-span-1 flex flex-col gap-6 sticky top-0">
          <div className="bg-white border border-border rounded-3xl p-6 shadow-xs">
            <div className="flex items-center gap-2 text-slate-500 font-bold mb-6">
              <LuStore className="text-[#15803d]" size={22} />
              <h3>Preview Toko Kamu</h3>
            </div>

            {/* Main Visual Component mimicking Customer App View */}
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
                {/* Miniature Avatar Floating Overlay */}
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
                    <LuMapPin size={18} className="text-slate-400" />{" "}
                    {formData.city || "Kota"}
                  </p>
                  <p className="flex items-center gap-2">
                    <LuClock size={18} className="text-slate-400" />
                    {formData.open_time || "--.--"} -{" "}
                    {formData.close_time || "--.--"}
                  </p>
                  <p className="flex items-center gap-2">
                    <LuPhone size={18} className="text-slate-400" />{" "}
                    {formData.phone || "-"}
                  </p>
                  <p className="flex items-center gap-2">
                    <LuInstagram size={18} className="text-slate-400" />{" "}
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

          {/* Security Note Alert Banner */}
          <div className="bg-emerald-50 text-emerald-800 border border-emerald-100/50 p-4 rounded-2xl font-medium leading-relaxed">
            Setelah disimpan, tokomu akan diverifikasi oleh tim Bakool sebelum
            tampil di platform.
          </div>
        </div>
      </div>
    </>
  );
}
