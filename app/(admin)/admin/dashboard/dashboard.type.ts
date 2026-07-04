import { IconType } from "react-icons";

export interface DashboardStat {
  title: string;
  value: string;
  growth: string;
  icon: IconType;
  color: string;
  chartColor: string;
  data: number[];
}

export interface VisitData {
  day: string;
  viewed: number;
  favorite: number;
}

export interface DashboardReview {
  name: string;
  image: string;
  comment: string;
  rating: number;
  time: string;
}

export interface QuickAction {
  title: string;
  icon: IconType;
  color: string;
}

export interface PopularProduct {
  rank: number;
  name: string;
  count: string;
  tag: string;
  image: string;
  tagCol: string;
}

export interface AIInsight {
  title: string;
  description: string;
  image: string;
}