"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Loader2, UploadCloudIcon } from "lucide-react";

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
  submitting: boolean;
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
  submitting,
  isEdit = false,
}: ProductModalProps) {
  console.log("submitting:", submitting);
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[900px] rounded-3xl p-0">
        <DialogHeader className="border-slate-100 px-8 py-6 border-b">
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

              <span className="text-slate-400 text-sm">
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
                placeholder="Ayam Geprek"
                className="rounded-xl border-slate-200 w-full h-12 px-4 mt-2 border"
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
                placeholder="Makanan"
                className="rounded-xl border-slate-200 w-full h-12 px-4 mt-2 border"
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
                placeholder="10.000"
                className="rounded-xl border-slate-200 w-full h-12 px-4 mt-2 border"
              />
            </div>

            <div>
              <label className="font-semibold">Deskripsi</label>

              <textarea
                rows={5}
                value={menuData.description}
                placeholder="Ayam Geprek Enak"
                onChange={(e) =>
                  setMenuData({
                    ...menuData,
                    description: e.target.value,
                  })
                }
                className="rounded-xl border-slate-200 w-full p-4 mt-2 border"
              />
            </div>
          </div>
        </div>

        <DialogFooter className="border-slate-100 px-8 py-5 mb-3 border-t">
          <button
            onClick={onClose}
            disabled={submitting}
            className="rounded-xl border-slate-200 px-6 py-3 font-semibold border"
          >
            Batal
          </button>

          <button
            onClick={onSubmit}
            disabled={submitting}
            className="flex min-w-[170px] items-center justify-center gap-2 rounded-xl bg-[#158A62] px-6 py-3 font-semibold text-white transition hover:bg-[#12744F] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting ? (
              <>
                <Loader2 className="animate-spin w-4 h-4" />
                {isEdit ? "Mengupdate..." : "Menyimpan..."}
              </>
            ) : (
              <>{isEdit ? "Update Produk" : "Simpan Produk"}</>
            )}

          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
