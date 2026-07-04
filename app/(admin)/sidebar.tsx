"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
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
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";

function Sidebar() {
  const activePath = usePathname();
  const router = useRouter();
  const [umkm, setUmkm] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      alert(error.message);
      return;
    }

    router.replace("/login");
    router.refresh();
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

  return (
    <aside className="w-[18vw] bg-background border-r border-border flex flex-col p-8 row-span-2 justify-between shrink-0 h-screen top-0 sticky">
      <div className="flex flex-col gap-10">
        {/* Brand Logo */}
        <div className="flex items-center gap-3 mb-10">
          <Image
            src="/Bakul.png"
            alt="Bakool Business"
            width={60}
            height={60}
            priority
            className="w-30 h-auto -ml-4"
          />

          <div className="flex flex-col -ml-8">
            <h1 className="text-3xl mt-2 font-bold leading-none text-[#06C179]">
              Bakool
            </h1>
            <p className="text-[15px]  font-medium text-[#7A7F8B]">Business</p>
          </div>
        </div>

        {/* Store Profile Card */}
        <div className="rounded-2xl border-2 border-[#F3F4F7] bg-white p-4 -mt-15">
          {loading ? (
            <div className="flex items-center gap-4">
              <Skeleton className="h-14 w-14 rounded-full" />

              <div className="flex-1 space-y-2">
                <Skeleton className="h-5 w-32" />
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-6 w-24 rounded-md" />
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full">
                <Image
                  src={coverImage}
                  fill
                  className="object-cover"
                  alt={umkm?.name || "UMKM"}
                />
              </div>

              <div>
                <h4 className="text-lg font-bold text-slate-900">
                  {umkm?.name || "Nama UMKM"}
                </h4>

                <span className="block font-medium text-slate-500">
                  {umkm?.categories?.name || "-"}
                </span>

                <span className="mt-1 inline-block rounded-md bg-emerald-100 px-2 py-0.5 text-base font-bold text-emerald-700">
                  Terverifikasi
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Navigation Links */}
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
                className={`flex items-center gap-4 rounded-xl px-6 py-3 transition-all duration-200 ${
                  isActive
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
                  className={`text-[18px] ${
                    isActive ? "font-semibold" : "font-medium"
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="flex items-center gap-4 px-5 py-4 rounded-xl font-bold text-slate-500 hover:bg-rose-50 hover:text-rose-600 transition-colors text-left"
      >
        <LuLogOut size={24} />
        <span>Keluar</span>
      </button>
    </aside>
  );
}

export default Sidebar;
