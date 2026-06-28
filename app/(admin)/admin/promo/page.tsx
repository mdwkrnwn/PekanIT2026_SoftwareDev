import Image from "next/image";
import { LuPlus } from "react-icons/lu";

export default function PromoPage() {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-xs">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div className="flex gap-4 border-b border-slate-100 w-full md:w-auto">
          {["Semua Promo (24)", "Aktif (17)", "Selesai (2)"].map((tab, idx) => (
            <button key={idx} className={`pb-4 px-2 font-bold text-base transition-colors ${idx === 0 ? "border-b-2 border-[#15803d] text-[#15803d]" : "text-slate-400 hover:text-slate-800"}`}>
              {tab}
            </button>
          ))}
        </div>
        <button className="bg-[#15803d] text-white font-bold px-6 py-4 rounded-xl flex items-center gap-2 hover:bg-[#166534] transition-colors self-stretch md:self-auto justify-center text-base">
          <LuPlus size={22} /> Buat Promo Baru
        </button>
      </div>

      <div className="flex flex-col gap-4">
        {[
          { name: "Paket Hemat Siang", desc: "Diskon 20% untuk semua paket makan siang", status: "Aktif", col: "bg-emerald-50 text-emerald-700" },
          { name: "Gratis Ongkir Min. 30K", desc: "Gratis ongkir untuk pembelian produk minimal 30K", status: "Aktif", col: "bg-emerald-50 text-emerald-700" },
        ].map((promo, i) => (
          <div key={i} className="flex flex-row items-center justify-between border border-slate-100 rounded-2xl p-4 hover:bg-slate-50/50 transition-colors gap-6 text-base">
            <div className="flex items-center gap-4 flex-1">
              <div className="w-24 h-16 relative rounded-xl overflow-hidden shrink-0 bg-amber-500">
                <Image src="https://picsum.photos/200/150?random=77" fill className="object-cover" alt={promo.name} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900">{promo.name}</h4>
                <p className="text-slate-500 font-medium mt-1">{promo.desc}</p>
              </div>
            </div>

            <div className="flex items-center gap-12 shrink-0 font-bold text-slate-900">
              <div>
                <span className="text-slate-400 font-medium block">Jenis</span>
                <span className="mt-1 block">Diskon</span>
              </div>
              <div>
                <span className="text-slate-400 font-medium block">Status</span>
                <span className={`px-3 py-1 rounded-md mt-1 inline-block ${promo.col}`}>{promo.status}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}