import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Formik, Form,Field,ErrorMessage } from 'formik'
import LoginSchema from '../../validation/login.schema'
import { login } from '../../services/auth'
import { HOME_PAGE } from '../../constants/history.constants'
import apiErrorHandler from '../../utils/apiErrorHandler'
import { loginSuccess } from '../../store/user'
import { useTitle } from '../../hooks/hook';
import { toast } from 'react-hot-toast'

export default function Login (){

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const pageTitle ='Sign in to your Merchant Portal'
  useTitle (pageTitle)

  async function handleLoginSubmit(values, { setErrors }) {
    try {
      const { data } = await login(values)
      console.log(data)

      if (data?.success) {
        toast.success(data.message)
        dispatch(loginSuccess(data))
        navigate(HOME_PAGE)
      }
    } catch (error) {
      console.log(error)
      if (error?.response?.status === 400) {
        setErrors({ username: error?.response?.data?.message })
        toast.error(error?.response?.data?.message)
        // console.log('error: ', error.response.data.message)
      } else {
        toast.error(error?.response?.data?.message)
        
      }
    }
  }
    
  

  return (

<div className="flex min-h-full items-center justify-center py-12 mt-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
  <div className=" w-full md:w-84  max-w-md space-y-8">
    <div>
   
      <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-slate-900">{pageTitle}</h2>
      
    </div>

    <Formik
            initialValues={{ username: '', password: '' }}
            validationSchema={LoginSchema}
            onSubmit={handleLoginSubmit}
          >
            {({ isSubmitting }) => (
                <Form className="mt-8 space-y-6">
                <Field type="hidden" name="remember" value="true"/>
                <div className="-space-y-px rounded-md shadow-sm">
                  <div className='mb-2'>
                    <label for="email-address" className='text-slate-700 '>Username</label>
                    <Field id="email-address" name="username" type="text" autocomplete="email"  className="relative block w-full appearance-none  rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-slate-500 focus:z-10 focus:border-sky-500 focus:outline-none focus:ring-slate-500 sm:text-sm" placeholder="Username"/>
                    <ErrorMessage name="username" component='span' className='text-xs text-red-500'/>
                   
                  </div>
                  <div className="mb-2 mt-2">
                    <label for="password" className="text-slate-700">Password</label>
                    <Field id="password" name="password" type="password" autocomplete="current-password"  className="relative block w-full appearance-none  rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-sky-500 focus:outline-none focus:ring-slate-500 sm:text-sm" placeholder="Password"/>
                  </div>
                  <ErrorMessage name="password" component='span' className='text-xs text-red-500' />
                  
                </div>
          
                <div className="flex items-center justify-between">
               
          
                  <div class="text-sm">
                    <a href="#" className="font-medium text-sky-600 hover:text-indigo-500">Forgot your password?</a>
                  </div>
                </div>
          
                <div>
                  <button type="submit" className="group relative flex w-full justify-center rounded-full border border-transparent bg-indigo-900 py-2 px-4 text-sm font-medium text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  {isSubmitting ? (
                          <svg
                            className='animate-spin h-5 w-5 text-white mx-auto'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                          >
                            <circle
                              className='opacity-25'
                              cx='12'
                              cy='12'
                              r='10'
                              stroke='currentColor'
                              strokeWidth='4'
                            ></circle>
                            <path
                              className='opacity-75'
                              fill='currentColor'
                              d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                            ></path>
                          </svg>
                        ) : (
                          'Login'
                        )}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
  </div>
</div>
  )
}