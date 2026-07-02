"use client";

import { Product } from "../product.type";
import {
  LuEllipsisVertical,
  LuPencil,
  LuTrash2,
} from "react-icons/lu";

interface ProductActionMenuProps {
  product: Product;
  openMenuId: number | null;
  setOpenMenuId: React.Dispatch<React.SetStateAction<number | null>>;

  onEdit: (product: Product) => void;
  onDelete: (id: number) => void;
}

export default function ProductActionMenu({
  product,
  openMenuId,
  setOpenMenuId,
  onEdit,
  onDelete,
}: ProductActionMenuProps) {
  return (
    <div className="flex justify-center gap-2">
      {/* Edit */}
      <button
        onClick={() => onEdit(product)}
        className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#EAECF0] hover:bg-[#F9FAFB]"
      >
        <LuPencil size={16} className="text-[#158A62]" />
      </button>

      {/* Delete */}
      <button
        onClick={() => onDelete(product.id)}
        className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#EAECF0] hover:bg-[#FEF2F2]"
      >
        <LuTrash2 size={16} className="text-[#DC2626]" />
      </button>

      {/* More */}
      <div className="relative">
        <button
          onClick={() =>
            setOpenMenuId(openMenuId === product.id ? null : product.id)
          }
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#EAECF0] hover:bg-[#F9FAFB]"
        >
          <LuEllipsisVertical size={16} className="text-[#667085]" />
        </button>

        {openMenuId === product.id && (
          <div className="absolute right-0 top-10 z-50 w-44 rounded-xl border border-[#EAECF0] bg-white shadow-lg">
            <button
              className="w-full px-4 py-3 text-left hover:bg-[#F9FAFB]"
              onClick={() => {
                navigator.clipboard.writeText(String(product.id));
                alert("ID produk berhasil disalin.");
                setOpenMenuId(null);
              }}
            >
              Salin ID Produk
            </button>

            <button
              className="w-full px-4 py-3 text-left hover:bg-[#F9FAFB]"
              onClick={() => {
                alert(
                  "🚧 Coming Soon!\n\nFitur Lihat Detail Produk sedang dalam pengembangan.",
                );
                setOpenMenuId(null);
              }}
            >
              Lihat Detail
            </button>
          </div>
        )}
      </div>
    </div>
  );
}