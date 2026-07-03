import { LuLightbulb, LuSparkles } from "react-icons/lu";

export default function Tips() {
  return (
    <div className="rounded-2xl border border-[#EAECF0] bg-white p-5">
      <div className="flex items-center gap-2">
        <LuLightbulb className="text-[#F59E0B]" size={20} />

        <h3 className="text-[22px] font-semibold text-[#101828]">
          Tips Menarik
        </h3>
      </div>

      <p className="mt-4 text-[15px] leading-7 text-[#344054]">
        Gunakan promo di jam ramai <b>(11.00 – 13.00 & 17.00 – 20.00)</b> untuk
        hasil maksimal!
      </p>

      <button
         onClick={() => alert("🚀 Coming Soon!")}
        className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-[#158A62] font-semibold text-[#158A62] transition hover:bg-[#E8F7EF]"
      >
        Lihat Rekomendasi AI
        <LuSparkles size={18} />
      </button>
    </div>
  );
}