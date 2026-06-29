import { LuSend, LuSparkles } from "react-icons/lu";

export default function AiAssistantPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start text-base">
      <div className="lg:col-span-2 bg-white border border-slate-200 rounded-3xl p-6 flex flex-col h-[65dvh] justify-between shadow-xs">
        <div className="flex items-center gap-4 border-b border-slate-100 pb-4 mb-4">
          <div className="w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center text-white font-black text-xl">
            B
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-lg">Bakool AI Assistant</h3>
            <span className="text-emerald-600 font-bold flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full inline-block" /> Online
            </span>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto flex flex-col gap-4 py-2 pr-2 font-medium">
          <div className="bg-emerald-50 text-emerald-900 p-4 rounded-2xl rounded-tl-none max-w-[85%] self-start border border-emerald-100/50">
            Halo Dapur Nona! Ada yang bisa saya bantu untuk menganalisis laporan performa produk kuliner atau pengaturan promo tokomu hari ini?
          </div>
          <div className="bg-slate-100 text-slate-800 p-4 rounded-2xl rounded-tr-none max-w-[85%] self-end">
            Kenapa kunjungan minggu ini turun?
          </div>
        </div>

        <div className="flex gap-3 items-center border-t border-slate-100 pt-4 mt-4">
          <input
            type="text"
            placeholder="Ketik pertanyaanmu di sini..."
            className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-slate-800 placeholder-slate-300 focus:outline-none focus:border-[#15803d]"
          />
          <button className="w-14 h-14 bg-[#15803d] text-white rounded-xl flex items-center justify-center hover:bg-[#166534] transition-colors shrink-0 shadow-xs">
            <LuSend size={22} />
          </button>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs">
        <div className="flex items-center gap-2 mb-4 text-[#15803d]">
          <LuSparkles size={22} />
          <h3 className="font-bold text-slate-900 text-xl">Rekomendasi Otomatis</h3>
        </div>
        <p className="text-slate-600 font-medium leading-relaxed">
          Berdasarkan data operasional, mengaktifkan promo diskon produk bumbu pelengkap berpotensi memicu lonjakan transaksi sebesar 12%.
        </p>
      </div>
    </div>
  );
}