"use client"
import Image from "next/image"
import ThemeSwitcher from "./ThemetogglerBtn"
import { FaChevronLeft, FaHeart } from "react-icons/fa"
import { LuMousePointer2 } from "react-icons/lu"
import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbSeparator, BreadcrumbLink, BreadcrumbPage } from "./ui/breadcrumb"
import { RxHamburgerMenu } from "react-icons/rx"
import { cn } from "@/lib/utils"

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const path = usePathname();
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isSidebarOpen]);
  return (
    <>
      <header className="sticky top-0 z-50 w-full">
        <div className='sm:flex hidden bg-background justify-center shadow-[#A9A1A140] shadow-md '>
          <nav className='grid grid-cols-[1fr_1fr_3fr] justify-center items-center w-[80vw]'>
            <section className="flex items-center">
              <Image loading='eager' height={1000} width={1000} className="max-w-24 max-h-24" src={'/UFLogo.png'} alt="logo" />
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
              <Link href={'/maps'} className="outline-1 outline-primary flex items-center justify-center p-2 transition-colors bg-transparent rounded-full cursor-pointer">
                <span className="bg-primary p-1 rounded-full">
                  <LuMousePointer2 className="scale-x-[-1] fill-background" strokeWidth={0} size={16} />
                </span>
              </Link>
              <ThemeSwitcher />
            </section>
          </nav>
          {/* Chat */}
        </div>
        <div className="flex w-full z-50 pr-5 sm:hidden justify-between items-center shadow-[#A9A1A140] shadow-md bg-background">
          <section>
            <Image loading='eager' height={1000} width={1000} className="max-w-24 max-h-24" src={'/UFLogo.png'} alt="logo" title="UFinder." />
          </section>
          <section>
            <RxHamburgerMenu size={25} onClick={() => setIsSidebarOpen((prev) => !prev)} />
          </section>
        </div>
        <aside className={cn(
          "sm:hidden -z-50 w-dvw h-dvh fixed bg-background transition-[top] duration-300 p-5 gap-5 flex flex-col ease-[cubic-bezier(0,0.22,0.12,1)]", isSidebarOpen ? "top-23.75" : "-top-1/2 invisible"
        )}>
          <section className={cn("z-50")}>
            <ul className="flex flex-col gap-6 text-lg font-medium">
              <li><Link href="/">Beranda</Link></li>
              <li><Link href="/explore">Explore</Link></li>
              <li><Link href="/favorit">Favorit</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/article">Article</Link></li>
            </ul>
          </section>
          <section className="flex flex-row items-center self-center justify-between w-full">
            <button className="outline-1 outline-primary flex items-center justify-center p-2 transition-colors bg-transparent rounded-full cursor-pointer">
              <FaHeart strokeWidth={0} size={24} className="fill-primary" />
            </button>
            <Link href={'/maps'} className="outline-1 outline-primary flex items-center justify-center p-2 transition-colors bg-transparent rounded-full cursor-pointer">
              <span className="bg-primary p-1 rounded-full">
                <LuMousePointer2 className="scale-x-[-1] fill-background" strokeWidth={0} size={16} />
              </span>
            </Link>
            <ThemeSwitcher />
          </section>
        </aside>
        {/* <ChatPopup isOpen={isOpen} setIsOpen={setIsOpen} /> */}
        {/* Breadcrumbs */}

      </header >
      {
        path != '/' && (<Breadcrumb className="w-[86vw] mt-5 mb-9">
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
      } </>
  )
}

export default Navbar