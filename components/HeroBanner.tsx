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
      <div className="gap-14 lg:flex-row flex flex-col items-center justify-between w-full">
        {/* LEFT */}
        <div className="z-10 flex-1">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-3 mb-8 bg-white border border-blue-100 rounded-full shadow-sm">
            <div className="size-8 text-primary flex items-center justify-center bg-blue-100 rounded-full">
              <FaHeart />
            </div>

            <span className="text-slate-700 md:text-base text-sm font-medium">
              Dukung Lokal, Bangun Negeri
            </span>
          </div>

          {/* Heading */}
          <h1 className="md:text-7xl text-3xl font-bold tracking-tight text-black">
            Cari UMKM keren,
            <span className="text-primary"> dukung lokal</span> bareng!
          </h1>

          {/* Description */}
          <p className="text-slate-500 md:text-xl max-w-2xl mt-8 text-lg leading-relaxed">
            Dari usaha rumahan sampai produk lokal favorit banyak orang,
            semua ada di UFinder dan temukan dengan lebih mudah di sini.
          </p>

          {/* Categories */}
          <div className="flex flex-wrap items-center gap-6 mt-10">
            {categories.map((item) => (
              <Link
                href={"merchant?category=" + item.label.replace(" ", "+")}
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
              </Link>
            ))}
          </div>

          {/* Features */}
          <div className="md:flex-row md:items-start flex flex-col gap-8 mt-12">
            {features.map((item) => (
              <div key={item.title} className={cn("flex items-start gap-4"
              )}>
                <div className="flex *:size-10 size-18 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary shadow-md">
                  {item.icon}
                </div>

                <div>
                  <h4 className="text-slate-800 font-semibold">
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
          <div className="w-full bg-linear-to-t to-secondary from-secondary-foreground py-4 text-white rounded-[2rem] px-12 flex sm:flex-col md:flex-row lg:flex-row items-center justify-between mt-12 overflow-hidden shadow-lg gap-4 relative *:sm:w-full">
            <div className="md:block size-auto relative z-10 hidden">
              <Image src="/home.png" height={500} width={500} className="w-80 h-fit object-cover" alt="Hero Background" />
            </div>
            <div className="z-10 w-full h-full">
              <h2 className="mb-6 text-2xl font-semibold leading-tight">Belanja Lokal, Untungnya Double Buat Kamu dan UMKM!</h2>
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
        <div className="relative xl:flex w-full flex-1 top-15 items-center justify-center mask-[linear-gradient(to_top,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_15%,rgba(0,0,0,1)_30%,rgba(0,0,0,1)_100%)] scale-125 hidden">
          <Image src={'/home2.png'} width={1000} height={1000} className="" alt="phone" />
        </div>
      </div>

      {/* Stats */}
      <div className="mx-auto mt-16 grid grid-cols-1 gap-6 rounded-[2rem] bg-white p-8 outline-1 outline-border md:grid-cols-2 lg:grid-cols-4">
        {stats.map((item, index) => (
          <div
            key={index}
            className="border-border last:border-none lg:border-r flex items-center gap-5"
          >
            <div className="size-16 bg-blue-50 text-primary flex items-center justify-center text-2xl rounded-full">
              {item.icon}
            </div>

            <div>
              <h4 className="text-primary text-2xl font-bold">
                {item.value}
              </h4>

              <p className="text-slate-500 mt-1">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}