"use client";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  LuStore,
  LuMapPin,
  LuPhone,
  LuInstagram,
  LuClock,
  LuX,
  LuEye,
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
import { Sparkles } from "lucide-react";
import { categoryIcons } from "@/lib/category-icons";
import SplashScreen from "@/components/SplashScreen";
import { LoaderCircle } from "lucide-react";
import { UploadCloudIcon, CheckCircle2 } from "lucide-react";
// import { ChangeEvent, useState } from "react";
// import Link from "next/link";

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
  const [checking, setChecking] = useState(true);
  const [loadingSave, setLoadingSave] = useState(false);
  const [loadingBack, setLoadingBack] = useState(false);
  useEffect(() => {
    const checkStore = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.replace("/login");
        return;
      }

      const { data: umkm } = await supabase
        .from("umkm")
        .select("id")
        .eq("owner_id", user.id)
        .maybeSingle();

      if (umkm) {
        router.replace("/admin/dashboard");
        return;
      }

      setChecking(false);
    };

    checkStore();
  }, [router]);

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

  const handleBack = async () => {
    setLoadingBack(true);

    await new Promise((resolve) => setTimeout(resolve, 700));

    router.push("/login");
  };

  const handleSubmit = async () => {
    setLoadingSave(true);

    try {
      // Ambil user login
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        alert("Silakan login kembali.");
        setLoadingSave(false);
        return;
      }

      // Validasi form
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
        setLoadingSave(false);
        return;
      }

      // Validasi jam operasional
      if (formData.open_time >= formData.close_time) {
        alert("Jam tutup harus lebih besar dari jam buka.");
        setLoadingSave(false);
        return;
      }

      // Validasi foto
      if (uploadedFiles.length === 0) {
        alert("Silakan upload minimal 1 foto UMKM.");
        setLoadingSave(false);
        return;
      }

      let coverImage = "";
      const galleryImages: string[] = [];

      // Upload semua foto
      for (let i = 0; i < uploadedFiles.length; i++) {
        const file = uploadedFiles[i];

        const fileName = `${user.id}/${Date.now()}-${i}-${file.name}`;

        const { error: uploadError } = await supabase.storage
          .from("umkm")
          .upload(fileName, file);

        if (uploadError) {
          throw new Error(uploadError.message);
        }

        const {
          data: { publicUrl },
        } = supabase.storage.from("umkm").getPublicUrl(fileName);

        galleryImages.push(publicUrl);

        if (i === 0) {
          coverImage = publicUrl;
        }
      }

      // Insert UMKM
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
        throw new Error(error.message);
      }

      // Insert Gallery
      const galleryData = galleryImages.map((url) => ({
        umkm_id: umkm.id,
        image_url: url,
      }));

      const { error: galleryError } = await supabase
        .from("gallery")
        .insert(galleryData);

      if (galleryError) {
        throw new Error(galleryError.message);
      }

      // Delay agar spinner terlihat
      await new Promise((resolve) => setTimeout(resolve, 1200));

      router.push("/admin/dashboard");
    } catch (error) {
      console.error(error);

      alert(error instanceof Error ? error.message : "Terjadi kesalahan.");

      setLoadingSave(false);
    }
  };
  const avatarPreview = uploadedPhotos[0] ?? "/placeholder-avatar.png";

  const coverPreview = uploadedPhotos[1] ?? "/placeholder-cover.png";

  if (checking || loadingSave || loadingBack) {
    let message = "Memuat halaman...";

    if (checking) {
      message = "Memeriksa akun...";
    }

    if (loadingBack) {
      message = "Kembali ke halaman login...";
    }

    if (loadingSave) {
      message = "Menyimpan profil UMKM...";
    }

    return <SplashScreen message={message} />;
  }

  return (
    <>
      <div className="flex mt-7 flex-col items-start justify-between gap-8 pb-8 md:flex-row md:items-center">
        {/* Left */}
        <div className="flex items-center gap-4">
          {/* Store Image */}
          <Image
            src="/store.png"
            alt="Store"
            width={100}
            height={100}
            className="h-20 w-20 object-contain"
          />

          <div>
            <h1 className="text-[25px] font-bold text-[#0B0F1F] dark:text-white">
              Lengkapi Profil UMKM
            </h1>

            <p className="mt-1 text-[15px] text-[#475467] dark:text-slate-400">
              Hanya beberapa langkah lagi sebelum tokomu tampil di Bakool.
            </p>
          </div>
        </div>

        {/* Stepper */}
        <div className="flex items-center gap-5">
          {/* Step 1 */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#158A62]">
              <CheckCircle2
                size={22}
                strokeWidth={2.8}
                className="text-white"
              />
            </div>

            <div className="leading-tight">
              <p className="text-[15px] font-semibold text-[#101828] dark:text-white">
                Akun
              </p>

              <span className="text-[13px] text-[#667085] dark:text-slate-400">
                Selesai
              </span>
            </div>
          </div>

          {/* Line */}
          <div className="h-[1.5px] w-20 bg-[#158A62]/40 dark:bg-[#158A62]/60" />

          {/* Step 2 */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#158A62] bg-white text-[14px] font-bold text-[#158A62] dark:bg-slate-900">
              2
            </div>

            <div className="leading-tight">
              <p className="text-[15px] font-semibold text-[#101828] dark:text-white">
                Profil UMKM
              </p>

              <span className="text-[13px] text-[#667085] dark:text-slate-400">
                2 / 2
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MAIN CONTENT LAYOUT ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        {/* LEFT: Form Inputs (2 Columns Wide) */}
        <div className="lg:col-span-2 bg-white  rounded-[8px] p-8 shadow-xs flex flex-col gap-10 border-[#ECEDF0] border">
          {/* Group 1: Informasi UMKM */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-bold text-[#0B0F1F] flex items-center gap-2">
              <LuStore className="text-[#15803d]" /> Informasi UMKM
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-bold text-[#0B0F1F]">
                  Nama UMKM <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Dapur Nona"
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
                <label className="font-bold text-[#0B0F1F]">
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
                          <SelectedIcon size={26} className="text-[#667085]" />
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
                        categoryIcons[item.icon as keyof typeof categoryIcons];

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
              <label className="font-bold text-[#0B0F1F]">
                Deskripsi Singkat <span className="text-rose-500">*</span>
              </label>
              <textarea
                rows={3}
                value={formData.description}
                placeholder="Menyediakan aneka makanan rumahan sehat, lezat dan higienis dengan bahan pilihan terbaik."
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
            <h3 className="text-xl font-bold text-[#0B0F1F] flex items-center gap-2">
              <LuMapPin className="text-[#15803d]" /> Lokasi & Kontak
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-bold text-[#0B0F1F]">
                  Alamat Lengkap <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.address}
                  placeholder="Jl. Soekarno Hatta No.45, Lowokwaru"
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
                <label className="font-bold text-[#0B0F1F]">
                  Kota / Kabupaten <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.city}
                  placeholder="Malang"
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
                <label className="font-bold text-[#0B0F1F]">
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
                    placeholder="0812-3456-7890"
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
                <label className="font-bold text-[#0B0F1F]">
                  Link Instagram{" "}
                  <span className="text-slate-400 font-normal">(opsional)</span>
                </label>
                <div className="relative flex items-center">
                  <LuInstagram
                    className="absolute left-4 text-slate-400"
                    size={20}
                  />
                  <input
                    type="text"
                    value={formData.instagram}
                    placeholder="dapurnona.id"
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
            <h3 className="text-xl font-bold text-[#0B0F1F] flex items-center gap-2">
              <LuClock className="text-[#15803d]" /> Operasional
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-bold text-[#0B0F1F]">
                  Jam Buka <span className="text-rose-500">*</span>
                </label>
                <input
                  type="time"
                  value={formData.open_time}
                  placeholder="08.00"
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
                <label className="font-bold text-[#0B0F1F]">
                  Jam Tutup <span className="text-rose-500">*</span>
                </label>
                <input
                  type="time"
                  placeholder="20.00"
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
              <h3 className="text-xl font-bold text-[#0B0F1F]">Foto UMKM</h3>
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
                  <span className="font-bold text-[#0B0F1F] block">
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
            <button
              type="button"
              onClick={handleBack}
              disabled={loadingBack}
              className="flex items-center gap-2 rounded-xl border border-slate-200 px-6 py-4 font-bold text-slate-700 transition-colors hover:bg-slate-50 disabled:pointer-events-none disabled:opacity-70 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              {loadingBack ? (
                <>
                  <LoaderCircle className="h-5 w-5 animate-spin" />
                  <span>Kembali...</span>
                </>
              ) : (
                <>
                  <LuArrowLeft size={20} />
                  <span>Sebelumnya</span>
                </>
              )}
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={loadingSave}
              className="bg-[#15803d] text-white font-bold px-6 py-4 rounded-xl flex items-center gap-2 hover:bg-[#166534] transition-colors shadow-xs"
            >
              {loadingSave ? (
                <>
                  <LoaderCircle className="h-5 w-5 animate-spin" />
                  <span>Menyimpan Profil...</span>
                </>
              ) : (
                <>
                  <span>Simpan & Masuk Dashboard</span>
                  <LuArrowRight className="h-5 w-5" />
                </>
              )}
            </button>
          </div>
        </div>

        {/* RIGHT: Live Preview Sticky Card Container Component */}
        <div className="lg:col-span-1 sticky top-5 flex flex-col gap-5">
          {/* Preview */}
          <div className="rounded-2xl border border-[#E7EFEB] bg-[#F8FBFA] p-6">
            {/* Header */}
            <div className="mb-6 flex items-start gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E8F7EF]">
                <LuEye size={22} className="text-[#158A62]" />
              </div>

              <div>
                <h3 className="text-[24px] font-bold text-[#101828] dark:text-white">
                  Preview Toko Kamu
                </h3>

                <p className="mt-1 text-[14px] text-[#667085] dark:text-slate-400">
                  Begini tampilan tokomu di Bakool
                </p>
              </div>
            </div>

            {/* Card */}
            <div className="overflow-hidden rounded-2xl border border-[#EAECF0] bg-white dark:border-slate-700 dark:bg-slate-900">
              {/* Cover */}
              {/* Cover + Avatar */}
              <div className="relative">
                {/* Cover */}
                <div className="relative h-[225px] overflow-hidden">
                  <Image
                    src={coverPreview}
                    fill
                    alt="Cover"
                    className="object-cover"
                  />
                </div>

                {/* Avatar */}
                <div className="absolute left-6 top-[180px] h-[88px] w-[88px] overflow-hidden rounded-2xl border-4 border-white bg-white shadow-lg dark:border-slate-900">
                  <Image
                    src={avatarPreview}
                    fill
                    alt="Avatar"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="px-6 pt-14 pb-6">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-3xl font-bold text-[#101828] dark:text-white">
                      {formData.name || "Nama UMKM"}
                    </h4>

                    <div className="mt-2 flex items-center gap-2 flex-wrap">
                      <span className="text-[#667085]">
                        {selectedCategory?.name || "Kategori"}
                      </span>

                      <span className="flex items-center gap-1 text-[#FDB022]">
                        ★
                        <span className="font-semibold text-[#101828] dark:text-white">
                          4.8
                        </span>
                        <span className="text-[#98A2B3]">(128)</span>
                      </span>
                    </div>
                  </div>

                  <span className="rounded-full bg-[#E8F7EF] px-3 py-1 text-xs font-semibold text-[#158A62]">
                    Buka
                  </span>
                </div>

                {/* Info */}
                <div className="mt-5 grid grid-cols-2 gap-y-3 border-y border-[#EAECF0] py-4 text-[14px] text-[#667085] dark:border-slate-700 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <LuMapPin className="text-[#158A62]" />
                    {formData.city || "Lowokwaru"}
                  </div>

                  <div className="flex items-center gap-2">
                    <LuClock className="text-[#158A62]" />
                    {formData.open_time || "08.00"} -{" "}
                    {formData.close_time || "20.00"}
                  </div>

                  <div className="flex items-center gap-2">
                    <LuPhone className="text-[#158A62]" />
                    {formData.phone || "0812-3456-7890"}
                  </div>

                  <div className="flex items-center gap-2">
                    <LuInstagram className="text-[#158A62]" />
                    {formData.instagram || "@dapurnona.id"}
                  </div>
                </div>

                {/* Description */}
                <p className="mt-5 text-[15px] leading-7 text-[#667085] dark:text-slate-400">
                  {formData.description ||
                    "Menyediakan aneka makanan rumahan sehat, lezat dan higienis dengan bahan pilihan terbaik."}
                </p>

                {/* Tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    selectedCategory?.name || "Masakan Rumahan",
                    "Higienis",
                    "Halal",
                    "Sehat",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#F2F4F7] px-3 py-1 text-xs font-medium text-[#667085] dark:bg-slate-800 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Alert */}
            <div className="mt-6 flex items-center gap-3 rounded-xl border border-[#DCEFE6] bg-[#F2FBF6] p-4">
              <Sparkles className="text-[#158A62]" size={20} />

              <p className="text-[13px] leading-6 text-[#667085] dark:text-slate-400">
                Setelah disimpan, tokomu akan diverifikasi oleh tim Bakool
                sebelum tampil di platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
