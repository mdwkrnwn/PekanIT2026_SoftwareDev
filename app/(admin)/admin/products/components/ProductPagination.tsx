"use client";

import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

interface ProductPaginationProps {
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  totalItems: number;

  onPageChange: (page: number) => void;
}

export default function ProductPagination({
  currentPage,
  totalPages,
  itemsPerPage,
  totalItems,
  onPageChange,
}: ProductPaginationProps) {
  const startItem =
    totalItems === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;

  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="mt-5 flex items-center justify-between">
      <p className="text-[14px] text-[#667085]">
        Menampilkan{" "}
        <span className="font-medium">{startItem}</span> –
        <span className="font-medium"> {endItem}</span> dari{" "}
        <span className="font-medium">{totalItems}</span> produk
      </p>

      <div className="flex items-center gap-2">
        {/* Prev */}
        <button
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
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
              onClick={() => onPageChange(page)}
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
          onClick={() => onPageChange(currentPage + 1)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#D0D5DD] disabled:cursor-not-allowed disabled:opacity-40"
        >
          <LuChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}