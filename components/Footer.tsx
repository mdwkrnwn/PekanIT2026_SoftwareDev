import Image from 'next/image'
import { BsFacebook, BsTwitter } from 'react-icons/bs'
import { FaTiktok } from 'react-icons/fa'
import { FaSquareInstagram } from 'react-icons/fa6'
function Footer() {
  return (
    <footer className='grid grid-cols-[2fr_repeat(4,1fr)] grid-rows-[1fr] w-[86vw]'>
      <section className='grid grid-cols-4 grid-rows-[repeat(3,1fr)]'>
        <div className='flex items-center col-span-4 -ml-4'>
          <Image loading='eager' height={1000} width={1000} className="max-w-24 max-h-24" src={'/UFLogo.png'} alt="logo" />
          <span className="text-primary-foreground text-[1.375rem] font-bold">
            UFinder.
          </span>
        </div>
        <div className='col-span-4'>
          <p className='text-lg'>Platform digital untuk menemukan <br />
            dan mendukung UMKM lokal terbaik.</p>
        </div>
        <div className='*:rounded-full h-fit *:outline-1 *:p-4 *:outline-primary-foreground flex col-span-3 *:*:fill-primary-foreground gap-8'>
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
      <section className='grid grid-cols-1 grid-rows-[1fr_2fr]'>
        <p className='self-center font-semibold'>Menu</p>
        <ul className='*:text-accent-foreground *:mb-2'>
          <li>Beranda</li>
          <li>Explore</li>
          <li>Favorit</li>
          <li>About</li>
        </ul>
      </section>
      <section className='grid grid-cols-1 grid-rows-[1fr_2fr]'>
        <p className='self-center font-semibold'>Bantuan</p>
        <ul className='*:text-accent-foreground *:mb-2'>
          <li>FAQ</li>
          <li>Pusat Bantuan</li>
          <li>Syarat & Ketentuan</li>
          <li>Kebijakan Privasi</li>
        </ul>
      </section>

      <section className='grid grid-cols-1 grid-rows-[1fr_2fr]'>
        <p className='self-center font-semibold'>Untuk UMKM</p>
        <ul className='*:text-accent-foreground *:mb-2'>
          <li>Daftarkan Usahamu</li>
          <li>Panduan UMKM</li>
          <li>Tips & Edukasi</li>
        </ul>
      </section>

      <section className='grid grid-cols-1 grid-rows-[1fr_2fr]'>
        <p className='self-center font-semibold'>Hubungi Kami</p>
        <ul className='*:text-accent-foreground *:mb-2'>
          <li>ufinder@gmail.com</li>
          <li>000-0000-000</li>
          <li>Indonesia</li>
        </ul>
      </section>
    </footer>
  )
}

export default Footer