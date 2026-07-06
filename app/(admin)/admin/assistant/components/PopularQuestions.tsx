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
    <div className="rounded-2xl border border-[#EAECF0] bg-white p-5">
      <h3 className="text-[15px] font-semibold text-[#101828]">
        Pertanyaan Populer
      </h3>

      <div className="flex flex-wrap gap-3 mt-4">
        {questions.map((question) => (
          <button
            key={question.text}
            onClick={() => onSelect(question.text)}
            className="flex items-center gap-2 rounded-xl border border-[#EAECF0] bg-white px-3 py-3 text-left text-[12px] font-medium text-[#344054] transition hover:border-[#158A62] hover:bg-[#F6FCF9]"
          >
            <question.icon
              size={16}
              className="shrink-0 text-[#158A62]"
            />

            {question.text}
          </button>
        ))}
      </div>
    </div>
  );
}