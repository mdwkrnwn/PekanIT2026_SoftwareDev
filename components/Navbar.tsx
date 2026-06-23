"use client";
import Image from "next/image";
import ThemeSwitcher from "./ThemeSwitcher";
import { FaChevronLeft, FaHeart } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbSeparator,
  BreadcrumbLink,
  BreadcrumbPage,
} from "./ui/breadcrumb";
import { RxHamburgerMenu } from "react-icons/rx";
import { cn } from "@/lib/utils";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const path = usePathname();
  const navItems = [
    { name: "Beranda", href: "/" },
    { name: "Explore", href: "/explore" },
    { name: "About", href: "/about" },
    { name: "Article", href: "/article" },
  ];
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
  const disAllowedBreadcrumb = ['detail', '/article/'];
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsSidebarOpen(false);
  }, [path]);
  return (
    <>
      <header className="z-999 sticky top-0 w-full mb-1">
        <div className="sm:flex hidden bg-background justify-center shadow-[#A9A1A140] shadow-md">
          <nav className="grid grid-cols-[1fr_1fr_3fr] justify-center items-center w-[80vw] py-6">
            <section className="flex items-center">
              <Image
                loading="eager"
                height={1000}
                width={1000}
                className="max-w-24 max-h-24"
                src={"/Bakul.png"}
                alt="logo"
              />
            </section>
            <section>
              <ul className="flex gap-6 text-lg font-medium ">
                {navItems.map((item) => {
                  const isActive =
                    item.href === "/explore"
                      ? path === "/explore" || path.startsWith("/detail")
                      : item.href === "/article"
                        ? path.startsWith("/article")
                        : path === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`relative inline-block pb-3
                      after:absolute after:bottom-0 after:left-0
                      after:rounded-full after:w-full after:h-1 after:transition-all
                      ${isActive
                            ? "after:bg-primary text-[#169876]"
                            : "after:bg-transparent hover:after-text-primary"
                          }`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </section>
            <section className="place-self-end flex items-center self-center gap-3">
              <Link
                href={"/favorit"}
                className="outline-1 outline-primary flex items-center justify-center p-2 transition-colors bg-transparent rounded-full cursor-pointer"
              >
                <span>
                  <FaHeart strokeWidth={0} size={24} className="fill-primary" />
                </span>
              </Link>
              <Link
                href={"/maps"}
                className="outline-1 outline-primary flex items-center justify-center p-2 transition-colors bg-transparent rounded-full cursor-pointer"
              >
                <span>
                  <SiGooglemaps
                    className="fill-primary"
                    strokeWidth={0}
                    size={26}
                  />
                </span>
              </Link>
              <ThemeSwitcher />
            </section>
          </nav>
          {/* Chat */}
        </div>
        <div className="flex w-full z-50 pr-5 sm:hidden justify-between items-center shadow-[#A9A1A140] shadow-md bg-background">
          <section>
            <Image
              loading="eager"
              height={1000}
              width={1000}
              className="max-w-24 max-h-24"
              src={"/UFLogo.png"}
              alt="logo"
              title="Bakool."
            />
          </section>
          <section>
            <RxHamburgerMenu
              size={25}
              onClick={() => setIsSidebarOpen((prev) => !prev)}
            />
          </section>
        </div>
        <aside
          className={cn(
            "sm:hidden -z-50 w-dvw h-dvh fixed bg-background transition-[top] duration-300 p-5 gap-5 flex flex-col ease-[cubic-bezier(0,0.22,0.12,1)]",
            isSidebarOpen ? "top-23.75" : "-top-1/2 invisible",
          )}
        >
          <section className={cn("z-50")}>
            <ul className="flex flex-col gap-6 text-lg font-medium">
              <li>
                <Link href="/">Beranda</Link>
              </li>
              <li>
                <Link href="/explore">Explore</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/article">Article</Link>
              </li>
            </ul>
          </section>
          <section className="flex flex-row items-center self-center justify-between w-full">
            <Link
              href={"/favorit"}
              className="outline-1 outline-primary flex items-center justify-center p-2 transition-colors bg-transparent rounded-full cursor-pointer"
            >
              <span>
                <FaHeart strokeWidth={0} size={24} className="fill-primary" />
              </span>
            </Link>
            <Link
              href={"/maps"}
              className="outline-1 outline-primary flex items-center justify-center p-2 transition-colors bg-transparent rounded-full cursor-pointer"
            >
              <span>
                <SiGooglemaps
                  className="fill-primary"
                  strokeWidth={0}
                  size={26}
                />
              </span>
            </Link>
            <ThemeSwitcher />
          </section>
        </aside>
        {/* <ChatPopup isOpen={isOpen} setIsOpen={setIsOpen} /> */}
        {/* Breadcrumbs */}
      </header>

      {path == "/" || disAllowedBreadcrumb.some(item => path.includes(item)) ? "" : (
        <Breadcrumb className="w-[80vw] mt-5 mb-9">
          <BreadcrumbList>
            {/* Back Button */}
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link
                  href="/"
                  className="flex items-center gap-2 text-[1.375rem] font-semibold hover:text-primary transition"
                >
                  Home
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>

            {/* Dynamic Path */}
            {
              disAllowedBreadcrumb.some(item => path.includes(item)) ? "" :
                <>
                  {path
                    .split("/")
                    .filter(Boolean)
                    .map((item, i, arr) => (
                      <div key={i} className="flex items-center gap-2">
                        <BreadcrumbSeparator>
                          <FaChevronLeft size={25} />
                        </BreadcrumbSeparator>
                        {i === arr.length - 1 ? (
                          <BreadcrumbPage className="text-[1.375rem] font-semibold text-foreground">
                            {item.charAt(0).toUpperCase() + item.slice(1)}
                          </BreadcrumbPage>
                        ) : (
                          <BreadcrumbLink asChild>
                            <Link
                              href={`/${arr.slice(0, i + 1).join("/")}`}
                              className="text-[1.375rem] font-semibold text-muted-foreground hover:text-primary transition"
                            >
                              {item.charAt(0).toUpperCase() + item.slice(1)}
                            </Link>
                          </BreadcrumbLink>
                        )}
                      </div>
                    ))}
                </>

            }
          </BreadcrumbList>
        </Breadcrumb>
      )}
    </>
  );
}

export default Navbar;
