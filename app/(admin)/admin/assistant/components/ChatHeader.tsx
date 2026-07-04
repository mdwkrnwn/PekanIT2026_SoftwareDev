"use client";

import Image from "next/image";
import { LuHistory } from "react-icons/lu";

export default function ChatHeader() {
  return (
    <div className="flex items-center justify-between border-b border-[#EAECF0] pb-4">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-full">
          <Image
            src="/ai.png"
            alt="AI Assistant"
            width={50}
            height={50}
          />
        </div>

        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-[15px] font-semibold text-[#101828]">
              Bakool AI Assistant
            </h3>

            <span className="rounded bg-[#E8F7EF] px-1.5 py-0.5 text-[10px] font-semibold text-[#158A62]">
              AI
            </span>
          </div>

          <span className="flex items-center gap-1.5 text-[12px] font-medium text-[#158A62]">
            <span className="h-2 w-2 rounded-full bg-[#158A62]" />
            Online
          </span>
        </div>
      </div>

      <button
        onClick={() => alert("🚀 Coming Soon!")}
        className="flex items-center gap-2 rounded-full border border-[#D0D5DD] px-4 py-2 text-[12px] font-medium text-[#344054] transition hover:bg-[#F9FAFB]"
      >
        <LuHistory size={14} />
        Riwayat Chat
      </button>
    </div>
  );
}