"use client";

import Image from "next/image";
import {
  LuLayoutDashboard,
  LuUtensilsCrossed,
  LuTicket,
  LuMessageSquare,
  LuSparkles,
  LuLogOut
} from "react-icons/lu";
import { FiBarChart2 } from "react-icons/fi";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Sidebar() {
  const activePath = usePathname();

  return (
    <aside className="w-[22vw] bg-white border-r border-slate-200 flex flex-col p-8 justify-between shrink-0 h-screen top-0 sticky">
      <div className="flex flex-col gap-10">
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-[#15803d] rounded-xl flex items-center justify-center font-black text-white text-2xl">
            B
          </div>
          <div>
            <span className="text-2xl font-bold tracking-tight text-slate-900 block">Bakool</span>
            <span className="text-slate-400 font-medium block">Business</span>
          </div>
        </div>

        {/* Store Profile Card */}
        <div className="border border-slate-100 rounded-2xl p-4 bg-slate-50 flex items-center gap-4">
          <div className="w-14 h-14 relative rounded-xl overflow-hidden shrink-0">
            <Image src="https://picsum.photos/100?random=40" fill className="object-cover" alt="Store Avatar" />
          </div>
          <div>
            <h4 className="font-bold text-slate-900 text-lg">Dapur Nona</h4>
            <span className="text-slate-500 font-medium block">Makanan</span>
            <span className="inline-block bg-emerald-100 text-emerald-700 text-base font-bold px-2 py-0.5 rounded-md mt-1">Terverifikasi</span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-2">
          {[
            { name: "Dashboard", icon: LuLayoutDashboard, href: "/admin/dashboard" },
            { name: "Analytics", icon: FiBarChart2, href: "/admin/analytics" },
            { name: "Produk & Menu", icon: LuUtensilsCrossed, href: "/admin/products" },
            { name: "Promo Management", icon: LuTicket, href: "/admin/promo" },
            { name: "Ulasan", icon: LuMessageSquare, href: "/admin/ulasan" },
            { name: "AI Business Assistant", icon: LuSparkles, href: "/admin/assistant" },
          ].map((item) => {
            const IsActive = activePath === item.href;
            return (
              <Link
                href={item.href}
                key={item.name}
                className={`flex items-center gap-4 px-5 py-4 rounded-xl font-bold transition-colors text-left ${IsActive
                  ? "bg-emerald-50 text-[#15803d]"
                  : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                  }`}
              >
                <item.icon size={24} className={IsActive ? "text-[#15803d]" : "text-slate-400"} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Logout Button */}
      <button className="flex items-center gap-4 px-5 py-4 rounded-xl font-bold text-slate-500 hover:bg-rose-50 hover:text-rose-600 transition-colors text-left">
        <LuLogOut size={24} />
        <span>Keluar</span>
      </button>
    </aside>
  )
}

export default Sidebar