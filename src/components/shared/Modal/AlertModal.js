import React from 'react'
import Modal from './index'

export default function AlertModal({
  show = false,
  onClose,
  title = '',
  message,
  alertMode,
  buttonText = 'Ok',
}) {
  // const
  return (
    <Modal show={show} onClose={onClose} center>
      <div className='flex flex-col lg:w-9/12 xl:w-7/12 md:w-10/12 w-full bg-discord-selectMuted'>
        <div className='flex flex-col px-6'>
          {alertMode==='warning' ? (
            <>
            <h5 className='mt-6 mb-4 text-center text-green-700 font-semibold '>
            {title.toUpperCase()}
          </h5>
          <p className='my-3 text-center text-green-400 text-base'>
            {message}
          </p>
          </>
          ):(
            <>
            <h5 className='mt-6 mb-4 text-center text-orange-700 font-semibold '>
            {title.toUpperCase()}
          </h5>
          <p className='my-3 text-center text-orange-200 text-base'>
            {message}
          </p>
          </>
          )}
          
        </div>

        <div className='flex items-center justify-center p-3 bg-discord-700'>
          <button
            onClick={onClose}
            className='w-full py-3 m-2 bg-discord-experiment500 text-base rounded-md text-white'
          >
            {buttonText}
          </button>
        </div>
      </div>
    </Modal>
  )
}
