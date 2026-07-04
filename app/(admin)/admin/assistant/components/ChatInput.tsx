"use client";

import { Dispatch, SetStateAction } from "react";
import { LuPaperclip, LuSend } from "react-icons/lu";

interface ChatInputProps {
  message: string;
  setMessage: Dispatch<SetStateAction<string>>;
  loading: boolean;
  handleSend: (text?: string) => void;
}

export default function ChatInput({
  message,
  setMessage,
  loading,
  handleSend,
}: ChatInputProps) {
  return (
    <>
      <div className="mt-4 flex items-center gap-3 rounded-xl border border-[#D0D5DD] px-4 py-2">
        <button
          onClick={() => alert("🚀 Upload file akan segera tersedia!")}
          className="text-[#98A2B3] transition hover:text-[#158A62]"
        >
          <LuPaperclip size={18} />
        </button>

        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          placeholder="Ketik pertanyaanmu di sini..."
          className="flex-1 bg-transparent py-2 text-[14px] text-[#344054] placeholder-[#98A2B3] focus:outline-none"
          onKeyDown={(e) => {
            if (e.key === "Enter" && !loading) {
              handleSend();
            }
          }}
        />

        <button
          onClick={() => handleSend()}
          disabled={loading}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#158A62] text-white transition hover:bg-[#12704F] disabled:cursor-not-allowed disabled:opacity-50"
        >
          <LuSend size={17} />
        </button>
      </div>

      <p className="mt-3 text-center text-[11px] text-[#98A2B3]">
        AI dapat membuat kesalahan. Gunakan hasil rekomendasi dengan
        pertimbanganmu sendiri.
      </p>
    </>
  );
}
