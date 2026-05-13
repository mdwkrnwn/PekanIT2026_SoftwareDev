"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { useState, useMemo, useEffect } from "react";
import { UMKM } from "@/data/UMKM.dummy";
import {
  FaHeart,
  FaMapMarkerAlt,
  FaStar,
  FaRegThumbsUp,
  FaRegThumbsDown,
} from "react-icons/fa";
import { addToWishlist, getWishlist, removeFromWishlist } from "@/lib/wishlist";
import Swal from "sweetalert2";
import { FaRegClock } from "react-icons/fa6";
import { LuMapPin } from "react-icons/lu";
import { MdOutlineFoodBank, MdAttachMoney, MdVerified } from "react-icons/md";
import { cn } from "@/lib/utils";
import { categoryBadgeColor } from "@/lib/mockData";

export default function ProductPage() {
  const router = useRouter();
  const { id } = useParams();
  const umkmId = Number(id);

  const product = useMemo(() => UMKM.find((u) => u.id === umkmId), [umkmId]);
  const [mainImage, setMainImage] = useState(
    product?.gallery?.[0] || product?.image,
  );
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [tab, setTab] = useState("reviews");

  const [likes, setLikes] = useState<Record<number, number>>({});
  const [dislikes, setDislikes] = useState<Record<number, number>>({});
  const [locked, setLocked] = useState<Record<number, boolean>>({});

  const [discussion, setDiscussion] = useState<DiscussionItem[]>(() =>
    (product?.discussion ?? []).map((d) => ({
      ...d,
      replies: Array.isArray(d.replies) ? d.replies : [],
    })),
  );

  const [replyTarget, setReplyTarget] = useState<number | null>(null);
  const [replyText, setReplyText] = useState("");
  const [replyName, setReplyName] = useState("");

  const [newComment, setNewComment] = useState({ name: "", comment: "" });

  useEffect(() => {
    const ids = getWishlist();
    setWishlist(ids);
  }, []);

  const toggleWishlist = (id: number, name: string) => {
    const isInWishlist = wishlist.includes(id);
    if (isInWishlist) {
      removeFromWishlist(id);
      setWishlist((prev) => prev.filter((x) => x !== id));
      Swal.fire({
        icon: "error",
        title: "Dihapus!",
        text: `${name} dihapus dari wishlist 💔`,
        timer: 1500,
        showConfirmButton: false,
        position: "top-end",
        toast: true,
        background: "#fef2f2",
        color: "#991b1b",
      });
    } else {
      addToWishlist(id);
      setWishlist((prev) => [...prev, id]);
      Swal.fire({
        icon: "success",
        title: "Ditambahkan!",
        text: `${name} berhasil ditambahkan ke wishlist ❤️`,
        timer: 1500,
        showConfirmButton: false,
        position: "top-end",
        toast: true,
        background: "#f0fdf4",
        color: "#065f46",
      });
    }
  };

  //   Filter UMKM serupa berdasarkan kategori produk saat ini + pencarian
  const filtered = useMemo(() => {
    if (!product) return [] as typeof UMKM;
    const base = UMKM.filter(
      (u) => u.category === product.category && u.id !== product.id,
    );
    return base.filter((u) => u.name.toLowerCase());
  }, [product]);

  const [reviews, setReviews] = useState(product?.reviews || []);
  const [newReview, setNewReview] = useState({
    name: "",
    comment: "",
    rating: 0,
  });

  if (!product) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center text-gray-600 text-center px-6">
        <p className="text-lg mb-2">UMKM tidak ditemukan.</p>
        <button
          onClick={() => router.push("/")}
          className="text-blue-600 hover:underline"
        >
          Kembali ke UMKM
        </button>
      </main>
    );
  }

  const isWish = wishlist.includes(product?.id);

  //reviews
  const handleAddReview = () => {
    if (!newReview.name || !newReview.comment || newReview.rating === 0) return;

    const reviewToAdd = {
      id: reviews.length + 1,
      ...newReview,
    };

    setReviews([...reviews, reviewToAdd]);
    setNewReview({ name: "", comment: "", rating: 0 });

    Swal.fire({
      icon: "success",
      title: "Terima kasih!",
      text: "Review berhasil ditambahkan",
      timer: 1500,
      showConfirmButton: false,
      position: "top-end",
      toast: true,
      background: "#f0fdf4",
      color: "#065f46",
    });
  };

  //discussion

  type DiscussionItem = {
    id: number;
    name: string;
    comment: string;
    replies: { id: number; name: string; comment: string }[];
  };

  const handleAddComment = () => {
    if (!newComment.name || !newComment.comment) return;

    const commentToAdd: DiscussionItem = {
      id: discussion.length + 1,
      ...newComment,
      replies: [],
    };

    setDiscussion([commentToAdd, ...discussion]);
    setNewComment({ name: "", comment: "" });

    Swal.fire({
      icon: "success",
      title: "Komentar berhasil dikirim!",
      timer: 1500,
      showConfirmButton: false,
      position: "top-end",
      toast: true,
      background: "#f0fdf4",
      color: "#065f46",
    });
  };

  const handleReply = (commentId: number) => {
    if (!replyName || !replyText) return;

    setDiscussion((prev) =>
      prev.map((d) =>
        d.id === commentId
          ? {
              ...d,
              replies: [
                ...d.replies,
                {
                  id: d.replies.length + 1,
                  name: replyName,
                  comment: replyText,
                },
              ],
            }
          : d,
      ),
    );

    setReplyTarget(null);
    setReplyName("");
    setReplyText("");
  };

  return (
    <>
      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Grid Utama */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.8fr_1fr] gap-8 pb-8">
          {/* Gallery Section */}
          <section className="space-y-4">
            {/* Main Image */}
            <div className="relative bg-gray-50 rounded-3xl border border-gray-100 shadow-lg overflow-hidden h-[420px] flex items-center justify-center group">
              <Image
                src={mainImage?.replace("./", "/") || "#"}
                alt={product.name}
                width={800}
                height={800}
                className="object-contain max-h-full w-full p-6 transition-transform duration-500 group-hover:scale-105"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/10 via-transparent to-transparent pointer-events-none" />

              {/* Floating Rating */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-md flex items-center gap-2">
                <FaStar className="text-yellow-400" />
                <span className="font-semibold text-sm">4.5 (20 ulasan)</span>
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-4">
              {(product.gallery?.length
                ? product.gallery
                : [product.image]
              ).map((src, idx) => (
                <button
                  key={idx}
                  onClick={() => setMainImage(src)}
                  className={`relative h-28 overflow-hidden rounded-2xl border-2 transition-all group ${
                    mainImage === src
                      ? "border-primary ring-4 ring-primary/20 scale-[1.02]"
                      : "border-transparent hover:border-primary/40"
                  }`}
                >
                  <Image
                    src={src.replace("./", "/")}
                    alt={`thumb-${idx}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />

                  {/* Overlay aktif */}
                  {mainImage === src && (
                    <div className="absolute inset-0 bg-primary/10" />
                  )}
                </button>
              ))}

              {/* View All */}
              {product.gallery?.length > 4 && (
                <button className="h-28 rounded-2xl bg-primary text-white font-semibold hover:opacity-90 transition-all flex flex-col items-center justify-center shadow-md">
                  <span className="text-2xl font-bold">
                    +{product.gallery.length - 4}
                  </span>
                  <span className="text-sm">Lihat Semua</span>
                </button>
              )}
            </div>
          </section>

          {/* Info Panel */}
          <aside className="bg-white border border-gray-100 rounded-3xl shadow-lg p-7 flex flex-col justify-between">
            <div>
              {/* Title */}
              <div className="mb-5">
                <h1 className="text-4xl font-bold text-foreground leading-tight">
                  {product.name}
                </h1>

                <p className="mt-2 text-sm text-muted-foreground">
                  Restoran • Masakan Rumahan
                </p>
              </div>

              {/* Rating & Distance */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <FaMapMarkerAlt className="text-primary" />
                  <span>1.2 km dari lokasi kamu</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
                    Buka Sekarang
                  </span>

                  <span className="flex items-center gap-1 text-sm text-muted-foreground">
                    <FaRegClock size={14} />
                    09.00 - 21.00
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm leading-relaxed text-justify text-muted-foreground mb-8">
                {product.description ||
                  "Menyediakan berbagai pilihan makanan rumahan dengan cita rasa autentik dan harga terjangkau."}
              </p>

              {/* Feature Cards */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-primary/5 border border-primary/10 rounded-2xl p-4 flex flex-col items-center text-center gap-2">
                  <div className="bg-primary/10 text-primary p-3 rounded-full">
                    <MdOutlineFoodBank size={22} />
                  </div>

                  <span className="text-sm font-medium">Masakan Rumahan</span>
                </div>

                <div className="bg-primary/5 border border-primary/10 rounded-2xl p-4 flex flex-col items-center text-center gap-2">
                  <div className="bg-primary/10 text-primary p-3 rounded-full">
                    <MdAttachMoney size={22} />
                  </div>

                  <span className="text-sm font-medium">Harga Terjangkau</span>
                </div>

                <div className="bg-primary/5 border border-primary/10 rounded-2xl p-4 flex flex-col items-center text-center gap-2">
                  <div className="bg-primary/10 text-primary p-3 rounded-full">
                    <MdVerified size={22} />
                  </div>

                  <span className="text-sm font-medium">Halal</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mt-8">
              <button
                onClick={() => toggleWishlist(product.id, product.name)}
                className={`flex-1 py-3 rounded-2xl font-medium transition-all duration-200 flex items-center justify-center gap-2 border ${
                  isWish
                    ? "bg-primary/10 text-primary border-primary/20"
                    : "bg-primary text-white border-primary hover:bg-primary/90"
                }`}
              >
                <FaHeart
                  className={`text-sm ${
                    isWish ? "fill-primary" : "fill-white"
                  }`}
                />

                <span>{isWish ? "Tersimpan" : "Tambah Favorit"}</span>
              </button>
              <button
                onClick={() => router.push(product?.mapsUrl)}
                className="flex-1 border border-primary text-primary hover:bg-primary/5 font-semibold py-3 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <LuMapPin size={18} />
                Lihat Map
              </button>
            </div>
          </aside>
        </div>

        <section id="maps-section" className="mt-14 z-0 scroll-mt-25">
          <div className="rounded-3xl z-0 overflow-hidden shadow-md border border-gray-100">
            {product.siteMap ? (
              <iframe
                src={product.siteMap}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            ) : (
              <p className="text-gray-500 text-center mt-20">
                Lokasi UMKM tidak tersedia
              </p>
            )}
          </div>
        </section>

        {/* Tabs Section */}
        <section className="mt-14">
          {/* Tabs Navigation */}
          <div className="flex gap-3 pb-2 overflow-x-auto">
            {["reviews", "discussion"].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-5 py-2 rounded-full text-sm font-semibold capitalize transition-all whitespace-nowrap ${
                  tab === t
                    ? "bg-primary text-white shadow-md"
                    : "text-muted-foreground hover:bg-primary/5 hover:text-primary"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="mt-8">
            {/* REVIEWS */}
            {tab === "reviews" && (
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">
                {/* Review List */}
                <div className="space-y-5">
                  {reviews.length === 0 ? (
                    <div className="bg-white border border-gray-100 rounded-3xl p-6 text-center shadow-sm">
                      <p className="text-sm text-muted-foreground">
                        Belum ada ulasan untuk UMKM ini.
                      </p>
                    </div>
                  ) : (
                    reviews.map((r) => (
                      <div
                        key={r.id}
                        className="bg-white border border-gray-100 rounded-3xl p-5 shadow-sm"
                      >
                        <div className="flex gap-4">
                          {/* Avatar */}
                          <Image
                            width={100}
                            height={100}
                            src="/products/user.jpg"
                            alt={r.name}
                            className="w-12 h-12 rounded-full object-cover"
                          />

                          {/* Content */}
                          <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                              <div>
                                <h4 className="font-semibold">{r.name}</h4>

                                <span className="text-xs text-muted-foreground">
                                  1 hari lalu
                                </span>
                              </div>

                              <div className="flex items-center gap-1 text-yellow-400">
                                {Array.from({ length: r.rating }).map(
                                  (_, i) => (
                                    <FaStar key={i} />
                                  ),
                                )}
                              </div>
                            </div>

                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {r.comment}
                            </p>

                            {/* Actions */}
                            <div className="flex items-center gap-5 mt-4 text-sm">
                              <button
                                className={`flex items-center gap-2 transition-colors ${
                                  locked[r.id]
                                    ? "text-blue-400 cursor-not-allowed"
                                    : "text-muted-foreground hover:text-primary"
                                }`}
                                disabled={locked[r.id]}
                                onClick={() => {
                                  if (locked[r.id]) return;

                                  setLikes((prev) => ({
                                    ...prev,
                                    [r.id]: (prev[r.id] || 0) + 1,
                                  }));

                                  setLocked((prev) => ({
                                    ...prev,
                                    [r.id]: true,
                                  }));
                                }}
                              >
                                <FaRegThumbsUp />
                                {likes[r.id] || 0}
                              </button>

                              <button
                                className={`flex items-center gap-2 transition-colors ${
                                  locked[r.id]
                                    ? "text-red-400 cursor-not-allowed"
                                    : "text-muted-foreground hover:text-red-500"
                                }`}
                                disabled={locked[r.id]}
                                onClick={() => {
                                  if (locked[r.id]) return;

                                  setDislikes((prev) => ({
                                    ...prev,
                                    [r.id]: (prev[r.id] || 0) + 1,
                                  }));

                                  setLocked((prev) => ({
                                    ...prev,
                                    [r.id]: true,
                                  }));
                                }}
                              >
                                <FaRegThumbsDown />
                                {dislikes[r.id] || 0}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  )}

                  {/* Add Review */}
                  <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
                    <h4 className="text-lg font-bold mb-5">Tambahkan Review</h4>

                    <div className="space-y-4">
                      <input
                        type="text"
                        placeholder="Nama"
                        value={newReview.name}
                        onChange={(e) =>
                          setNewReview({
                            ...newReview,
                            name: e.target.value,
                          })
                        }
                        className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:border-primary"
                      />

                      <textarea
                        placeholder="Komentar"
                        value={newReview.comment}
                        onChange={(e) =>
                          setNewReview({
                            ...newReview,
                            comment: e.target.value,
                          })
                        }
                        className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:border-primary min-h-[120px]"
                      />

                      {/* Rating */}
                      <div>
                        <label className="block text-sm font-medium mb-3">
                          Rating
                        </label>

                        <div className="flex items-center gap-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <FaStar
                              key={star}
                              className={`cursor-pointer text-2xl transition-colors ${
                                newReview.rating >= star
                                  ? "text-yellow-400"
                                  : "text-gray-300"
                              }`}
                              onClick={() =>
                                setNewReview({
                                  ...newReview,
                                  rating: star,
                                })
                              }
                            />
                          ))}
                        </div>
                      </div>

                      <button
                        onClick={handleAddReview}
                        className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-2xl font-semibold transition-all shadow-md"
                      >
                        Kirim Review
                      </button>
                    </div>
                  </div>
                </div>

                {/* Rating Summary */}
                <aside className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm h-fit sticky top-24">
                  <div className="text-center mb-8">
                    <div className="text-6xl font-bold text-yellow-400">
                      {(
                        reviews.reduce((a, b) => a + b.rating, 0) /
                        reviews.length
                      ).toFixed(1)}
                    </div>

                    <div className="flex justify-center gap-1 my-3">
                      {Array.from({ length: 5 }, (_, i) => (
                        <FaStar
                          key={i}
                          className={`${
                            i <
                            Math.round(
                              reviews.reduce((a, b) => a + b.rating, 0) /
                                reviews.length,
                            )
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>

                    <p className="text-sm text-muted-foreground">
                      {reviews.length} reviews
                    </p>
                  </div>

                  {/* Distribution */}
                  <div className="space-y-3">
                    {[5, 4, 3, 2, 1].map((star) => {
                      const count = reviews.filter(
                        (r) => r.rating === star,
                      ).length;

                      const percentage = (count / reviews.length) * 100;

                      return (
                        <div key={star} className="flex items-center gap-3">
                          <span className="w-3 text-sm">{star}</span>

                          <FaStar className="text-yellow-400 text-sm" />

                          <div className="flex-1 bg-gray-100 rounded-full h-2 overflow-hidden">
                            <div
                              className="bg-yellow-400 h-full rounded-full"
                              style={{
                                width: `${percentage}%`,
                              }}
                            />
                          </div>

                          <span className="text-xs text-muted-foreground w-5 text-right">
                            {count}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </aside>
              </div>
            )}

            {/* DISCUSSION */}
            {tab === "discussion" && (
              <div className="space-y-5">
                {/* Discussion List */}
                {discussion.length === 0 ? (
                  <div className="bg-white border border-gray-100 rounded-3xl p-6 text-center shadow-sm">
                    <p className="text-sm text-muted-foreground">
                      Belum ada diskusi untuk produk ini.
                    </p>
                  </div>
                ) : (
                  discussion.map((d) => (
                    <div
                      key={d.id}
                      className="bg-white border border-gray-100 rounded-3xl p-5 shadow-sm"
                    >
                      {/* Main Comment */}
                      <div className="flex gap-4">
                        <Image
                          width={100}
                          height={100}
                          src="/products/user.jpg"
                          alt={d.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />

                        <div className="flex-1">
                          <h4 className="font-semibold">{d.name}</h4>

                          <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                            {d.comment}
                          </p>

                          <button
                            className="text-sm text-primary mt-3 hover:underline"
                            onClick={() => setReplyTarget(d.id)}
                          >
                            Reply
                          </button>

                          {/* Reply Form */}
                          {replyTarget === d.id && (
                            <div className="mt-4 bg-gray-50 border border-gray-100 rounded-2xl p-4">
                              <div className="space-y-3">
                                <input
                                  type="text"
                                  placeholder="Nama"
                                  value={replyName}
                                  onChange={(e) => setReplyName(e.target.value)}
                                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2 outline-none focus:border-primary"
                                />

                                <textarea
                                  placeholder="Balasan"
                                  value={replyText}
                                  onChange={(e) => setReplyText(e.target.value)}
                                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none focus:border-primary min-h-[100px]"
                                />

                                <button
                                  onClick={() => handleReply(d.id)}
                                  className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-xl transition-all"
                                >
                                  Kirim Balasan
                                </button>
                              </div>
                            </div>
                          )}

                          {/* Replies */}
                          {d.replies.length > 0 && (
                            <div className="mt-5 pl-5 border-l-2 border-primary/10 space-y-4">
                              {d.replies.map((r) => (
                                <div key={r.id} className="flex gap-3">
                                  <Image
                                    width={100}
                                    height={100}
                                    src="/products/user.jpg"
                                    alt={r.name}
                                    className="w-10 h-10 rounded-full object-cover"
                                  />

                                  <div>
                                    <h5 className="font-medium text-sm">
                                      {r.name}
                                    </h5>

                                    <p className="text-sm text-muted-foreground">
                                      {r.comment}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))
                )}

                {/* Add Discussion */}
                <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
                  <h4 className="text-lg font-bold mb-5">Tambahkan Komentar</h4>

                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Nama"
                      value={newComment.name}
                      onChange={(e) =>
                        setNewComment({
                          ...newComment,
                          name: e.target.value,
                        })
                      }
                      className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:border-primary"
                    />

                    <textarea
                      placeholder="Komentar"
                      value={newComment.comment}
                      onChange={(e) =>
                        setNewComment({
                          ...newComment,
                          comment: e.target.value,
                        })
                      }
                      className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:border-primary min-h-30"
                    />

                    <button
                      onClick={handleAddComment}
                      className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-2xl font-semibold transition-all shadow-md"
                    >
                      Kirim Komentar
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        <section
          className="max-w-7xl mx-auto scroll-mt-25 px-4 mt-6 pb-10"
          id="produk"
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-bold text-[#0344C0]">UMKM Serupa</h3>
            <span className="text-sm text-gray-500">
              {filtered.length} ditemukan
            </span>
          </div>

          {filtered.length === 0 ? (
            <p className="text-gray-500 text-sm">Belum ada UMKM serupa.</p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {[...filtered]
                .sort((a, b) => b.rating - a.rating) // Mengurutkan dari rating tertinggi
                .map((item) => (
                  <div key={item.id} className="relative">
                    <button
                      className={`absolute top-3 right-3 p-2 rounded-full transition z-10 ${
                        wishlist.includes(item.id)
                          ? "bg-red-100 text-red-600"
                          : "bg-white text-gray-600 hover:bg-gray-100"
                      }`}
                      onClick={() => toggleWishlist(item.id, item.name)}
                    >
                      <FaHeart />
                    </button>
                    <Link key={item.id} href={`/detail/` + item.id}>
                      <div
                        key={item.name}
                        className="h-120 border-border overflow-hidden rounded-[1.75rem] border bg-background transition-all hover:-translate-y-1 hover:shadow-xl"
                      >
                        <div className="relative h-64 overflow-hidden">
                          <Image
                            src={item.gallery[0]}
                            alt={item.name}
                            fill
                            className="hover:scale-105 object-cover transition-transform duration-300"
                          />

                          <span
                            className={cn(
                              "absolute bottom-4 left-4 rounded-full px-3 py-1 text-xs font-semibold text-white",
                              categoryBadgeColor[item.category],
                            )}
                          >
                            {item.category}
                          </span>
                        </div>

                        <div className="p-5">
                          <h2 className="text-foreground mb-2 text-[1.45rem] font-bold">
                            {item.name}
                          </h2>

                          <p className="text-foreground line-clamp-2 mb-5 text-sm leading-relaxed">
                            {item.description}
                          </p>

                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-1 text-yellow-500">
                              <FaStar size={15} />
                              <span className="text-slate-700 font-semibold">
                                {item.rating}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
            </div>
          )}
        </section>
      </main>
    </>
  );
}
