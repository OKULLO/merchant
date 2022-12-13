import React,{ useState } from 'react'
import Modal from './index'

export default function AlertModal({
  show = false,
  onClose,
  title = '',
  text,
  message,
  alertMode,
  ProductName,
  buttonText = 'Ok',
  handleDelete,
  isSubmitting
}) {

  const [escape,setOnEscape] = useState(true)

  // const
  return (
    <Modal show={show} onClose={onClose} center escape={escape} opacity='bg-opacity-50'>
      <div className='flex flex-col lg:w-9/12 xl:w-7/12 md:w-10/12 w-full bg-sky-50 dark:bg-slate-700 rounded-lg'>
        <div className='flex flex-col px-6'>
          {alertMode==='warning' ? (
            <>
            <h5 className='mt-6 mb-4 text-center capitalize text-green-700 font-semibold '>
            {title}
          </h5>
          <p className='my-3 text-center text-green-400 text-base'>
            {message}
          </p>
          </>
          ):(
            <>
            <h5 className='mt-6 mb-4 text-center text-red-700 capitalize font-semibold '>
            {title}
          </h5>
          <p className='my-3 text-center text-orange-500 dark:text-white text-base'>
            {message}
          </p>
          </>
          )}
          
        </div>

        <div className='flex items-center justify-end p-3 bg-sky-50 dark:bg-slate-700 rounded-lg'>
        <button type='button' className='text-sm rounded-md  bg-slate-900 text-white  dark:text-white mr-4  hover:bg-sky-800 p-2' onClick={onClose}>
                Cancel
              </button>
          <button
            onClick={handleDelete}
            className='text-sm rounded-md  bg-red-900 text-white p-2 px-6'
          >
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
                  <>
                    {buttonText}
                    </>
                  )}
            
           
          </button>
        </div>
      </div>
    </Modal>
  )
}
