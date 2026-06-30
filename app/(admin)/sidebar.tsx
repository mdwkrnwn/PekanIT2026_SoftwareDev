"use client";

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
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

function Sidebar() {
  const activePath = usePathname();
  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem("user");


    router.replace("/login");
  };
  return (
    <aside className="w-[18vw] bg-white border-r border-[#F3F4F7] flex flex-col p-8  justify-between shrink-0 h-screen top-0 sticky">
      <div className="flex flex-col gap-10">
        {/* Brand Logo */}
        <div className="mb-10 flex items-center gap-3">
          <Image
            src="/Bakul.png"
            alt="Bakool Business"
            width={60}
            height={60}
            priority
            className="h-auto w-30 -ml-4"
          />

          <div className="flex flex-col -ml-8">
            <h1 className="text-3xl mt-2 font-bold leading-none text-[#06C179]">
              Bakool
            </h1>
            <p className="text-[15px]  font-medium text-[#7A7F8B]">Business</p>
          </div>
        </div>

        {/* Store Profile Card */}
        <div className="border-2 border-[#F3F4F7] rounded-2xl p-4 -mt-15 bg-white flex items-center gap-4">
          <div className="w-14 h-14 relative rounded-full overflow-hidden shrink-0">
            <Image
              src="/assets/umkm/makanan/dapurnona/thumbnail.jpeg"
              fill
              className="object-cover"
              alt="Store Avatar"
            />
          </div>
          <div>
            <h4 className="font-bold text-slate-900 text-lg">Dapur Nona</h4>
            <span className="text-slate-500 font-medium block">Makanan</span>
            <span className="inline-block bg-emerald-100 text-emerald-700 text-base font-bold px-2 py-0.5 rounded-md mt-1">
              Terverifikasi
            </span>
          </div>
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
                className={`flex items-center gap-4 rounded-xl px-6 py-3 transition-all duration-200 ${isActive
                    ? "bg-[#F2F9F5] text-[#279959]"
                    : "text-[#344054] hover:bg-[#F9FAFB]"
                  }`}
              >
                <div className="flex w-6 justify-center">
                  <item.icon
                    size={22}
                    className={isActive ? "text-[#279959]" : "text-[#344054]"}
                  />
                </div>

                <span
                  className={`text-[18px] ${isActive ? "font-semibold" : "font-medium"
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
      <button onClick={handleLogout} className="flex items-center gap-4 px-5 py-4 rounded-xl font-bold text-slate-500 hover:bg-rose-50 hover:text-rose-600 transition-colors text-left">
        <LuLogOut size={24} />
        <span>Keluar</span>
      </button>
    </aside>
  );
}

export default Sidebar;
