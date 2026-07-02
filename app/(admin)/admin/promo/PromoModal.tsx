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

interface PromoModalProps {
  open: boolean;
  onClose: () => void;

  promoData: {
    title: string;
    description: string;
    promo_type: string;
    discount: string;
    target: string;
    schedule: string;
    start_date: string;
    end_date: string;
    status: string;
  };

  setPromoData: React.Dispatch<
    React.SetStateAction<{
      title: string;
      description: string;
      promo_type: string;
      discount: string;
      target: string;
      schedule: string;
      start_date: string;
      end_date: string;
      status: string;
    }>
  >;

  promoImage: File | null;

  handlePromoImage: (e: React.ChangeEvent<HTMLInputElement>) => void;

  onSubmit: () => void;

  isEdit?: boolean;
}

export default function PromoModal({
  open,
  onClose,
  promoData,
  setPromoData,
  promoImage,
  handlePromoImage,
  onSubmit,
  isEdit = false,
}: PromoModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[900px] h-[90vh] rounded-3xl overflow-hidden p-0 flex flex-col">
        <DialogHeader className="border-b border-slate-100 px-8 py-6">
          <DialogTitle className="text-3xl font-bold">
            {isEdit ? "Edit Promo" : "Tambah Promo"}
          </DialogTitle>

          <DialogDescription>
            {isEdit
              ? "Perbarui informasi promo."
              : "Lengkapi informasi promo yang akan ditampilkan pada tokomu."}
          </DialogDescription>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto">
          <div className="grid grid-cols-2 gap-8 p-8">
            {/* Upload */}
            <div>
              <label className="font-semibold">Banner Promo</label>

              <label className="mt-3 flex h-60 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 hover:border-[#158A62] transition-colors">
                <UploadCloudIcon size={34} className="text-[#158A62]" />

                <span className="mt-3 font-semibold">
                  {promoImage ? promoImage.name : "Upload Banner"}
                </span>

                <span className="text-sm text-slate-400">
                  JPG / PNG maksimal 5 MB
                </span>

                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handlePromoImage}
                />
              </label>
            </div>

            

            {/* Form */}
            <div className="space-y-5">
              <div>
                <label className="font-semibold">Judul Promo</label>

                <input
                  value={promoData.title}
                  onChange={(e) =>
                    setPromoData({
                      ...promoData,
                      title: e.target.value,
                    })
                  }
                  className="mt-2 h-12 w-full rounded-xl border border-slate-200 px-4"
                />
              </div>

              <div>
                <label className="font-semibold">Jenis Promo</label>

                <input
                  value={promoData.promo_type}
                  onChange={(e) =>
                    setPromoData({
                      ...promoData,
                      promo_type: e.target.value,
                    })
                  }
                  className="mt-2 h-12 w-full rounded-xl border border-slate-200 px-4"
                />
              </div>

              <div>
                <label className="font-semibold">Diskon (%)</label>

                <input
                  type="number"
                  value={promoData.discount}
                  onChange={(e) =>
                    setPromoData({
                      ...promoData,
                      discount: e.target.value,
                    })
                  }
                  placeholder="Contoh: 20"
                  className="mt-2 h-12 w-full rounded-xl border border-slate-200 px-4"
                />
              </div>

              <div>
                <label className="font-semibold">Target Promo</label>

                <input
                  value={promoData.target}
                  onChange={(e) =>
                    setPromoData({
                      ...promoData,
                      target: e.target.value,
                    })
                  }
                  className="mt-2 h-12 w-full rounded-xl border border-slate-200 px-4"
                />
              </div>

              <div>
                <label className="font-semibold">Jadwal Promo</label>

                <input
                  value={promoData.schedule}
                  onChange={(e) =>
                    setPromoData({
                      ...promoData,
                      schedule: e.target.value,
                    })
                  }
                  placeholder="Contoh: Setiap hari • 11.00 - 14.00"
                  className="mt-2 h-12 w-full rounded-xl border border-slate-200 px-4"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-semibold">Tanggal Mulai</label>

                  <input
                    type="date"
                    value={promoData.start_date}
                    onChange={(e) =>
                      setPromoData({
                        ...promoData,
                        start_date: e.target.value,
                      })
                    }
                    className="mt-2 h-12 w-full rounded-xl border border-slate-200 px-4"
                  />
                </div>

                <div>
                  <label className="font-semibold">Tanggal Selesai</label>

                  <input
                    type="date"
                    value={promoData.end_date}
                    onChange={(e) =>
                      setPromoData({
                        ...promoData,
                        end_date: e.target.value,
                      })
                    }
                    className="mt-2 h-12 w-full rounded-xl border border-slate-200 px-4"
                  />
                </div>
              </div>

              <div>
                <label className="font-semibold">Deskripsi</label>

                <textarea
                  rows={4}
                  value={promoData.description}
                  onChange={(e) =>
                    setPromoData({
                      ...promoData,
                      description: e.target.value,
                    })
                  }
                  className="mt-2 w-full rounded-xl border border-slate-200 p-4"
                />
              </div>
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
            {isEdit ? "Update Promo" : "Simpan Promo"}
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
