"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoChevronDown } from "react-icons/io5";
import { LuHeadphones } from "react-icons/lu";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Skeleton } from "@/components/ui/skeleton";

type HeaderProps = {
  onMenuClick?: () => void;
};

export function Header({ onMenuClick }: HeaderProps) {
  const [profile, setProfile] = useState<{
    full_name: string;
    role: string;
    avatar_url: string | null;
  } | null>(null);

  useEffect(() => {
    const getProfile = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return;

      const { data, error } = await supabase
        .from("profiles")
        .select("full_name, role, avatar_url")
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

  const path = usePathname();
  const isCompleteProfile = path === "/admin/complete-profile";

  if (isCompleteProfile) {
    return (
      <header className="border-border sm:px-8 sm:py-5 sticky top-0 z-20 px-4 py-4 bg-white border-b">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link href="/" className="sm:ml-10 flex items-center gap-2">
            <Image
              loading="eager"
              height={1000}
              width={1000}
              className="max-w-20 max-h-20 sm:max-w-24 sm:max-h-24"
              src={"/Bakul.png"}
              alt="logo"
            />
            <span className="-ml-3 text-[20px] font-bold text-primary-foreground sm:-ml-5 sm:text-[24px]">
              Bakool
            </span>
          </Link>

          <div className="sm:mr-6 lg:mr-20 flex items-center gap-3">
            <div className="sm:flex items-center hidden gap-2">
              <LuHeadphones size={24} className="text-[#158A62] sm:size-7.5" />
              <div className="leading-tight">
                <p className="text-[13px] font-semibold text-[#101828]">
                  Butuh bantuan?
                </p>
                <button
                  onClick={() => alert("Coming Soon 🚀")}
                  className="text-[12px] font-medium text-[#158A62] hover:underline"
                >
                  Hubungi kami
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={() => alert("Coming Soon 🚀")}
              className="flex cursor-pointer items-center gap-1.5"
            >
              <Image
                src={profile?.avatar_url || "/ava.png"}
                alt={profile?.full_name || "User"}
                width={40}
                height={40}
                className="h-10 w-10 rounded-full border border-[#EAECF0] object-cover"
              />
              <IoChevronDown
                size={18}
                className="text-[#667085] transition-transform hover:text-[#101828]"
              />
            </button>
          </div>
        </div>
      </header>
    );
  }
  const firstName = profile?.full_name?.trim().split(" ")[0] || "Pengguna";
  const message = {
    head: `Selamat pagi, ${firstName}`,
    desc: "Kelola usahamu dan tingkatkan performa bisnismu hari ini.",
  };
  if (path.includes("/promo")) {
    message.head = "Promo Management";
    message.desc =
      "Buat dan kelola promo untuk menarik lebih bayak pelanggan dan meningkatkan interaksi";
  } else if (path.includes("/ulasan")) {
    message.head = "Ulasan";
    message.desc = "Pantau dan kelola semua ulasan yang diberikan pelanggan.";
  } else if (path.includes("/analytics")) {
    message.head = "Analytics";
    message.desc = "Pantau dan analisis performa toko kamu secara menyeluruh.";
  } else if (path.includes("/products")) {
    message.head = "Produk & Menu";
    message.desc = "Kelola semua produk dan menu yang tersedia di tokomu";
  } else if (path.includes("/assistant")) {
    message.head = "AI Business Assistant";
    message.desc =
      "Asisten cerdas untuk membantu mengembangkan bisnismu dengan data & insight.";
  } else if (path.includes("/profile")) {
    message.head = "Profil Toko";
    message.desc = "Kelola informasi toko dan akun bisnismu.";
  }

  return (
    <header className="border-border bg-background sm:px-6 sm:py-6 lg:px-8 sticky top-0 z-20 px-4 py-4 border-b">
      <div className="sm:flex-row sm:items-start sm:justify-between flex flex-col gap-4">
        <div className="flex items-start gap-3">
          {onMenuClick && (
            <button
              type="button"
              onClick={onMenuClick}
              aria-label="Buka menu admin"
              className="border-border text-slate-700 lg:hidden inline-flex items-center justify-center w-10 h-10 bg-white border rounded-full shadow-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          )}

          <div>
            <h1 className="text-[24px] font-semibold text-[#0B0F1F] sm:text-[30px]">
              {message.head}
            </h1>
            <p className="mt-1 text-sm text-[#667085] sm:text-base">
              {message.desc}
            </p>
          </div>
        </div>

        {profile ? (
          <Link
            href="/admin/profile"
            className="flex items-center self-start gap-3"
          >
            <Image
              src={profile.avatar_url || "/ava.png"}
              alt={profile.full_name}
              width={56}
              height={56}
              className="sm:h-14 sm:w-14 object-cover w-12 h-12 rounded-full"
            />

            <div>
              <h3 className="font-semibold text-[#101828]">
                {profile.full_name}
              </h3>

              <p className="text-sm capitalize text-[#667085]">
                {profile.role}
              </p>
            </div>

            <IoChevronDown
              size={20}
              className="text-[#667085] transition-transform hover:text-[#101828]"
            />
          </Link>
        ) : (
          <div className="flex items-center gap-3">
            <Skeleton className="sm:h-14 sm:w-14 w-12 h-12 rounded-full" />

            <div className="space-y-2">
              <Skeleton className="sm:w-28 w-24 h-4" />
              <Skeleton className="w-16 h-3" />
            </div>

            <Skeleton className="w-5 h-5 rounded-full" />
          </div>
        )}
      </div>
    </header>
  );
}
