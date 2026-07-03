"use client";
import Image from "next/image";
import {
  LuSlidersHorizontal,
  LuChevronDown,
  LuStar,
  LuMessageSquare,
  LuSmile,
  LuFrown,
  LuMessageSquareOff,
  LuChevronLeft,
  LuChevronRight,
  LuEllipsisVertical,
  LuMessageSquareReply,
  LuPencil,
  LuSparkles,
  LuThumbsUp,
  LuLightbulb,
} from "react-icons/lu";
import { useState } from "react";

export default function UlasanPage() {
  const reviews = [
    {
      id: 1,
      name: "Siti Nurhaliza",
      avatar: "/ava1.png",
      verified: true,
      rating: 5,
      review:
        "Makanannya enak banget!, Nasi Ayam Geprek sambalnya nampol Pengiriman juga cepat dan packing rapi.",
      menu: ["Nasi Ayam Geprek", "Es Teh"],
      createdAt: "25 Mei 2025 • 19:45",
      replied: true,
      replyDate: "25 Mei 2025 • 20:10",
      reply:
        "Terima Kasih banyak kak Siti! Senang banget kalau kakak suka, Ditunggu orderannya lagi ya!",
    },
    {
      id: 2,
      name: "Budi Santoso",
      avatar: "/ava2.png",
      verified: true,
      rating: 5,
      review:
        "Makanannya enak banget!, Nasi Ayam Geprek sambalnya nampol Pengiriman juga cepat dan packing rapi.",
      menu: ["Nasi Ayam Geprek", "Es Teh"],
      createdAt: "25 Mei 2025 • 19:45",
      replied: true,
      replyDate: "25 Mei 2025 • 20:10",
      reply:
        "Terima Kasih banyak kak Siti! Senang banget kalau kakak suka, Ditunggu orderannya lagi ya!",
    },
    {
      id: 3,
      name: "Dimas Drajat",
      avatar: "/ava.png",
      verified: true,
      rating: 5,
      review:
        "Ayamnya agak alot dan nasi sedikit kurang hangat. Semoga bisa lebih baik lagi ya.",
      menu: ["Nasi Ayam Geprek", "Es Teh"],
      createdAt: "25 Mei 2025 • 19:45",
      replied: false,
    },
    {
      id: 4,
      name: "Rina Febriani",
      avatar: "/ava3.png",
      verified: true,
      rating: 5,
      review:
        "Ayamnya agak alot dan nasi sedikit kurang hangat. Semoga bisa lebih baik lagi ya.",
      menu: ["Nasi Ayam Geprek", "Es Teh"],
      createdAt: "25 Mei 2025 • 19:45",
      replied: false,
    },
    {
      id: 5,
      name: "Siti Aisyah",
      avatar: "/ava1.png",
      verified: true,
      rating: 5,
      review:
        "Ayamnya agak alot dan nasi sedikit kurang hangat. Semoga bisa lebih baik lagi ya.",
      menu: ["Nasi Ayam Geprek", "Es Teh"],
      createdAt: "25 Mei 2025 • 19:45",
      replied: false,
    },
  ];

  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("Semua Ulasan");

  const filteredReviews = reviews.filter((review) => {
    const keyword = search.toLowerCase();
    const matchesSearch =
      review.name.toLowerCase().includes(keyword) ||
      review.review.toLowerCase().includes(keyword) ||
      review.menu.some((item) => item.toLowerCase().includes(keyword));
    const matchesTab =
      activeTab === "Semua Ulasan" ||
      (activeTab === "Belum Dibalas" && !review.replied) ||
      (activeTab === "Ulasan Positif" && review.rating >= 4) ||
      (activeTab === "Ulasan Negatif" && review.rating <= 2);
    return matchesSearch && matchesTab;
  });

  const totalPages = Math.ceil(filteredReviews.length / itemsPerPage) || 1;
  const paginatedReviews = filteredReviews.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const tabs = [
    { key: "Semua Ulasan", label: "Semua Ulasan (124)" },
    { key: "Belum Dibalas", label: "Belum Dibalas (8)" },
    { key: "Ulasan Positif", label: "Ulasan Positif (115)" },
    { key: "Ulasan Negatif", label: "Ulasan Negatif (2)" },
  ];

  const stats = [
    {
      title: "Rating Rata-rata",
      value: "4.8 /5",
      growth: "12.3%",
      icon: LuStar,
      color: "bg-[#FFF4E5] text-[#F59E0B]",
    },
    {
      title: "Total Ulasan",
      value: "187",
      growth: "12.3%",
      icon: LuMessageSquare,
      color: "bg-[#F3E8FF] text-[#8B5CF6]",
    },
    {
      title: "Ulasan Positif",
      value: "162",
      growth: "12.3%",
      icon: LuSmile,
      color: "bg-[#E8F7EF] text-[#158A62]",
    },
    {
      title: "Ulasan Negatif",
      value: "25",
      growth: "12.3%",
      icon: LuFrown,
      color: "bg-[#FFF0F3] text-[#EF4444]",
    },
    {
      title: "Belum Dibalas",
      value: "8",
      growth: "12.3%",
      icon: LuMessageSquareOff,
      color: "bg-[#EAF2FF] text-[#2563EB]",
    },
  ];

  const ratingBreakdown = [
    { star: 5, count: 12 },
    { star: 4, count: 8 },
    { star: 3, count: 0 },
    { star: 2, count: 0 },
    { star: 1, count: 0 },
  ];
  const totalRatingCount = 20;

  const topProducts = [
    { name: "Nasi Ayam Geprek", rating: 4.8, count: 124, img: "/assets/umkm/makanan/dapurnona/ayamgeprek.jpeg" },
    { name: "Sambal Cumi", rating: 4.7, count: 89, img: "/assets/umkm/makanan/dapurnona/sambalcumi.jpeg" },
    { name: "Nasi Telur Dadar", rating: 4.6, count: 56, img: "/assets/umkm/makanan/dapurnona/nasitelurdadar.jpeg" },
    { name: "Es Ten Manis", rating: 4.6, count: 46, img: "/assets/umkm/makanan/dapurnona/esteh.jpeg" },
  ];

  return (
    <>
      {/* Top Stats Cards */}
      <div className="grid grid-cols-5 gap-4">
        {stats.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl border border-[#EAECF0] bg-white p-5"
          >
            <div className="flex items-start gap-4">
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${item.color}`}
              >
                <item.icon size={22} />
              </div>
              <div>
                <p className="text-[13px] font-medium text-[#667085]">
                  {item.title}
                </p>
                <h2 className="mt-1 text-[22px] font-bold leading-none text-[#101828]">
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

      {/* Tabs + Filter */}
      <div className="mt-6 flex items-center justify-between border-b border-[#EAECF0]">
        <div className="flex items-center gap-8">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => {
                setActiveTab(tab.key);
                setCurrentPage(1);
              }}
              className={`relative pb-3 text-[14px] font-semibold transition ${
                activeTab === tab.key
                  ? "text-[#158A62]"
                  : "text-[#667085] hover:text-[#101828]"
              }`}
            >
              {tab.label}
              {activeTab === tab.key && (
                <span className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-[#158A62]" />
              )}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3 pb-2">
          <button className="flex h-10 items-center gap-2 rounded-xl border border-[#D0D5DD] bg-white px-4 text-[13px] font-medium text-[#344054] transition hover:bg-[#F9FAFB]">
            <LuSlidersHorizontal size={16} />
            Filter
          </button>
          <button className="flex h-10 items-center gap-2 rounded-xl border border-[#D0D5DD] bg-white px-4 text-[13px] font-medium text-[#344054] transition hover:bg-[#F9FAFB]">
            Terbaru
            <LuChevronDown size={16} />
          </button>
        </div>
      </div>

      {/* Main content: reviews (left) + sidebar (right) */}
      <div className="mt-6 grid grid-cols-[2.6fr_1fr] gap-6">
        {/* LEFT: review list + pagination */}
        <div>
          <div className="space-y-4">
            {paginatedReviews.map((review) => (
              <div
                key={review.id}
                className="rounded-2xl border border-[#EAECF0] bg-white p-5"
              >
                <div className="flex justify-between gap-4">
                  {/* LEFT side of card */}
                  <div className="flex gap-4">
                    <Image
                      src={review.avatar}
                      alt={review.name}
                      width={48}
                      height={48}
                      className="h-12 w-12 shrink-0 rounded-full object-cover"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-[16px] font-semibold text-[#101828]">
                          {review.name}
                        </h3>
                        {review.verified && (
                          <span className="rounded-full bg-[#E8F7EF] px-2.5 py-0.5 text-[11px] font-medium text-[#158A62]">
                            Verified
                          </span>
                        )}
                      </div>
                      <div className="mt-1 flex items-center gap-2">
                        <div className="flex gap-0.5">
                          {Array.from({ length: review.rating }).map(
                            (_, index) => (
                              <LuStar
                                key={index}
                                className="fill-[#F59E0B] text-[#F59E0B]"
                                size={14}
                              />
                            )
                          )}
                        </div>
                        <span className="text-[13px] text-[#344054]">
                          {review.rating}.0
                        </span>
                      </div>
                      <p className="mt-2 max-w-[520px] text-[14px] leading-6 text-[#344054]">
                        {review.review}
                      </p>
                      <div className="mt-3 flex flex-wrap items-center gap-2">
                        {review.menu.map((item) => (
                          <span
                            key={item}
                            className="rounded-full bg-[#F2F4F7] px-2.5 py-0.5 text-[11px] text-[#667085]"
                          >
                            {item}
                          </span>
                        ))}
                        <span className="text-[11px] text-[#98A2B3]">
                          • {review.createdAt}
                        </span>
                      </div>

                      {review.replied && (
                        <div className="mt-4 rounded-xl bg-[#F9FAFB] p-4">
                          <p className="text-[13px] font-semibold text-[#101828]">
                            Balasan Anda:
                          </p>
                          <div className="mt-2 flex items-start justify-between gap-6">
                            <p className="text-[13px] text-[#667085]">
                              {review.reply}
                            </p>
                            <div className="flex shrink-0 items-center gap-3 text-[11px] text-[#98A2B3]">
                              <span>{review.replyDate}</span>
                              <button>
                                <LuPencil size={14} />
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* RIGHT side of card */}
                  <div className="flex shrink-0 flex-col items-end gap-3">
                    <div className="flex items-center gap-2">
                      <span
                        className={`rounded-lg px-3 py-1.5 text-[12px] font-medium ${
                          review.replied
                            ? "bg-[#E8F7EF] text-[#158A62]"
                            : "bg-[#FFF4E5] text-[#F59E0B]"
                        }`}
                      >
                        {review.replied ? "Dibalas" : "Belum Dibalas"}
                      </span>
                      <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#EAECF0]">
                        <LuEllipsisVertical size={16} />
                      </button>
                    </div>
                    <span className="text-[11px] text-[#98A2B3]">
                      25 Mei 2025
                    </span>
                    {!review.replied && (
                      <button className="mt-2 flex h-9 items-center gap-2 rounded-lg border border-[#D0D5DD] px-4 text-[13px] font-medium text-[#158A62]">
                        <LuMessageSquareReply size={15} />
                        Balas Ulasan
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-5 flex items-center justify-between">
            <p className="text-[13px] text-[#667085]">
              Menampilkan{" "}
              <span className="font-medium">
                {filteredReviews.length === 0
                  ? 0
                  : (currentPage - 1) * itemsPerPage + 1}
              </span>{" "}
              -{" "}
              <span className="font-medium">
                {Math.min(currentPage * itemsPerPage, filteredReviews.length)}
              </span>{" "}
              dari{" "}
              <span className="font-medium">{filteredReviews.length}</span>{" "}
              ulasan
            </p>
            <div className="flex items-center gap-2">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => p - 1)}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#D0D5DD] disabled:cursor-not-allowed disabled:opacity-40"
              >
                <LuChevronLeft size={16} />
              </button>
              {Array.from({ length: totalPages }).map((_, index) => {
                const page = index + 1;
                return (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`flex h-9 w-9 items-center justify-center rounded-lg text-[13px] font-semibold transition ${
                      currentPage === page
                        ? "bg-[#158A62] text-white"
                        : "border border-[#D0D5DD] text-[#344054] hover:bg-[#F9FAFB]"
                    }`}
                  >
                    {page}
                  </button>
                );
              })}
              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => p + 1)}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#D0D5DD] disabled:cursor-not-allowed disabled:opacity-40"
              >
                <LuChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT: sidebar */}
        <div className="space-y-5">
          {/* Ringkasan Rating */}
          <div className="rounded-2xl border border-[#EAECF0] bg-white p-5">
            <h3 className="text-[15px] font-semibold text-[#101828]">
              Ringkasan Rating
            </h3>
            <div className="mt-4 flex items-center gap-3">
              <span className="text-[30px] font-bold text-[#101828]">
                4.8
              </span>
              <span className="text-[15px] text-[#667085]">/ 5</span>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <LuStar
                    key={i}
                    className="fill-[#F59E0B] text-[#F59E0B]"
                    size={16}
                  />
                ))}
              </div>
            </div>
            <p className="text-[12px] text-[#98A2B3]">
              ({totalRatingCount} ulasan)
            </p>
            <div className="mt-4 space-y-2">
              {ratingBreakdown.map((r) => (
                <div key={r.star} className="flex items-center gap-2">
                  <span className="flex w-4 items-center gap-1 text-[12px] text-[#344054]">
                    {r.star}
                  </span>
                  <LuStar className="fill-[#F59E0B] text-[#F59E0B]" size={12} />
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#F2F4F7]">
                    <div
                      className="h-full rounded-full bg-[#158A62]"
                      style={{
                        width: `${(r.count / totalRatingCount) * 100}%`,
                      }}
                    />
                  </div>
                  <span className="w-4 text-right text-[12px] text-[#667085]">
                    {r.count}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Top Produk Diulas */}
          <div className="rounded-2xl border border-[#EAECF0] bg-white p-5">
            <h3 className="text-[15px] font-semibold text-[#101828]">
              Top Produk Diulas
            </h3>
            <div className="mt-4 space-y-4">
              {topProducts.map((p, i) => (
                <div key={p.name} className="flex items-center gap-3">
                  <span className="text-[13px] font-medium text-[#98A2B3]">
                    {i + 1}
                  </span>
                  <Image
                    src={p.img}
                    alt={p.name}
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-lg object-cover"
                  />
                  <div>
                    <p className="text-[13px] font-medium text-[#101828]">
                      {p.name}
                    </p>
                    <p className="text-[12px] text-[#667085]">
                      {p.rating} ({p.count} ulasan)
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-4 flex h-10 w-full items-center justify-center rounded-xl border border-[#D0D5DD] text-[13px] font-medium text-[#344054] transition hover:bg-[#F9FAFB]">
              Lihat Semua Produk
            </button>
          </div>

          {/* Insight Ulasan */}
          <div className="rounded-2xl border border-[#EAECF0] bg-white p-5">
            <h3 className="text-[15px] font-semibold text-[#101828]">
              Insight Ulasan
            </h3>
            <div className="mt-4 space-y-3">
              <div className="flex items-start gap-3 rounded-xl bg-[#F9FAFB] p-3">
                <LuThumbsUp className="mt-0.5 text-[#158A62]" size={18} />
                <p className="text-[13px] text-[#344054]">
                  Pelanggan paling suka dengan rasa, makanan dan kecepatan
                  pengiriman.
                </p>
              </div>
              <div className="flex items-start gap-3 rounded-xl bg-[#FFFBEB] p-3">
                <LuLightbulb className="mt-0.5 text-[#F59E0B]" size={18} />
                <p className="text-[13px] text-[#344054]">
                  Beberapa pelanggan berharap sambal lebih pedas dan ayam
                  lebih empuk.
                </p>
              </div>
            </div>
            <button className="mt-4 flex h-10 w-full items-center justify-center gap-2 rounded-xl border border-[#158A62] text-[13px] font-semibold text-[#158A62] transition hover:bg-[#E8F7EF]">
              Lihat Rekomendasi AI
              <LuSparkles size={16} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}