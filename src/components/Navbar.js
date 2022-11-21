import Image from 'next/image'
import Logo from '../images/Logo.svg'
import Link from 'next/link'
import Button from '../components/Button'
import { Navbar } from 'flowbite-react'
import { useEffect, useState } from 'react'

export default function () {
  const [navbar, setNavbar] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    changeBackground()
    window.addEventListener("scroll", changeBackground)
  })

  return (
    <Navbar
      fluid={true}
      className={navbar
        ? 'py-6 w-full backdrop-filter backdrop-blur-lg bg-opacity-90 z-50 fixed top-0 border-b border-gray-200'
        : 'py-6 w-full backdrop-filter backdrop-blur-lg bg-opacity-90 z-50 fixed top-0'}
    >
      <div className='flex w-[72rem] mx-auto justify-between'>
        <Navbar.Brand href="https://flowbite.com/">
          <Image
            src={Logo} width={65} alt='Foodz Logo'
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <ul className='flex items-center gap-10 text-sm'>
          <li className='hover:text-hover-primary'>
            <Link href="/">Beranda</Link>
          </li>
          <li className='hover:text-hover-primary'>
            <Link href="/menu">Menu</Link>
          </li>
          <li className='hover:text-hover-primary'>
            <Link href="/cart">Keranjang</Link>
          </li>
          <li className='hover:text-hover-primary'>
            <Link href="/profile">Profile</Link>
          </li>
          <li>
            <Button title='Login' link='/login'></Button>
          </li>
        </ul>
      </div>
    </Navbar>
  )
}
