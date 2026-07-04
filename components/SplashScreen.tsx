"use client";

import Image from "next/image";

interface SplashScreenProps {
  title?: string;
  message?: string;
}

export default function SplashScreen({
  title = "Bakool",
  message = "Sedang memuat...",
}: SplashScreenProps) {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <div className="flex flex-col items-center">
        <div className="animate-pulse">
          <Image
            src="/Bakul.png"
            alt="Bakool"
            width={150}
            height={150}
            priority
          />
        </div>

        <h1 className="mt-5 text-3xl font-bold text-[#016D48]">
          {title}
        </h1>

        <p className="mt-2 text-sm text-[#667085]">
          {message}
        </p>

        <div className="mt-6 flex gap-2">
          <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-[#016D48]" />
          <span
            className="h-2.5 w-2.5 animate-bounce rounded-full bg-[#016D48]"
            style={{ animationDelay: "150ms" }}
          />
          <span
            className="h-2.5 w-2.5 animate-bounce rounded-full bg-[#016D48]"
            style={{ animationDelay: "300ms" }}
          />
        </div>
      </div>
    </div>
  );
}