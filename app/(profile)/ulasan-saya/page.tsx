import { Edit, MoreVerticalIcon } from "lucide-react";
import Image from "next/image";
import { LuStar, LuFileImage, LuTrash2, LuCalendar } from "react-icons/lu";

export default function MyReviewsPage() {
  const reviews = [
    { id: 1, target: "Dapur Nona", cat: "Kuliner", text: "Nasi ayamnya enak dan sambalnya mantap. Porsi pas dan harganya terjangkau. Bakal pesan lagi!", date: "12 Juni 2026" },
    { id: 2, target: "Dapur Nona", cat: "Kuliner", text: "Nasi ayamnya enak dan sambalnya mantap. Porsi pas dan harganya terjangkau. Bakal pesan lagi!", date: "12 Juni 2026" },
    { id: 3, target: "Dapur Nona", cat: "Kuliner", text: "Nasi ayamnya enak dan sambalnya mantap. Porsi pas dan harganya terjangkau. Bakal pesan lagi!", date: "12 Juni 2026" },
  ];

  return (
    <div className="p-12 bg-slate-50 text-base">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-slate-900">Ulasan Saya</h1>
        <p className="text-slate-500 mt-1 text-lg">Lihat semua ulasan yang telah kamu berikan kepada UMKM di Bakool.</p>
      </div>

      {/* Top Aggregation Row Blocks */}
      <div className="flex flex-col md:flex-row gap-6 mb-10 justify-end">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 flex items-center gap-4 min-w-50 shadow-xs">
          <div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-xl flex items-center justify-center">
            👎
          </div>
          <div>
            <span className="text-2xl font-black text-slate-900 block">25</span>
            <p className="text-slate-400 font-semibold">Ulasan Negatif</p>
          </div>
        </div>
        <div className="bg-white border border-slate-200 rounded-2xl p-5 flex items-center gap-4 min-w-50 shadow-xs">
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
            <LuFileImage size={24} />
          </div>
          <div>
            <span className="text-2xl font-black text-slate-900 block">8</span>
            <p className="text-slate-400 font-semibold">Foto Diunggah</p>
          </div>
        </div>
      </div>

      {/* Category Filter Controls */}
      <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
        <div className="flex gap-3">
          {["Semua", "5 ★", "4 ★", "3 ★", "2 ★"].map((filter, i) => (
            <button key={i} className={`px-4 py-2 rounded-xl font-bold border transition-all ${i === 0 ? "bg-emerald-50 text-[#15803d] border-transparent" : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"}`}>
              {filter}
            </button>
          ))}
        </div>

        <select className="bg-white border border-slate-200 rounded-xl px-4 py-2 font-bold text-slate-700 focus:outline-none">
          <option>Terbaru</option>
          <option>Terlama</option>
        </select>
      </div>

      {/* Feed List Items Card */}
      <div className="flex flex-col gap-6">
        {reviews.map((item) => (
          <div key={item.id} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col md:flex-row gap-6 items-start relative group">
            {/* Action Dot Toggle Trigger Right top absolute positioning */}
            <button className="absolute top-6 right-6 text-slate-400 hover:text-slate-700">
              <MoreVerticalIcon size={24} />
            </button>

            {/* Merchant Square Thumb */}
            <div className="w-28 h-28 relative rounded-xl overflow-hidden shrink-0 bg-slate-100 border border-slate-100">
              <Image src="https://picsum.photos/200/200?random=35" fill className="object-cover" alt={item.target} />
            </div>

            {/* Details Content Context block */}
            <div className="flex-1 flex flex-col gap-3">
              <div className="flex items-center gap-3 flex-wrap">
                <h4 className="text-xl font-bold text-slate-900">{item.target}</h4>
                <span className="bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded-md text-base">{item.cat}</span>
              </div>

              {/* Rating Star Output Indicator */}
              <div className="flex text-amber-400 gap-0.5">
                {[...Array(5)].map((_, s) => <LuStar key={s} className="fill-amber-400 text-amber-400" size={18} />)}
              </div>

              <p className="text-slate-600 font-medium leading-relaxed ">
                {item.text}
              </p>

              {/* Meta Metadata Footer row details */}
              <div className="flex flex-wrap items-center justify-between mt-2 border-t border-slate-50 pt-4 text-slate-400 font-semibold gap-4">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-2"><LuCalendar size={18} /> {item.date}</span>
                  <span className="flex items-center gap-2"><LuFileImage size={18} /> 2 Foto</span>
                </div>

                {/* Inline Action Triggers Layout */}
                <div className="flex items-center gap-4 text-base">
                  <button className="text-slate-600 hover:text-[#15803d] font-bold flex items-center gap-1.5 transition-colors">
                    <Edit size={18} /> Edit
                  </button>
                  <button className="text-rose-500 hover:text-rose-700 font-bold flex items-center gap-1.5 transition-colors">
                    <LuTrash2 size={18} /> Hapus
                  </button>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}