import { cn } from "@/lib/utils";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
export function Reviews() {
  return <section>
    <div className="flex items-center justify-between mb-8">
      <h3 className="text-slate-900 text-xl font-bold">Ulasan Pelanggan</h3>
      <button className="text-primary hover:underline font-bold">Lihat Semua</button>
    </div>

    <div className="grid grid-cols-[1fr_2.5fr] gap-12 border border-slate-200 rounded-2xl p-8">
      {
        /* Aggregate Stats */
      }
      <div className="border-slate-200 flex flex-col items-center pr-12 border-r">
        <div className="text-[4rem] font-bold text-foreground mb-2">4.5</div>
        <div className="flex gap-1 mb-2 text-xl text-yellow-400">
          <FaStar /><FaStar /><FaStar /><FaStar /><FaStar className="text-slate-200" />
        </div>
        <p className="text-slate-500 mb-6">(20 ulasan)</p>

        <div className="flex flex-col w-full gap-2">
          {[{
            star: 5,
            count: 12,
            width: "w-[60%]"
          }, {
            star: 4,
            count: 8,
            width: "w-[40%]"
          }, {
            star: 3,
            count: 0,
            width: "w-0"
          }, {
            star: 2,
            count: 0,
            width: "w-0"
          }, {
            star: 1,
            count: 0,
            width: "w-0"
          }].map(row => <div key={row.star} className="flex items-center gap-3 text-sm">
            <span className="text-foreground/70 w-2 font-bold">{row.star}</span>
            <FaStar className="w-3 text-yellow-400" size={12} />
            <div className="bg-slate-100 flex-1 h-2 overflow-hidden rounded-full">
              <div className={cn("h-full bg-primary rounded-full", row.width)}></div>
            </div>
            <span className="text-foreground/50 w-4 text-xs text-right">{row.count}</span>
          </div>)}
        </div>
      </div>

      {
        /* Review List */
      }
      <div className="flex flex-col gap-8">
        {[{
          name: "Rina Kartika",
          time: "2 Hari yang lalu",
          text: "Enak banget, rasa rumahan asli! Porsi dapet dan harga terjangkau."
        }, {
          name: "Dimas Pratama",
          time: "1 Minggu yang lalu",
          text: "Enak banget, rasa rumahan asli! Porsi dapet dan harga terjangkau."
        }, {
          name: "Siti Aisyah",
          time: "2 Minggu yang lalu",
          text: "Menu buat keluarga. Sambalnya juara!"
        }].map((review, i) => <div key={i} className="border-slate-100 last:border-0 flex flex-col border-b">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-4">
              <div className="shrink-0 relative w-10 h-10 overflow-hidden rounded-full">
                <Image src={`https://picsum.photos/100/100?random=${i + 200}`} fill className="object-cover" alt={review.name} />
              </div>
              <div className="flex flex-col">
                <span className="text-foreground mb-1 text-lg font-bold">{review.name}</span>
                <div className="flex text-yellow-400 gap-0.5">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
              </div>
            </div>
            <span className="text-foreground/50">{review.time}</span>
          </div>
          <p className="text-foreground ml-14 text-lg">{review.text}</p>
        </div>)}
      </div>
    </div>
  </section>;
}
