import Image from 'next/image'
import Button from './Button'
import { BsCart, BsTag } from 'react-icons/bs'
import Link from 'next/link'

export default function Card (props) {
  return (
    <div>
      <div className='border border-neutral-100 w-72 rounded-2xl p-5 shadow-sm bg-white hover:shadow-md'>
        <Image src={props.src} width={400} height={250} className='mx-auto object-cover rounded-lg' alt='Product Item'></Image>
        <h1 className='font-alice text-left text-neutral-2 text-2xl mt-3'>{props.title}</h1>
        <div className='flex mt-2'>
          <p className='text-xs px-2 py-1 text-neutral-4 bg-neutral-7 rounded-full flex gap-1 items-center'>
            <BsTag />
            {props.tag}
          </p>
        </div>
        <div className='flex justify-between mt-4 items-center'>
          <p className='text-primary font-alice text-xl font-semibold'>Rp. {props.price}</p>
          <Link href={props.btnLink}>
            <button
              className='flex gap-2 items-center bg-primary px-3 py-2 text-white rounded-lg hover:bg-hover-primary'>
              <BsCart />
              <p>Beli</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
