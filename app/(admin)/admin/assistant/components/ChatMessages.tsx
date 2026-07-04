"use client";

import { ChatMessage } from "../assistant.type";

interface ChatMessagesProps {
  messages: ChatMessage[];
  loading: boolean;
}

export default function ChatMessages({
  messages,
  loading,
}: ChatMessagesProps) {
  return (
    <div className="flex-1 space-y-4 overflow-y-auto py-4">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`flex ${
            msg.role === "user" ? "justify-end" : "justify-start"
          }`}
        >
          <div
            className={`max-w-[70%] px-4 py-3 ${
              msg.role === "user"
                ? "rounded-2xl rounded-tr-sm bg-[#DAEFE3]"
                : "rounded-2xl rounded-tl-sm bg-[#F5F6F8]"
            }`}
          >
            <p className="whitespace-pre-wrap text-[14px] text-[#344054]">
              {msg.content}
            </p>

            <p
              className={`mt-2 text-[11px] text-[#98A2B3] ${
                msg.role === "user" ? "text-right" : ""
              }`}
            >
              {msg.time}
            </p>
          </div>
        </div>
      ))}

      {loading && (
        <div className="flex justify-start">
          <div className="rounded-2xl rounded-tl-sm bg-[#F5F6F8] px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 animate-bounce rounded-full bg-[#158A62]" />

              <span
                className="h-2 w-2 animate-bounce rounded-full bg-[#158A62]"
                style={{ animationDelay: "150ms" }}
              />

              <span
                className="h-2 w-2 animate-bounce rounded-full bg-[#158A62]"
                style={{ animationDelay: "300ms" }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}