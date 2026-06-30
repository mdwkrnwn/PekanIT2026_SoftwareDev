"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { LuCoffee, LuMapPin, LuShoppingBag, LuSend } from "react-icons/lu";
import { MdOutlineRamenDining } from "react-icons/md";
import { BiX } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { BsChatRightDotsFill } from "react-icons/bs";
import ReactMarkdown from "react-markdown";

type Message = {
  role: "user" | "assistant";
  text: string;
};

export default function ChatPopup() {
  const [isOpen, setIsOpen] = useState(false);

  const [input, setInput] = useState("");

  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: "Halo! Saya Asisten Bakool. Saya bisa bantu kamu menemukan UMKM terdekat, hidden gem, tempat nongkrong, sampai produk lokal terbaik sesuai kebutuhanmu. Ada yang ingin kamu cari hari ini?",
    },
  ]);

  const sendMessage = async (customMessage?: string) => {
    const userMessage = customMessage || input;

    if (!userMessage.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: userMessage,
      },
    ]);

    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
        }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: data.reply,
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "Maaf, Bakool AI sedang tidak tersedia.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed bottom-[5%] right-[5%] z-50 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/30 transition-transform hover:scale-105 active:scale-95"
        aria-label="Toggle Chat"
      >
        {isOpen ? <IoClose size={28} /> : <BsChatRightDotsFill size={24} />}
      </button>

      <div
        className={cn(
          "fixed max-h-[85svh] -bottom-full md:right-[5%] z-50 flex w-full md:w-105 origin-bottom-right flex-col rounded-[2rem] shadow-2xl transition-all duration-300 ease-[cubic-bezier(0,0.22,0.12,1)]",
          isOpen ? "bottom-0 md:bottom-5 2xl:bottom-10" : "pointer-events-none scale-50",
        )}
      >
        {/* Header */}
        <div className="bg-primary flex items-center gap-4 p-6">
          <div className="h-14 w-14 shrink-0 relative flex items-center justify-center bg-white rounded-full">
            <Image
              src="/iconai.png"
              alt="Bot Avatar"
              width={28}
              height={28}
              className="object-cover rounded-full"
            />
          </div>

          <div className="flex flex-row justify-between w-full">
            <div className="flex flex-col">
              <h2 className="text-xl font-bold text-white">Asisten Bakool</h2>

              <div className="flex items-center gap-2 mt-1">
                <span className="h-2.5 w-2.5 rounded-full bg-green-400"></span>
                <span className="text-sm font-medium text-blue-100">
                  Online
                </span>
              </div>
            </div>

            <div>
              <button onClick={() => setIsOpen((prev) => !prev)}>
                <BiX size={50} className="text-white cursor-pointer" />
              </button>
            </div>
          </div>
        </div>

        {/* Chat Body */}
        <div className="h-120 bg-background custom-scrollbar flex flex-col p-6 overflow-y-auto">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex gap-3 mb-4 ${msg.role === "user" ? "justify-end" : ""
                }`}
            >
              {msg.role === "assistant" && (
                <div className="shrink-0 border-border bg-background flex items-center justify-center w-10 h-10 border rounded-full">
                  <Image
                    src="/iconai.png"
                    alt="Bot Avatar"
                    width={28}
                    height={28}
                    className="object-cover rounded-full"
                  />
                </div>
              )}

              <div
                className={`max-w-[80%] rounded-2xl p-5 text-[0.95rem] ${msg.role === "user"
                  ? "bg-primary text-white rounded-tr-sm"
                  : "bg-background border border-border rounded-tl-sm text-foreground"
                  }`}
              >
                <ReactMarkdown>{msg.text}</ReactMarkdown>
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex gap-3 mb-4">
              <div className="shrink-0 border-border bg-background flex items-center justify-center w-10 h-10 border rounded-full">
                <Image
                  src="/iconai.png"
                  alt="Bot Avatar"
                  width={28}
                  height={28}
                  className="object-cover rounded-full"
                />
              </div>

              <div className="rounded-2xl border-border bg-background p-5 border rounded-tl-sm shadow-sm">
                Mengetik...
              </div>
            </div>
          )}

          {/* Quick Questions */}
          <div className="mt-auto">
            <h3 className="mb-4 text-[1.05rem] font-bold text-foreground">
              Pertanyaan cepat:
            </h3>

            <div className="md:grid md:grid-cols-2 flex flex-wrap gap-3">
              <button
                onClick={() => sendMessage("Cari cafe estetik")}
                className="rounded-xl hover:bg-primary/20 text-primary bg-background border-primary flex items-center gap-3 p-3 text-left transition-colors border"
              >
                <LuCoffee size={20} className="shrink-0" />
                <span className="text-foreground text-sm font-semibold">
                  Cari cafe estetik
                </span>
              </button>

              <button
                onClick={() => sendMessage("Rekomendasi kuliner")}
                className="rounded-xl hover:bg-primary/20 text-primary bg-background border-primary flex items-center gap-3 p-3 text-left transition-colors border"
              >
                <MdOutlineRamenDining size={22} className="shrink-0" />
                <span className="text-foreground text-sm font-semibold">
                  Rekomendasi Kuliner
                </span>
              </button>

              <button
                onClick={() => sendMessage("Hidden gem dekat sini")}
                className="rounded-xl hover:bg-primary/20 text-primary bg-background border-primary flex items-center gap-3 p-3 text-left transition-colors border"
              >
                <LuMapPin size={20} className="shrink-0" />
                <span className="text-foreground text-sm font-semibold">
                  Hidden GEM
                </span>
              </button>

              <button
                onClick={() => sendMessage("Cari produk lokal")}
                className="rounded-xl hover:bg-primary/20 text-primary bg-background border-primary flex items-center gap-3 p-3 text-left transition-colors border"
              >
                <LuShoppingBag size={20} className="shrink-0" />
                <span className="text-foreground text-sm font-semibold">
                  Cari Produk Lokal
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="bg-background p-6 pt-2">
          <div className="relative flex items-center">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
              type="text"
              placeholder="Tanyakan tentang UMKM..."
              className="w-full rounded-full border border-border  py-4 pl-6 pr-16 text-[0.95rem] text-foreground shadow-sm outline-none placeholder:text-foreground/80  focus:border-primary"
            />

            <button
              onClick={() => sendMessage()}
              disabled={loading}
              className="absolute right-2 flex aspect-square h-[80%] items-center justify-center rounded-full bg-primary text-white transition-colors hover:bg-blue-700"
            >
              <LuSend size={20} className="mr-0.5 mt-0.5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
