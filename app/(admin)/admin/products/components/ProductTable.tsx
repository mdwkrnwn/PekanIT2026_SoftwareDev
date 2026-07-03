import { Product } from "../product.type";
import Image from "next/image";
import ProductActionMenu from "./ProductActionMenu";
import { Skeleton } from "@/components/ui/skeleton";
import { PackageOpen } from "lucide-react";

interface ProductTableProps {
  products: Product[];
  loading: boolean;
  openMenuId: number | null;
  setOpenMenuId: React.Dispatch<React.SetStateAction<number | null>>;
  onEdit: (product: Product) => void;
  onDelete: (id: number) => void;
}

export default function ProductTable({
  products,
  loading,
  openMenuId,
  setOpenMenuId,
  onEdit,
  onDelete,
}: ProductTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#EAECF0] bg-white">
      {/* Header */}
      <div className="grid grid-cols-[3fr_1fr_1fr_1fr_1fr_90px] border-b border-[#EAECF0] bg-[#FCFCFD] px-6 py-4 text-[15px] font-semibold text-[#667085]">
        <p>Produk</p>
        <p>Kategori</p>
        <p>Harga</p>
        <p>Dilihat</p>
        <p>Favorit</p>
        <p className="text-center">Aksi</p>
      </div>

      {/* Body */}
      {loading ? (
        Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="grid grid-cols-[3fr_1fr_1fr_1fr_1fr_90px] items-center border-b border-[#EAECF0] px-6 py-5"
          >
            <div className="flex items-center gap-4">
              <Skeleton className="h-[70px] w-[70px] rounded-md" />

              <div className="space-y-2">
                <Skeleton className="h-5 w-40" />
                <Skeleton className="h-4 w-52" />
                <Skeleton className="h-4 w-28" />
              </div>
            </div>

            <Skeleton className="h-7 w-20 rounded-full" />

            <Skeleton className="h-5 w-24" />

            <Skeleton className="h-5 w-10" />

            <Skeleton className="h-5 w-10" />

            <div className="flex justify-center">
              <Skeleton className="h-8 w-8 rounded-full" />
            </div>
          </div>
        ))
      ) : products.length === 0 ? (
        <div className="flex h-64 items-center justify-center">
          <div className="text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#F9FAFB]">
              <PackageOpen className="h-10 w-10 text-[#98A2B3]" />
            </div>

            <h3 className="mt-5 text-lg font-semibold text-[#101828]">
              Belum ada produk
            </h3>

            <p className="mt-2 text-sm text-[#667085]">
              Tambahkan produk pertamamu untuk mulai berjualan.
            </p>
          </div>
        </div>
      ) : (
        products.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-[3fr_1fr_1fr_1fr_1fr_90px] items-center border-b border-[#EAECF0] px-6 py-5 last:border-none"
          >
            {/* Produk */}
            <div className="flex items-center gap-4">
              <Image
                src={item.image}
                alt={item.name}
                width={70}
                height={70}
                className="rounded-sm object-cover"
              />

              <div>
                <h3 className="text-[18px] font-semibold text-[#101828]">
                  {item.name}
                </h3>

                <p className="mt-1 text-[14px] text-[#667085]">
                  {item.description}
                </p>

                <p className="text-[14px] text-[#667085]">{item.store}</p>
              </div>
            </div>

            {/* Kategori */}
            <div>
              <span className="rounded-full bg-[#E8F7EF] px-3 py-1 text-[12px] font-semibold text-[#158A62]">
                {item.category}
              </span>
            </div>

            {/* Harga */}
            <p className="text-[15px] text-[#344054]">
              Rp {Number(item.price).toLocaleString("id-ID")}
            </p>

            {/* Dilihat */}
            <p className="text-[15px] text-[#344054]">{item.views}</p>

            {/* Favorit */}
            <p className="text-[15px] text-[#344054]">{item.favorite}</p>

            {/* Aksi */}
            <ProductActionMenu
              product={item}
              openMenuId={openMenuId}
              setOpenMenuId={setOpenMenuId}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          </div>
        ))
      )}
    </div>
  );
}
