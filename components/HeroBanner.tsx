"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import {
  FaLocationDot,
  FaBagShopping,
  FaWandMagicSparkles,
  FaShirt,
  FaStore,
  FaRobot,
  FaStar,
  FaChartSimple,
  FaShieldHalved,
  FaUsers,
} from "react-icons/fa6";
import { SiGooglemaps } from "react-icons/si";

export function HeroBanner() {

  const stats = [
    {
      icon: <FaUsers />,
      value: "64+ Juta",
      label: "UMKM di Indonesia",
    },
    {
      icon: <FaBagShopping />,
      value: "97%",
      label: "Tenaga Kerja Diserap",
    },
    {
      icon: <FaChartSimple />,
      value: "61,07%",
      label: "Kontribusi ke PDB",
    },
    {
      icon: <FaShieldHalved />,
      value: "Terpercaya",
      label: "Aman & Terverifikasi",
    },
  ];

  return (
    <section className="relative w-[80vw] mt-10">
      <div className="gap-14 lg:flex-row flex flex-col items-center justify-between w-full">
        {/* LEFT */}
        <div className="z-10 flex-1">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-3 mb-8 border border-primary/10 rounded-full shadow-foreground/20 bg-[#DFFCF0]">
            <span className="text-[#238660] md:text-base text-sm font-bold">
              Platform Digitalisasi UMKM Indonesia
            </span>
          </div>

          {/* Heading */}
          <h1 className="md:text-7xl text-3xl font-bold leading-[125%] text-foreground">
            Tumbuhkan UMKM Lebih Cepat dengan
            <span className="text-primary"> Data & AI </span>
          </h1>

          {/* Description */}
          <p className="text-foreground md:text-xl max-w-2xl mt-8 text-lg leading-relaxed">
            Bakool membantu UMKM memahami pelanggan,
            meningkatkan penjualan, dan mengembangkan
            bisnis melalui teknologi digital.
          </p>

          {/* Categories */}
          <div className="flex flex-wrap items-center gap-3 mt-10">
            <Link
              href={"/login"}
              className={`flex flex-row items-center gap-3 rounded-lg border border-border px-6 py-3 text-white font-semibold transition-all bg-primary md:text-base`}
            >
              <span className="*:size-6">
                Daftarkan UMKM Anda
              </span>
              <FaArrowRight />
            </Link>
            <Link
              href={"/login"}
              className={`flex flex-row items-center gap-3 rounded-lg border px-6 py-3 text-sm border-primary text-primary-foreground font-semibold transition-all md:text-base`}
            >
              <span className="*:size-6">
                Jelajahi UMKM
              </span>
              <SiGooglemaps />
            </Link>
          </div>

          {/* Features */}
          <div className="md:flex-row items-center flex flex-col gap-8 mt-12">
            <Image src={'/menungso.png'} alt="menungso" width={100} height={100} />
            <p className="text-foreground md:text-xl max-w-2xl text-lg leading-relaxed">
              Bergabung bersama ribuan UMKM lainnya</p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative xl:flex w-full flex-1 top-10 items-center justify-center  scale-125 hidden">
          <Image src={'/home-remove.png'} width={1000} height={1000} className="" alt="phone" />
        </div>
      </div>

      {/* Stats */}
      <div className="mx-auto mt-16 grid grid-cols-1 gap-6 rounded-[2rem] bg-background p-8 outline-1 outline-border md:grid-cols-2 lg:grid-cols-4">
        {stats.map((item, index) => (
          <div
            key={index}
            className="border-border last:border-none lg:border-r flex items-center gap-5"
          >
            <div className="size-16 bg-primary/2 text-primary flex items-center justify-center text-2xl rounded-full">
              {item.icon}
            </div>

            <div>
              <h4 className="text-primary text-2xl font-bold">
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