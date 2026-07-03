"use client";

import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";

interface PromoImageProps {
  src: string;
  alt: string;
}

export default function PromoImage({
  src,
  alt,
}: PromoImageProps) {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative h-[90px] w-[160px] overflow-hidden rounded">
      {loading && (
        <Skeleton className="absolute inset-0 h-full w-full rounded" />
      )}

      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover transition-opacity duration-300 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
        onLoad={() => setLoading(false)}
      />
    </div>
  );
}