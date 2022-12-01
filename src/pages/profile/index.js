import Link from 'next/link'
import Footer from '../../components/Footer'

export default function profile () {

  return (
    <div>
      <div className='max-w-6xl h-screen mx-auto mt-36'>
        <div className='flex gap-8'>
          <ul className='p-3 rounded-lg flex flex-col gap-5 border border-gray-300 w-52 text-sm'>
            <li className='border-l-4 border-primary text-primary cursor-pointer'>
              <Link href='/profile'>
                <p className='ml-4'>Profile</p>
              </Link>
            </li>
            <li className='cursor-pointer'>
              <Link href='/profile/order'>
                <p className='ml-4'>Pemesanan</p>
              </Link>
            </li>
            <li className='cursor-pointer'>
              <Link href='/profile/address'>
                <p className='ml-4'>Alamat</p>
              </Link>
            </li>
            <li className='cursor-pointer'>
              <Link href='/logout'>
                <p className='ml-4'>Logout</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  )
}
