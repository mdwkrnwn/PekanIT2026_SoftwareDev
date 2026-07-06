"use client";
import { useState } from "react";
import { popularQuestions } from "./assistant.data";
import { summaryStats } from "./assistant.data";
import { storeVisit } from "./assistant.data";
import { busyHour } from "./assistant.data";
import { quickSuggestions } from "./assistant.data";
import { analyticsButton } from "./assistant.data";
import { aiRecommendation } from "./assistant.data";
import { topProducts } from "./assistant.data";

import PopularQuestions from "./components/PopularQuestions";
import StoreSummary from "./components/StoreSummary";
import ChatBox from "./components/ChatBox";
import StoreVisits from "./components/StoreVisits";
import TopProducts from "./components/TopProducts";
import AnalyticsButton from "./components/AnalyticsButton";
import BusyHours from "./components/BusyHours";
import AIRecommendation from "./components/AIRecommendation";
import { supabase } from "@/lib/supabase";
export default function AiAssistantPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  interface ChatMessage {
    role: "user" | "assistant";
    content: string;
    time: string;
  }

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Halo! Saya Bakool AI Business Assistant 👋\n\nSilakan tanyakan apa saja mengenai perkembangan bisnismu.",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ]);

  const handleSend = async (text?: string) => {
    const input = text || message;

    if (!input.trim()) return;

    const currentTime = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    // tampilkan bubble user
    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: input,
        time: currentTime,
      },
    ]);

    setMessage("");
    setLoading(true);

    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return;

      const res = await fetch("/api/ai-business", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: input,
          userId: user.id,
        }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.reply,
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Maaf, AI sedang tidak tersedia.",
          time: currentTime,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="grid grid-cols-1 gap-6 xl:grid-cols-[2fr_1fr]">
      {/* LEFT: Chat area */}
      <div className="flex flex-col gap-6">
        {/* Pertanyaan Populer */}
        <PopularQuestions
          questions={popularQuestions}
          onSelect={(text) => {
            setMessage(text);
            handleSend(text);
          }}
        />

        {/* Chat box */}
        <ChatBox
          messages={messages}
          loading={loading}
          message={message}
          setMessage={setMessage}
          handleSend={handleSend}
          quickSuggestions={quickSuggestions}
        />
      </div>

      {/* RIGHT: Sidebar */}
      <div className="space-y-5">
        {/* Ringkasan Data Tokomu */}
        <StoreSummary summaryStats={summaryStats} />

        {/* Kunjungan Toko */}
        <StoreVisits visit={storeVisit} />
        {/* Produk Terlaris + Jam Paling Ramai */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <TopProducts products={topProducts} />

          <BusyHours busyHour={busyHour} />
        </div>

        {/* Sumber Kunjungan + Rekomendasi AI untukmu */}
        <AIRecommendation recommendation={aiRecommendation} />

        {/* Lihat Analisis Lengkap */}
        <AnalyticsButton button={analyticsButton} />
      </div>
    </div>
  );
}
