export interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  price: number;
  image: string;
  store: string;
  views: number;
  favorite: number;
  created_at: string;
}

export interface PopularProduct {
  rank: number;
  name: string;
  image: string;
  views: number;
  percent: number;
}