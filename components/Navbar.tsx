"use client";
import Image from "next/image";
import ThemeSwitcher from "./ThemeSwitcher";
import { FaChevronLeft, FaSearch } from "react-icons/fa";
import Link from "next/link";
import { useRef } from "react";
import { FaHeart } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useWishlist } from "@/hooks/useWishlist";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { User, BadgeCheck, MessageSquareText, LogOut } from "lucide-react";
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

import header from "./Navbar.module.css";

function Navbar() {
  const favorites = useWishlist();

  // logout
  const router = useRouter();
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      alert(error.message);
      return;
    }

    setUser(null);
    setIsProfileOpen(false);

    router.push("/");
  };

  const [user, setUser] = useState<any>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user: authUser },
      } = await supabase.auth.getUser();

      if (!authUser) return;

      const { data: profile, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", authUser.id)
        .single();

      if (error) {
        console.error(error);
        return;
      }

      setUser(profile);
    };

    getUser();
  }, []);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const path = usePathname();
  const navItems = [
    { name: "Beranda", href: "/" },
    { name: "Explore", href: "/explore" },
    { name: "Solusi", href: "/solusi" },
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
  const disAllowedBreadcrumb = [
    "detail",
    "/article/",
    "/profile",
    "/ulasan-saya",
    "/achievements",
  ];
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsSidebarOpen(false);
  }, [path]);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlHeader);

    return () => {
      window.removeEventListener("scroll", controlHeader);
    };
  }, [lastScrollY]);
  if (path.startsWith("/admin")) return;

  const avatar =
    user?.avatar_url && user.avatar_url.startsWith("http")
      ? user.avatar_url
      : "/ava.png";

  return (
    <>
      <header
        className={`z-999 sticky top-0 w-full mb-1 transition-transform col-span-2 ${isVisible ? header.header_show : header.header_hide}`}
      >
        <div className="sm:flex hidden bg-background justify-center shadow-[#A9A1A140] shadow-md">
          <nav className="grid grid-cols-[1fr_1fr_3fr] justify-center items-center w-[80vw] py-6">
            <section className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/Bakul.png"
                  alt="Bakool"
                  width={100}
                  height={100}
                  className="h-auto w-[100px] -ml-8"
                  priority
                />

                <h2 className="text-[25px] font-semibold -ml-3 text-[#0B0F1F] dark:text-white ">
                  Bakool
                </h2>
              </Link>
            </section>
            <section>
              <ul className=" flex gap-6 text-lg font-medium">
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
                      ${
                        isActive
                          ? "after:bg-primary text-primary-foreground"
                          : "after:bg-transparent hover:text-primary-foreground/50"
                      }`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </section>
            <section className="place-self-end flex items-center self-center gap-3">
              <div className="flex items-center mr-10">
                <div className="relative w-full">
                  <FaSearch className="left-4 top-1/2 text-foreground/40 absolute -translate-y-1/2" />
                  <input
                    type="search"
                    // value={}
                    // onChange={(e) => handleSearchChange(e.target.value)}
                    placeholder="Cari UMKM, produk atau lokasi..."
                    className="pl-11 focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:opacity-50 border-border w-full py-3 pr-4 border rounded-lg outline-none"
                  />
                </div>
              </div>
              <ThemeSwitcher className={user ? "mr-0" : "mr-5"} />

              {user ? (
                <div className="flex items-center gap-4 mr-2">
                  {/* Favorite */}
                  <Link
                    href="/favorit"
                    className="relative outline-1 outline-primary-foreground flex items-center justify-center p-2 rounded-full transition-colors bg-transparent hover:bg-primary/10"
                  >
                    <FaHeart className="text-primary-foreground h-6 w-6" />

                    {favorites.length > 0 && (
                      <span className="absolute -top-1 -right-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-semibold text-white">
                        {favorites.length}
                      </span>
                    )}
                  </Link>

                  {/* Profile */}
                  <div ref={profileRef} className="relative">
                    <button
                      onClick={() => setIsProfileOpen((prev) => !prev)}
                      className="flex items-center gap-3 ml-2" 
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-full outline-1 outline-primary-foreground  bg-[#EBF3F0]">
                        <Image
                          src={avatar}
                          alt={user.full_name}
                          width={38}
                          height={38}
                          className="rounded-full mt-2 mb-1 object-cover"
                        />
                      </div>

                      <span className="font-semibold text-sm">
                        {user.full_name}
                      </span>

                      <IoChevronDown
                        className={`text-gray-500 transition-transform ${
                          isProfileOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isProfileOpen && (
                      <div
                        className={cn(
                          "absolute right-0 mt-4 w-60 rounded-3xl bg-muted shadow-xl p-5 z-50",
                          "*:hover:bg-muted-foreground *:hover:text-background",
                        )}
                      >
                        <Link
                          href="/profile"
                          className="flex group items-center gap-4 px-4 py-4 rounded-xl  transition"
                        >
                          <User
                            size={26}
                            className="text-[#] group-hover:text-white"
                          />
                          <span className="font-medium">Profil Saya</span>
                        </Link>

                        <hr className="my-2 border-0 border-t border-[#E8EAEE]" />
                        <Link
                          href="/achievements"
                          className="flex group items-center gap-4 px-4 py-4 rounded-xl  transition"
                        >
                          <BadgeCheck
                            size={26}
                            className="text-[#] group-hover:text-white"
                          />
                          <span className="font-medium text-[#0B0F1F] group-hover:text-white">
                            Achievement & Badge
                          </span>
                        </Link>

                        <hr className="my-2 border-0 border-t border-[#E8EAEE]" />
                        <Link
                          href="/ulasan-saya"
                          className="flex group items-center gap-4 px-4 py-4 rounded-xl  transition"
                        >
                          <MessageSquareText
                            size={26}
                            className="text-[#] group-hover:text-white"
                          />
                          <span className="font-medium text-[#0B0F1F] group-hover:text-white">
                            Ulasan Saya
                          </span>
                        </Link>

                        <hr className="my-2 border-0 border-t border-[#E8EAEE]" />
                        <button
                          onClick={handleLogout}
                          className="flex w-full items-center gap-4 px-4 py-4 rounded-xl text-red-500 hover:bg-red-50 transition"
                        >
                          <LogOut size={26} />
                          <span className="font-medium text-[#0B0F1F] group-hover:text-white">
                            Keluar
                          </span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <Link
                  href="/login"
                  className="flex items-center gap-3 rounded-lg border border-border px-5 py-3 bg-primary text-white font-semibold"
                >
                  Masuk / Daftar
                </Link>
              )}
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
                <Link href="/solusi">Solusi</Link>
              </li>
              <li>
                <Link href="/article">Article</Link>
              </li>
            </ul>
          </section>
          <section className="flex flex-row items-center self-center justify-between w-full">
            <ThemeSwitcher />
          </section>
        </aside>
        {/* <ChatPopup isOpen={isOpen} setIsOpen={setIsOpen} /> */}
        {/* Breadcrumbs */}
      </header>

      {!path.startsWith("/login") && !path.startsWith("/register") && (
        <>
          {path == "/" ||
          disAllowedBreadcrumb.some((item) => path.includes(item)) ? (
            ""
          ) : (
            <Breadcrumb className="w-[80vw] mt-5 mb-9 col-span-2">
              <BreadcrumbList>
                {/* Back Button */}
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link
                      href="/"
                      className="flex items-center gap-2 text-[1.375rem] font-semibold hover:text-primary-foreground transition"
                    >
                      Home
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>

                {/* Dynamic Path */}
                {disAllowedBreadcrumb.some((item) => path.includes(item)) ? (
                  ""
                ) : (
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
                                className="text-[1.375rem] font-semibold text-muted-foreground hover:text-primary-foreground transition"
                              >
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                              </Link>
                            </BreadcrumbLink>
                          )}
                        </div>
                      ))}
                  </>
                )}
              </BreadcrumbList>
            </Breadcrumb>
          )}
        </>
      )}
    </>
  );
}

export default Navbar;
