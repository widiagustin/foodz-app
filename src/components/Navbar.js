import Image from 'next/image'
import Logo from '../images/Logo.svg'
import Link from 'next/link'
import Button from '../components/Button'

export default function
  () {
  return (
    <div>
      <nav className='fixed flex top-0 w-full py-8 bg-white z-50 border border-b-2'>
        <div className='flex w-4/5 mx-auto justify-between'>
          <div>
            <Link href='/'>
              <Image src={Logo} width={65} alt='Foodz Logo'></Image>
            </Link>
          </div>
          <div>
            <ul className='flex gap-6 text-neutral-4 text-base'>
              <li><Link href='/'>Beranda</Link></li>
              <li><Link href='/menu'>Menu</Link></li>
              <li><Link href=''>Contact</Link></li>
              <li>
                <Link href='/'>
                  <Button title='Login' link=''></Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
