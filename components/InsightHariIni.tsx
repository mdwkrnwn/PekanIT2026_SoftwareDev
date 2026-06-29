import { LuTrendingUp, LuMapPin, LuClock } from "react-icons/lu";
import { BiPieChart } from "react-icons/bi";
const INSIGHTS = [
  { title: "Produk Paling Populer", value: "Kopi Susu Gula Aren", change: "38%", desc: "Dari total transaksi minggu ini", icon: LuTrendingUp, color: "bg-emerald-50 text-emerald-600" },
  { title: "Kategori Terlaris", value: "F&B (Makanan & Minuman)", change: "+28%", desc: "Kenaikan dibanding bulan lalu", icon: BiPieChart, color: "bg-amber-50 text-amber-600" },
  { title: "Daerah Berkembang", value: "Malang, Jawa Timur", change: "+25%", desc: "Kenaikan pendaftaran UMKM baru", icon: LuMapPin, color: "bg-blue-50 text-blue-600" },
  { title: "Jam Paling Ramai", value: "18.00 - 21.00", change: "Malam hari", desc: "Waktu paling optimal operasional", icon: LuClock, color: "bg-indigo-50 text-indigo-600" },
];

export function InsightHariIni() {
  return (
    <div className="w-[80vw] mx-auto mt-24 text-center">
      <h3 className="text-primary-foreground text-3xl font-bold">Insight UMKM Hari ini</h3>
      <p className="text-slate-500 max-w-xl mx-auto mt-2">
        Terus update wawasan bisnis kamu berdasarkan data riil pasar lokal terkini.
      </p>

      <div className="md:grid-cols-2 lg:grid-cols-4 grid grid-cols-1 gap-6 mt-12 text-left">
        {INSIGHTS.map((insight, idx) => (
          <div key={idx} className="border-border rounded-2xl relative p-6 bg-accent border shadow-xs">
            <div className="flex items-start justify-between">
              <span className="text-foreground font-semibold">{insight.title}</span>
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${insight.color}`}>
                <insight.icon size={20} />
              </div>
            </div>
            <h4 className="text-foreground mt-4 text-xl font-bold leading-tight">{insight.value}</h4>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-xs text-emerald-600 font-bold bg-primary/5 px-2 py-0.5 rounded-sm">{insight.change}</span>
              <p className="text-foreground text-sm">{insight.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}