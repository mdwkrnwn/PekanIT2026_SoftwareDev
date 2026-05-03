import Link from "next/link";
import Image from "next/image";

import { BsWhatsapp, BsLink45Deg } from "react-icons/bs";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

export function Sidebar({ popularArticles }: {
  popularArticles: {
    title: string;
    image: string;
  }[]
}) {
  return (<aside className="space-y-8">
    {
      /* Share */
    }
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
          navigator.clipboard.writeText(link);
        }} className="border-primary text-primary hover:bg-primary hover:text-white size-16 flex items-center justify-center transition-colors border rounded-full">
          <BsLink45Deg size={25} />
        </button>
      </div>
    </div>

    {
      /* Popular Articles */
    }
    <div className="border-border rounded-[2rem] border p-6">
      <h2 className="text-foreground text-3xl font-bold">
        Artikel Populer
      </h2>

      <div className="flex flex-col gap-8 mt-8">
        {popularArticles.map(article => <Link href={'/article'} key={article.title} className="hover:shadow-lg rounded-2xl group flex gap-5 p-2">
          <div className="size-28 shrink-0 rounded-2xl relative overflow-hidden">
            <Image src={article.image} alt={article.title} fill className="group-hover:scale-110 object-cover transition-all" />
          </div>

          <div>
            <h3 className="text-foreground wrap-break-word text-lg font-semibold">
              {article.title}
            </h3>

            <p className="text-muted-foreground mt-4 text-sm">
              5 menit baca
            </p>
          </div>
        </Link>)}
      </div>
    </div>
  </aside>);
}

