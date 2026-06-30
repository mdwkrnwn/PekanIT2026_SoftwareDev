import { ARTICLES } from "@/data/ARTIKEL";
import Image from "next/image";
import Link from "next/link";
import { FaRegClock } from "react-icons/fa6";

export default function Articles() {
  return (
    <div className="w-[80vw]">
      {/* Header */}
      <div
        data-aos="fade-down"
        data-aos-duration="800"
        data-aos-once="true"
      >
        <h3 className="text-primary-foreground mb-8 text-3xl font-bold">
          Cerita & Tips Pilihan
        </h3>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        {ARTICLES.slice(0, 8).map((article, index) => (
          <Link
            key={article.id}
            href={`/article/${article.id}`}
            data-aos={
              index % 4 === 0
                ? "fade-right"
                : index % 4 === 3
                ? "fade-left"
                : "fade-up"
            }
            data-aos-delay={index * 100}
            data-aos-duration="800"
            data-aos-once="true"
            className="
              group
              border-border
              bg-background
              shadow-foreground/10
              flex flex-col overflow-hidden rounded-2xl border
              transition-all duration-500
              hover:-translate-y-3
              hover:shadow-2xl
              hover:shadow-primary/10
            "
          >
            {/* IMAGE */}
            <div className="relative h-56 overflow-hidden">
              <Image
                src={article.thumbnail}
                fill
                alt={article.title}
                className="
                  object-cover
                  transition-transform duration-700
                  group-hover:scale-110
                "
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Category Badge */}
              <span
                className="
                  bg-primary absolute left-4 top-4
                  rounded-full px-3 py-1.5
                  text-xs font-bold uppercase tracking-wide text-white
                  transition-all duration-300
                  group-hover:scale-105
                "
              >
                {article.category}
              </span>
            </div>

            {/* CONTENT */}
            <div className="flex flex-1 flex-col p-6">
              <h4
                className="
                  text-foreground
                  mb-3 line-clamp-2 text-xl font-bold
                  transition-colors duration-300
                  group-hover:text-primary
                "
              >
                {article.title}
              </h4>

              <p className="text-foreground/80 mb-6 line-clamp-3 text-sm leading-relaxed">
                {article.description}
              </p>

              <div
                className="
                  text-foreground/50
                  border-border
                  mt-auto flex items-center justify-between
                  border-t pt-4
                  text-xs font-medium
                "
              >
                <span>{article.createdAt || "12 Okt 2023"}</span>

                <span
                  className="
                    flex items-center gap-1.5
                    transition-colors duration-300
                    group-hover:text-primary
                  "
                >
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