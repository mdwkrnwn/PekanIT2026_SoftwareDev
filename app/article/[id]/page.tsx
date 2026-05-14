import { notFound } from "next/navigation";
import { Content } from "./Content";
import { Sidebar } from "./Sidebar";

import { popularArticles } from "@/lib/mockData";
import { ARTICLES } from "@/data/ARTIKEL";

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
    <section className="w-[80vw] grid gap-10 lg:grid-cols-[2fr_1fr]">
      <Content article={article} />
      <Sidebar
        popularArticles={popularArticles}
        relatedArticles={relatedArticles}
      />
    </section>
  );
}