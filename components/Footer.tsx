import { cn } from '@/lib/utils'
import Image from 'next/image'
import { BsFacebook, BsTwitter } from 'react-icons/bs'
import { FaTiktok } from 'react-icons/fa'
import { FaSquareInstagram } from 'react-icons/fa6'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
function Footer() {
  return (<>
    <footer className='w-full md:mb-8 mb-20 grid md:px-0 px-4 md:grid-cols-[2fr_4fr] md:w-[80vw] *:gap-8'>
      <section className='grid grid-cols-4 place-content-center lg:place-content-start grid-rows-[repeat(3,1fr)]'>
        <div className='flex items-center col-span-4 -ml-4'>
          <Image loading='eager' height={1000} width={1000} className="max-w-24 max-h-24" src={'/Bakul.png'} alt="logo" />
          <span className="text-primary text-[1.375rem] font-bold">
            Bakool
          </span>
        </div>
        <div className='col-span-4'>
          <p className='text-lg'>Platform digital untuk menemukan <br />
            dan mendukung UMKM lokal terbaik.</p>
        </div>
        <div className={cn('col-span-4 size-fit flex-wrap gap-y-2 items-center justify-center flex gap-3 xl:gap-8', '*:rounded-full *:outline-1 *:p-4 *:outline-primary', '*:*:fill-primary')}>
          <span>
            <FaSquareInstagram size={25} />
          </span>
          <span>
            <BsFacebook size={25} />
          </span>
          <span>
            <BsTwitter size={25} />
          </span>
          <span>
            <FaTiktok size={25} />
          </span>
        </div>
      </section>
      <section className={cn('md:grid hidden grid-cols-4',
        "*:grid *:grid-cols-1 *:grid-rows-[1fr_2fr]"
      )}>
        <div>
          <p className='self-center text-xl font-semibold'>Menu</p>
          <ul className='*:text-lg *:text-accent-foreground *:mb-2'>
            <li>Beranda</li>
            <li>Explore</li>
            <li>Favorit</li>
            <li>About</li>
          </ul>
        </div>
        <div>
          <p className='self-center text-xl font-semibold'>Bantuan</p>
          <ul className='*:text-lg *:text-accent-foreground *:mb-2'>
            <li>FAQ</li>
            <li>Pusat Bantuan</li>
            <li>Syarat & Ketentuan</li>
            <li>Kebijakan Privasi</li>
          </ul>
        </div>
        <div>
          <p className='self-center text-xl font-semibold'>Untuk UMKM</p>
          <ul className='*:text-lg *:text-accent-foreground *:mb-2'>
            <li>Daftarkan Usahamu</li>
            <li>Panduan UMKM</li>
            <li>Tips & Edukasi</li>
          </ul>
        </div>
        <div>
          <p className='self-center text-xl font-semibold'>Hubungi Kami</p>
          <ul className='*:text-lg *:text-accent-foreground *:mb-2'>
            <li>Bakool@gmail.com</li>
            <li>000-0000-000</li>
            <li>Indonesia</li>
          </ul>
        </div>
      </section>
      <Accordion type="single" collapsible className={cn('md:hidden grid grid-cols-1',
        "*:grid"
      )}>
        <AccordionItem value="menu">
          <AccordionTrigger className="text-xl font-semibold">
            Menu
          </AccordionTrigger>

          <AccordionContent>
            <ul className="space-y-2">
              <li className="text-accent-foreground text-lg">Beranda</li>
              <li className="text-accent-foreground text-lg">Explore</li>
              <li className="text-accent-foreground text-lg">Favorit</li>
              <li className="text-accent-foreground text-lg">About</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="bantuan">
          <AccordionTrigger className="text-xl font-semibold">
            Bantuan
          </AccordionTrigger>

          <AccordionContent>
            <ul className="space-y-2">
              <li className="text-accent-foreground text-lg">FAQ</li>
              <li className="text-accent-foreground text-lg">
                Pusat Bantuan
              </li>
              <li className="text-accent-foreground text-lg">
                Syarat & Ketentuan
              </li>
              <li className="text-accent-foreground text-lg">
                Kebijakan Privasi
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="umkm">
          <AccordionTrigger className="text-xl font-semibold">
            Untuk UMKM
          </AccordionTrigger>

          <AccordionContent>
            <ul className="space-y-2">
              <li className="text-accent-foreground text-lg">
                Daftarkan Usahamu
              </li>
              <li className="text-accent-foreground text-lg">
                Panduan UMKM
              </li>
              <li className="text-accent-foreground text-lg">
                Tips & Edukasi
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="kontak">
          <AccordionTrigger className="text-xl font-semibold">
            Hubungi Kami
          </AccordionTrigger>

          <AccordionContent>
            <ul className="space-y-2">
              <li className="text-accent-foreground text-lg">
                Bakool@gmail.com
              </li>
              <li className="text-accent-foreground text-lg">
                000-0000-000
              </li>
              <li className="text-accent-foreground text-lg">
                Indonesia
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

    </footer>
    <section className='text-lg flex justify-center items-center w-screen py-4 bg-[#05553C]'>
      <p className='text-white'>2026 Bakool. All Rights Reserved.</p>
    </section>
  </>
  )
}

export default Footer