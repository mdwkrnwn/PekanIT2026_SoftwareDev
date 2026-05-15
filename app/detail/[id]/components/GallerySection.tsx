"use client";

import Image from "next/image";

interface GallerySectionProps {
  mainImage: string | undefined;
  setMainImage: (src: string) => void;
  gallery: string[] | undefined;
  productName: string;
  description: string;
}

export default function GallerySection({
  mainImage,
  setMainImage,
  gallery,
  productName,
  description
}: GallerySectionProps) {
  return (
    <section className="space-y-4">
      {/* Main Image */}
      <div className="bg-gray-50 rounded-3xl h-105 group relative flex items-center justify-center overflow-hidden border border-gray-100 shadow-lg">
        <Image
          src={mainImage?.replace("./", "/") || "#"}
          alt={productName}
          width={1000}
          height={1000}
          className="group-hover:scale-105 object-cover w-full max-h-full transition-transform duration-500"
        />

        {/* Gradient Overlay */}
        <div className="bg-linear-to-t from-black/10 via-transparent to-transparent absolute inset-0 pointer-events-none" />


      </div>

      {/* Thumbnail Gallery */}
        <div className="md:grid-cols-4 grid grid-cols-2 gap-4">
          {(gallery?.length && gallery).map((src, idx) => (
            <button
              key={idx}
              onClick={() => setMainImage(src)}
              className={`relative h-28 overflow-hidden rounded-2xl border-2 transition-all group ${mainImage === src
                ? "border-primary ring-4 ring-primary/20 scale-[1.02]"
                : "border-transparent hover:border-primary/40"
                }`}
            >
              <Image
                src={src.replace("./", "/")}
                alt={`thumb-${idx}`}
                fill
                className="group-hover:scale-110 object-cover transition-transform duration-300"
              />

              {/* Overlay aktif */}
              {mainImage === src && <div className="bg-primary/10 absolute inset-0" />}
            </button>
          ))}

          {/* View All */}
          {gallery && gallery.length > 4 && (
            <button className="h-28 rounded-2xl bg-primary hover:opacity-90 flex flex-col items-center justify-center font-semibold text-white transition-all shadow-md">
              <span className="text-2xl font-bold">+{gallery.length - 4}</span>
              <span className="text-sm">Lihat Semua</span>
            </button>
          )}
        </div>

      <div className="flex gap-4 flex-col">
        <h1 className="text-2xl font-bold">Tentang {productName}</h1>
        <p className="text-xl">{description}</p>
      </div>
    </section>
  );
}
