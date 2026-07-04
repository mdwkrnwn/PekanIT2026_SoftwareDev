"use client";

import { Dispatch, SetStateAction } from "react";

import { ChatMessage, QuickSuggestion } from "../assistant.type";

import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import QuickSuggestions from "./QuickSuggestions";
import ChatInput from "./ChatInput";

interface ChatBoxProps {
  messages: ChatMessage[];
  loading: boolean;

  message: string;
  setMessage: Dispatch<SetStateAction<string>>;

  handleSend: (text?: string) => void;

  quickSuggestions: QuickSuggestion[];
}

export default function ChatBox({
  messages,
  loading,
  message,
  setMessage,
  handleSend,
  quickSuggestions,
}: ChatBoxProps) {
  return (
    <div className="mb-3 flex h-[880px] flex-col rounded-2xl border border-[#EAECF0] bg-white p-5">
      <ChatHeader />

      <ChatMessages messages={messages} loading={loading} />

      <QuickSuggestions
        suggestions={quickSuggestions}
        loading={loading}
        handleSend={handleSend}
      />

      <ChatInput
        message={message}
        setMessage={setMessage}
        loading={loading}
        handleSend={() => handleSend()}
      />
    </div>
  );
}