"use client";

import {
  LuChevronLeft,
  LuChevronRight,
} from "react-icons/lu";

interface ReviewPaginationProps {
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  totalItems: number;
  onPageChange: React.Dispatch<React.SetStateAction<number>>;
}

export default function ReviewPagination({
  currentPage,
  totalPages,
  itemsPerPage,
  totalItems,
  onPageChange,
}: ReviewPaginationProps) {
  return (
    <div className="mt-5 flex items-center justify-between">
      <p className="text-[13px] text-[#667085]">
        Menampilkan{" "}
        <span className="font-medium">
          {totalItems === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1}
        </span>{" "}
        -{" "}
        <span className="font-medium">
          {Math.min(currentPage * itemsPerPage, totalItems)}
        </span>{" "}
        dari <span className="font-medium">{totalItems}</span> ulasan
      </p>

      <div className="flex items-center mb-5 gap-2">
        <button
          disabled={currentPage === 1}
          onClick={() => onPageChange((prev) => prev - 1)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#D0D5DD] disabled:cursor-not-allowed disabled:opacity-40"
        >
          <LuChevronLeft size={16} />
        </button>

        {Array.from({ length: totalPages }).map((_, index) => {
          const page = index + 1;

          return (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`flex h-9 w-9 items-center justify-center rounded-lg text-[13px] font-semibold transition ${
                currentPage === page
                  ? "bg-[#158A62] text-white"
                  : "border border-[#D0D5DD] text-[#344054] hover:bg-[#F9FAFB]"
              }`}
            >
              {page}
            </button>
          );
        })}

        <button
          disabled={currentPage === totalPages}
          onClick={() => onPageChange((prev) => prev + 1)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#D0D5DD] disabled:cursor-not-allowed disabled:opacity-40"
        >
          <LuChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}