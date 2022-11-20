import Image from 'next/image'
import Logo from '../images/Logo.svg'

export default function Footer () {
  return (
    <footer className='border-t-2'>
      <div className='max-w-6xl mx-auto h-52 mt-6 bg-white'>
        <div className='mt-8  grid grid-cols-4 gap-20 text-sm'>
          <div className='text-center'>
            <Image src={Logo} className='mx-auto mb-4' alt='Foodz Logo' />
            <p className='text-sm text-neutral-4'>Jelajahi Selera Anda dengan makanan spesial di tempat spesial, yang akan membuat Anda bahagia.</p>
          </div>
          <div>
            <ul className='text-neutral-4 flex flex-col gap-3'>
              <li className='font-semibold text-neutral-2'>Pendukung</li>
              <li>Help Center</li>
              <li>Informasi Keamanan</li>
              <li>Opsi Pembatalan</li>
              <li>Laporkan Keluhan</li>
            </ul>
          </div>
          <div>
            <ul className='text-neutral-4 flex flex-col gap-3'>
              <li className='font-semibold text-neutral-2'>Komunitas</li>
              <li>Ulasan pelanggan</li>
              <li>Newsletter</li>
            </ul>
          </div>
          <div>
            <ul className='text-neutral-4 flex flex-col gap-3'>
              <li className='font-semibold text-neutral-2'>Tentang</li>
              <li>Chef Kami</li>
              <li>Karir</li>
              <li>Blog</li>
              <li>Kontak</li>
            </ul>
          </div>
          <div>

          </div>
          <div>

          </div>
        </div>
      </div>
    </footer>
  )
}
