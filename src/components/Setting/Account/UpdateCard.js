import React,{ useState } from 'react'
import { Formik, Form } from 'formik'
import AlertModal from '../../shared/Modal/AlertModal'

export default function Card({
  initData,
  onClose,
  title,
  description,
  Input,
  UserNameUpdateSchema,
  updateProfile,


}) {


  
  

  return (
    <div className='w-full md:w-1/2 flex flex-col mx-4 mx-auto dark:bg-slate-800 bg-white rounded-lg'>
      <div className='w-full  relative flex flex-col items-center justify-center p-4'>
        <h4 className='text-center text-xl font-bold text-white'>{title}</h4>
        <p className='text-sm mt-2 text-discord-mainText'>{description}</p>
        <button
          onClick={onClose}
          className='absolute top-0 right-0 m-2 rounded-full p-2 flex items-center justify-center border-discord-popOutHeader focus:outline-none'
        >
          {/* <CloseIcon className='fill-current w-4 h-4 text-discord-topIcons' /> */}
        </button>
      </div>

      <div className='w-full  flex flex-col'>
        <Formik
          initialValues={{ ...initData }}
          validatior={UserNameUpdateSchema}
          onSubmit={updateProfile}
        >
          {({ isSubmitting }) => (
            <Form className='flex flex-col mt-2 rounded-lg'>
              <div className='p-4'>
                <Input />
                
              </div>

              <div className='flex bg-discord-700 justify-end p-4 items-center'>
                <button type='button' className='text-sm text-white mr-4' onClick={onClose}>
                  Cancel
                </button>
                <button type='submit' className='bg-discord-experiment500 hover:bg-discord-experiment500Disabled text-sm rounded-md text-white p-2 px-6'>
                  
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
                    'Done'
                  )}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      {/* <AlertModal show={updated} onClose={setCloseAlertModal} title={title} message={message} alertMode={showAlertMode}/> */}
    </div>
  )
}
