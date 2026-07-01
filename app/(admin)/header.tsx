import Image from "next/image"
import { IoChevronDown } from "react-icons/io5"

export function Header() {
  return (
    <header className="bg-background border-border z-999 sticky top-0 flex items-start justify-between p-8 mb-8 border-b">
      <div>
        <h1 className="text-[30px] font-semibold text-[#0B0F1F]">Ulasan</h1>

        <p className="mt-1 text-[#667085]">
          Pantau dan kelola semua ulasan yang diberikan pelanggan.
        </p>
      </div>

      <div className="flex items-center gap-3 cursor-pointer">
        <Image
          src="/avatar.png"
          alt="Ryn Askara"
          width={56}
          height={56}
          className="rounded-full"
        />

        <div>
          <h3 className="font-semibold text-[#101828]">Ryn Askara</h3>

          <p className="text-sm text-[#667085]">Pemilik</p>
        </div>

        <IoChevronDown
          size={20}
          className="text-[#667085] transition-transform hover:text-[#101828]"
        />
      </div>
    </header>
  )
}