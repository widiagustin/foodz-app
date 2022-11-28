import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../components/Button'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'
import { BsArrowLeft, BsArrowRight, BsCart, BsTruck } from 'react-icons/bs'
import { Navigation } from 'swiper';
import { useRef, useState } from 'react'
import HeroImg from '../images/Bibimbap.svg'
import BgHero from '../images/bg-hero.svg'
import sugar from '../images/Sugar.svg'
import chopstick from '../images/chopstick.svg'
import tokpokki from '../images/Tokpokki.png'
import chefIll from '../images/chef-ill.svg'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function Home () {
  const swiperRef = useRef();
  const [navPrev, setNavPrev] = useState(false)
  const [navNext, setNavNext] = useState(false)

  const btnPrev = () => {
    swiperRef.current?.slidePrev()
    setNavPrev(true)
  }

  return (
    <div>
      <div>
        <div className='max-w-6xl mx-auto h-screen flex justify-center mt-44'>
          <div className='mt-16'>
            <h1 className='font-alice text-5xl text-h1-black'>Anda Punya Pertanyaan.<br />Kami Punya Rasa.</h1>
            <p className='my-6 text-neutral-4 w-3/4'>Jelajahi Selera Anda dengan makanan spesial di tempat spesial. Semua masakan dibuat dengan tangan penuh cinta</p>
            <div className='flex gap-5'>
              <Button title='BELI SEKARANG' link='/'></Button>
              <button>Lihat menu</button>
            </div>
            <div>
              <div className='grid grid-cols-2 text-center mt-24 bg-neutral-7 p-5 w-96 justify-center text-neutral-4 text-sm rounded-2xl divide-x'>
                <div>
                  <p><span className='font-semibold text-2xl'>9+</span><br />Tahun pelayanan.</p>
                </div>
                <div>
                  <p><span className='font-semibold text-2xl'>40+</span><br />Cabang di Indonesia.</p>
                </div>
              </div>
            </div>
          </div>
          <div className='relative bottom-8 left-[26rem]'>
            <Image src={sugar} className='relative bottom-8 left-[26rem]' alt='Sugar-Hero' />
          </div>
          <div >
            <Image src={HeroImg} alt='Hero-Image'></Image>
          </div>
          <div className='absolute top-[26.7rem] right-80'>
            <Image src={chopstick} alt='Chopstick-Hero' />
          </div>
          <div className='absolute top-44 right-0'>
            <Image src={BgHero} height={500} className='relative -z-50' alt='bg-hero' />
          </div>
        </div>
      </div >
      <div>
        <div className='max-w-6xl mx-auto h-screen text-center'>
          <div>
            <h1 className='font-alice text-4xl mb-4'>Penawaran <span className='text-primary'>Spesial</span> Hari Ini</h1>
            <p className='w-[408px] mx-auto text-neutral-4 '>Koki dan kurir terbaik siap melayani Anda. Makanan lezat panas akan sampai secepat kilat.</p>
          </div>
          <div>
            <Swiper
              modules={[Navigation]}
              freeMode={true}
              slidesPerView={3}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              className='swiper-wrapper'
            >
              <SwiperSlide>
                <Card
                  src={tokpokki}
                  title='Korea BBQ'
                  desc='lorem ipsum dolor sit amet yuhuy asbda'
                  price='Rp. 20.000'
                  btnLink=''>
                </Card>
              </SwiperSlide>
              <SwiperSlide>
                <Card
                  src={tokpokki}
                  title='Buddaejiggae'
                  desc='lorem ipsum dolor sit amet yuhuy asbda'
                  price='Rp. 20.000'
                  btnLink=''>
                </Card>
              </SwiperSlide>
              <SwiperSlide>
                <Card
                  src={tokpokki}
                  title='Test'
                  desc='lorem ipsum dolor sit amet yuhuy asbda'
                  price='Rp. 20.000'
                  btnLink=''>
                </Card>
              </SwiperSlide>
              <SwiperSlide>
                <Card
                  src={tokpokki}
                  title='Beef'
                  desc='lorem ipsum dolor sit amet yuhuy asbda'
                  price='Rp. 20.000'
                  btnLink=''>
                </Card>
              </SwiperSlide>
              <SwiperSlide>
                <Card
                  src={tokpokki}
                  title='Bebek'
                  desc='lorem ipsum dolor sit amet yuhuy asbda'
                  price='Rp. 20.000'
                  btnLink=''>
                </Card>
              </SwiperSlide>
              <SwiperSlide>
                <Card
                  src={tokpokki}
                  title='Kimchi'
                  desc='lorem ipsum dolor sit amet yuhuy asbda'
                  price='Rp. 20.000'
                  btnLink=''>
                </Card>
              </SwiperSlide>
            </Swiper>
            <div className='flex gap-10 w-full justify-center'>
              <button
                onClick={() => btnPrev()}

                className='bg-white p-3 border border-neutral-3 rounded-full'
              >
                <BsArrowLeft />
              </button>
              <button onClick={() => swiperRef.current?.slideNext()}>
                <BsArrowRight />
              </button>
            </div>
            <div className='mt-10 flex gap-5 items-center justify-center'>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='max-w-6xl mx-auto text-center'>
          <h1 className='font-alice text-4xl mt-64 mb-16'>19 <span className='text-primary'>Michelin </span>Stars Chef</h1>
          <div className='flex gap-24 items-center w-full justify-between text-justify'>
            <Image src={chefIll} className='w-96' alt='Chef-Illustration' />
            <div className='text-neutral-3 text-sm w-1/2'>
              <div className='flex items-center justify-between mb-4 font-alice text-primary text-lg'>
                <h2>Alain Ducasse – 19 Michelin Stars</h2>
                <Link href={''}>
                  <p className='flex gap-2 items-center text-sm'>Lihat Profile <BsArrowRight /></p>
                </Link>
              </div>
              <div>
                <p>Dianggap oleh banyak orang sebagai salah satu koki terbaik di dunia, dia membangun kerajaan bisnis selama bertahun-tahun dengan 36 restoran yang tersebar di seluruh dunia. Dia juga salah satu dari hanya dua koki yang memegang 21 bintang Michelin sepanjang karirnya dan koki pertama yang memiliki restoran yang membawa tiga Bintang Michelin di tiga kota. Selain dikenal dengan masakan Prancis kelas dunia, Ducasse adalah satu-satunya koki di daftar ini yang mengirimkan makanannya ke luar angkasa. Pada 2015, Ducasse mengirim makanan ke astronot yang mengorbit Bumi di atas Stasiun Luar Angkasa Internasional, sebuah pencapaian yang menurut Ducasse dia pandang sebagai menaklukkan 'perbatasan terakhir (memasak)'.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='max-w-6xl mx-auto h-screen text-center mt-64'>
          <h1 className='font-alice text-4xl mt-32 mb-4'>Bagaimana kami menjaga <br /> makanan Anda tetap <span className='text-primary'>Lezat</span></h1>
          <div className='mt-32 grid grid-cols-3'>
            <div className='w-72  border-neutral-7 p-4 hover:shadow-md hover:bg-white hover:rounded-lg'>
              <div className='shadow-sm w-16 h-16 items-center rounded-full flex justify-center p-1 border border-l-neutral-7 mx-auto'>
                <BsCart size='30px' />
              </div>
              <h1 className='font-alice text-xl my-2'>Menerima Pesanan</h1>
              <p className='text-sm'>Itu membantu kami mengetahui makanan enak apa yang akan Anda coba</p>
            </div>
            <div className='w-72  border-neutral-7 p-4 hover:shadow-md hover:bg-white hover:rounded-lg'>
              <div className='shadow-sm w-16 h-16 items-center rounded-full flex justify-center p-1 border border-l-neutral-7 mx-auto'>
                <BsTruck size='30px' />
              </div>
              <h1 className='font-alice text-xl my-2'>Makanan Segera Diantar</h1>
              <p className='text-sm'>Itu membantu kami mengetahui makanan enak apa yang akan Anda coba</p>
            </div>
            <div className='w-72 hover:border border-neutral-7 hover:shadow-md hover:rounded-lg p-4'>
              <div className='shadow-sm w-16 h-16 items-center rounded-full flex justify-center p-1 border border-l-neutral-7 mx-auto'>
                {/* <CiBowlNoodles size='35px' /> */}
              </div>
              <h1 className='font-alice text-xl my-2'>Makanan Siap Disantap</h1>
              <p className='text-sm'>Itu membantu kami mengetahui makanan enak apa yang akan Anda coba</p>
            </div>

          </div>
        </div>
      </div>
      <div className='relative'>
        <Footer />
      </div>
    </div >
  )
}
