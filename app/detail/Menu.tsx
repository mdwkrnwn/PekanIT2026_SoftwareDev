import Image from "next/image";
export function Menu() {
  return <section className="mb-12">
    <div className="flex items-center justify-between mb-6">
      <h3 className="text-slate-900 text-xl font-bold">Menu Andalan</h3>
      <button className="text-primary hover:underline text-sm font-bold">
        Lihat Semua
      </button>
    </div>
    <div className="grid grid-cols-5 gap-4">
      {[{
        name: "Nasi Ayam Geprek",
        price: "Rp 18.000"
      }, {
        name: "Nasi Telur Dadar",
        price: "Rp 10.000"
      }, {
        name: "Sambal Cumi",
        price: "Rp 15.000"
      }, {
        name: "Es Teh",
        price: "Rp 5.000"
      }, {
        name: "Puding Cokelat",
        price: "Rp 8.000"
      }].map((item, i) => <div key={i} className="group rounded-xl hover:shadow-xl flex flex-col pb-4 transition-all shadow-md cursor-pointer">
        <div className="relative w-full h-32 mb-3 overflow-hidden">
          <Image src={`https://picsum.photos/300/300?random=${i + 10}`} className="group-hover:scale-110 object-cover transition-transform duration-300 rounded-tl-lg rounded-tr-lg" fill alt={item.name} />
        </div>
        <div className="mx-4">

          <h4 className="text-foreground text-lg font-bold">{item.name}</h4>
          <p className="text-foreground/70">{item.price}</p>
        </div>
      </div>)}
    </div>
  </section>;
}
