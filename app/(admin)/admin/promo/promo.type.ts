export interface Promo {
  id: number;
  title: string;
  description: string;
  promo_type: string;
  discount: number;
  target: string;
  schedule: string;
  start_date: string;
  end_date: string;
  status: string;
  image_url: string;
  views: number;
  created_at: string;
}

export interface PromoFormData {
  title: string;
  description: string;
  promo_type: string;
  discount: string;
  target: string;
  schedule: string;
  start_date: string;
  end_date: string;
  status: string;
}