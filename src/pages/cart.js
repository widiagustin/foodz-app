import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function cart () {
  return (
    <div>
      <Navbar />
      <div className='max-w-6xl h-screen mt-40 mx-auto'>
        <h1>Keranjang Belanja</h1>
      </div>
      <Footer />
    </div>
  )
}
