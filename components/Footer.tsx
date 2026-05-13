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
  return (
    <footer className='w-full md:mb-0 mb-20 grid md:px-0 px-4 md:grid-cols-[2fr_4fr] md:w-[86vw]'>
      <section className='grid grid-cols-4 grid-rows-[repeat(3,1fr)]'>
        <div className='flex items-center col-span-4 -ml-4'>
          <Image loading='eager' height={1000} width={1000} className="max-w-24 max-h-24" src={'/UFLogo.png'} alt="logo" />
          <span className="text-primary text-[1.375rem] font-bold">
            UFinder.
          </span>
        </div>
        <div className='col-span-4'>
          <p className='text-lg'>Platform digital untuk menemukan <br />
            dan mendukung UMKM lokal terbaik.</p>
        </div>
        <div className='*:rounded-full h-fit w-fit *:outline-1 *:p-4 *:outline-primary flex-wrap gap-y-2 items-center justify-center flex col-span-3 *:*:fill-primary gap-4.5 md:gap-8'>
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
            <li>ufinder@gmail.com</li>
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
              <li className="text-lg text-accent-foreground">Beranda</li>
              <li className="text-lg text-accent-foreground">Explore</li>
              <li className="text-lg text-accent-foreground">Favorit</li>
              <li className="text-lg text-accent-foreground">About</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="bantuan">
          <AccordionTrigger className="text-xl font-semibold">
            Bantuan
          </AccordionTrigger>

          <AccordionContent>
            <ul className="space-y-2">
              <li className="text-lg text-accent-foreground">FAQ</li>
              <li className="text-lg text-accent-foreground">
                Pusat Bantuan
              </li>
              <li className="text-lg text-accent-foreground">
                Syarat & Ketentuan
              </li>
              <li className="text-lg text-accent-foreground">
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
              <li className="text-lg text-accent-foreground">
                Daftarkan Usahamu
              </li>
              <li className="text-lg text-accent-foreground">
                Panduan UMKM
              </li>
              <li className="text-lg text-accent-foreground">
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
              <li className="text-lg text-accent-foreground">
                ufinder@gmail.com
              </li>
              <li className="text-lg text-accent-foreground">
                000-0000-000
              </li>
              <li className="text-lg text-accent-foreground">
                Indonesia
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </footer>
  )
}

export default Footer