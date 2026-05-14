'use client';

import Link from "next/link";
import Image from "next/image";
import { BsWhatsapp, BsLink45Deg } from "react-icons/bs";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

export function Sidebar({
  popularArticles,
  relatedArticles,
}: {
  popularArticles: any[];
  relatedArticles: any[];
}) {
  return (
    <aside className="space-y-8">
      {/* Share */}
      <div className="border-border rounded-[2rem] border p-8">
        <h2 className="md:text-3xl text-xl font-semibold">Bagikan Artikel</h2>

        <div className="md:flex grid grid-cols-2 items-center gap-4 mt-8">
          <button className="border-primary text-primary hover:bg-primary hover:text-white size-16 flex items-center justify-center border rounded-full">
            <FaFacebookF size={22} />
          </button>

          <button className="border-primary text-primary hover:bg-primary hover:text-white size-16 flex items-center justify-center border rounded-full">
            <BsWhatsapp size={22} />
          </button>

          <button className="border-primary text-primary hover:bg-primary hover:text-white size-16 flex items-center justify-center border rounded-full">
            <FaTwitter size={22} />
          </button>

          <button
            onClick={() =>
              navigator.clipboard.writeText(window.location.href)
            }
            className="border-primary text-primary hover:bg-primary hover:text-white size-16 flex items-center justify-center border rounded-full"
          >
            <BsLink45Deg size={22} />
          </button>
        </div>
      </div>

      {/* Related Articles */}
      <div className="border-border rounded-[2rem] border p-6">
        <h2 className="text-3xl font-semibold mb-6">
          Artikel Terkait
        </h2>

        <div className="flex flex-col gap-6">
          {relatedArticles.map((article) => (
            <Link
              href={`/article/${article.id}`}
              key={article?.id}
              className="flex gap-4 hover:shadow-md rounded-2xl p-2"
            >
              <div className="relative w-20 h-20 rounded-xl overflow-hidden">
                <Image
                  src={article.thumbnail}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h3 className="font-semibold line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-2">
                  {article.readTime}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Popular Articles */}
      <div className="border-border rounded-[2rem] border p-6">
        <h2 className="text-3xl font-semibold mb-6">
          Artikel Populer
        </h2>

        <div className="flex flex-col gap-6">
          {popularArticles.map((article) => (
            <Link
              href={`/article/${article.id}`}
              key={article.id}
              className="flex gap-4 hover:shadow-md rounded-2xl p-2"
            >
              <div className="relative w-20 h-20 rounded-xl overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h3 className="font-semibold line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-2">
                  {article.readTime}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}