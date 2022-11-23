import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Tag from '../components/Tag';
import { Pagination } from 'flowbite-react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Skeleton from '../components/Skeleton';


export default function Menu () {
  const [product, setProduct] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [pages, setPages] = useState(0)
  const [limit, setLimit] = useState(6)

  const BaseURL = `https://food-backend-production.up.railway.app/api/products/?page=${page}&limit=${limit}`

  useEffect(async () => {
    setIsLoading(true)

    new Promise(res => {
      setTimeout(() => {
        res()
      }, 500)
    }).then(() => {
      axios.get(BaseURL).then(res => {
        setProduct(res.data.data)
        setIsLoading(false)
        setPage(res.data.currentPage)
        setPages(res.data.totalPages)
      })
    })
  }, [page, limit])

  const getProducts = async () => {
    const res = await axios.get(BaseURL)
    setProduct(res.data.data)
    setPage(res.data.currentPage)
    setPages(res.data.totalPages)
  }

  const changePage = (data) => {
    setPage(data)
  }

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
            {isLoading ? new Array(6).fill(1).map((_, i) => {
              return <Skeleton key={i} />;
            }) :
              product.map(item => (
                <div key={item._id}>
                  <Card
                    src={item.image_url}
                    title={item.name}
                    desc={item.description}
                    price={item.price}
                    btnLink=''>
                  </Card>
                </div>
              ))
            }
          </div>
        </div>
        <div className='flex justify-center mt-14'>
          <Pagination
            currentPage={1}
            totalPages={pages}
            onPageChange={changePage}
            showIcons={true}
            layout={'pagination'}
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
