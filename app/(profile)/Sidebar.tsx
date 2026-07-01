"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LuUser,
  LuTrophy,
  LuMessageSquare,
  LuLogOut
} from "react-icons/lu";

export default function Sidebar() {
  const pathname = usePathname();

  // Konfigurasi Navigasi Panel User Explorer
  const navItems = [
    { name: "Profil Saya", href: "/profile", icon: LuUser },
    { name: "Achievement & Badge", href: "/achievements", icon: LuTrophy },
    { name: "Ulasan Saya", href: "/ulasan-saya", icon: LuMessageSquare },
  ];

  // Nilai Data Progres Level XP
  const currentXp = 1250;
  const maxXp = 2000;

  return (
    <>
      <aside className="max-w-100 border-r border-slate-200 flex flex-col pb-0 p-8 justify-between h-full top-[119.188px] sticky">
        <div className="flex flex-col gap-10">
          {/* User Card Profile Summary Block */}
          <div className="flex flex-col items-center text-center border-b border-slate-100 pb-8">
            <div className="w-24 h-24 relative rounded-full overflow-hidden border-2 border-slate-100 shadow-xs mb-4">
              <Image
                src="https://picsum.photos/150/150?random=81"
                fill
                className="object-cover"
                alt="Avatar Pengguna"
              />
            </div>

            <h3 className="text-xl font-bold text-slate-900">Ryn Askara</h3>
            <p className="text-slate-500 font-semibold mt-1">
              Explorer <span className="text-emerald-700 font-black">Level 3</span>
            </p>

            {/* Penggunaan Elemen <meter> untuk Progres Level Batasan XP */}
            <div className="w-full mt-4 flex flex-col gap-2">
              <meter
                min="0"
                max={maxXp}
                value={currentXp}
                className="w-full h-3 block appearance-none [&::-webkit-meter-bar]:bg-slate-100 [&::-webkit-meter-bar]:rounded-full [&::-webkit-meter-bar]:border-0 [&::-webkit-meter-optimum-value]:bg-emerald-600 [&::-webkit-meter-optimum-value]:rounded-full"
              />
              <div className="flex justify-center items-center gap-1 font-bold text-slate-700 text-base">
                <span className="text-[#15803d]">{currentXp.toLocaleString()}</span>
                <span className="text-slate-300 font-medium">/</span>
                <span className="text-slate-400 font-medium">{maxXp.toLocaleString()} XP</span>
              </div>
            </div>
          </div>

          {/* Navigation Link Menu Bars */}
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-4 px-5 py-4 rounded-xl font-bold transition-all text-left text-base ${isActive
                    ? "bg-emerald-50 text-[#15803d]"
                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                >
                  <item.icon
                    size={24}
                    className={isActive ? "text-[#15803d]" : "text-slate-400"}
                  />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Action Trigger Keluar Bottom Area */}
        <button
          type="button"
          className="flex items-center gap-4 px-5 py-4 rounded-xl font-bold text-slate-500 hover:bg-rose-50 hover:text-rose-600 transition-colors text-left text-base"
        >
          <LuLogOut size={24} />
          <span>Keluar</span>
        </button>
      </aside>
    </>

  );
}