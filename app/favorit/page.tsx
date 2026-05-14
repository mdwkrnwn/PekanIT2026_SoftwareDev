// app/favorite/page.tsx
import Favorite from "./Favorite";

interface PageProps {
  searchParams: Promise<{
    search?: string;
  }>;
}

export default async function FavoritePage({
  searchParams,
}: PageProps) {
  const params = await searchParams;

  return <Favorite search={params.search ?? ""} />;
}