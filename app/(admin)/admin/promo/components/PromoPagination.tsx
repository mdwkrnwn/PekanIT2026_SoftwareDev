"use client";

import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

interface PromoPaginationProps {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;

  totalPages: number;
  itemsPerPage: number;

  totalItems: number;
}

export default function PromoPagination({
  currentPage,
  setCurrentPage,
  totalPages,
  itemsPerPage,
  totalItems,
}: PromoPaginationProps) {
  const start =
    totalItems === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;

  const end = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="mt-5 flex items-center justify-between">
      <p className="text-[14px] text-[#667085]">
        Menampilkan{" "}
        <span className="font-medium">{start}</span> –
        <span className="font-medium"> {end}</span> dari{" "}
        <span className="font-medium">{totalItems}</span> promo
      </p>

      <div className="flex items-center gap-2">
        {/* Prev */}
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#D0D5DD] disabled:cursor-not-allowed disabled:opacity-40"
        >
          <LuChevronLeft size={18} />
        </button>

        {/* Number */}
        {Array.from({ length: totalPages }).map((_, index) => {
          const page = index + 1;

          return (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`flex h-10 w-10 items-center justify-center rounded-lg font-semibold transition ${
                currentPage === page
                  ? "bg-[#158A62] text-white"
                  : "border border-[#D0D5DD] text-[#344054] hover:bg-[#F9FAFB]"
              }`}
            >
              {page}
            </button>
          );
        })}

        {/* Next */}
        <button
          disabled={currentPage === totalPages || totalPages === 0}
          onClick={() => setCurrentPage((p) => p + 1)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#D0D5DD] disabled:cursor-not-allowed disabled:opacity-40"
        >
          <LuChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}