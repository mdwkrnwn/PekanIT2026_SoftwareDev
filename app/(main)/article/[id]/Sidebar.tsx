"use client";

import Link from "next/link";
import Image from "next/image";
import { BsWhatsapp, BsLink45Deg } from "react-icons/bs";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { popularArticles as popularArticle } from "@/lib/mockData";
import { ARTICLES } from "@/data/ARTIKEL";

export function Sidebar({
  popularArticles,
  relatedArticles,
}: {
  popularArticles: typeof popularArticle;
  relatedArticles: typeof ARTICLES;
}) {
  return (
    <aside className="space-y-8">
      <div className="border-border rounded-[2rem] border p-8">
        {" "}
        <h2 className="md:text-3xl text-xl font-semibold">
          Bagikan Artikel
        </h2>{" "}
        <div className="md:flex grid items-center grid-cols-2 gap-10 mt-8">
          {" "}
          <button className="border-primary text-primary-foreground hover:bg-primary hover:text-white size-16 flex items-center justify-center border rounded-full">
            {" "}
            <FaFacebookF size={22} />{" "}
          </button>{" "}
          <button className="border-primary text-primary-foreground hover:bg-primary hover:text-white size-16 flex items-center justify-center border rounded-full">
            {" "}
            <BsWhatsapp size={22} />{" "}
          </button>{" "}
          <button className="border-primary text-primary-foreground hover:bg-primary hover:text-white size-16 flex items-center justify-center border rounded-full">
            {" "}
            <FaTwitter size={22} />{" "}
          </button>{" "}
          <button
            onClick={() => navigator.clipboard.writeText(window.location.href)}
            className="border-primary text-primary-foreground hover:bg-primary hover:text-white size-16 flex items-center justify-center border rounded-full"
          >
            {" "}
            <BsLink45Deg size={22} />{" "}
          </button>{" "}
        </div>{" "}
      </div>

      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#0C7C61] to-[#7FA59A] p-6 text-white">
        {/* Konten */}
        <div className="relative z-10 max-w-[250px]">
          <h3 className="text-[26px] font-bold leading-tight">
            Dukung UMKM Dukung Indonesia
          </h3>

          <p className="mt-5 text-[15px] leading-8 text-white/90">
            Setiap transaksi kecil darimu berarti besar untuk mereka.
          </p>

          <button className="mt-7 rounded-xl bg-white px-6 py-3 font-semibold text-[#0C7C61]">
            Jelajahi UMKM
          </button>
        </div>

        {/* Ilustrasi */}
        <Image
          src="/bannerarticle.png"
          alt="Banner UMKM"
          width={220}
          height={220}
          priority
          className="absolute bottom-0 mt-50 right-4 z-0 w-[220px]"
        />
      </div>

      {/* Related Articles */}
      <div className="border-border rounded-[2rem] border p-6">
        <h2 className="mb-6 text-3xl font-semibold">Artikel Terkait</h2>

        <div className="flex flex-col">
          {relatedArticles.map((article) => (
            <Link
              href={`/article/${article.id}`}
              key={article?.id}
              className="hover:shadow-md rounded-2xl grid grid-cols-2 gap-4 py-2"
            >
              <div className="rounded-xl relative w-full h-auto overflow-hidden">
                <Image
                  src={article.thumbnail}
                  alt={article.title}
                  fill
                  className=" object-cover"
                />
              </div>

              <div>
                <h3 className="line-clamp-2 font-semibold">{article.title}</h3>
                <p className="text-muted-foreground mt-2 text-sm">
                  {article.readTime}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Popular Articles */}
      <div className="rounded-2xl border border-[#E9EDF2] bg-white p-6">
        <h3 className="mb-5 text-[20px] font-bold text-[#101828]">
          Artikel Populer
        </h3>

        <div className="space-y-5">
          {popularArticles.map((article) => (
            <Link
              key={article.id}
              href={`/article/${article.id}`}
              className="flex gap-3"
            >
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex-1">
                <h4 className="line-clamp-2 text-[15px] font-semibold text-[#101828]">
                  {article.title}
                </h4>

                <p className="mt-2 text-xs text-[#98A2B3]">
                  {article.readTime}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-[#E9EDF2] bg-[#F2F8F6] p-6">
        <h3 className="text-[20px] font-semibold leading-7 text-[#156E52]">
          Dapatkan tips & info UMKM <br /> langsung ke email kamu
        </h3>

        <input
          type="email"
          placeholder="Masukkan email kamu"
          className="mt-5 h-11 w-full rounded-lg border border-[#E5E7EB] bg-white px-4 text-sm outline-none"
        />

        <button className="mt-4 h-11 w-full rounded-lg bg-[#156E52] font-semibold text-white hover:bg-[#09624D]">
          Langganan
        </button>
      </div>
    </aside>
  );
}
