import Link from "next/link";
import { BsChevronLeft } from "react-icons/bs";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch } from 'react-redux'
import { userLogin } from "../../app/features/Auth/actions";
import { useRouter } from 'next/router'
import { useState } from "react";
import { Button, TextInput } from "flowbite-react";
import { loginUser } from "../../app/api/auth";

const schema = yup.object({
  email: yup.string().email('Email harus valid').required('Email harus diisi'),
  password: yup.string().min(8, 'Password minimal 8 karakter').required('Password harus diisi')
}).required()

const statusList = {
  idle: 'idle',
  process: 'process',
  success: 'success',
  error: 'error'
}

export default function login () {
  const { register, handleSubmit, formState: { errors }, setError } = useForm
    ({
      resolver: yupResolver(schema)
    })
  const [status, setStatus] = useState(statusList.idle)
  const dispatch = useDispatch()
  const history = useRouter()

  const onSubmit = async (formData) => {
    setStatus(statusList.process)
    const { data } = await loginUser(formData)
    if (data.error) {
      setError('password', { type: 'invalidCredential', message: data.message })
      setStatus(statusList.error)
    } else {
      const { user, token } = data
      dispatch(userLogin({ user, token }))
      history.push('/')
    }
    setStatus(statusList.success)
  }

  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full p-6 bg-white rounded-lg shadow md:mt-0 sm:max-w-md  sm:p-8">
          <div>
            <Link href='/'>
              <a><BsChevronLeft className="relative top-5 cursor-pointer" /></a>
            </Link>
            <h2 className="text-center font-alice mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Login Disini!
            </h2>
          </div>
          <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 ">Email kamu</label>
              <TextInput
                type="email"
                {...register('email')}
                // className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 "
                placeholder="name@company.com" />
            </div>
            <div>{errors.email?.message}</div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 ">Kata Sandi</label>
              <TextInput type="password"
                placeholder="••••••••"
                {...register('password')} />
            </div>
            <div>{errors.password?.message}</div>
            <div className="text-sm">
              <label className="font-light text-gray-500">Belum punya akun? <span className="font-medium text-primary hover:underline"><Link href='/register'>Daftar disini!</Link></span> </label>
            </div>
            <Button
              type="submit"
              disabled={status === statusList.process}
              className="w-full text-white bg-primary hover:bg-hover-primary focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              {status === statusList.process ? 'Memproses...' : 'Masuk'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
