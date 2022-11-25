import { BsTag } from 'react-icons/bs'

export default function Tag (props) {
  return (
    <div>
      <div
        onClick={props.onClick}
        className='bg-neutral-7 px-2 py-1 gap-1 text-sm text-neutral-3 rounded-full flex items-center hover:text-primary hover:bg-light-primary hover:cursor-pointer'>
        <BsTag />
        <p>{props.name}</p>
      </div>
    </div>
  )
}
