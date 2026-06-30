import { ARTICLES } from "@/data/ARTIKEL";
import Image from "next/image";
import { FaUser, FaHeart, FaBookmark } from "react-icons/fa";
import { FaShareNodes } from "react-icons/fa6";

export function Content({ article }: { article: (typeof ARTICLES)[number] }) {
  return (
    <article>
      {/* Category */}
      <span className="text-primary-foreground border-border inline-flex px-5 py-2 text-sm font-bold border rounded-full">
        {article.category}
      </span>

      {/* Title */}
      <h1 className="text-foreground md:text-6xl wrap-break-word mt-8 text-3xl font-semibold leading-tight">
        {article.title}
      </h1>

      {/* Description */}
      <p className="text-muted-foreground mt-6 text-xl leading-relaxed">
        {article.description}
      </p>

      {/* Author */}
      <div className="md:flex-row gap-y-4 flex flex-col items-start justify-between mt-10">
        <div className="flex items-center gap-4">
          <div className=" bg-[#E4F0E9] size-16 flex items-center justify-center  rounded-full">
            <Image
              src="/bakul.png" 
              alt="Bakool"
              width={60}
              height={60}
              className="object-contain"
            />
          </div>

          <div>
            <p className="text-3xl font-semibold">{article.author}</p>

            <p className="text-muted-foreground text-sm">
              {article.readTime} baca
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="md:w-fit flex items-center justify-start w-full gap-4">
          <button className="border-primary-foreground hover:bg-primary hover:text-white size-16 text-primary-foreground flex items-center justify-center transition-colors border rounded-full">
            <FaHeart size={25} />
          </button>

          <button className="border-primary-foreground text-primary-foreground hover:bg-primary hover:text-white size-16 flex items-center justify-center transition-colors border rounded-full">
            <FaBookmark size={25} />
          </button>

          <button className="border-primary-foreground text-primary-foreground hover:bg-primary hover:text-white size-16 flex items-center justify-center transition-colors border rounded-full">
            <FaShareNodes size={25} />
          </button>
        </div>
      </div>

      {/* Cover */}
      <div className="relative mt-10 h-130 overflow-hidden rounded-[2rem]">
        <Image
          src={article.thumbnail}
          alt={article.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content List */}
      <div className="mt-10">
        <div className="flex flex-col gap-10 mt-12">
          {article.content.map((item, index) => (
            <div key={index} className="flex gap-6">
              <div className="size-18 shrink-0 border-foreground flex items-center justify-center bg-transparent border rounded-full">
                <span className="text-foreground text-2xl font-bold">
                  {index + 1}
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="text-foreground wrap-break-word text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="text-foreground wrap-break-word text-lg">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
