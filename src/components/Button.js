import Link from "next/link";

export default function Button (props) {
  return (
    <div>
      <Link href={props.link}>
        <button
          onClick={props.onClick}
          className='py-2 px-5 rounded-lg bg-primary text-white hover:bg-hover-primary'>
          {props.title}
        </button>
      </Link>
    </div>
  )
}
