import { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { LuCoffee, LuMapPin, LuShoppingBag, LuSend } from "react-icons/lu";
import { MdOutlineRamenDining } from "react-icons/md";
import { BiX } from "react-icons/bi";

export default function ChatPopup({ isOpen, setIsOpen }: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>
}) {
  return (
    <div
      className={cn(
        "fixed bottom-[-75%] right-6 z-50 flex w-105 origin-bottom-right flex-col rounded-[2rem] shadow-2xl transition-all duration-300 ease-[cubic-bezier(0,0.22,0.12,1)]",
        isOpen
          ? "bottom-10"
          : "pointer-events-none scale-50"
      )}
    >
      {/* Header */}
      <div className="bg-primary flex items-center gap-4 p-6">
        <div className="h-14 w-14 shrink-0 relative flex items-center justify-center bg-white rounded-full">
          <Image
            src="https://picsum.photos/100/100?random=bot"
            alt="Bot Avatar"
            width={40}
            height={40}
            className="object-cover rounded-full"
          />
        </div>
        <div className="flex flex-row justify-between w-full">
          <div className="flex flex-col">
            <h2 className="text-xl font-bold text-white">Asisten UFinder</h2>
            <div className="flex items-center gap-2 mt-1">
              <span className="h-2.5 w-2.5 rounded-full bg-green-400"></span>
              <span className="text-sm font-medium text-blue-100">Online</span>
            </div>
          </div>
          <div>
            <button onClick={() => setIsOpen((prev) => !prev)}>
              <BiX size={50} className="text-white cursor-pointer" />
            </button>
          </div>
        </div>
      </div>

      {/* Chat Body */}
      <div className="flex h-120 flex-col overflow-y-auto bg-[#F8F9FB] p-6 custom-scrollbar">
        {/* Bot Message */}
        <div className="flex gap-3 mb-8">
          <div className="shrink-0 border-slate-200 flex items-center justify-center w-10 h-10 bg-white border rounded-full">
            <Image
              src="https://picsum.photos/100/100?random=bot"
              alt="Bot Avatar"
              width={28}
              height={28}
              className="object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <div className="rounded-2xl border-slate-200 p-5 bg-white border rounded-tl-sm shadow-sm">
              <p className="mb-4 text-[0.95rem] text-slate-800">
                Halo! Saya Asisten UFinder.
              </p>
              <p className="mb-4 text-[0.95rem] leading-relaxed text-slate-800">
                Saya bisa bantu kamu menemukan UMKM terdekat, hidden gem, tempat
                nongkrong, sampai produk lokal terbaik sesuai kebutuhanmu.
              </p>
              <p className="mb-6 text-[0.95rem] text-slate-800">
                Ada yang ingin kamu cari hari ini?
              </p>
              <span className="text-slate-400 text-xs">18.59</span>
            </div>
          </div>
        </div>

        {/* Quick Questions */}
        <div className="mt-auto">
          <h3 className="mb-4 text-[1.05rem] font-bold text-slate-900">
            Pertanyaan cepat:
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <button className="rounded-xl hover:bg-blue-50 flex items-center gap-3 p-3 text-left text-blue-600 transition-colors bg-white border border-blue-600">
              <LuCoffee size={20} className="shrink-0" />
              <span className="text-slate-800 text-sm font-semibold">
                Cari cafe estetik
              </span>
            </button>
            <button className="rounded-xl hover:bg-blue-50 flex items-center gap-3 p-3 text-left text-blue-600 transition-colors bg-white border border-blue-600">
              <MdOutlineRamenDining size={22} className="shrink-0" />
              <span className="text-slate-800 text-sm font-semibold">
                Rekomendasi Kuliner
              </span>
            </button>
            <button className="rounded-xl hover:bg-blue-50 flex items-center gap-3 p-3 text-left text-blue-600 transition-colors bg-white border border-blue-600">
              <LuMapPin size={20} className="shrink-0" />
              <span className="text-slate-800 text-sm font-semibold">
                Hidden GEM dekat sini
              </span>
            </button>
            <button className="rounded-xl hover:bg-blue-50 flex items-center gap-3 p-3 text-left text-blue-600 transition-colors bg-white border border-blue-600">
              <LuShoppingBag size={20} className="shrink-0" />
              <span className="text-slate-800 text-sm font-semibold">
                Cari Produk Lokal
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="bg-[#F8F9FB] p-6 pt-2">
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Tanyakan tentang UMKM..."
            className="w-full rounded-full border border-slate-300 bg-white py-4 pl-6 pr-16 text-[0.95rem] text-slate-800 shadow-sm outline-none placeholder:text-slate-400 focus:border-blue-600"
          />
          <button className="absolute right-2 flex aspect-square h-[80%] items-center justify-center rounded-full bg-blue-600 text-white transition-colors hover:bg-blue-700">
            <LuSend size={20} className="mr-0.5 mt-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
}