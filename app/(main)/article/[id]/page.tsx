import { notFound } from "next/navigation";
import { Content } from "./Content";
import { Sidebar } from "./Sidebar";

import { popularArticles } from "@/lib/mockData";
import { ARTICLES } from "@/data/ARTIKEL";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const article = ARTICLES.find(
    (item) => item.id === Number(id)
  );

  if (!article) return notFound();

  const relatedArticles = ARTICLES.filter((item) =>
    article.relatedArticles.includes(item.id)
  );

  return (
    <>
      <Breadcrumb className="w-[80vw] mt-5 mb-9">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link
                href="/"
                className="flex items-center gap-2 text-[1.375rem] font-semibold hover:text-primary transition"
              >
                Home
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <FaChevronLeft size={25} />
          </BreadcrumbSeparator>
          <BreadcrumbLink asChild>
            <Link
              href={`/article`}
              className="text-[1.375rem] font-semibold text-muted-foreground hover:text-primary transition"
            >
              Article
            </Link>
          </BreadcrumbLink>
          <BreadcrumbSeparator>
            <FaChevronLeft size={25} />
          </BreadcrumbSeparator>
          <BreadcrumbPage className="text-[1.375rem] font-semibold text-foreground">
            {article.title}
          </BreadcrumbPage>
        </BreadcrumbList>
      </Breadcrumb>
      <section className="w-[80vw] grid gap-10 lg:grid-cols-[2fr_1fr]">
        <Content article={article} />
        <Sidebar
          popularArticles={popularArticles}
          relatedArticles={relatedArticles}
        />
      </section>
    </>
  );
}