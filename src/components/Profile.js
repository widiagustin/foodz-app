import React from 'react'

export default function Profile () {
  return (
    <div>
      <div className='border border-gray-300 p-5 rounded-lg w-full'>
        <h1 className='font-alice text-3xl text-primary'>Profile Kamu</h1>
        <p className='mt-3 mb-10 text-sm text-neutral-4'>Lengkapi data pribadi diri kamu</p>
        <div className='space-y-3'>
          <div className='flex justify-between'>
            <p className='font-bold'>Nama :</p>
            <p>WIDHIANI AGUSTIN</p>
          </div>
          <div className='flex justify-between'>
            <p className='font-bold'>Alamat Email :</p>
            <p>widhianiagsutin14@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}
