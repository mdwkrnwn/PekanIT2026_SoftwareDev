"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LuLayoutDashboard,
  LuUtensilsCrossed,
  LuTicket,
  LuMessageSquare,
  LuSparkles,
  LuLogOut,
} from "react-icons/lu";
import { FiBarChart2 } from "react-icons/fi";
import { supabase } from "@/lib/supabase";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

type UmkmData = {
  cover_image?: string | null;
  name?: string | null;
  categories?: {
    name?: string | null;
  } | null;
};
import Swal from "sweetalert2";
import SplashScreen from "@/components/SplashScreen";

function Sidebar({ isOpen, onClose }: SidebarProps) {
  const activePath = usePathname();
  const router = useRouter();
  const [showSplash, setShowSplash] = useState(false);
  const [splashMessage, setSplashMessage] = useState("");
  const [umkm, setUmkm] = useState<UmkmData | null>(null);
  const [loading, setLoading] = useState(true);

  const handleLogout = async () => {
    const result = await Swal.fire({
      title: "Keluar dari Dashboard?",
      text: "Kamu harus login kembali untuk mengakses Dashboard Bakool.",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Ya, Keluar",
      cancelButtonText: "Batal",
      confirmButtonColor: "#15803d",
      cancelButtonColor: "#D0D5DD",
      reverseButtons: true,
      background: "#ffffff",
      color: "#101828",
    });

    if (!result.isConfirmed) return;

    setSplashMessage("Keluar dari Dashboard...");
    setShowSplash(true);

    await supabase.auth.signOut();

    setTimeout(() => {
      router.replace("/login");
      router.refresh();
    }, 700);
  };

  useEffect(() => {
    const getUMKM = async () => {
      try {
        setLoading(true);

        const {
          data: { user },
        } = await supabase.auth.getUser();

        if (!user) return;

        const { data, error } = await supabase
          .from("umkm")
          .select(
            `
          *,
          categories (
            name
          )
        `,
          )
          .eq("owner_id", user.id)
          .single();

        if (error) {
          console.error(error);
          return;
        }

        setUmkm(data);
      } finally {
        setLoading(false);
      }
    };

    getUMKM();
  }, []);

  const coverImage = umkm?.cover_image || "/placeholder-cover.jpg";
  if (showSplash) {
    return <SplashScreen message={splashMessage} />;
  }

  return (
    <aside
      className={cn(
        "fixed inset-y-0 left-0 z-40 flex h-screen w-72 max-w-[85vw] flex-col justify-between border-r border-border bg-background p-4 shadow-xl transition-transform duration-300 lg:sticky lg:w-72 lg:max-w-none lg:translate-x-0 lg:border-r lg:shadow-none",
        isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
      )}
    >
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between gap-3 mb-2">
          <Link href="/admin/dashboard" className="flex items-center gap-3">
            <Image
              src="/Bakul.png"
              alt="Bakool Business"
              width={60}
              height={60}
              priority
              className="sm:w-24 w-20 h-auto"
            />

            <div className="flex flex-col">
              <h1 className="mt-1 text-[24px] font-bold leading-none text-[#06C179]">
                Bakool
              </h1>
              <p className="text-[13px] font-medium text-[#7A7F8B]">Business</p>
            </div>
          </Link>

          <button
            type="button"
            aria-label="Tutup menu"
            onClick={onClose}
            className="border-border text-slate-700 lg:hidden inline-flex items-center justify-center w-10 h-10 bg-white border rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="rounded-2xl border border-[#F3F4F7] bg-white p-4">
          {loading ? (
            <div className="flex items-center gap-4">
              <Skeleton className="h-14 w-14 rounded-full" />

              <div className="flex-1 space-y-2">
                <Skeleton className="w-32 h-5" />
                <Skeleton className="w-20 h-4" />
                <Skeleton className="w-24 h-6 rounded-md" />
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 shrink-0 relative overflow-hidden rounded-full">
                <Image
                  src={coverImage}
                  fill
                  className="object-cover"
                  alt={umkm?.name || "UMKM"}
                />
              </div>

              <div>
                <h4 className="text-slate-900 text-base font-bold">
                  {umkm?.name || "Nama UMKM"}
                </h4>

                <span className="text-slate-500 block font-medium">
                  {umkm?.categories?.name || "-"}
                </span>

                <span className="mt-1 inline-block rounded-md bg-emerald-100 px-2 py-0.5 text-sm font-bold text-emerald-700">
                  Terverifikasi
                </span>
              </div>
            </div>
          )}
        </div>

        <nav className="flex flex-col gap-2">
          {[
            {
              name: "Dashboard",
              icon: LuLayoutDashboard,
              href: "/admin/dashboard",
            },
            {
              name: "Analytics",
              icon: FiBarChart2,
              href: "/admin/analytics",
            },
            {
              name: "Produk & Menu",
              icon: LuUtensilsCrossed,
              href: "/admin/products",
            },
            {
              name: "Promo Management",
              icon: LuTicket,
              href: "/admin/promo",
            },
            {
              name: "Ulasan",
              icon: LuMessageSquare,
              href: "/admin/ulasan",
            },
            {
              name: "AI Business Assistant",
              icon: LuSparkles,
              href: "/admin/assistant",
            },
          ].map((item) => {
            const isActive = activePath === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={onClose}
                className={`flex items-center gap-4 rounded-xl px-4 py-3 transition-all duration-200 sm:px-6 ${isActive
                  ? "bg-[#F2F9F5] text-[#279959]"
                  : "text-[#344054] hover:bg-[#F9FAFB]"
                  }`}
              >
                <div className="flex justify-center w-6">
                  <item.icon
                    size={22}
                    className={isActive ? "text-[#279959]" : "text-[#344054]"}
                  />
                </div>

                <span
                  className={`text-[16px] sm:text-[18px] ${isActive ? "font-semibold" : "font-medium"
                    }`}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>

      <button
        onClick={handleLogout}
        className="rounded-xl text-slate-500 hover:bg-rose-50 hover:text-rose-600 sm:px-5 flex items-center gap-4 px-4 py-4 font-bold text-left transition-colors"
      >
        <LuLogOut size={24} />
        <span>Keluar</span>
      </button>
    </aside>
  );
}

export default Sidebar;
