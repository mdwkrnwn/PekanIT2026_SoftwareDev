import Image from "next/image";
import Link from "next/link";
import { FaRegClock } from "react-icons/fa6";
import { ARTICLES } from "@/data/ARTIKEL";
export function Articles() {
  return (
    <div className="w-[80vw] mx-auto mt-16">
      <h3 className="text-primary mb-8 text-3xl font-bold">
        Cerita & Tips Pilihan
      </h3>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        {ARTICLES.slice(0, 8).map((article) => (
          <Link
            href={`/article/${article.id}`}
            key={article.id}
            className="border-border group flex flex-col overflow-hidden rounded-2xl border bg-background transition-shadow hover:shadow-lg"
          >
            <div className="relative h-56 overflow-hidden">
              <Image
                src={article.thumbnail}
                fill
                alt={article.title}
                className="group-hover:scale-110 object-cover transition-all"
              />

              <span className="bg-primary absolute top-4 left-4 rounded-full px-3 py-1.5 text-xs font-bold tracking-wide text-white">
                {article.category}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h4 className="text-foreground mb-3 line-clamp-2 text-xl font-bold">
                {article.title}
              </h4>

              <p className="text-foreground/80 mb-6 line-clamp-3 text-sm leading-relaxed">
                {article.description}
              </p>

              <div className="text-foreground/80 border-border/10 mt-auto flex items-center justify-between border-t pt-4 text-xs font-medium">
                <span>{article.createdAt}</span>

                <span className="flex items-center gap-1.5">
                  <FaRegClock size={14} />
                  {article.readTime}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
