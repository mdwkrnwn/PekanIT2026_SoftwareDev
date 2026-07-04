export interface Review {
  id: number;
  name: string;
  avatar?: string;
  comment: string;
  rating: number;
  verified?: boolean;
  images?: string[];
  timeago?: string;
  likes?: number;
}