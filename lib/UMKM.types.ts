export type UMKMCategory =
  | "Makanan"
  | "Fashion"
  | "Jasa"
  | "Kerajinan"
  | "Lainnya";

export interface UMKM {
  id: number;
  slug: string;

  name: string;
  category: UMKMCategory;

  description: string;
  about?: string;

  thumbnail: string;
  gallery: string[];

  address: string;
  city: string;
  province: string;

  latitude: number;
  longitude: number;

  mapsUrl?: string;
  embedMapUrl?: string;

  rating: number;
  totalReviews: number;

  likes: number;
  dislikes: number;

  tags: string[];

  status?: "Buka" | "Tutup";
  openHours?: string;

  distanceKm?: number;

  createdAt: string;
  updatedAt: string;
}

export interface Review {
  id: number;
  umkmId: number;

  author: string;
  comment: string;

  rating: number;

  createdAt: string;
}

export interface Discussion {
  id: number;
  umkmId: number;

  author: string;
  comment: string;

  createdAt: string;
}