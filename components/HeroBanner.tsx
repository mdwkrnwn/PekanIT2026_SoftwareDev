"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaCircleArrowRight,
  FaHeart,
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

export function HeroBanner() {
  const categories = [
    {
      label: "Semua",
      icon: <FaStore />,
      active: true,
    },
    {
      label: "Toko Kelontong",
      icon: <FaBagShopping />,
    },
    {
      label: "Jasa",
      icon: <FaWandMagicSparkles />,
    },
    {
      label: "Fashion",
      icon: <FaShirt />,
    },
  ];

  const features = [
    {
      icon: <FaLocationDot />,
      title: "Temukan UMKM",
      desc: "terdekat dari lokasimu",
    },
    {
      icon: <FaRobot />,
      title: "Rekomendasi pintar",
      desc: "sesuai kebutuhanmu",
    },
    {
      icon: <FaStar />,
      title: "Dukung lokal,",
      desc: "bangun ekonomi kita",
    },
  ];

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
    <section className="relative w-[86vw] mt-10">
      <div className="flex w-full flex-col items-center justify-between gap-14 lg:flex-row">
        {/* LEFT */}
        <div className="z-10 flex-1">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-blue-100 bg-white px-5 py-3 shadow-sm">
            <div className="flex size-8 items-center justify-center rounded-full bg-blue-100 text-primary">
              <FaHeart />
            </div>

            <span className="text-sm font-medium text-slate-700 md:text-base">
              Dukung Lokal, Bangun Negeri
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl font-bold tracking-tight text-black md:text-7xl">
            Cari UMKM keren,
            <span className="text-primary"> dukung lokal</span> bareng!
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-500 md:text-xl">
            Dari usaha rumahan sampai produk lokal favorit banyak orang,
            semua ada di UFinder dan temukan dengan lebih mudah di sini.
          </p>

          {/* Categories */}
          <div className="mt-10 flex flex-wrap items-center gap-6">
            {categories.map((item) => (
              <a
                href="merchant"
                key={item.label}
                className={`flex items-center gap-3 rounded-full border px-6 py-3 text-sm font-semibold transition-all md:text-base ${item.active
                  ? "border-primary bg-primary text-white"
                  : "border-border bg-white text-primary hover:border-primary hover:text-primary"
                  }`}
              >
                <span className="*:size-6">
                  {item.icon}
                </span>
                {item.label}
              </a>
            ))}
          </div>

          {/* Features */}
          <div className="mt-12 flex flex-col gap-8 md:flex-row md:items-start">
            {features.map((item) => (
              <div key={item.title} className={cn("flex items-start gap-4 border-r-2 border-border border-solid last:border-none"
              )}>
                <div className="flex *:size-10 size-18 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary shadow-md">
                  {item.icon}
                </div>

                <div>
                  <h4 className="font-semibold text-slate-800">
                    {item.title}
                  </h4>

                  <p className="mt-1 text-sm leading-relaxed text-black">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="w-full bg-linear-to-t to-secondary from-secondary-foreground text-white rounded-[2rem] px-12 flex sm:flex-col lg:flex-row items-center justify-between mt-12 overflow-hidden shadow-lg gap-4 relative *:sm:w-full">
            <div className="md:block size-auto relative z-10 hidden">
              <Image src="/home.png" height={500} width={500} className="w-80 h-fit object-cover" alt="Hero Background" />
            </div>
            <div className="md:w-full z-10 w-full h-full">
              <h2 className="mb-6  text-2xl font-semibold leading-tight">Belanja Lokal, Untungnya <br /> Double Buat Kamu <br /> dan UMKM!</h2>
              <button className="hover:bg-slate-100 text-primary flex items-center justify-center gap-4 px-6 py-3 font-bold text-lg md:text-[1.25rem] transition-colors bg-white rounded-full ">
                <Link href={'/explore'}>
                  Eksplor Sekarang
                </Link>
                <FaCircleArrowRight className="size-8" size={25} />
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative flex w-full flex-1 items-center justify-center">
          <Image src={'/home2.png'} width={1000} height={1000} alt="phone" />
        </div>
      </div>

      {/* Stats */}
      <div className="mx-auto mt-16 grid grid-cols-1 gap-6 rounded-[2rem] bg-white p-8 shadow-xl md:grid-cols-2 lg:grid-cols-4">
        {stats.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-5 border-border last:border-none lg:border-r"
          >
            <div className="flex size-16 items-center justify-center rounded-full bg-blue-50 text-2xl text-primary">
              {item.icon}
            </div>

            <div>
              <h4 className="text-2xl font-bold text-primary">
                {item.value}
              </h4>

              <p className="mt-1 text-slate-500">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}