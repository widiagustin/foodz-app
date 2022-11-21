import { BsTags } from 'react-icons/bs'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import tokpokki from '../images/Tokpokki.png'
import Tag from '../components/Tag';
import { Pagination } from 'flowbite-react';


export default function Menu () {
  return (
    <div>
      <Navbar />
      <div className='max-w-6xl mx-auto h-screen mt-44 justify-center'>
        <div className='h-60'>
          <h1 className='font-alice text-4xl mb-4 text-center'>Dapatkan <span className='text-primary'>Masakan</span> Spesial</h1>
          <p className='w-[408px] mx-auto text-neutral-4 text-center'>Koki dan kurir terbaik siap melayani Anda. Makanan lezat panas akan sampai secepat kilat.</p>
          <div className='flex gap-5 mt-5 justify-center'>
            <Tag
              title='Masakan Indonesia'
              link='/menu' />
            <Tag
              title='Masakan Korea'
              link='/menu' />
            <Tag
              title='Masakan Thailand'
              link='/menu' />
          </div>
        </div>
        <div className='max-w-6xl text-center grid'>
          <div className='grid-cols-3 gap-16 grid place-content-center mx-auto'>
            <Card
              src={tokpokki}
              title='Korea BBQ'
              desc='lorem ipsum dolor sit amet yuhuy asbda'
              price='Rp. 20.000'
              btnLink=''>
            </Card><Card
              src={tokpokki}
              title='Korea BBQ'
              desc='lorem ipsum dolor sit amet yuhuy asbda'
              price='Rp. 20.000'
              btnLink=''>
            </Card>
            <Card
              src={tokpokki}
              title='Korea BBQ'
              desc='lorem ipsum dolor sit amet yuhuy asbda'
              price='Rp. 20.000'
              btnLink=''>
            </Card>
            <Card
              src={tokpokki}
              title='Korea BBQ'
              desc='lorem ipsum dolor sit amet yuhuy asbda'
              price='Rp. 20.000'
              btnLink=''>
            </Card>
            <Card
              src={tokpokki}
              title='Korea BBQ'
              desc='lorem ipsum dolor sit amet yuhuy asbda'
              price='Rp. 20.000'
              btnLink=''>
            </Card>
            <Card
              src={tokpokki}
              title='Korea BBQ'
              desc='lorem ipsum dolor sit amet yuhuy asbda'
              price='Rp. 20.000'
              btnLink=''>
            </Card>
          </div>
        </div>
        <div className='flex justify-center mt-14'>
          <Pagination
            currentPage={1}
            totalPages={100}
            onPageChange={''}
            className={'paginate'}
          />
        </div>
      </div>
      <div className='w-full'>
        <div className='mt-[40rem]'>
          <Footer />
        </div>
      </div>
    </div>
  )
}
