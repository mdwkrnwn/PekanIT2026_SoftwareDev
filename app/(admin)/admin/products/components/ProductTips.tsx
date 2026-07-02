import { LuLightbulb, LuSparkles } from "react-icons/lu";

export default function ProductTips() {
  return (
    <div className="rounded-2xl border border-[#EAECF0] bg-white p-5">
      <div className="flex items-center gap-2">
        <LuLightbulb size={22} className="text-[#F59E0B]" />

        <h3 className="text-[24px] font-semibold">
          Tips Menarik
        </h3>
      </div>

      <p className="mt-5 text-[15px] leading-7 text-[#344054]">
        Tambahkan foto produk berkualitas tinggi dan deskripsi yang
        menarik untuk meningkatkan minat pelanggan.
      </p>

      <button className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-[#158A62] font-semibold text-[#158A62] transition hover:bg-[#E8F7EF]">
        Lihat Rekomendasi AI
        <LuSparkles size={18} />
      </button>
    </div>
  );
}