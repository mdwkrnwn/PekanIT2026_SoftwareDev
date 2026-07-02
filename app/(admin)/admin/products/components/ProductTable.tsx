import { Product } from "../product.type";
import Image from "next/image";
import ProductActionMenu from "./ProductActionMenu";
interface ProductTableProps {
  products: Product[];
  openMenuId: number | null;
  setOpenMenuId: React.Dispatch<React.SetStateAction<number | null>>;

  onEdit: (product: Product) => void;
  onDelete: (id: number) => void;
}
export default function ProductTable({
  products,
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
      {products.map((item) => (
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
      ))}
    </div>
  );
}
