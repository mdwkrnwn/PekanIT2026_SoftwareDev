import Link from "next/link";
import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  FaArrowRight,
  FaHeart,
  FaLocationDot,
  FaUsers,
} from "react-icons/fa6";
import { LuGrid2X2 } from "react-icons/lu";
import { FaSearch } from "react-icons/fa";

const reasons = [
  {
    title: "Mudah Dicari",
    description:
      "Temukan UMKM favorit dengan cepat dan praktis dalam satu platform.",
    icon: FaSearch,
  },
  {
    title: "Dekat Dengan Kamu",
    description:
      "Cari hidden gem UMKM di sekitar lokasi kamu dengan mudah.",
    icon: FaLocationDot,
  },
  {
    title: "Dukung Lokal",
    description:
      "Setiap klik dan transaksi membantu UMKM lokal semakin berkembang.",
    icon: FaHeart,
  },
];

const statistics = [
  {
    title: "500+",
    subtitle: "UMKM bergabung",
    description: "Bergabung dan tumbuh bersama UFinder",
    icon: FaUsers,
  },
  {
    title: "15+",
    subtitle: "Kota Terjangkau",
    description: "Terjabar di berbagai kota di Indonesia",
    icon: FaLocationDot,
  },
  {
    title: "1.200+",
    subtitle: "Pengguna Aktif",
    description: "Pengguna aktif setiap bulan yang terus bertambah",
    icon: FaUsers,
  },
  {
    title: "10+",
    subtitle: "Kategori Usaha",
    description: "Beragam kategori usaha kebutuhan kamu",
    icon: LuGrid2X2,
  },
];

export default function AboutPage() {
  return (
    <>
      <div className="mb-10">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbSeparator size={25} />
              <BreadcrumbLink asChild>
                <Link className="text-[1.375rem] font-semibold" href="/">Kembali</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator size={25} />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-[1.375rem] font-semibold" >About</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <section className="grid gap-8 lg:grid-cols-[1fr_1.12fr]">
        <div className="border-border flex flex-col justify-center rounded-[2rem] border p-10 lg:p-14">
          <h1 className="text-foreground mb-8 text-6xl font-bold leading-tight">
            Mendukung UMKM Lokal Lewat Solusi Digital
          </h1>

          <p className="text-muted-foreground mb-10 max-w-xl text-xl leading-relaxed">
            UFinder hadir untuk membantu masyarakat menemukan UMKM lokal
            terbaik dengan cara yang lebih mudah, cepat, dan modern.
            Kami percaya setiap usaha kecil punya potensi besar jika
            mendapatkan akses pelanggan yang tepat.
          </p>

          <button className="bg-primary hover:bg-primary/90 flex w-fit items-center gap-3 rounded-2xl px-7 py-4 text-lg font-semibold text-white transition-colors">
            Jelajahi Sekarang
            <FaArrowRight size={18} />
          </button>
        </div>

        <div className="border-border relative overflow-hidden rounded-[2rem] border p-8">
          <div className="relative h-full w-full">
            <Image
              src="/About.png"
              alt="About Illustration"
              fill
              className="rounded-[1.5rem] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-8 lg:grid-cols-[1fr_1.08fr]">
        <div className="border-border rounded-[2rem] border p-8 lg:p-10">
          <h2 className="text-primary mb-8 text-3xl font-bold">
            Kenapa Pilih UFinder?
          </h2>

          <div className="grid gap-5 md:grid-cols-3">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <article
                  key={reason.title}
                  className="bg-[#F7F8FA] grid grid-rows-3 items-center rounded-2xl p-6 text-center *:place-self-center "
                >
                  <div className="bg-primary/10 flex size-16 items-center justify-center rounded-full">
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
          <div className="grid h-full md:grid-cols-2 md:grid-rows-2">
            {statistics.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.title}
                  className={`border-border flex gap-5 p-8 ${index !== 1 ? "md:border-r" : ""
                    } ${index < 2 ? "md:border-b" : ""}`}
                >
                  <div className="bg-primary/10 flex size-18 shrink-0 items-center justify-center rounded-full">
                    <Icon className="text-primary" size={28} />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-foreground text-5xl font-bold">
                      {stat.title}
                    </h3>

                    <p className="text-foreground text-2xl font-semibold">
                      {stat.subtitle}
                    </p>

                    <p className="text-foreground text-lg wrap-break-word">
                      {stat.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}