import Image from 'next/image'
import Logo from '../images/Logo.svg'
import Link from 'next/link'
import Button from '../components/Button'
import { Navbar } from 'flowbite-react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { BsCart, BsPerson } from 'react-icons/bs'
import { IconContext } from 'react-icons'

export default function () {
  const router = useRouter()
  const [navbar, setNavbar] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  const isActive = (r) => {
    if (r === router.pathname) {
      return "active"
    } else {
      return ""
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
        <Navbar.Brand href="/">
          <Image
            src={Logo} width={65} alt='Foodz Logo'
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <ul className='flex items-center gap-10 text-sm'>
          <li className='hover:text-hover-primary'>
            <Link href="/">
              <a className={isActive('/')}>
                Beranda
              </a>
            </Link>
          </li>
          <li className='hover:text-hover-primary'>
            <Link href="/menu">
              <a className={isActive('/menu')}>
                Menu
              </a>
            </Link>
          </li>
          <li className='hover:text-hover-primary'>
            <Link href="/cart">
              <a className={isActive('/cart')}>
                <div className='flex items-center gap-2'>
                  <div className='bg-red-600 h-4 w-4 rounded-full relative left-8 top-2'>
                    <p className='text-xs text-center text-white'>0</p>
                  </div>
                  <IconContext.Provider
                    value={{ size: '15px' }}>
                    <BsCart />
                  </IconContext.Provider>
                </div>
              </a>
            </Link>
          </li>
          <li className='hover:text-hover-primary'>
            <Link href="/profile">
              <a className={isActive('/profile')}>
                <IconContext.Provider
                  value={{ size: '18px' }}>
                  <BsPerson />
                </IconContext.Provider>
              </a>
            </Link>
          </li>
          <li>
            <Button title='Login' link='/login'></Button>
          </li>
        </ul>
      </div>
    </Navbar>
  )
}
