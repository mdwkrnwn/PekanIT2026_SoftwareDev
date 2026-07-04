import { IconType } from "react-icons";

export interface Review {
  id: number;
  name: string;
  avatar: string;
  verified: boolean;
  rating: number;
  review: string;
  menu: string[];
  createdAt: string;
  replied: boolean;
  replyDate?: string;
  reply?: string;
}

export interface ReviewTab {
  key: string;
  title: string;
}

export interface ReviewStat {
  title: string;
  value: string;
  growth: string;
  icon: IconType;
  color: string;
}

export interface RatingBreakdown {
  star: number;
  count: number;
}

export interface TopReviewedProduct {
  name: string;
  rating: number;
  count: number;
  img: string;
}
export interface ReviewTab {
  key: string;
  title: string;
}

export interface ReviewTabWithCount extends ReviewTab {
  label: string;
}