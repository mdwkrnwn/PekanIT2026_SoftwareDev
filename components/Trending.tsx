import { cn } from "@/lib/utils";
import Link from "next/link";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { LuMousePointer2 } from "react-icons/lu";
import Image from "next/image";
import animation from "./page.module.css";

const trendingImages = [
  "/assets/laginaik/yglgnaik1.jpg",
  "/assets/laginaik/yglgnaik2.jpg",
  "/assets/laginaik/yglgnaik3.jpg",
  "/assets/laginaik/yglgnaik4.jpg",
];

export function Trending() {
  return (
    <div className="w-[86vw] mx-auto mt-16">
      <div className="flex items-end justify-between gap-2">
        <div>
          <h3 className="text-primary text-[1.375rem] font-bold">
            Hidden Gem Sekitarmu
          </h3>
          <p className="text-[1.063rem] mt-1">
            Temuin hidden gem deket rumah kamu
          </p>
        </div>
        <Link
          href={"/maps"}
          className="hover:bg-blue-50 text-primary border-primary md:px-5 md:py-2 flex items-center gap-2 p-2 font-bold transition-colors border-2 rounded-full"
        >
          <span className="bg-primary p-1 rounded-full">
            <LuMousePointer2
              className="scale-x-[-1] md:size-4 size-6 fill-background"
              strokeWidth={0}
              size={16}
            />
          </span>
          <span className="md:block hidden">Lokasi Saya</span>
        </Link>
      </div>

      <div className="mt-4">
        <h3 className="wrap-break-word md:hidden mt-6 mb-2 text-xl font-bold">
          Yang Lagi Naik Daun Nih 👀
        </h3>
        <p className="opacity-90 mb-2 md:hidden text-[clamp(1rem,1.25rem,2vw)] ">
          Cari produk lokal yang lagi viral dibahas banyak orang.
        </p>
        <div className="w-[86vw] mx-auto text-white rounded-[2rem] px-12 flex md:mt-8 mt-4 lg:h-100 h-[clamp(50px,50dvh,25rem)] overflow-hidden relative shadow-lg bg-[linear-gradient(90deg,#2D7FFF_0%,#0F5EDB_45%,#0B2D6B_100%)]">
          <div className="md:flex md:gap-5 z-10 flex-col justify-center hidden w-1/2 pr-10">
            <h3 className=" text-[clamp(2rem,3.125rem,3vw)] wrap-break-word font-bold">
              Yang Lagi Naik <br /> Daun Nih 👀
            </h3>
            <p className="opacity-90 font-normal mb-2 mt--10 text-[clamp(1rem,1.25rem,2vw)] ">
              Coba produk lokal yang lagi viral dibahas <br /> banyak orang.
            </p>
            <Link
              href={"/explore"}
              className="w-fit hover:bg-slate-100 text-primary flex items-center gap-2 px-6 text-[clamp(1rem,1rem,1.5vw)] py-2 md:py-3 font-bold transition-colors bg-white rounded-full"
            >
              Eksplor Sekarang <BsArrowRightCircleFill className="size-6" />
            </Link>
          </div>
          <div
            className={cn(
              "relative z-0 flex md:w-1/2 w-full gap-6 overflow-hidden",
              "*:w-full lg:*:w-1/2",
            )}
          >
            {/* Column 1: Scrolling Up */}
            <div
              style={{
                WebkitMaskImage:
                  "linear-gradient(to top, transparent, black 10%, black 90%, transparent)",
              }}
            >
              <div
                className={cn(
                  animation["animate_scroll_y_up"],
                  "flex flex-col gap-6 pb-6",
                )}
              >
                {[...Array(4)].map((_, i) => (
                  <div
                    key={`up-${i}`}
                   className="relative aspect-[4/5] shrink-0 overflow-hidden rounded-2xl shadow-md">
                    <Image
                      src={trendingImages[i % trendingImages.length]}
                      fill
                      className="object-cover"
                      alt="Trending Item"
                    />
                  </div>
                ))}
              </div>
              <div
                className={cn(
                  animation["animate_scroll_y_up"],
                  "flex flex-col gap-6 pb-6",
                )}
              >
                {[...Array(4)].map((_, i) => (
                  <div
                    key={`up-${i}`}
                   className="relative aspect-[4/5] shrink-0 overflow-hidden rounded-2xl shadow-md">
                    <Image
                      src={trendingImages[i % trendingImages.length]}
                      fill
                      className="object-cover"
                      alt="Trending Item"
                    />
                  </div>
                ))}
              </div>
            </div>
            {/* Column 2: Scrolling Down */}
            <div className="mask-[linear-gradient(to_top,transparent,black_10%,black_90%,transparent)] hidden lg:block">
              <div
                className={cn(
                  animation["animate_scroll_y_down"],
                  "flex flex-col gap-6 pb-6",
                )}
              >
                {[...Array(4)].map((_, i) => (
                  <div
                    key={`up-${i}`}
                   className="relative aspect-[4/5] shrink-0 overflow-hidden rounded-2xl shadow-md">
                    <Image
                      src={trendingImages[i % trendingImages.length]}
                      fill
                      className="object-cover"
                      alt="Trending Item"
                    />
                  </div>
                ))}
              </div>
              <div
                className={cn(
                  animation["animate_scroll_y_down"],
                  "flex flex-col gap-6 pb-6",
                )}
              >
                {[...Array(4)].map((_, i) => (
                  <div
                    key={`up-${i}`}
                   className="relative aspect-[4/5] shrink-0 overflow-hidden rounded-2xl shadow-md">
                    <Image
                      src={trendingImages[i % trendingImages.length]}
                      fill
                      className="object-cover"
                      alt="Trending Item"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
