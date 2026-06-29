import Image from "next/image";
import { LuStar } from "react-icons/lu";

export default function UlasanPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start text-base">
      <div className="lg:col-span-2 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col gap-6">
        <h3 className="text-xl font-bold text-slate-900 mb-2">Semua Ulasan</h3>
        {[
          { name: "Siti Nurhaliza", comment: "Makanannya enak banget, sambalnya nampol! Pengiriman juga cepat dan packing rapi.", reply: "Terima kasih banyak kak!" },
          { name: "Budi Santoso", comment: "Porsi pas dan ayamnya masih hangat pas sampai rumah. Recommended!", reply: null }
        ].map((item, idx) => (
          <div key={idx} className="border-b border-slate-100 pb-6 last:border-none last:pb-0 flex flex-col gap-3">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 relative rounded-full overflow-hidden shrink-0">
                <Image src={`https://picsum.photos/100?random=${idx + 90}`} fill className="object-cover" alt={item.name} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">{item.name}</h4>
                <div className="flex text-amber-400 gap-0.5 mt-0.5">
                  {[...Array(5)].map((_, s) => <LuStar key={s} className="fill-amber-400 text-amber-400" size={14} />)}
                </div>
              </div>
            </div>
            <p className="text-slate-700 font-medium">{item.comment}</p>
            {item.reply ? (
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 ml-4 font-medium text-slate-600">
                <span className="font-bold text-slate-900 block mb-1">Balasan Anda:</span>
                {item.reply}
              </div>
            ) : (
              <button className="text-[#15803d] font-bold text-left ml-4 hover:underline">Balas Ulasan</button>
            )}
          </div>
        ))}
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col gap-4">
        <h3 className="font-bold text-slate-900 text-xl">Ringkasan Rating</h3>
        <div className="flex items-baseline gap-2 mt-2">
          <span className="text-4xl font-black text-slate-900">4.8</span>
          <span className="text-slate-400 font-medium">/ 5</span>
        </div>
        <div className="flex text-amber-400 gap-0.5 my-1">
          {[...Array(5)].map((_, s) => <LuStar key={s} className="fill-amber-400 text-amber-400" size={18} />)}
        </div>
      </div>
    </div>
  );
}