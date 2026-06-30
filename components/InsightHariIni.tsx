import { LuMapPin, LuClock3 } from "react-icons/lu";
import { FaStore, FaChartColumn } from "react-icons/fa6";
import Image from "next/image";
const INSIGHTS = [
  {
    title: "Produk Paling Populer",
    value: "Makanan & Minuman",
    change: "38%",
    desc: "dari total penjualan",
    icon: FaStore,
    iconColor: "text-[#0C7C61]",
    iconBg: "bg-[#E8F7F1]",
    border: "border-[#EEF0F2]",
    chart: "/te.png",
    isTime: false,
  },
  {
    title: "Kategori Terlaris",
    value: "Jajanan Tradisional",
    change: "+28%",
    desc: "dibanding minggu lalu",
    icon: FaChartColumn,
    iconColor: "text-[#F59E0B]",
    iconBg: "bg-[#FFF4DF]",
    border: "border-[#EEF0F2]",
    chart: "/te.png",
    isTime: false,
  },
  {
    title: "Daerah Berkembang",
    value: "Malang Raya",
    change: "+35%",
    desc: "pertumbuhan UMKM aktif",
    icon: LuMapPin,
    iconColor: "text-[#0C7C61]",
    iconBg: "bg-[#E8F7F1]",
    border: "border-[#EEF0F2]",
    chart: "/te.png",
    isTime: false,
  },
  {
    title: "Jam Paling Ramai",
    value: "18.00 - 21.00",
    change: "",
    desc: "Waktu kunjungan tertinggi",
    icon: LuClock3,
    iconColor: "text-[#2563EB]",
    iconBg: "bg-[#EAF2FF]",
    border: "border-[#EEF0F2]",
    chart: "/trend-chart.png",
    isTime: true,
  },
];

export function InsightHariIni() {
  return (
    <div className="w-[80vw] mx-auto mt-24 text-center">
      <h3 className="text-[#0B0F1F] text-4xl font-semibold">
        Insight UMKM Hari ini
      </h3>
      <p className="text-slate-500 max-w-2xl mx-auto mt-2">
        Data yang membantu Anda memahami tren dan peluang bisnis.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-5 text-left md:grid-cols-2 lg:grid-cols-4">
        {INSIGHTS.map((item, index) => (
          <div
            key={index}
            className={`rounded-2xl border bg-white p-5 ${item.border}`}
          >
            <div className="flex items-start justify-between">
              <div>
                <h4 className="text-[15px] font-bold text-[#0B0F1F]">
                  {item.title}
                </h4>

                {item.isTime ? (
                  <h3 className="mt-3 text-[25px] font-bold text-[#0B0F1F]">
                    {item.value}
                  </h3>
                ) : (
                  <>
                    <p className="mt-2 text-[14px] font-medium text-[#0B0F1F]">
                      {item.value}
                    </p>
                  </>
                )}

                <h3 className=" mt-3 text-[20px] font-bold text-[#0B0F1F]">
                  {item.change}
                </h3>

                <p className="mt-1 text-[12px] text-[#98A2B3]">{item.desc}</p>
              </div>

              <div
                className={`flex h-11 w-11 items-center justify-center rounded-full ${item.iconBg}`}
              >
                <item.icon size={20} className={item.iconColor} />
              </div>
            </div>

            <div className=" flex justify-end">
              <Image
                src={item.chart}
                alt=""
                width={130}
                height={55}
                className="h-auto object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
