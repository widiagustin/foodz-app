import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import { BsPlusLg } from 'react-icons/bs'
import { Table } from 'flowbite-react'

export default function address () {
  return (
    <div>
      <Navbar />
      <div className='max-w-6xl h-screen mx-auto mt-36'>
        <div className='flex gap-8'>
          <Sidebar />
          <div className='border border-gray-300 p-5 rounded-lg w-full'>
            <h1 className='font-alice text-3xl text-primary'>Alamat Kamu</h1>
            <p className='mt-3 text-sm text-neutral-4'>Lengkapi detail alamat kamu</p>
            <div className='justify-end flex my-3'>
              <button className='flex gap-2 items-center bg-primary px-3 py-2 text-white rounded-lg hover:bg-hover-primary'>
                <BsPlusLg />
                <p>Tambah Alamat</p>
              </button>
            </div>
            <div>
              <Table>
                <Table.Head>
                  <Table.HeadCell>
                    Wilayah
                  </Table.HeadCell>
                  <Table.HeadCell>
                    Detail
                  </Table.HeadCell>
                  <Table.HeadCell>
                    <span className="sr-only">
                      Edit
                    </span>
                  </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Bandung
                    </Table.Cell>
                    <Table.Cell>
                      JAWA BARAT
                    </Table.Cell>
                    <Table.Cell>
                      <a
                        className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                        href="/tables"
                      >
                        Edit
                      </a>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Ciamis
                    </Table.Cell>
                    <Table.Cell>
                      JAWA BARAT
                    </Table.Cell>
                    <Table.Cell>
                      <a
                        className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                        href="/tables"
                      >
                        Edit
                      </a>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}
