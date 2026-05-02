import Image from "next/image"
import ThemeSwitcher from "./ThemetogglerBtn"
import { FaHeart } from "react-icons/fa"
import { LuMousePointer2 } from "react-icons/lu"
import Link from "next/link"

function Navbar() {
  return (
    <header className='flex justify-center w-full shadow-[#A9A1A140] shadow-md mb-10'>
      <nav className='grid grid-cols-[1fr_1fr_3fr] justify-center items-center w-[86vw]'>
        <section className="flex items-center">
          <Image loading='eager' height={1000} width={1000} className="max-w-24 max-h-24" src={'/UFLogo.png'} alt="logo" />
          <span className="text-lg font-bold">
            UFinder.
          </span>
        </section>
        <section>
          <ul className="flex gap-6 text-lg font-medium">
            <li><Link href="/beranda">Beranda</Link></li>
            <li><Link href="/explore">Explore</Link></li>
            <li><Link href="/favorit">Favorit</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/article">Article</Link></li>
          </ul>
        </section>
        <section className="place-self-end flex items-center self-center gap-3">
          <button className="outline-1 outline-primary flex items-center justify-center p-2 transition-colors bg-transparent rounded-full cursor-pointer">
            <FaHeart strokeWidth={0} size={24} className="fill-primary" />
          </button>
          <button className="outline-1 outline-primary flex items-center justify-center p-2 transition-colors bg-transparent rounded-full cursor-pointer">
            <span className="bg-primary p-1 rounded-full">
              <LuMousePointer2 className="scale-x-[-1] fill-background" strokeWidth={0} size={16} />
            </span>
          </button>
          <ThemeSwitcher />
        </section>
      </nav>
    </header>
  )
}

export default Navbar