"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoChevronDown } from "react-icons/io5";
import { LuHeadphones } from "react-icons/lu";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export function Header() {
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

  // Header khusus untuk halaman lengkapi profil
  if (isCompleteProfile) {
    return (
      <header className="bg-white border-border z-20 sticky top-0 flex items-center justify-between px-8 py-5 border-b">
        <Link href="/" className="flex items-center gap-2">
          <Image loading='eager' height={1000} width={1000} className="max-w-24 max-h-24" src={'/Bakul.png'} alt="logo" />
          <span className="text-primary-foreground text-[1.375rem] font-bold">
            Bakool
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <LuHeadphones size={22} className="text-[#158A62]" />
            <div className="leading-tight">
              <p className="text-[13px] font-semibold text-[#101828]">
                Butuh bantuan?
              </p>
              <Link
                href="/contact"
                className="text-[12px] font-medium text-[#158A62] hover:underline"
              >
                Hubungi kami
              </Link>
            </div>
          </div>

          <Link
            href="/admin/profile"
            className="flex items-center gap-1.5 cursor-pointer"
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
          </Link>
        </div>
      </header>
    );
  }

  // Header default untuk halaman admin lainnya
  const message = {
    head: "Selamat pagi, Ryn",
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
    <header className="bg-background border-border z-20 sticky top-0 flex items-start justify-between p-8 border-b">
      <div>
        <h1 className="text-[30px] font-semibold text-[#0B0F1F]">
          {message.head}
        </h1>
        <p className="mt-1 text-[#667085]">{message.desc}</p>
      </div>

      <Link
        href={"/admin/profile"}
        className="flex items-center gap-3 cursor-pointer"
      >
        <Image
          src={profile?.avatar_url || "/ava.png"}
          alt={profile?.full_name || "User"}
          width={56}
          height={56}
          className="rounded-full object-cover"
        />

        <div>
          <h3 className="font-semibold text-[#101828]">
            {profile?.full_name || "Loading..."}
          </h3>
          <p className="text-sm text-[#667085] capitalize">
            {profile?.role || "-"}
          </p>
        </div>

        <IoChevronDown
          size={20}
          className="text-[#667085] transition-transform hover:text-[#101828]"
        />
      </Link>
    </header>
  );
}