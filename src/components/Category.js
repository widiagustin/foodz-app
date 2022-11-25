import Link from 'next/link'

export default function Category (props) {
  return (
    <Link href={props.link}>
      <button
        onClick={props.handleCategory}
        className='border border-primary cursor-pointer text-primary rounded-full items-center gap-3 flex py-2 px-3 hover:bg-primary hover:text-white'>
        <p>{props.title}</p>
      </button>
    </Link>
  )
}
