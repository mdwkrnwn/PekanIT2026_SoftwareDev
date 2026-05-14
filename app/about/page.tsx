import Link from "next/link";
import Image from "next/image";
import {
  FaArrowRight,
} from "react-icons/fa6";
import { reasons, statistics } from "@/lib/mockData";

export default function AboutPage() {

  return (
    <section className="w-[86vw] grid gap-8 lg:grid-cols-2">
      <div className="border-border flex flex-col justify-center rounded-[2rem] border p-10 lg:p-14">
        <h1 className="text-foreground md:text-6xl mb-8 text-3xl font-bold leading-tight">
          Mendukung UMKM Lokal Lewat Solusi Digital
        </h1>

        <p className="text-muted-foreground md:text-xl mb-10 leading-relaxed">
          UFinder hadir untuk membantu masyarakat menemukan UMKM lokal
          terbaik dengan cara yang lebih mudah, cepat, dan modern.
          Kami percaya setiap usaha kecil punya potensi besar jika
          mendapatkan akses pelanggan yang tepat.
        </p>

        <Link href={'/explore'} className="bg-primary hover:bg-primary/90 w-fit rounded-2xl px-7 flex items-center gap-3 py-4 text-lg font-semibold text-white transition-colors">
          Jelajahi Sekarang
          <FaArrowRight size={18} />
        </Link>
      </div>

      <div className="border-border relative overflow-hidden rounded-[2rem] border p-8 lg:block hidden">
        <div className="relative w-full h-full">
          <Image
            src="/About.png"
            alt="About Illustration"
            fill
            className="rounded-[1.5rem] object-cover"
          />
        </div>
      </div>

      <div className="border-border rounded-[2rem] border p-8 lg:p-10">
        <h2 className="text-primary mb-8 text-3xl font-bold">
          Kenapa Pilih UFinder?
        </h2>

        <div className="md:grid-cols-3 grid gap-5">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <article
                key={reason.title}
                className="bg-[#F7F8FA] grid grid-rows-3 items-center rounded-2xl p-6 text-center *:place-self-center "
              >
                <div className="bg-primary/10 size-16 flex items-center justify-center rounded-full">
                  <Icon className="text-primary" size={24} />
                </div>

                <h3 className="text-foreground font-bold">
                  {reason.title}
                </h3>

                <p className="text-foreground text-sm leading-relaxed">
                  {reason.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>

      <div className="border-border overflow-hidden rounded-[2rem] border">
        <div className="md:grid-cols-2 md:grid-rows-2 grid h-full">
          {statistics.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.title}
                className={`border-border flex gap-5 p-8 ${index !== 1 ? "md:border-r" : ""
                  } ${index < 2 ? "md:border-b" : ""}`}
              >
                <div className="bg-primary/10 size-18 shrink-0 flex items-center justify-center rounded-full">
                  <Icon className="text-primary" size={28} />
                </div>

                <div className="flex flex-col gap-1.5">
                  <h3 className="text-foreground md:text-5xl text-3xl font-bold">
                    {stat.title}
                  </h3>

                  <p className="text-foreground md:text-2xl text-xl font-semibold">
                    {stat.subtitle}
                  </p>

                  <p className="text-foreground wrap-break-word md:text-lg">
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}