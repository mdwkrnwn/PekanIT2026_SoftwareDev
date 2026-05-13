import { ARTICLES } from "@/data/ARTIKEL";
import Image from "next/image";
import Link from "next/link";
import { FaRegClock } from "react-icons/fa6";

export default function Articles() {
  return (
    <div className="w-[86vw] mx-auto mt-16">
      <h3 className="text-primary mb-8 text-3xl font-bold">
        Cerita & Tips Pilihan
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {ARTICLES.slice(0, 6).map((article) => (
          <Link
            key={article.id} 
            href={`/article/${article.id}`}
            className="border-slate-200 rounded-2xl hover:shadow-lg group flex flex-col overflow-hidden transition-shadow bg-white border"
          >
            {/* IMAGE */}
            <div className="relative h-56 overflow-hidden">
              <Image
                src={article.thumbnail}
                fill
                className="group-hover:scale-110 object-cover transition-all"
                alt={article.title}
              />

              <span className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
                {article.category}
              </span>
            </div>

            {/* CONTENT */}
            <div className="flex flex-col flex-1 p-6">
              <h4 className="line-clamp-2 text-slate-800 mb-3 text-xl font-bold">
                {article.title}
              </h4>

              <p className="text-slate-600 line-clamp-3 mb-6 text-sm leading-relaxed">
                {article.description}
              </p>

              <div className="text-slate-500 border-slate-100 flex items-center justify-between pt-4 mt-auto text-xs font-medium border-t">
                <span>{article?.createdAt || "12 Okt 2023"}</span>

                <span className="flex items-center gap-1.5">
                  <FaRegClock size={14} />
                  {article.readTime || "5 min read"}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}