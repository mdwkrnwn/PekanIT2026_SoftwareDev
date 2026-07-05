"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LuUser, LuTrophy, LuMessageSquare, LuLogOut } from "react-icons/lu";
import { supabase } from "@/lib/supabase";
import SplashScreen from "@/components/SplashScreen";
export default function Sidebar() {
  const pathname = usePathname();
  const [showSplash, setShowSplash] = useState(false);
  const [splashMessage, setSplashMessage] = useState("");
  const [profile, setProfile] = useState<any>(null);

  // Konfigurasi Navigasi Panel User Explorer
  const navItems = [
    { name: "Profil Saya", href: "/profile", icon: LuUser },
    { name: "Achievement & Badge", href: "/achievements", icon: LuTrophy },
    { name: "Ulasan Saya", href: "/ulasan-saya", icon: LuMessageSquare },
  ];

  const router = useRouter();

  // Nilai Data Progres Level XP
  const currentXp = 1250;
  const maxXp = 2000;
  useEffect(() => {
    const getProfile = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return;

      const { data, error } = await supabase
        .from("profiles")
        .select("full_name, avatar_url")
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
  const handleLogout = async () => {
    const confirmLogout = window.confirm("Yakin ingin keluar?");

    if (!confirmLogout) return;

    const { error } = await supabase.auth.signOut();

    if (error) {
      alert(error.message);
      return;
    }

    setSplashMessage("Keluar dari akun...");
    setShowSplash(true);

    setTimeout(() => {
      router.replace("/login");
      router.refresh();
    }, 500);
  };

  if (showSplash) {
    return <SplashScreen message={splashMessage} />;
  }
  
  return (
    <>
      <aside className="sticky top-[118px] h-full w-[280px] border-r border-[#EAECF0] dark:border-slate-800 bg-white dark:bg-slate-900 px-7 py-8 transition-colors">
        <div className="flex flex-col gap-10">
          {/* User Card */}
          <div className="flex flex-col items-center border-b border-[#EAECF0] dark:border-slate-800 pb-8 text-center">
            <div className="relative mb-4 h-20 w-20 overflow-hidden rounded-full border-2 border-slate-100 dark:border-slate-700">
              <Image
                src={avatar}
                fill
                className="object-cover"
                alt={profile?.full_name || "Avatar Pengguna"}
              />
            </div>

            <h3 className="text-[18px] font-bold text-[#0B0F1F] dark:text-white">
              {profile?.full_name || "Pengguna"}
            </h3>

            <p className="mt-1 text-[15px] font-medium text-[#344054] dark:text-slate-400">
              Explorer{" "}
              <span className="font-bold text-[#158A62] dark:text-emerald-400">
                Level 3
              </span>
            </p>

            {/* Progress */}
            <div className="mt-4 w-full">
              <div className="h-[16px] overflow-hidden rounded-full bg-[#D9D9D9] dark:bg-slate-700">
                <div
                  className="h-full rounded-full bg-[#158A62] dark:bg-emerald-400"
                  style={{
                    width: `${(currentXp / maxXp) * 100}%`,
                  }}
                />
              </div>

              <p className="mt-4 text-center text-[13px] font-semibold">
                <span className="text-[#158A62] dark:text-emerald-400">
                  {currentXp.toLocaleString()}
                </span>

                <span className="text-[#101828] dark:text-slate-300">
                  {" "}
                  / {maxXp.toLocaleString()} XP
                </span>
              </p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-4 rounded-xl px-5 py-4 text-left text-base transition-all ${
                    isActive
                      ? "bg-emerald-50 dark:bg-emerald-900/30 text-[#15803d] dark:text-emerald-400 font-bold"
                      : "text-[#344054] dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-[#0B0F1F] dark:hover:text-white font-semibold"
                  }`}
                >
                  <item.icon
                    size={24}
                    className={
                      isActive
                        ? "text-[#15803d] dark:text-emerald-400"
                        : "text-[#344054] dark:text-slate-400"
                    }
                  />

                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Logout */}
        <button
          type="button"
          onClick={handleLogout}
          className="mt-2 flex w-full items-center gap-4 rounded-xl px-5 py-4 text-left text-base font-bold text-slate-500 dark:text-slate-400 transition-colors hover:bg-rose-50 dark:hover:bg-rose-900/20 hover:text-rose-600 dark:hover:text-rose-400"
        >
          <LuLogOut size={24} />
          <span>Keluar</span>
        </button>
      </aside>
    </>
  );
}
