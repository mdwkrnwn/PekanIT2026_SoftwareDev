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
import { usePathname } from "next/navigation";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";

export default function ProductPage({
  product,
  review,
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


  const isWish = wishlist.includes(product.id);
  const rating = (
    review?.reduce((sum: number, r: { rating: number }) => sum + r.rating, 0) /
    review?.length
  ).toFixed(1);

  return (
    <>
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
              href={`/explore`}
              className="text-[1.375rem] font-semibold text-muted-foreground hover:text-primary transition"
            >
              Explore
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
      <div className="w-[80vw]">
        {/* Grid Utama */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 pb-8">
          <GallerySection
            mainImage={mainImage}
            setMainImage={setMainImage}
            gallery={product.gallery}
            productName={product.name}
            description={product.about}
          />

          <InfoPanel
            product={product}
            isWish={isWish}
            onToggleWishlist={toggleWishlist}
            rating={rating}
            reviewCount={review?.length || 0}
          />
        </div>

        <hr className="border-border " />
        {/* featured menu */}
        {product.featuredMenus && product.featuredMenus.length > 0 && (
          <section className="mt-5 ">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-slate-900 text-xl font-bold">Menu Andalan</h3>
              <button className="text-primary hover:underline text-sm font-bold">
                Lihat Semua
              </button>
            </div>
            <div className="*:flex-1 grid lg:grid-cols-5 md:grid-cols-3 gap-4">
              {product.featuredMenus.map((item, i) => (
                <div
                  key={i}
                  className="group rounded-xl hover:shadow-xl flex flex-col pb-4 transition-all shadow-md cursor-pointer"
                >
                  <div className="relative w-full h-32 mb-3 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="group-hover:scale-110 object-cover transition-transform duration-300 rounded-tl-lg rounded-tr-lg"
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
        {/* reviews */}
        <div className="mt-15 border-t border-slate-200 "></div>
        <h2 className="mt-5 text-2xl font-semibold text-foreground">
          Ulasan Pelanggan
        </h2>
        <section className="mt-5">
          <div className="flex flex-col gap-8">
            {/* Summary + Form */}
            <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6 rounded-xl bg-card">
              <RatingSummary reviews={reviews} />
              <ReviewForm
                onSubmit={(newReview) => {
                  setReviews((prev) => [newReview, ...prev]);
                }}
              />
            </div>

            {/* Review List */}
            <div className="w-full">
              <ReviewsSection reviews={reviews} />
            </div>
          </div>
        </section>

        {/* Similar UMKM Section */}
      </div>
    </>
  );
}
