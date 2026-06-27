import Image from "next/image";

export function FeatureDashboard() {
  return (
    <div className="w-[80vw] mx-auto mt-24">
      <div className="bg-[#046A4E] rounded-[2.5rem] p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 text-white relative overflow-hidden">
        <div className="z-10 max-w-md">
          <span className="bg-emerald-500/20 text-emerald-300 px-3 py-1 text-xs font-bold tracking-wider uppercase rounded-full">Dashboard Aktif</span>
          <h3 className="md:text-4xl mt-4 text-3xl font-bold leading-tight">Kelola Bisnis Lebih Mudah, Semua dalam Satu Tempat</h3>
          <ul className="text-emerald-100/90 mt-6 space-y-3 text-sm list-disc list-inside">
            <li>Pantau pengunjung dan performa toko</li>
            <li>Kelola produk, stok, dan pesanan</li>
            <li>Analisis produk favorit dan pelanggan</li>
            <li>Tingkatkan rating dan kepercayaan</li>
          </ul>
          <button className="mt-8 bg-white text-[#046A4E] font-bold px-6 py-3 rounded-xl shadow-md hover:bg-emerald-50 transition-colors">
            Coba Dashboard Sekarang
          </button>
        </div>

        <div className="lg:w-1/2 aspect-4/3 rounded-2xl text-slate-800 relative flex flex-col w-full gap-4 p-6 bg-white shadow-2xl">
          <div className="border-slate-100 flex items-center justify-between pb-4 border-b">
            <div>
              <p className="text-slate-400 text-xs font-medium">Pendapatan</p>
              <h4 className="text-slate-900 text-xl font-bold">Rp 24.500.000 <span className="text-emerald-500 text-xs font-bold">+12.5%</span></h4>
            </div>
            <div className="bg-slate-50 w-24 h-8 rounded-lg" />
          </div>
          <div className="relative flex-1">
            <Image src="https://picsum.photos/600/400?random=10" fill className="object-cover rounded-lg" alt="Dashboard Preview" />
          </div>
        </div>
      </div>
    </div>
  );
}