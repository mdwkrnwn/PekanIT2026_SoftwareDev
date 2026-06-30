"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { FaUser, FaComments, FaStar, FaChartSimple } from "react-icons/fa6";
import { User, MessageSquareMore, Star, ChartColumn } from "lucide-react";
import { SiGooglemaps } from "react-icons/si";

export function HeroBanner() {
  const stats = [
    {
      icon: <FaUser size={36} />,
      value: "5.000+",
      label: "UMKM terdaftar",
    },
    {
      icon: <FaComments size={36} />,
      value: "150.000",
      label: "Interaksi Pelanggan",
    },
    {
      icon: <FaStar size={36} />,
      value: "10.000+",
      label: "Review Terverifikasi",
    },
    {
      icon: <FaChartSimple size={36} />,
      value: "85%",
      label: "UMKM Aktif Setiap Bulan",
    },
  ];

  return (
    <section className="relative w-[80vw] mt-15">
      <div className="gap-14 lg:flex-row flex flex-col items-center justify-between w-full">
        {/* LEFT */}
        <div className="z-10 flex-1">
          {/* Badge */}
          <div className="inline-flex items-center  px-5 py-3 mb-3 bg-[#D9F5EC] rounded-full shadow-foreground/20">
            <span className="text-primary-foreground md:text-base text-sm font-bold">
              Platform Digitalisasi UMKM Indonesia
            </span>
          </div>

          {/* Heading */}
          <h1 className="md:text-7xl text-3xl font-bold leading-[125%] text-foreground">
            Tumbuhkan UMKM Lebih Cepat dengan
            <span className="text-primary-foreground"> Data & AI </span>
          </h1>

          {/* Description */}
          <p className="text-foreground md:text-xl max-w-2xl mt-8 text-lg leading-relaxed">
            Bakool membantu UMKM memahami pelanggan, meningkatkan penjualan, dan
            mengembangkan bisnis melalui teknologi digital.
          </p>

          {/* Categories */}
          <div className="flex flex-wrap items-center gap-3 mt-10">
            <Link
              href={"/login"}
              className={`flex flex-row items-center gap-3 rounded-lg border border-border px-6 py-3 text-white font-semibold transition-all bg-primary md:text-base`}
            >
              <span className="*:size-6">Daftarkan UMKM Anda</span>
              <FaArrowRight />
            </Link>
            <Link
              href={"/login"}
              className={`flex flex-row items-center gap-3 rounded-lg border px-6 py-3 text-sm border-primary text-primary-foreground font-semibold transition-all md:text-base`}
            >
              <span className="*:size-6">Jelajahi UMKM</span>
              <SiGooglemaps />
            </Link>
          </div>

          {/* Features */}
          <div className="md:flex-row items-center flex flex-col gap-8 mt-12">
            <Image
              src={"/menungso.png"}
              alt="menungso"
              width={100}
              height={100}
            />
            <p className="text-foreground md:text-xl max-w-2xl text-lg leading-relaxed">
              Bergabung bersama ribuan UMKM lainnya
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative xl:flex w-full flex-1 top-10 items-center justify-center  scale-125 hidden">
          <Image
            src={"/home-remove.png"}
            width={1000}
            height={1000}
            className=""
            alt="phone"
          />
        </div>
      </div>

      {/* Stats */}
      <div className="mx-auto mt-20 grid grid-cols-1 gap-6 rounded-[2rem] bg-background p-8 outline-2 outline-[#EEF0F2] md:grid-cols-2 lg:grid-cols-4">
        {stats.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-5 pr-8 lg:border-r lg:border-[#EEF0F2] last:lg:border-r-0"
          >
            <div className="flex size-20 items-center justify-center rounded-full bg-[#EEFBF5] text-primary-foreground">
              {item.icon}
            </div>

            <div>
              <h4 className="text-foreground text-2xl font-bold">
                {item.value}
              </h4>
              <p className="text-foreground/80 mt-1">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
