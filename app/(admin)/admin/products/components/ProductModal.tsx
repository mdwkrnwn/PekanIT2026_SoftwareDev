"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { UploadCloudIcon } from "lucide-react";

interface ProductModalProps {
  open: boolean;
  onClose: () => void;

  menuData: {
    name: string;
    description: string;
    category: string;
    price: string;
  };

  setMenuData: React.Dispatch<
    React.SetStateAction<{
      name: string;
      description: string;
      category: string;
      price: string;
    }>
  >;

  productImage: File | null;
  handleProductImage: (e: React.ChangeEvent<HTMLInputElement>) => void;

  onSubmit: () => void;

  isEdit?: boolean;
}

export default function ProductModal({
  open,
  onClose,
  menuData,
  setMenuData,
  productImage,
  handleProductImage,
  onSubmit,
  isEdit = false,
}: ProductModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[900px] rounded-3xl overflow-hidden p-0">
        <DialogHeader className="border-b border-slate-100 px-8 py-6">
          <DialogTitle className="text-3xl font-bold">
            {isEdit ? "Edit Produk" : "Tambah Produk"}
          </DialogTitle>

          <DialogDescription>
            {isEdit
              ? "Perbarui informasi produk."
              : "Lengkapi informasi produk yang akan ditampilkan pada tokomu."}
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-8 p-8">
          {/* Upload */}
          <div>
            <label className="font-semibold">Foto Produk</label>

            <label className="mt-3 flex h-60 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 hover:border-[#158A62]">
              <UploadCloudIcon size={34} className="text-[#158A62]" />

              <span className="mt-3 font-semibold">
                {productImage ? productImage.name : "Upload Foto"}
              </span>

              <span className="text-sm text-slate-400">
                JPG / PNG maksimal 5 MB
              </span>

              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleProductImage}
              />
            </label>
          </div>

          {/* Form */}
          <div className="space-y-5">
            <div>
              <label className="font-semibold">Nama Produk</label>

              <input
                value={menuData.name}
                onChange={(e) =>
                  setMenuData({
                    ...menuData,
                    name: e.target.value,
                  })
                }
                className="mt-2 h-12 w-full rounded-xl border border-slate-200 px-4"
              />
            </div>

            <div>
              <label className="font-semibold">Kategori</label>

              <input
                value={menuData.category}
                onChange={(e) =>
                  setMenuData({
                    ...menuData,
                    category: e.target.value,
                  })
                }
                className="mt-2 h-12 w-full rounded-xl border border-slate-200 px-4"
              />
            </div>

            <div>
              <label className="font-semibold">Harga</label>

              <input
                type="number"
                value={menuData.price}
                onChange={(e) =>
                  setMenuData({
                    ...menuData,
                    price: e.target.value,
                  })
                }
                className="mt-2 h-12 w-full rounded-xl border border-slate-200 px-4"
              />
            </div>

            <div>
              <label className="font-semibold">Deskripsi</label>

              <textarea
                rows={5}
                value={menuData.description}
                onChange={(e) =>
                  setMenuData({
                    ...menuData,
                    description: e.target.value,
                  })
                }
                className="mt-2 w-full rounded-xl border border-slate-200 p-4"
              />
            </div>
          </div>
        </div>

        <DialogFooter className="border-t mb-3 border-slate-100 px-8 py-5">
          <button
            onClick={onClose}
            className="rounded-xl border border-slate-200 px-6 py-3 font-semibold"
          >
            Batal
          </button>

          <button
            onClick={onSubmit}
            className="rounded-xl bg-[#158A62] px-6 py-3 font-semibold text-white"
          >
            {isEdit ? "Update Produk" : "Simpan Produk"}
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
