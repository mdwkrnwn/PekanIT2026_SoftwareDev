"use client";

import { PopularQuestion } from "../assistant.type";

interface PopularQuestionsProps {
  questions: PopularQuestion[];
  onSelect: (text: string) => void;
}

export default function PopularQuestions({
  questions,
  onSelect,
}: PopularQuestionsProps) {
  return (
    <div className="rounded-2xl border border-[#EAECF0] bg-white p-4 md:p-5">
      <h3 className="text-sm md:text-[15px] font-semibold text-[#101828]">
        Pertanyaan Populer
      </h3>

      <div className="mt-4 flex flex-col gap-3 md:flex-row md:flex-wrap">
        {questions.map((question) => (
          <button
            key={question.text}
            onClick={() => onSelect(question.text)}
            className="
              flex w-full items-center gap-2
              rounded-xl border border-[#EAECF0]
              bg-white
              px-3 py-3
              text-left
              text-[13px] md:text-[12px]
              font-medium
              text-[#344054]
              transition
              hover:border-[#158A62]
              hover:bg-[#F6FCF9]
              md:w-auto
            "
          >
            <question.icon
              size={16}
              className="shrink-0 text-[#158A62] md:h-4 md:w-4 h-[15px] w-[15px]"
            />

            <span className="break-words">
              {question.text}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}