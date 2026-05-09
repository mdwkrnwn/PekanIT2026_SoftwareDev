import { categoryBadgeColor } from "@/lib/mockData";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { FaHeart, FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
export function Cards({ umkmData }: {
  umkmData: {
    title: string;
    category: string;
    description: string;
    location: string;
    rating: number;
    reviews: number;
    distance: string;
    image: string;
  }[]
}) {
  return <section className="sm:grid-cols-2 xl:grid-cols-4 grid grid-cols-1 gap-8">
    {umkmData.map((item, i) => <Link key={i} href={`/${item.title.replaceAll(" ", "-")}`}>
      <article key={item.title} className="border-border overflow-hidden rounded-[1.75rem] border bg-background transition-all hover:-translate-y-1 hover:shadow-xl">
        <div className="relative h-64 overflow-hidden">
          <Image src={item.image} alt={item.title} fill className="hover:scale-105 object-cover transition-transform duration-300" />

          <button className="absolute top-4 right-4 flex size-9 items-center justify-center rounded-full hover:bg-foreground cursor-pointer hover:*:stroke-background bg-background">
            <FaHeart size={22} className="stroke-primary fill-primary stroke-2" />
          </button>

          <span className={cn("absolute bottom-4 left-4 rounded-full px-3 py-1 text-xs font-semibold text-white", categoryBadgeColor[item.category])}>
            {item.category}
          </span>
        </div>

        <div className="p-5">
          <h2 className="text-foreground mb-2 text-[1.45rem] font-bold">
            {item.title}
          </h2>

          <p className="text-foreground line-clamp-2 mb-5 text-sm leading-relaxed">
            {item.description}
          </p>

          <div className="text-foreground flex items-center gap-2 mb-4 text-sm">
            <FaLocationDot size={14} />
            <span>{item.location}</span>
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-1 text-yellow-500">
              <FaStar size={15} />
              <span className="text-slate-700 font-semibold">
                {item.rating}
              </span>
              <span className="text-muted-foreground">
                ({item.reviews})
              </span>
            </div>

            <div className="text-muted-foreground flex items-center gap-1">
              <FaLocationDot size={13} />
              <span>{item.distance}</span>
            </div>
          </div>
        </div>
      </article>
    </Link>)}
  </section>;
}
