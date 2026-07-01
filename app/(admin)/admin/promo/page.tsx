"use client";
import Image from "next/image";
import {
  LuEye,
  LuPlus,
  LuTag,
  LuSearch,
  LuFilter,
  LuMessageSquareMore,
  LuMapPin,
  LuChevronLeft,
  LuSparkles,
  LuLightbulb,
  LuChevronRight,
  LuEllipsisVertical,
} from "react-icons/lu";
import { useState } from "react";
import { HiChartBar } from "react-icons/hi";

import { IoChevronDown } from "react-icons/io5";

export default function PromoPage() {
  const [activeCategory, setActiveCategory] = useState("Semua Promo");

  const promos = [
    {
      id: 1,
      title: "Paket Hemat Siang",
      description: "Diskon 20% untuk semua paket makan siang",
      image: "/paket1.png",
      period: "20 Mei 2026 - 30 Mei 2026",
      schedule: "Setiap hari • 11.00 - 14.00",
      promoType: "Diskon",
      target: "Semua Pelanggan",
      status: "Aktif",
      views: 28,
    },
    {
      id: 2,
      title: "Gratis Ongkir Min.30K",
      description: "Gratis ongkir untuk pembelian minimal 30K",
      image: "/paket2.png",
      period: "20 Mei 2026 - 30 Mei 2026",
      schedule: "Setiap hari • 11.00 - 14.00",
      promoType: "Diskon",
      target: "Semua Pelanggan",
      status: "Aktif",
      views: 28,
    },
    {
      id: 3,
      title: "Diskon 15% Menu Pilihan",
      description: "Diskon 15% untuk menu pilihan",
      image: "/paket3.png",
      period: "20 Mei 2026 - 30 Mei 2026",
      schedule: "Setiap hari • 11.00 - 14.00",
      promoType: "Diskon",
      target: "Semua Pelanggan",
      status: "Akan Datang",
      views: 28,
    },
    {
      id: 4,
      title: "Buy 1 Get 1 Es Teh Manis",
      description: "Beli 1 Es Teh Manis, Gratis 1 Es Teh Manis",
      image: "/paket4.png",
      period: "20 Mei 2026 - 30 Mei 2026",
      schedule: "Setiap hari • 11.00 - 14.00",
      promoType: "Diskon",
      target: "Semua Pelanggan",
      status: "Aktif",
      views: 28,
    },
    {
      id: 5,
      title: "Happy Weekend",
      description: "Diskon 20% untuk semua paket makan siang",
      image: "/paket5.png",
      period: "20 Mei 2026 - 30 Mei 2026",
      schedule: "Setiap hari • 11.00 - 14.00",
      promoType: "Diskon",
      target: "Semua Pelanggan",
      status: "Selesai",
      views: 28,
    },
    {
      id: 6,
      title: "Hemat Maksimal",
      description: "Nikmati cashback 25% hingga maksimal Rp20.000.",
      image: "/paket6.png",
      period: "20 Mei 2026 - 30 Mei 2026",
      schedule: "Setiap hari • 11.00 - 14.00",
      promoType: "Diskon",
      target: "Semua Pelanggan",
      status: "Selesai",
      views: 28,
    },
  ];

  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const filteredPromos = promos.filter((promo) => {
    const matchCategory =
      activeCategory === "Semua Promo" || promo.status === activeCategory;

    const keyword = search.toLowerCase();

    const matchSearch =
      promo.title.toLowerCase().includes(keyword) ||
      promo.description.toLowerCase().includes(keyword) ||
      promo.target.toLowerCase().includes(keyword) ||
      promo.promoType.toLowerCase().includes(keyword);

    return matchCategory && matchSearch;
  });
  const totalPages = Math.ceil(filteredPromos.length / itemsPerPage);

  const paginatedPromos = filteredPromos.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );
  const categories = [
    {
      name: "Semua Promo",
      count: promos.length,
    },
    ...Array.from(new Set(promos.map((promo) => promo.status))).map(
      (status) => ({
        name: status,
        count: promos.filter((promo) => promo.status === status).length,
      }),
    ),
  ];
  const stats = [
    {
      title: "Total Promo",
      value: "1.240",
      growth: "+12.3%",
      icon: LuTag,
      color: "bg-[#E8F7EF] text-[#158A62]",
    },
    {
      title: "Total Dilihat",
      value: "187",
      growth: "+12.3%",
      icon: LuEye,
      color: "bg-[#FFF0F3] text-[#E11D48]",
    },
    {
      title: "Total Interaksi",
      value: "112",
      growth: "+12.3%",
      icon: LuMessageSquareMore,
      color: "bg-[#FFF4E5] text-[#F97316]",
    },
    {
      title: "Klik ke Maps dari Promo",
      value: "45",
      growth: "+12.3%",
      icon: LuMapPin,
      color: "bg-[#EAF2FF] text-[#2563EB]",
    },
    {
      title: "Promo Aktif",
      value: "312",
      growth: "+12.3%",
      icon: LuTag,
      color: "bg-[#EAF2FF] text-[#2563EB]",
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-8">
        {/* Top Stats Cards */}
        <div className="grid grid-cols-5 gap-4">
          {stats.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-[#EAECF0] bg-white p-5"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`flex h-15 w-15 shrink-0 items-center justify-center rounded-xl ${item.color}`}
                >
                  <item.icon size={30} />
                </div>

                <div>
                  <p className="text-[14px] font-medium text-[#344054]">
                    {item.title}
                  </p>

                  <h2 className="mt-1 text-[30px] font-bold leading-none text-[#101828]">
                    {item.value}
                  </h2>

                  <div className="mt-2 flex items-center gap-1 text-[12px]">
                    <span className="font-semibold text-[#16A34A]">
                      ▲ {item.growth}
                    </span>

                    <span className="text-[#667085]">dari minggu lalu</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between mt-8">
        {/* Left */}
        <div className="flex items-center gap-8">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`relative pb-3 text-[15px] transition ${activeCategory === category.name
                ? "font-semibold text-[#158A62]"
                : "font-medium text-[#667085] hover:text-[#101828]"
                }`}
            >
              {category.name} ({category.count})
              {activeCategory === category.name && (
                <span className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-[#158A62]" />
              )}
            </button>
          ))}
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          {/* Search */}
          <div className="relative">
            <LuSearch
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#98A2B3]"
              size={18}
            />
            <input
              type="text"
              placeholder="Cari Promo..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-11 w-[220px] rounded-xl border border-[#D0D5DD] pl-10 pr-4 text-[14px] outline-none focus:border-[#158A62]"
            />
          </div>

          {/* Filter */}
          <button className="flex h-11 items-center gap-2 rounded-xl border border-[#D0D5DD] px-4 text-[14px] font-medium text-[#344054] transition hover:bg-[#F9FAFB]">
            <LuFilter size={16} />
            Filter
          </button>

          {/* Add Product */}
          <button className="flex h-11 items-center gap-2 rounded-xl bg-[#158A62] px-6 text-[14px] font-semibold text-white transition hover:bg-[#127553]">
            <LuPlus size={18} />
            Tambah Promo
          </button>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-[2.8fr_1fr] gap-6">
        <div>
          <div className="grid grid-cols-[420px_150px_110px_120px_110px_70px_60px] border-b border-[#EAECF0] bg-[#FCFCFD] px-6 py-4 text-[15px] font-semibold text-[#667085]">
            <p>Promo</p>
            <p>Periode</p>
            <p>Jenis Promo</p>
            <p>Target</p>
            <p>Status</p>
            <p>Dilihat</p>
            <p className="text-center">Aksi</p>
          </div>

          {paginatedPromos.map((promo) => (
            <div
              key={promo.id}
              className="grid grid-cols-[420px_150px_110px_120px_110px_70px_60px] items-center border-b border-[#EAECF0] px-6 py-5 last:border-none"
            >
              {/* Promo */}
              <div className="flex items-start gap-4">
                <div className="h-[90px] w-[160px] shrink-0 overflow-hidden rounded">
                  <Image
                    src={promo.image}
                    alt={promo.title}
                    width={160}
                    height={90}
                    className="object-cover w-full h-full"
                  />
                </div>

                <div>
                  <h3 className="text-[16px] font-semibold text-[#101828]">
                    {promo.title}
                  </h3>

                  <p className="mt-2 text-[12px] text-[#667085]">
                    {promo.description}
                  </p>

                  <div className="mt-2 space-y-1 text-[12px] text-[#667085]">
                    <p>📅 {promo.period}</p>
                    <p>{promo.schedule}</p>
                  </div>
                </div>
              </div>

              {/* Periode */}
              <p className="text-[13px] text-[#475467] leading-6">
                {promo.period.replace(" - ", " -\n")}
              </p>

              {/* Jenis Promo */}
              <p className="text-[14px] text-[#475467]">{promo.promoType}</p>

              {/* Target */}
              <p className="text-[14px] text-[#475467] leading-6">
                {promo.target}
              </p>

              {/* Status */}
              <div>
                <span
                  className={`rounded-full px-3 py-1 text-[12px] font-semibold ${promo.status === "Aktif"
                    ? "bg-[#E8F7EF] text-[#158A62]"
                    : promo.status === "Akan Datang"
                      ? "bg-[#EEF4FF] text-[#2563EB]"
                      : "bg-[#F2F4F7] text-[#667085]"
                    }`}
                >
                  {promo.status}
                </span>
              </div>

              {/* Dilihat */}
              <p className="text-center text-[15px] text-[#344054]">
                {promo.views}
              </p>

              {/* Aksi */}
              <div className="flex justify-center">
                <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#EAECF0] hover:bg-[#F9FAFB]">
                  <LuEllipsisVertical size={16} className="text-[#667085]" />
                </button>
              </div>
            </div>
          ))}
          <div className="flex items-center justify-between mt-5">
            <p className="text-[14px] text-[#667085]">
              Menampilkan{" "}
              <span className="font-medium">
                {(currentPage - 1) * itemsPerPage + 1}
              </span>{" "}
              –
              <span className="font-medium">
                {" "}
                {Math.min(currentPage * itemsPerPage, filteredPromos.length)}
              </span>{" "}
              dari <span className="font-medium">{filteredPromos.length}</span>{" "}
              produk
            </p>

            <div className="flex items-center gap-2">
              {/* Prev */}
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => p - 1)}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#D0D5DD] disabled:cursor-not-allowed disabled:opacity-40"
              >
                <LuChevronLeft size={18} />
              </button>

              {/* Page Number */}
              {Array.from({ length: totalPages }).map((_, index) => {
                const page = index + 1;

                return (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`flex h-10 w-10 items-center justify-center rounded-lg font-semibold transition ${currentPage === page
                      ? "bg-[#158A62] text-white"
                      : "border border-[#D0D5DD] text-[#344054] hover:bg-[#F9FAFB]"
                      }`}
                  >
                    {page}
                  </button>
                );
              })}

              {/* Next */}
              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => p + 1)}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#D0D5DD] disabled:cursor-not-allowed disabled:opacity-40"
              >
                <LuChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
        <div className="space-y-5">
          {/* Performa Promo */}
          <div className="rounded-2xl border border-[#EAECF0] bg-white p-5">
            <div className="flex items-center justify-between">
              <h3 className="text-[19px] font-semibold text-[#101828]">
                Performa Promo
              </h3>

              <button className="rounded-lg border border-[#D0D5DD] px-3 py-2 text-[13px] text-[#344054]">
                7 hari Terakhir
              </button>
            </div>

            <p className="mt-6 text-[18px] font-semibold text-[#101828]">
              Total Dilihat
            </p>

            <h2 className="mt-1 text-[33px] font-bold text-[#101828]">1.240</h2>

            <div className="mt-2 flex items-center gap-1 text-[13px]">
              <span className="font-semibold text-[#158A62]">▲ 18.5%</span>

              <span className="text-[#667085]">dari minggu lalu</span>
            </div>

            <div className="mt-5">
              <Image
                src="/chartpromo.png"
                alt="Performa Promo"
                width={400}
                height={220}
                className="object-contain w-full"
              />
            </div>
          </div>

          {/* Sumber Interaksi */}
          <div className="rounded-2xl border border-[#EAECF0] bg-white p-5">
            <h3 className="mb-5 text-[15px] font-semibold text-[#101828]">
              Sumber Interaksi Promo
            </h3>

            <Image
              src="/donut.png"
              alt="Donut"
              width={400}
              height={180}
              className="object-contain w-full"
            />
          </div>

          {/* Promo Terbaik */}

          {/* Tips */}
          <div className="rounded-2xl border border-[#EAECF0] bg-white p-5">
            <div className="flex items-center gap-2">
              <LuLightbulb className="text-[#F59E0B]" size={20} />

              <h3 className="text-[22px] font-semibold text-[#101828]">
                Tips Menarik
              </h3>
            </div>

            <p className="mt-4 text-[15px] leading-7 text-[#344054]">
              Gunakan promo di jam ramai <b>(11.00 – 13.00 & 17.00 – 20.00)</b>{" "}
              untuk hasil maksimal!
            </p>

            <button className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-[#158A62] font-semibold text-[#158A62] transition hover:bg-[#E8F7EF]">
              Lihat Rekomendasi AI
              <LuSparkles size={18} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
