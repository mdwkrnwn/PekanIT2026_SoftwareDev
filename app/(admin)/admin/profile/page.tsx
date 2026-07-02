"use client";

import { ChangeEvent, useState, useEffect } from "react";
import Image from "next/image";
import {
  LuMapPin,
  LuPhone,
  LuMail,
  LuGlobe,
  LuInstagram,
  LuFacebook,
  LuPlus,
  LuTrendingDown,
  LuHeart,
  LuStar,
  LuMessageSquare,
  LuLock,
  LuLanguages,
  LuMoon,
  LuLogOut,
  LuChevronRight,
} from "react-icons/lu";
import { Edit } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function ProfilTokoView() {
  const [umkm, setUmkm] = useState<any>(null);

  useEffect(() => {
    const getUMKM = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return;

      const { data: umkm, error } = await supabase
        .from("umkm")
        .select(
          `
        *,
        categories(name)
      `,
        )
        .eq("owner_id", user.id)
        .single();

      if (error) {
        console.error(error);
        return;
      }

      console.log("UMKM ID =", umkm.id);

      const { data: gallery, error: galleryError } = await supabase
        .from("gallery")
        .select("*")
        .eq("umkm_id", umkm.id);

      console.log("Gallery =", gallery);

      if (galleryError) {
        console.error(galleryError);
        return;
      }

      setUmkm({
        ...umkm,
        gallery,
      });
    };

    getUMKM();
  }, []);

  const stats = [
    {
      label: "Total Dilihat",
      value: "25",
      change: "22.1% dari minggu lalu",
      icon: LuTrendingDown,
      color: "text-rose-600 bg-rose-50",
    },
    {
      label: "Total Favorit",
      value: "162",
      change: "0.2% dari minggu lalu",
      icon: LuHeart,
      color: "text-emerald-600 bg-emerald-50",
    },
    {
      label: "Rating Rata-rata",
      value: "4.8 / 5",
      change: "18.5% dari minggu lalu",
      icon: LuStar,
      color: "text-amber-600 bg-amber-50",
    },
    {
      label: "Total Ulasan",
      value: "187",
      change: "12.3% dari minggu lalu",
      icon: LuMessageSquare,
      color: "text-purple-600 bg-purple-50",
    },
  ];

  const operationalHours = [
    { day: "Senin", hours: "08.00 - 20.00", isClosed: false },
    { day: "Selasa", hours: "08.00 - 20.00", isClosed: false },
    { day: "Rabu", hours: "08.00 - 20.00", isClosed: false },
    { day: "Kamis", hours: "08.00 - 20.00", isClosed: false },
    { day: "Jumat", hours: "08.00 - 20.00", isClosed: false },
    { day: "Sabtu", hours: "08.00 - 20.00", isClosed: false },
    { day: "Minggu", hours: "Tutup", isClosed: true },
  ];

  const addPhoto = () => {
    alert("Coming Soon");
  };

  return (
    <div className="flex flex-col gap-8 text-base">
      {/* ================= ATAS: TIGA KARTU INFORMASI UTAMA ================= */}
      <section className="grid grid-rows-[1fr_auto] grid-cols-3 gap-6 *:w-full *:h-full items-center">
        {/* Kartu 1: Informasi Toko */}
        <div className="border-slate-100 rounded-3xl min-h-115 flex flex-col justify-between row-span-2 p-6 bg-white border shadow-xs">
          <div className="flex flex-col gap-6">
            <h3 className="text-slate-900 text-xl font-bold">Informasi Toko</h3>

            <div className="flex items-start gap-4">
              <div className="rounded-2xl shrink-0 border-slate-100 relative w-24 h-24 overflow-hidden border">
                <Image
                  src={umkm?.cover_image || "/placeholder-cover.jpg"}
                  alt={umkm?.name || "UMKM"}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-slate-400 block font-medium">
                  Nama Toko
                </span>
                <div className="flex items-center gap-2">
                  <h4 className="text-slate-900 text-xl font-bold">
                    {umkm?.name}
                  </h4>
                  <span className="bg-emerald-50 text-emerald-700 text-base font-bold px-2 py-0.5 rounded-md">
                    Terverifikasi
                  </span>
                </div>
                <p className="text-slate-500 mt-1 font-semibold">
                  🍽️ {umkm?.categories?.name}
                </p>
              </div>
            </div>

            <div className="text-slate-600 border-slate-50 flex flex-col gap-3 pt-4 font-medium border-t">
              <p className="flex items-start gap-3">
                <LuMapPin
                  size={22}
                  className="text-slate-400 shrink-0 mt-0.5"
                />{" "}
                <span>{umkm?.address}</span>
              </p>
              <p className="flex items-center gap-3">
                <LuPhone size={22} className="text-slate-400 shrink-0" />{" "}
                <span>{umkm?.phone}</span>
              </p>
              <p className="flex items-center gap-3">
                <LuMail size={22} className="text-slate-400 shrink-0" />{" "}
                <span>{umkm?.email}</span>
              </p>
              <p className="flex items-center gap-3">
                <LuGlobe size={22} className="text-slate-400 shrink-0" />{" "}
                <span className="text-slate-400">{umkm?.website || "-"}</span>
              </p>
              <p className="flex items-center gap-3">
                <LuInstagram size={22} className="text-slate-400 shrink-0" />{" "}
                <span>{umkm?.instagram || "-"}</span>
              </p>
              <p className="flex items-center gap-3">
                <LuFacebook size={22} className="text-slate-400 shrink-0" />{" "}
                <span>Dapur Nona</span>
              </p>
            </div>
          </div>

          <button className="border-primary-foreground text-primary-foreground rounded-xl hover:text-background hover:bg-primary-foreground bg-background flex items-center justify-center w-full gap-2 py-3 mt-6 font-bold transition-colors border">
            <Edit size={20} /> Edit Profil
          </button>
        </div>

        {/* Kolom Kanan Kanan (Tentang Toko & Galeri) */}

        {/* Kartu 2: Tentang Toko */}
        <div className="border-slate-100 rounded-3xl min-h-55 flex flex-col justify-between p-6 bg-white border shadow-xs">
          <div>
            <h3 className="text-slate-900 mb-3 text-xl font-bold">
              Tentang Toko
            </h3>
            <p className="text-slate-600 font-medium leading-relaxed">
              Dapur Nona Merupakan UMKM kuliner yang menyediakan berbagai menu
              rumahan seperti ayam geprek, nasi goreng, dan anek lauk lezat
              lainnya. Kami selalu menggunakan bahan segar dan berkualitas untuk
              memberikan rasa terbaik bagi pelanggan
            </p>
          </div>
          <button className="w-fit border border-primary-foreground text-primary-foreground hover:text-background hover:bg-primary-foreground font-bold px-4 py-2.5 rounded-xl flex items-center gap-2 transition-colors mt-4">
            <Edit size={18} /> Edit Deskripsi
          </button>
        </div>
        {/* Kartu 4: Jam Operasional */}
        <div className="border-slate-100 rounded-3xl min-h-110 flex flex-col justify-between p-6 bg-white border shadow-xs">
          <div className="flex flex-col gap-4">
            <h3 className="text-slate-900 mb-2 text-xl font-bold">
              Jam Operasional
            </h3>
            <div className="flex flex-col gap-3">
              {operationalHours.map((item, idx) => (
                <div
                  key={idx}
                  className="border-slate-50 last:border-0 last:pb-0 flex items-center justify-between pb-2 font-medium border-b"
                >
                  <span className="text-slate-600">{item.day}</span>
                  <span
                    className={`font-bold ${item.isClosed ? "text-rose-600" : "text-slate-900"}`}
                  >
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <button className="border-primary-foreground text-primary-foreground hover:text-background rounded-xl hover:bg-primary-foreground flex items-center justify-center w-full gap-2 py-3 mt-6 font-bold transition-colors border">
            <Edit size={20} /> Edit Jam Operasional
          </button>
        </div>
        {/* Kartu 3: Galeri Toko */}
        <div className="border-slate-100 rounded-3xl col-span-2 p-6 bg-white border shadow-xs">
          <h3 className="text-slate-900 mb-4 text-xl font-bold">Galeri Toko</h3>
          <div className="md:grid-cols-5 grid grid-cols-2 gap-4">
            {umkm?.gallery?.map((photo: any) => (
              <div
                key={photo.id}
                className="aspect-square relative rounded-2xl overflow-hidden"
              >
                <Image
                  src={photo.image_url}
                  fill
                  className="object-cover"
                  alt="Gallery"
                />
              </div>
            ))}
            <label
              htmlFor="photo"
              className="border-primary-foreground text-primary-foreground hover:text-background hover:bg-primary-foreground hover:border-white rounded-2xl aspect-square flex flex-col items-center justify-center gap-2 p-4 text-center transition-colors border-2 border-dashed cursor-pointer"
            >
              <LuPlus size={24} />
              <span className="font-bold">Tambah Foto</span>
            </label>
            <input
              type="file"
              onChange={addPhoto}
              className="hidden"
              accept="image/*"
              name="photo"
              id="photo"
            />
          </div>
        </div>
      </section>

      {/* ================= TENGAH: RINGKASAN TOKO STATUS STATS ================= */}
      <div className="border-slate-100 rounded-3xl p-6 bg-white border shadow-xs">
        <h3 className="text-slate-900 mb-6 text-xl font-bold">
          Ringkasan Toko
        </h3>
        <div className="md:grid-cols-4 grid grid-cols-1 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-slate-50/60 border-slate-100 rounded-2xl flex items-center gap-4 p-5 border"
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${stat.color}`}
              >
                <stat.icon size={26} />
              </div>
              <div>
                <span className="text-slate-400 block font-semibold">
                  {stat.label}
                </span>
                <h4 className="text-slate-900 mt-1 text-3xl font-black">
                  {stat.value}
                </h4>
                <span className="text-slate-400 block mt-1 text-base font-medium">
                  {stat.change}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= BAWAH: PENGATURAN AKUN LIST MENUS ================= */}
      <div className="border-slate-100 rounded-3xl flex flex-col gap-4 p-6 bg-white border shadow-xs">
        <h3 className="text-slate-900 mb-2 text-xl font-bold">
          Pengaturan Akun
        </h3>

        <div className="border-slate-100 rounded-2xl divide-slate-100 flex flex-col overflow-hidden border divide-y">
          {/* Menu 1: Ubah Password */}
          <button className="hover:bg-slate-50/80 flex items-center justify-between w-full p-5 text-left transition-colors">
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-slate-50 border-slate-100 text-slate-500 flex items-center justify-center w-12 h-12 border">
                <LuLock size={22} />
              </div>
              <div>
                <h4 className="text-slate-900 font-bold">Ubah Password</h4>
                <p className="text-slate-400 font-medium mt-0.5">
                  Atur ulang password kamu
                </p>
              </div>
            </div>
            <LuChevronRight className="text-slate-400" size={24} />
          </button>

          {/* Menu 2: Bahasa */}
          <button className="hover:bg-slate-50/80 flex items-center justify-between w-full p-5 text-left transition-colors">
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-slate-50 border-slate-100 text-slate-500 flex items-center justify-center w-12 h-12 border">
                <LuLanguages size={22} />
              </div>
              <div>
                <h4 className="text-slate-900 font-bold">Bahasa</h4>
                <p className="text-slate-400 font-medium mt-0.5">
                  Bahasa yang digunakan di aplikasi
                </p>
              </div>
            </div>
            <div className="text-slate-400 flex items-center gap-2 font-bold">
              <span>Bahasa Indonesia</span>
              <LuChevronRight size={24} />
            </div>
          </button>

          {/* Menu 3: Mode Gelap */}
          <button className="hover:bg-slate-50/80 flex items-center justify-between w-full p-5 text-left transition-colors">
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-slate-50 border-slate-100 text-slate-500 flex items-center justify-center w-12 h-12 border">
                <LuMoon size={22} />
              </div>
              <div>
                <h4 className="text-slate-900 font-bold">Mode Gelap</h4>
                <p className="text-slate-400 font-medium mt-0.5">
                  Ubah tampilan aplikasi
                </p>
              </div>
            </div>
            <LuChevronRight className="text-slate-400" size={24} />
          </button>

          {/* Menu 4: Logout */}
          <button className="hover:bg-rose-50/40 group flex items-center justify-between w-full p-5 text-left transition-colors">
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-rose-50 border-rose-100/60 text-rose-500 group-hover:bg-rose-100 flex items-center justify-center w-12 h-12 transition-colors border">
                <LuLogOut size={22} />
              </div>
              <div>
                <h4 className="text-slate-900 group-hover:text-rose-600 font-bold transition-colors">
                  Logout
                </h4>
                <p className="text-slate-400 font-medium mt-0.5">
                  Keluar dari akun
                </p>
              </div>
            </div>
            <LuChevronRight className="text-slate-400" size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
