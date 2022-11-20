import Link from "next/link";

export default function Button (props) {
  return (
    <div>
      <Link href={props.link}
        className='py-2 px-5 rounded-lg bg-primary text-white hover:bg-hover-primary'>
        {props.title}
      </Link>
    </div>
  )
}
