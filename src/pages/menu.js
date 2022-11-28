import Footer from '../components/Footer';
import Card from '../components/Card';
import { Pagination } from 'flowbite-react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Skeleton from '../components/Skeleton';
import Category from '../components/Category';
import { BsSearch } from 'react-icons/bs';
import Tag from '../components/Tag';

export default function Menu () {
  const [product, setProduct] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [pages, setPages] = useState(0)
  const [limit, setLimit] = useState(6)
  const [count, setCount] = useState(0)
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState('')
  const [tag, setTag] = useState([])
  const [nameTag, setNameTag] = useState('')
  const [inputSearch, setInputSearch] = useState('')

  const BaseURL = `https://food-backend-production.up.railway.app/api`

  useEffect(async () => {
    setIsLoading(true)
    getProducts()
    handleCategory()
    getTags()
  }, [page, limit, category, nameTag, inputSearch])

  const handleSearch = (e) => {
    setInputSearch(e.target.value)
  }

  const handleCategory = (data) => {
    if (data === 'indonesian') {
      setCategory('indonesian')
    } else if (data === 'korean') {
      setCategory('korean')
    } else if (data === 'japan') {
      setCategory('japan')
    } else if (data === 'all') {
      setCategory()
      setNameTag()
    }
  }

  const getTags = async () => {
    await axios.get(`${BaseURL}/tags`)
      .then(res => setTag(res.data))
  }

  const handleTag = (data) => {
    setNameTag(data)
    console.log(tag)
  }

  const getProducts = () => {
    new Promise(res => {
      setTimeout(() => {
        res()
      }, 500)
    }).then(async () => {
      await axios.get(`${BaseURL}/products/?page=${page}&limit=${limit}&category=${category}&tags=${nameTag}&q=${inputSearch}`).then(res => {
        if (category) {
          setProduct(res.data.data)
        }
        setProduct(res.data.data)
        setIsLoading(false)
        setPage(res.data.currentPage)
        setPages(res.data.totalPages)
        setCount(res.data.count)
      })
    })
  }

  const changePage = (data) => {
    setPage(data)
    setCurrentPage(data)
  }



  return (
    <div>
      <div className='max-w-6xl mx-auto h-screen mt-44 justify-center'>
        <div className='h-60'>
          <h1 className='font-alice text-4xl mb-4 text-center'>Dapatkan <span className='text-primary'>Masakan</span> Spesial</h1>
          <p className='w-[408px] mx-auto text-neutral-4 text-center'>Koki dan kurir terbaik siap melayani Anda. Makanan lezat panas akan sampai secepat kilat.</p>
          <div className='w-2/4 my-8 mx-auto'>
            <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
              <div onClick={() => setInputSearch('')} className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <BsSearch />
              </div>
              <input
                type="search"
                onChange={(e) => handleSearch(e)}
                value={inputSearch}
                className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary focus:border-primary" placeholder="Mau makan apa nih?" />
            </div>
          </div>
          <div className='flex gap-5 mt-5 justify-center'>
            <Category
              handleCategory={() => handleCategory('all')}
              title='Semua Masakan'
              link='/menu' />
            <Category
              handleCategory={() => handleCategory('indonesian')}
              title={'Masakan Indonesia'}
              link='/menu' />
            <Category
              handleCategory={() => handleCategory('korean')}
              title='Masakan Korea'
              link='/menu' />
            <Category
              handleCategory={() => handleCategory('japan')}
              title='Masakan Jepang'
              link='/menu' />
          </div>

        </div>
        <div className='max-w-full text-center grid mt-16'>
          <div className='flex'>
            <div className='grid-cols-3 gap-10 grid place-content-center mx-auto'>
              {isLoading ? new Array(6).fill(1).map((_, i) => {
                return <Skeleton key={i} />;
              }) :
                product.map(item => {

                  const getTag = () => {
                    if (item.tags) {
                      return item.tags.name
                    }
                    return ''
                  }

                  return (
                    <div key={item._id}>
                      <Card
                        src={item.image_url}
                        title={item.name}
                        desc={item.description}
                        price={item.price}
                        tag={item.tags ? item.tags.name : ''}
                        btnLink=''>
                      </Card>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
        <div className='flex justify-center mt-14'>
          <Pagination
            totalPages={pages}
            onPageChange={changePage}
            showIcons={true}
            currentPage={currentPage}
            layout={'pagination'}
          />
        </div>
        <div className='flex gap-2 justify-center my-16'>
          {
            tag.map(item => (
              <div key={item._id}>
                <Tag
                  name={item.name}
                  onClick={() => handleTag(item.name)}>
                </Tag>
              </div>
            ))
          }
        </div>
        <div className='w-full'>
          <Footer />
        </div>
      </div>
    </div>
  )
}
