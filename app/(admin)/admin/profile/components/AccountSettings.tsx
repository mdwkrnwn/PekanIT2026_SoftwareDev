"use client";

import {
  LuChevronRight,
  LuLanguages,
  LuLock,
  LuLogOut,
  LuMoon,
} from "react-icons/lu";
import { IconType } from "react-icons";

interface SettingItem {
  title: string;
  description: string;
  icon: IconType;
  value?: string;
  danger?: boolean;
}

const settings: SettingItem[] = [
  {
    title: "Ubah Password",
    description: "Atur ulang password kamu",
    icon: LuLock,
  },
  {
    title: "Bahasa",
    description: "Bahasa yang digunakan di aplikasi",
    icon: LuLanguages,
    value: "Bahasa Indonesia",
  },
  {
    title: "Mode Gelap",
    description: "Ubah tampilan aplikasi",
    icon: LuMoon,
  },
  {
    title: "Logout",
    description: "Keluar dari akun",
    icon: LuLogOut,
    danger: true,
  },
];

export default function AccountSettings() {
  return (
    <div className="mb-5 rounded-3xl border border-[#EAECF0] bg-white p-6 shadow-xs">
      <h3 className="mb-6 text-[18px] font-bold text-[#0B0F1F]">
        Pengaturan Akun
      </h3>

      <div>
        {settings.map((item, index) => (
          <button
            key={item.title}
            onClick={() => alert("🚀 Coming Soon!")}
            className={`group flex w-full items-center justify-between py-5 text-left transition ${
              item.danger
                ? "hover:bg-[#FFF7F7]"
                : "hover:bg-[#FCFCFD]"
            } ${
              index !== settings.length - 1
                ? "border-b border-[#EAECF0]"
                : ""
            }`}
          >
            <div className="flex items-center gap-4">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-xl border transition ${
                  item.danger
                    ? "border-[#FECACA] bg-[#FFF5F5] group-hover:bg-[#FEE2E2]"
                    : "border-[#EAECF0] bg-white"
                }`}
              >
                <item.icon
                  size={18}
                  className={
                    item.danger ? "text-[#EF4444]" : "text-[#344054]"
                  }
                />
              </div>

              <div>
                <h4
                  className={`text-[18px] font-semibold transition ${
                    item.danger
                      ? "text-[#0B0F1F] group-hover:text-[#DC2626]"
                      : "text-[#0B0F1F]"
                  }`}
                >
                  {item.title}
                </h4>

                <p className="mt-1 text-[14px] text-[#667085]">
                  {item.description}
                </p>
              </div>
            </div>

            {item.value ? (
              <div className="flex items-center gap-3">
                <span className="text-[14px] font-medium text-[#667085]">
                  {item.value}
                </span>

                <LuChevronRight
                  size={28}
                  className="text-[#667085]"
                />
              </div>
            ) : (
              <LuChevronRight
                size={28}
                className="text-[#667085]"
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}