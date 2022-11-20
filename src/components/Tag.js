import Link from 'next/link'
import { BsTag } from 'react-icons/bs'

export default function Tag (props) {
  return (
    <Link href={props.link}>
      <div className='border border-primary text-primary rounded-full items-center gap-3 flex py-2 px-3 hover:bg-primary hover:text-white'>
        <BsTag />
        <p>{props.title}</p>
      </div>
    </Link>
  )
}
