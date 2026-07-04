"use client";
import Image from "next/image";
import {
  LuMail,
  LuPhone,
  LuMapPin,
  LuCalendar,
  LuHeart,
  LuMessageSquare,
  LuCamera,
  LuBadgeCheck,
  LuTrophy,
  LuCalendarDays,
  LuBriefcaseBusiness,
  LuLink2,
} from "react-icons/lu";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { FaUserEdit } from "react-icons/fa";

export default function ProfilePage() {
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    const getProfile = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return;

      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      if (error) {
        console.error(error);
        return;
      }

      setProfile(data);
    };

    getProfile();
  }, []);

  const avatar = profile?.avatar_url || "/ava.png";

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-12 text-base transition-colors">
      {/* Title Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          Profil Saya
        </h1>
        <p className="mt-1 text-lg text-slate-500 dark:text-slate-400">
          Kelola informasi profil dan lihat aktivitas kamu di bakool
        </p>
      </div>

      {/* Main Profile Header Card */}
      <div className="mb-8 rounded-2xl border border-[#EAECF0] dark:border-slate-800 bg-white dark:bg-slate-900 p-8 transition-colors">
        {/* Top */}
        <div className="flex items-start justify-between">
          {/* Left */}
          <div className="flex items-center gap-10">
            {/* Avatar */}
            <div className="relative">
              <div className="relative h-[170px] w-[170px] overflow-hidden rounded-full">
                <Image
                  src={avatar}
                  fill
                  className="object-cover"
                  alt={profile?.full_name || "Avatar"}
                />
              </div>

              {/* Camera */}
              <button
                onClick={() =>
                  alert("🚀 Fitur Edit Profil akan segera tersedia!")
                }
                className="absolute bottom-3 right-0 flex h-10 w-10 items-center justify-center rounded-full border border-[#EAECF0] dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm transition hover:bg-[#F9FAFB] dark:hover:bg-slate-700"
              >
                <LuCamera
                  size={18}
                  className="text-[#344054] dark:text-slate-300"
                />
              </button>
            </div>

            {/* Info */}
            <div>
              <div className="flex items-center gap-4">
                <h2 className="text-[35px] font-bold leading-none text-[#0B0F1F] dark:text-white">
                  {profile?.full_name}
                </h2>

                <span className="flex items-center gap-2 rounded-full bg-[#ECFDF3] dark:bg-emerald-900/30 px-4 py-2 text-[14px] font-semibold text-[#027A48] dark:text-emerald-400">
                  <LuBadgeCheck size={15} />
                  Verified
                </span>
              </div>

              <div className="mt-7 flex flex-col gap-4">
                <p className="flex items-center gap-4 text-[16px] font-medium text-[#344054] dark:text-slate-300">
                  <LuMail
                    size={18}
                    className="text-[#667085] dark:text-slate-500"
                  />
                  {profile?.email}
                </p>

                <p className="flex items-center gap-4 text-[16px] font-medium text-[#344054] dark:text-slate-300">
                  <LuPhone
                    size={18}
                    className="text-[#667085] dark:text-slate-500"
                  />
                  {profile?.phone ?? "-"}
                </p>

                <p className="flex items-center gap-4 text-[16px] font-medium text-[#344054] dark:text-slate-300">
                  <LuMapPin
                    size={18}
                    className="text-[#667085] dark:text-slate-500"
                  />
                  {profile?.address ?? "-"}
                </p>

                <p className="flex items-center gap-4 text-[16px] font-medium text-[#344054] dark:text-slate-300">
                  <LuCalendar
                    size={18}
                    className="text-[#667085] dark:text-slate-500"
                  />
                  Bergabung sejak{" "}
                  {profile?.created_at &&
                    new Date(profile.created_at).toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                </p>
              </div>
            </div>
          </div>

          {/* Button */}
          <button
            onClick={() => alert("🚀 Fitur Edit Profil akan segera tersedia!")}
            className="flex h-[54px] items-center gap-2 rounded-xl border border-[#158A62] dark:border-emerald-500 bg-white dark:bg-slate-800 px-6 font-semibold text-[#158A62] dark:text-emerald-400 transition hover:bg-[#F6FCF9] dark:hover:bg-slate-700"
          >
            <FaUserEdit size={17} />
            Edit Profil
          </button>
        </div>

        {/* Statistics */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-[#EAECF0] dark:border-slate-800 bg-[#F9FAFB] dark:bg-slate-800">
          <div className="grid grid-cols-4">
            {[
              {
                label: "UMKM Favorit",
                value: "23",
                icon: LuHeart,
              },
              {
                label: "Ulasan Dibuat",
                value: "17",
                icon: LuMessageSquare,
              },
              {
                label: "UMKM Dikunjungi",
                value: "12",
                icon: LuMapPin,
              },
              {
                label: "Total XP",
                value: "1.250",
                icon: LuTrophy,
              },
            ].map((stat, i) => (
              <div
                key={i}
                className="flex items-center gap-5 border-r border-[#EAECF0] dark:border-slate-700 px-8 py-8 last:border-r-0"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#E8F7EF] dark:bg-emerald-900/30 text-[#158A62] dark:text-emerald-400">
                  <stat.icon size={30} />
                </div>

                <div>
                  <h4 className="text-[25px] font-bold leading-none text-[#0B0F1F] dark:text-white">
                    {stat.value}
                  </h4>

                  <p className="mt-2 text-[16px] font-medium text-[#344054] dark:text-slate-300">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Grid Layout: Tentang Saya vs Pencapaian */}
      <div className="mb-8 grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.7fr]">
        {/* Tentang Saya */}
        <div className="rounded-2xl border border-[#EAECF0] dark:border-slate-800 bg-white dark:bg-slate-900 p-9">
          <h3 className="text-[22px] font-bold text-[#101828] dark:text-white">
            Tentang Saya
          </h3>

          <p className="mt-6 text-[17px] leading-9 text-[#344054] dark:text-slate-300">
            Saya suka menjelajahi UMKM lokal, mencoba makanan enak, dan
            mendukung produk lokal berkualitas.
          </p>

          <div className="mt-10 flex flex-col gap-8">
            <div className="flex items-start gap-4">
              <LuCalendarDays
                size={22}
                className="mt-1 text-[#475467] dark:text-slate-500"
              />

              <div>
                <p className="text-[16px] font-medium text-[#101828] dark:text-white">
                  Tanggal Lahir
                </p>

                <p className="mt-1 text-[15px] text-[#344054]">14 April 2022</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <LuBriefcaseBusiness size={22} className="mt-1 text-[#475467]" />

              <div>
                <p className="text-[16px] font-medium text-[#101828] dark:text-white">
                  Pekerjaan
                </p>

                <p className="mt-1 text-[15px] text-[#344054]">Mahasiswa</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <LuHeart size={22} className="mt-1 text-[#475467]" />

              <div>
                <p className="text-[16px] font-medium text-[#101828] dark:text-white">
                  Minat
                </p>

                <p className="mt-1 text-[15px] text-[#344054]">
                  Kuliner, Kopi, Fashion, Kerajinan
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pencapaian */}
        <div className="rounded-2xl border border-[#EAECF0] dark:border-slate-800 bg-white dark:bg-slate-900 p-8">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-[22px] font-bold text-[#101828] dark:text-white">
              Pencapaian Terbaru
            </h3>

            <button className="text-[15px] font-semibold text-[#158A62] dark:text-emerald-400 hover:underline">
              Lihat Semua
            </button>
          </div>

          <div>
            {[
              {
                image: "/badges/rev.png",
                title: "Reviewer",
                bg: "F6F7FA",
                desc: "Berikan 5 ulasan untuk UMKM",
                date: "22 Mei 2025",
              },
              {
                image: "/badges/food.png",
                title: "Food Hunter",
                bg: "F7F2F1",
                desc: "Favoritkan 10 UMKM kuliner",
                date: "22 Mei 2025",
              },
              {
                image: "/badges/local.png",
                title: "Local Explorer",
                bg: "EEF4F1",
                desc: "Kunjungi 5 UMKM berbeda",
                date: "22 Mei 2025",
              },
              {
                image: "/badges/love.png",
                title: "Community Supporter",
                bg: "F6F2F6",
                desc: "Dukung 20 UMKM dengan favorit",
                date: "22 Mei 2025",
              },
            ].map((badge, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b border-[#EAECF0] dark:border-slate-800 py-5 last:border-none"
              >
                <div className="flex items-center gap-5">
                  <div className="flex h-[60px] w-[60px] items-center justify-center rounded-xl bg-[#F9FAFB] dark:bg-slate-800">
                    <Image
                      src={badge.image}
                      alt={badge.title}
                      width={50}
                      height={50}
                    />
                  </div>

                  <div>
                    <h4 className="text-[18px] font-semibold text-[#101828] dark:text-white">
                      {badge.title}
                    </h4>

                    <p className="mt-1 text-[15px] text-[#344054] dark:text-slate-400">
                      {badge.desc}
                    </p>
                  </div>
                </div>

                <span className="text-[15px] font-medium text-[#101828] dark:text-slate-300">
                  {badge.date}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Aktivitas Terbaru */}
      <div className="rounded-2xl border border-[#EAECF0] dark:border-slate-800 bg-white dark:bg-slate-900 p-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <h3 className="text-[22px] font-bold text-[#101828] dark:text-white">
            Aktivitas Terbaru
          </h3>

          <button className="text-[15px] font-semibold text-[#158A62] dark:text-emerald-400 hover:underline">
            Lihat Semua
          </button>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[27px] top-0 bottom-0 w-px bg-[#EAECF0] dark:bg-slate-700" />

          {[
            {
              title: "Menambahkan Kedai Kopi Titik ke Favorit",
              time: "2 jam yang lalu",
              icon: LuHeart,
              color: "text-[#EF4444]",
            },
            {
              title: "Memberikan Ulasan untuk Nasi Ayam Geprek Pak Ndut",
              time: "1 jam yang lalu",
              icon: LuMessageSquare,
              color: "text-[#158A62]",
            },
            {
              title: "Mengunjungi Warung Bu Siti",
              time: "2 hari yang lalu",
              icon: LuMapPin,
              color: "text-[#158A62]",
            },
            {
              title: "Menambahkan Batik Putri Malang ke Favorit",
              time: "3 hari yang lalu",
              icon: LuHeart,
              color: "text-[#EF4444]",
            },
          ].map((item, index, array) => (
            <div
              key={index}
              className={`relative flex gap-10 ${
                index !== array.length - 1
                  ? "border-b border-[#EAECF0] dark:border-slate-800 pb-7 mb-7"
                  : ""
              }`}
            >
              {/* Circle */}
              <div className="relative z-10 flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-full bg-[#F2F4F7] dark:bg-slate-800">
                <item.icon size={24} className={item.color} strokeWidth={2.3} />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h4 className="text-[18px] font-semibold text-[#101828] dark:text-white">
                  {item.title}
                </h4>

                <p className="mt-2 text-[15px] text-[#344054] dark:text-slate-400">{item.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
