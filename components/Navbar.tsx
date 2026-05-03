"use client"
import Image from "next/image"
import ThemeSwitcher from "./ThemetogglerBtn"
import { FaChevronLeft, FaHeart } from "react-icons/fa"
import { LuMousePointer2 } from "react-icons/lu"
import Link from "next/link"
import ChatPopup from "./Chat"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbSeparator, BreadcrumbLink, BreadcrumbPage } from "./ui/breadcrumb"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname()
  return (
    <header className="w-full">
      <div className='flex justify-center shadow-[#A9A1A140] shadow-md mb-10'>
        <nav className='grid grid-cols-[1fr_1fr_3fr] justify-center items-center w-[86vw]'>
          <section className="flex items-center">
            <Image loading='eager' height={1000} width={1000} className="max-w-24 max-h-24" src={'/UFLogo.png'} alt="logo" />
            <span className="text-lg font-bold">
              UFinder.
            </span>
          </section>
          <section>
            <ul className="flex gap-6 text-lg font-medium">
              <li><Link href="/">Beranda</Link></li>
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
            <button onClick={() => setIsOpen((prev) => !prev)} className="outline-1 outline-primary flex items-center justify-center p-2 transition-colors bg-transparent rounded-full cursor-pointer">
              <span className="bg-primary p-1 rounded-full">
                <LuMousePointer2 className="scale-x-[-1] fill-background" strokeWidth={0} size={16} />
              </span>
            </button>
            <ThemeSwitcher />
          </section>
        </nav>
        {/* Chat */}
        <ChatPopup isOpen={isOpen} setIsOpen={setIsOpen} />

      </div>
      {/* Breadcrumbs */}
      {
        path != '/' && (<Breadcrumb className="ml-[6.72vw] mb-9">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbSeparator>
                <FaChevronLeft size={25} className="" />
              </BreadcrumbSeparator>
              <BreadcrumbLink asChild>
                <Link className="text-[1.375rem] font-semibold " href="/">Kembali</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            {
              path.split('/').map((item, i) => {
                if (!item) {
                  return false
                }
                return (
                  <>
                    <BreadcrumbSeparator key={i}>
                      <FaChevronLeft size={25} />
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                      <BreadcrumbPage className="text-[1.375rem] font-semibold text-foreground">{item.charAt(0).toUpperCase() + item.slice(1)}</BreadcrumbPage>
                    </BreadcrumbItem>
                  </>
                )
              })
            }
          </BreadcrumbList>
        </Breadcrumb>)
      }
    </header>
  )
}

export default Navbar