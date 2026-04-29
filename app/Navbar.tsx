import Image from "next/image"
import ThemeSwitcher from "../components/ThemetogglerBtn"
import { Heart, MousePointer2 } from "lucide-react"

function Navbar() {
  return (
    <header className='flex justify-center w-full shadow-[#A9A1A140] shadow-md'>
      <nav className='grid grid-cols-[1fr_1fr_3fr] justify-center items-center w-[86vw]'>
        <section className="flex items-center text-lg">
          <Image loading='eager' height={120} width={120} src={'/UFLogo.png'} alt="logo" />
          <span className="font-bold">
            UFinder.
          </span>
        </section>
        <section>
          <ul className="flex gap-6 **:font-medium">
            <li>Beranda</li>
            <li>Explore</li>
            <li>Favorit</li>
            <li>About</li>
          </ul>
        </section>
        <section className="place-self-end flex items-center self-center gap-3">
          <button className="outline-1 outline-primary flex items-center justify-center p-2 transition-colors bg-transparent rounded-full cursor-pointer">
            <Heart strokeWidth={0} size={24} fill="#1974FF" />
          </button>
          <button className="outline-1 outline-primary flex items-center justify-center p-2 transition-colors bg-transparent rounded-full cursor-pointer">
            <span className="bg-primary p-1 rounded-full">
              <MousePointer2 className="scale-x-[-1] fill-background" strokeWidth={0} size={16} />
            </span>
          </button>
          <ThemeSwitcher />
        </section>
      </nav>
    </header>
  )
}

export default Navbar