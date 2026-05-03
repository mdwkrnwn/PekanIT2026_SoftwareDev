"use client"

import Image from "next/image";
import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import {
  FaBookmark,
  FaFacebookF,
  FaHeart,
  FaLocationDot,
  FaShareNodes,
  FaStar,
  FaTwitter,
  FaUser,
} from "react-icons/fa6";

import { BsLink45Deg, BsWhatsapp } from "react-icons/bs";

import { articlePoints, popularArticles } from "@/lib/mockData";

export default function ArticlePage() {
  return (
    <div className="w-[86vw]">
      {/* Breadcrumb */}
      <div className="mb-7 flex items-center gap-3">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbSeparator size={25} />
              <BreadcrumbLink asChild>
                <Link className="text-[1.375rem] font-semibold" href="/">Kembali</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator size={25} />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-[1.375rem] font-semibold" >Artikel</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <section className="grid gap-10 xl:grid-cols-[2fr_1fr]">
        {/* Main Content */}
        <article>
          <span className="border-primary text-primary inline-flex px-5 py-2 text-sm font-bold border rounded-full">
            Tips & Edukasi
          </span>

          <h1 className="text-foreground max-w-4xl mt-8 text-6xl font-bold leading-tight">
            5 Tips Mudah Dukung UMKM Lokal di Sekitarmu
          </h1>

          <p className="text-muted-foreground max-w-2xl mt-6 text-xl leading-relaxed">
            Yuk, kenalan sama cara-cara simple yang bisa kamu lakuin buat
            support UMKM lokal setiap hari.
          </p>

          {/* Author */}
          <div className="flex items-center justify-between mt-10">
            <div className="flex items-center gap-4">
              <div className="bg-primary/10 size-16 flex items-center justify-center rounded-full">
                <FaUser className="text-primary" size={22} />
              </div>

              <span className="text-foreground text-3xl font-semibold">
                UFinder Team
              </span>
            </div>

            <div className="flex items-center gap-4 *:cursor-pointer">
              <button className="border-primary hover:bg-primary hover:text-white size-16 text-primary flex items-center justify-center transition-colors border rounded-full">
                <FaHeart size={25} />
              </button>

              <button className="border-primary text-primary hover:bg-primary hover:text-white size-16 flex items-center justify-center transition-colors border rounded-full">
                <FaBookmark size={25} />
              </button>

              <button className="border-primary text-primary hover:bg-primary hover:text-white size-16 flex items-center justify-center transition-colors border rounded-full">
                <FaShareNodes size={25} />
              </button>
            </div>
          </div>

          {/* Cover */}
          <div className="relative mt-10 h-130 overflow-hidden rounded-[2rem]">
            <Image
              src="https://picsum.photos/1200/800?random=500"
              alt="Article Cover"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="max-w-4xl mt-10">
            <p className="text-foreground text-xl leading-relaxed">
              Mendukung UMKM lokal nggak harus selalu dengan cara besar. Dari
              langkah sederhana yang kamu lakukan sehari-hari, kamu sudah bisa
              membantu usaha kecil berkembang dan bertahan di tengah persaingan
              digital. Yuk, mulai dari hal kecil yang berdampak besar!
            </p>

            <p className="text-foreground mt-8 text-xl leading-relaxed">
              Berikut 5 cara mudah yang bisa kamu lakukan mulai dari sekarang!
            </p>

            <div className="flex flex-col gap-10 mt-12">
              {articlePoints.map((point, index) => {
                const Icon = point.icon;

                return (
                  <div key={point.title} className="flex gap-6">
                    <div className="bg-primary/10 size-18 shrink-0 flex items-center justify-center rounded-full">
                      <Icon className="text-primary" size={45} />
                    </div>

                    <div className="flex flex-col gap-1">
                      <h3 className="text-foreground text-2xl font-semibold">
                        {index + 1}. {point.title}
                      </h3>

                      <p className="text-foreground text-lg">
                        {point.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="space-y-8">
          {/* Share */}
          <div className="border-border rounded-[2rem] border p-8">
            <h2 className="text-foreground text-3xl font-bold">
              Bagikan Artikel
            </h2>

            <div className="flex items-center gap-4 mt-8 *:cursor-pointer">
              <button className="border-primary text-primary hover:bg-primary hover:text-white size-16 flex items-center justify-center transition-colors border rounded-full">
                <FaFacebookF size={25} />
              </button>

              <button className="border-primary text-primary hover:bg-primary hover:text-white size-16 flex items-center justify-center transition-colors border rounded-full">
                <BsWhatsapp size={25} />
              </button>

              <button className="border-primary text-primary hover:bg-primary hover:text-white size-16 flex items-center justify-center transition-colors border rounded-full">
                <FaTwitter size={25} />
              </button>

              <button onClick={() => {
                const link = window.location.href;
                navigator.clipboard.writeText(link)
              }} className="border-primary text-primary hover:bg-primary hover:text-white size-16 flex items-center justify-center transition-colors border rounded-full">
                <BsLink45Deg size={25} />
              </button>
            </div>
          </div>

          {/* Popular Articles */}
          <div className="border-border rounded-[2rem] border p-6">
            <h2 className="text-foreground text-3xl font-bold">
              Artikel Populer
            </h2>

            <div className="flex flex-col gap-8 mt-8">
              {popularArticles.map((article) => (
                <Link href={'/article'} key={article.title} className="hover:shadow-lg rounded-2xl group flex gap-5 p-2">
                  <div className="size-28 shrink-0 rounded-2xl relative overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="group-hover:scale-110 object-cover transition-all"
                    />
                  </div>

                  <div>
                    <h3 className="text-foreground wrap-break-word text-lg font-semibold">
                      {article.title}
                    </h3>

                    <p className="text-muted-foreground mt-4 text-sm">
                      5 menit baca
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}