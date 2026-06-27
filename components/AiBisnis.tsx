import { BiCheckCircle } from "react-icons/bi";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";

export function AiBisnis() {
  return (
    <div className="w-[80vw] mx-auto mt-24">
      <div className="bg-[#024E40] rounded-md p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 text-white">
        <div className="">
          <h3 className="text-3xl font-bold">Tanya AI Bisnis Bakool</h3>
          <p className="text-emerald-100/80 mt-2 text-lg">
            Dapatkan jawaban analisis instan dan rekomendasi strategi untuk mendongkrak omzet bisnis Anda.
          </p>
          <div className="mt-6 space-y-3">
            {[
              "Analisis penjualan dan pola perilaku",
              "Rekomendasi promosi & strategi terbaik",
              "Prediksi tren komoditas pelanggan"
            ].map((text, idx) => (
              <div key={idx} className="text-emerald-50 flex items-center gap-3">
                <BiCheckCircle className="text-emerald-400 shrink-0" size={18} />
                <span>{text}</span>
              </div>
            ))}
          </div>
          <button className="mt-8 bg-white text-[#0C7C61] font-bold px-6 py-3 rounded-xl shadow-md flex flex-row items-center gap-3 hover:bg-[#0C7C61] hover:text-white transition-colors">
            Mulai Konsultasi Gratis <FaArrowRight />
          </button>
        </div>

        <div className="rounded-2xl text-slate-800 flex flex-col w-full gap-4 p-5 bg-white shadow-xl">
          <div className="bg-slate-100 rounded-xl border-slate-200 flex items-start self-end gap-3 p-3 border">
            <div className="text-right">
              <span className="font-bold text-slate-900 block mb-0.5">Anda</span>
              <p className="text-slate-600 ">Kenapa toko saya sepi minggu ini?</p>
            </div>
            <div className="bg-slate-200 shrink-0 relative w-8 h-8 overflow-hidden rounded-full">
              <Image src="https://picsum.photos/100?random=11" fill className="object-cover" alt="User" />
            </div>
          </div>

          <div className="bg-emerald-100 rounded-xl border-emerald-100/50 flex items-start self-start gap-3 p-3 border">
            <div className="bg-emerald-600 shrink-0 flex items-center justify-center w-8 h-8 font-bold text-white rounded-full">
              B
            </div>
            <div>
              <span className="font-bold text-emerald-900 block mb-0.5">Bakool AI 🤖</span>
              <p className="text-slate-700 leading-relaxed">
                Penurunan kunjungan dipengaruhi tren persaingan segmen sejenis. Performa penjualan menurun pada jam 15.00 - 17.00 karena jam sibuk pelanggan Anda. <br />
                Solusi: Aktifkan program &quot;Happy Hour Flash Sale&quot; di jam tersebut untuk mendatangkan kembali volume transaksi harian.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}