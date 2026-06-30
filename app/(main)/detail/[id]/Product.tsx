"use client";

import { useState } from "react";
import { UMKM } from "@/data/UMKM";
import { addToWishlist, removeFromWishlist } from "@/lib/wishlist";
import Swal from "sweetalert2";
import { useWishlist } from "@/hooks/useWishlist";
import Image from "next/image";
import GallerySection from "./components/GallerySection";
import InfoPanel from "./components/InfoPanel";
import ReviewsSection from "./components/ReviewsSection";
import RatingSummary from "./components/RatingSummary";
import ReviewForm from "./components/ReviewForm";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";

export default function ProductPage({
  product,
  review,
  src,
}: {
  product: (typeof UMKM)[number];
  review: Array<{
    id: number;
    name: string;
    comment: string;
    rating: number;
    verified?: boolean;
    images?: string[];
    timeago?: string;
    likes?: number;
  }>;
  src?: string;
}) {
  const [mainImage, setMainImage] = useState(product?.gallery?.[0]);
  const wishes = useWishlist().map((item) => item.id);
  const [wishlist, setWishlist] = useState(wishes);
  const [reviews, setReviews] = useState(review);

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
  const PROMOS = [
    {
      id: 1,
      image: "/promo1.png",
      alt: "Promo Diskon 20%",
    },
    {
      id: 2,
      image: "/promo2.png",
      alt: "Promo Gratis Ongkir",
    },
  ];
  const isWish = wishlist.includes(product.id);
  const rating = (
    review?.reduce((sum: number, r: { rating: number }) => sum + r.rating, 0) /
    review?.length
  ).toFixed(1);

  return (
    <>
      <div data-aos="fade-down" data-aos-duration="700" data-aos-once="true">
        <Breadcrumb className="w-[80vw] mt-5 mb-9">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link
                  href="/"
                  className="flex items-center gap-2 text-[1.375rem] font-semibold hover:text-primary transition"
                >
                  Home
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <FaChevronLeft size={25} />
            </BreadcrumbSeparator>
            <BreadcrumbLink asChild>
              <Link
                href={`/` + (src ?? "explore")}
                className="text-[1.375rem] font-semibold text-muted-foreground hover:text-primary transition"
              >
                {src ? src?.charAt(0).toUpperCase() + src?.slice(1) : "Explore"}
              </Link>
            </BreadcrumbLink>
            <BreadcrumbSeparator>
              <FaChevronLeft size={25} />
            </BreadcrumbSeparator>
            <BreadcrumbPage className="text-[1.375rem] font-semibold text-foreground">
              {product.name}
            </BreadcrumbPage>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="w-[80vw]">
        {/* Grid Utama */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 pb-8">
          <div
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-once="true"
          >
            <GallerySection
              mainImage={mainImage}
              setMainImage={setMainImage}
              gallery={product.gallery}
              productName={product.name}
              description={product.about}
            />
          </div>

          <div
            data-aos="fade-left"
            data-aos-delay="150"
            data-aos-duration="800"
            data-aos-once="true"
          >
            <InfoPanel
              product={product}
              isWish={isWish}
              onToggleWishlist={toggleWishlist}
              rating={rating}
              reviewCount={review?.length || 0}
            />
          </div>
        </div>

        <hr className="border-border " />

        {/* Promo + Menu */}
        {product.featuredMenus && product.featuredMenus.length > 0 && (
          <section
            className="mt-5"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-once="true"
          >
            {/* Promo Header */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-foreground text-xl font-bold">
                Promo Spesial
              </h3>

              <button className="text-primary hover:underline text-sm font-bold">
                Lihat Semua
              </button>
            </div>

            {/* Promo Cards */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {PROMOS.map((promo, index) => (
                <div
                  key={promo.id}
                  data-aos="zoom-in"
                  data-aos-delay={index * 120}
                  data-aos-duration="700"
                  data-aos-once="true"
                  className="group relative overflow-hidden rounded-2xl shadow-sm"
                >
                  <Image
                    src={promo.image}
                    alt={promo.alt}
                    width={600}
                    height={260}
                    className="h-auto w-full transition duration-300 group-hover:scale-[1.02]"
                    priority
                  />
                </div>
              ))}
            </div>

            <div className="mt-15 mb-5 border-t border-slate-200"></div>

            {/* Menu Header */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-foreground text-xl font-bold">
                Menu Andalan
              </h3>

              <button className="text-primary hover:underline text-sm font-bold">
                Lihat Semua
              </button>
            </div>

            {/* Menu Cards */}
            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5 *:flex-1">
              {product.featuredMenus.map((item, i) => (
                <div
                  key={i}
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                  data-aos-duration="700"
                  data-aos-once="true"
                  className="group flex cursor-pointer flex-col rounded-xl pb-4 shadow-md transition-all hover:shadow-xl"
                >
                  <div className="relative mb-3 h-32 w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="rounded-tl-lg rounded-tr-lg object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  <div className="mx-4">
                    <h4 className="text-foreground text-lg font-bold">
                      {item.name}
                    </h4>

                    <p className="text-foreground/70">
                      Rp {item.price.toLocaleString("id-ID")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Reviews */}
        <div className="mt-15 border-t border-slate-200"></div>

        <h2
          data-aos="fade-up"
          className="mt-5 text-2xl font-semibold text-foreground"
        >
          Ulasan Pelanggan
        </h2>

        <section
          className="mt-5"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="800"
          data-aos-once="true"
        >
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-1 gap-6 rounded-xl bg-card lg:grid-cols-[320px_1fr]">
              <div data-aos="fade-right">
                <RatingSummary reviews={reviews} />
              </div>

              <div data-aos="fade-left" data-aos-delay="150">
                <ReviewForm
                  onSubmit={(newReview) => {
                    setReviews((prev) => [newReview, ...prev]);
                  }}
                />
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="250" className="w-full">
              <ReviewsSection reviews={reviews} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
