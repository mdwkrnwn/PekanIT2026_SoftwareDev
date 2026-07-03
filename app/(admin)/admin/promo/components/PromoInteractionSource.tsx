import Image from "next/image";

export default function PromoInteractionSource() {
  return (
    <div className="rounded-2xl border border-[#EAECF0] bg-white p-5">
      <h3 className="mb-5 text-[15px] font-semibold text-[#101828]">
        Sumber Interaksi Promo
      </h3>

      <Image
        src="/donut.png"
        alt="Sumber Interaksi Promo"
        width={400}
        height={180}
        className="w-full object-contain"
      />
    </div>
  );
}