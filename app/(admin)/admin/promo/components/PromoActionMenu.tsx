"use client";

import { Promo } from "../promo.type";
import {
  LuEllipsisVertical,
  LuEye,
  LuPencil,
  LuTrash2,
} from "react-icons/lu";

interface PromoActionMenuProps {
  open: boolean;

  onToggle: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

export default function PromoActionMenu({
  open,
  onToggle,
  onEdit,
  onDelete,
}: PromoActionMenuProps) {
  return (
    <div className="relative flex justify-center">
      <button
        onClick={onToggle}
        className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#EAECF0] hover:bg-[#F9FAFB]"
      >
        <LuEllipsisVertical size={16} className="text-[#667085]" />
      </button>

      {open && (
        <div className="absolute right-0 top-10 z-50 w-44 rounded-xl border border-[#EAECF0] bg-white py-2 shadow-xl">
          <button
            onClick={onEdit}
            className="flex w-full items-center gap-3 px-4 py-2 text-left text-sm hover:bg-[#F9FAFB]"
          >
            <LuPencil size={16} />
            Edit
          </button>

          <button
            onClick={() => {
              alert("🚧 Coming Soon");
            }}
            className="flex w-full items-center gap-3 px-4 py-2 text-left text-sm hover:bg-[#F9FAFB]"
          >
            <LuEye size={16} />
            Detail
          </button>

          <button
            onClick={onDelete}
            className="flex w-full items-center gap-3 px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50"
          >
            <LuTrash2 size={16} />
            Hapus
          </button>
        </div>
      )}
    </div>
  );
}