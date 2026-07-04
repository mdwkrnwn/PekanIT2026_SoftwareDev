import { IconType } from "react-icons";

export interface VisitData {
  day: string;
  viewed: number;
  favorite: number;
}

export interface StatsCard {
  title: string;
  value: string;
  growth: string;
  icon: IconType;
  color: string;
  chartColor: string;
  data: number[];
}

export interface QuickAction {
  title: string;
  icon: IconType;
  color: string;
}

export interface TrafficInsight {
  title: string;
  image: string;
  description: string;
  buttonText: string;
}

export interface Review {
  user: string;
  rating: number;
  comment: string;
  date: string;
}

export interface TrafficSource {
  name: string;
  value: number;
  color: string;
}

export interface HeatmapCell {
  day: string;
  hour: string;
  value: number;
}

export interface VisitSummary {
  total: string;
  growth: string;
  chart: string;
}

export interface PopularMenu {
  rank: number;
  name: string;
  count: number;
  percent: number;
  image: string;
}