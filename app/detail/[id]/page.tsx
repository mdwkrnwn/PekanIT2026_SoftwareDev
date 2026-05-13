import { Metadata } from "next";
import { UMKM } from "@/data/UMKM.dummy";
import ProductPage from "./Product";

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


export default function ProductDetailPage() {
  return <ProductPage />
}
