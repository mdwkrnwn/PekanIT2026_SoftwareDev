import { Metadata } from "next";
import { UMKM } from "@/data/UMKM";
import ProductPage from "./Product";
import { discussionAndReviews } from "@/data/DiscussionAndReviews";
import Link from "next/link";

export async function generateMetadata(
  { params }: { params: Promise<{ id: string }> }
): Promise<Metadata> {
  const { id } = await params;

  const umkm = UMKM.find(
    (item: { id: number }) => item.id === Number(id)
  );

  return {
    title: umkm?.name ?? "Not Found",
    description:
      umkm?.description ??
      "Please return to our homepage, we apologize for the inconvenience.",
  };
}


export default async function ProductDetailPage({ params, searchParams }: {
  params: Promise<{ id: string }>
  searchParams: Promise<{ src: string }>
}) {
  const { id } = await params;
  const { src } = await searchParams;
  const umkm = UMKM.find(
    (item: { id: number }) => item.id === Number(id)
  );
  if (!umkm) {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen px-6 text-center text-gray-600">
        <p className="mb-2 text-lg">UMKM tidak ditemukan.</p>
        <Link
          href={'/explore'}
          className="text-primary hover:underline"
        >
          Kembali ke UMKM
        </Link>
      </main>
    );
  }
  const comments = discussionAndReviews.find((item) => item.umkmId === Number(id))
  const review = comments!.reviews;

  return <ProductPage review={review} product={umkm} src={src} />
}
