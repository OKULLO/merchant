import React, { useState } from 'react'
import Modal from '../../shared/Modal'
import UpdateUserName from './UpdateUserName'
import UpdateEmail from './UpdateEmail'

export default function Card({ user }) {
  const [showUserNameUpdate, toggleUserNameUpdateModal] = useState(false)
  const [showEmailUpdate, toggleEmailUpdateModal] = useState(false)
  const [escape,setOnEscape] = useState(true)

  function setCloseUserNameModal() {
    toggleUserNameUpdateModal(!showUserNameUpdate)
  }

  function setCloseEmailModal() {
    toggleEmailUpdateModal(!showEmailUpdate)
  }

  const profile = `${process.env.PUBLIC_URL}/profileimage.jpg`


  return (
    <div className='pl-4 mt-2'>
   
    <div className='settings-page'>

        <div className='flex-row'>
        <div className='p-4 flex flex-col mt-8  bg-gray-900 rounded-lg'>
          <div className='flex justify-between mt-2'>
          <div className='flex flex-col mt-2'>
              <span className='text-xxs text-discord-mainText font-semibold'>
                Company Name
              </span>
              <h6 className='text-white text-xs'>
                Change Your Account Password
              </h6>
            </div>
            <div className='flex flex-col mt-2'>
              <span className='text-xxs text-discord-mainText font-semibold'>
                Location
              </span>
              <h6 className='text-white text-xs'>
                Change Your Account Password
              </h6>
            </div>
            <div className='flex flex-col mt-2'>
              <span className='text-xxs text-discord-mainText font-semibold'>
                Open Hours
              </span>
              <h6 className='text-white text-xs'>
                Change Your Account Password
              </h6>
            </div>
              
          </div>

          <div className='flex justify-start mt-6'>
            <span className='text-xxs text-discord-mainText font-semibold'>
                  Website
                </span>
                <a href='https://ex-plre.com' className='text-blue-500 hover:underline text-xs mx-3'>
                https://ex-plre.com
                </a>
          </div>

          {/* <div className='flex justify-between mt-6 border-t-1 border-gray-500'>
            
          </div> */}
        </div>
        </div>
      </div>
      
      


      

      <Modal show={showUserNameUpdate} onClose={setCloseUserNameModal} center escape={escape} opacity='bg-opacity-50'>
        <UpdateUserName onClose={setCloseUserNameModal} user={user} />
      </Modal>
      <Modal show={showEmailUpdate} onClose={setCloseEmailModal} center escape={escape} opacity='bg-opacity-50'>
        <UpdateEmail onClose={setCloseEmailModal} user={user} />
      </Modal>
    </div>
  )
}
