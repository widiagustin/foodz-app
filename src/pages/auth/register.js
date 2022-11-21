import Link from "next/link";
import { BsChevronLeft } from "react-icons/bs";

export default function register () {
  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full p-6 bg-white rounded-lg shadow md:mt-0 sm:max-w-md  sm:p-8">
          <div>
            <Link href='/'>
              <BsChevronLeft className="relative top-5 cursor-pointer" />
            </Link>
            <h2 className="text-center font-alice mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Daftar Disini!
            </h2>
          </div>
          <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 ">Nama</label>
              <input type="text" name="text" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 " placeholder="nama kamu" required="" />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 ">Alamat Email</label>
              <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 " placeholder="name@company.com" required="" />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 ">Kata Sandi</label>
              <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5" required="" />
            </div>
            <button type="submit" className="w-full text-white bg-primary hover:bg-hover-primary focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Masuk</button>
          </form>
        </div>
      </div>
    </section>
  )
}
