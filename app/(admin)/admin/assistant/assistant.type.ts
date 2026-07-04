import { IconType } from "react-icons";

export interface PopularQuestion {
  icon: IconType;
  text: string;
}

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
  time: string;
}


export interface QuickSuggestion {
  icon: IconType;
  text: string;
}

export interface SummaryStat {
  title: string;
  value: string;
  growth: string;
  icon: IconType;
}

export interface StoreVisit {
  total: string;
  growth: string;
  chart: string;
}

export interface TopProduct {
  name: string;
  views: string;
  img: string;
}

export interface BusyHour {
  time: string;
  visitors: string;
  chart: string;
}

export interface AIRecommendation {
  title: string;
  description: string;
  buttonText: string;
}

export interface AnalyticsButton {
  text: string;
}