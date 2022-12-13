import React, { useState } from 'react'
import Modal from '../../shared/Modal'
import UpdateUserName from './UpdateUserName'
import UpdateEmail from './UpdateEmail'
import UpdatePassword from './UpdatePassword'
import UpdateName from './UpdateName'
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux'

import {updateUserProfile } from '../../../services/account'
import { updateSuccess } from '../../../store/user'


import { updatePassword } from '../../../services/account'

export default function Card({ user }) {

  const [showUserNameUpdate, toggleUserNameUpdateModal] = useState(false)
  const [showEmailUpdate, toggleEmailUpdateModal] = useState(false)
  const [showPasswordUpdate, togglePasswordUpdateModal] = useState(false)
  const [showlNameUpdate, toggleLNameUpdateModal] = useState(false)
  const [showfNameUpdate, togglefNameUpdateModal] = useState(false)
  const [escape,setOnEscape] = useState(true)

 

  const dispatch = useDispatch()

  function setCloseUserNameModal() {
    toggleUserNameUpdateModal(!showUserNameUpdate)
  }

  function setCloseLNameModal() {
    toggleLNameUpdateModal(!showlNameUpdate)
   
  }
  function setCloseFNameModal() {
    togglefNameUpdateModal(!showfNameUpdate)
   
  }

  function setCloseEmailModal() {
    toggleEmailUpdateModal(!showEmailUpdate)
    
  }

  function setClosePasswordModal() {
    togglePasswordUpdateModal(!showPasswordUpdate)
  }

   
  // update user password
  async function updatePasswordApi(initData,isSubmitting,setIssubmitting,showErrors){
    setIssubmitting(!isSubmitting)
    try{
      const {data } = await updatePassword(initData)
      if(data.success){
        setIssubmitting(isSubmitting)
        toast.success(data.message)
        setClosePasswordModal()
      
      }else {
       setIssubmitting(isSubmitting)
      // console.log(data.message)
       if(data.message.error){
         console.log(data.message.error)
        // setMessage(data.message.reset)
        showErrors(data.message.error)
       }
       
      }

     }catch(error){

      console.log(error?.response?.data?.message)
      
      
     }

  }

  // update profile data
  async function updateProfile(initData,isSubmitting,setIssubmitting,showErrors,modal) {
    setIssubmitting(!isSubmitting)

    try {

      const { data } = await updateUserProfile(user?.user_data?.public_id,initData)

      if (data.success) {

        setIssubmitting(isSubmitting)
        toast.success(`${modal} `+data.message)

        modal==='firstname'?setCloseFNameModal():setCloseLNameModal()
        
        dispatch(updateSuccess(data))
        // updateUser(user)
      }else {
        setIssubmitting(isSubmitting)
        console.log(data.message.error)
         // setMessage(data.message.reset)
         showErrors(data.message)
      }
    } catch (error) {
      
      if (error.response.status === 401) {
        showErrors({ username: error.response.data.message })
        // console.log('error: ', error.response.data.message)
      } else {
        // setUpdated(!updated)
        toast.error(error.response.data.message)
        
      }
    }
  }



  return (
    <div className='pl-2 mt-20'>
   
    <div className=''>

        <div className='flex-row'>
        <div className='p-4 flex flex-col mt-8  bg-gray-900 rounded-lg'>
          <div className='flex justify-between mt-2'>
            <div className='flex flex-col'>
              <span className='text-xxs text-discord-mainText font-semibold'>
                FIRST NAME
              </span>
              { user?.user_data?.first_name==='None' ? (
              <h6 className='text-white text-xs'>
                Add your first name{' '}
                {/* <span className='text-discord-mainText text-xs'>
                  #{user?.user_data?.public_id}
                </span> */}
              </h6>):(
                <h6 className='text-white text-xs'>
                {user?.user_data?.first_name}{' '}
                {/* <span className='text-discord-mainText text-xs'>
                  #{user?.user_data?.public_id}
                </span> */}
              </h6>
              )}
              
            </div>
            { user?.user_data?.first_name ==='None' ? (
              <button
              onClick={setCloseFNameModal}
              className='bg-indigo-600 text-white p-1 px-4 rounded text-sm text-center rounded-md hover:bg-gray-600'
            >
              Add
            </button>
            ):(
              <button
              onClick={setCloseFNameModal}
              className='bg-indigo-600 text-white p-1 px-4 rounded text-sm text-center rounded-md hover:bg-gray-600'
            >
              Edit
            </button>
            )}
            
          </div>

          <div className='flex justify-between mt-6'>
            <div className='flex flex-col'>
              <span className='text-xxs text-discord-mainText font-semibold'>
                LAST NAME
              </span>
              { user?.user_data?.last_name ==='None' ? (
                <h6 className='text-white text-xs'>
                 Add your last name{' '}
                {/* <span className='text-discord-mainText text-xs'>
                  #{user?.user_data?.public_id}
                </span> */}
              </h6>
              ):(
                <h6 className='text-white text-xs'>
                {user?.user_data?.last_name}{' '}
                {/* <span className='text-discord-mainText text-xs'>
                  #{user?.user_data?.public_id}
                </span> */}
              </h6>
              )}
            </div>
            { user?.user_data?.last_name ==='None' ? (
                    <button
                    onClick={setCloseLNameModal}
                    className='bg-indigo-600 text-white p-1 px-4 rounded text-sm text-center rounded-md hover:bg-gray-600'
                  >
                    Add
                  </button>
            ):(
              <button
              onClick={setCloseLNameModal}
              className='bg-indigo-600 text-white p-1 px-4 rounded text-sm text-center rounded-md hover:bg-gray-600'
            >
              Edit
            </button>
            )}
           
          </div>

          <div className='flex justify-between mt-6 border-t-1 border-gray-500'>
            <div className='flex flex-col mt-2'>
              <span className='text-xxs text-discord-mainText font-semibold'>
                SECURITY
              </span>
              <h6 className='text-white text-xs'>
                Change Your Account Password
              </h6>
            </div>
            <button onClick={setClosePasswordModal} className='bg-orange-600 self-end w-30 bg-gray-500 text-white p-1 mb-1 mt-1 px-2 rounded-md text-xs text-center hover:bg-indigo-700'>
            Change Password
        </button>
          </div>
        </div>
        </div>
      </div>
      
      


      <Modal show={showfNameUpdate} onClose={setCloseFNameModal} center escape={escape} opacity='bg-opacity-50'>
        <UpdateName onClose={setCloseFNameModal} user={user} apiSubmit ={updateProfile} modal='firstname' />
      </Modal>

      <Modal show={showlNameUpdate} onClose={setCloseLNameModal} center escape={escape} opacity='bg-opacity-50'>
        <UpdateName onClose={setCloseLNameModal} user={user} apiSubmit ={updateProfile} modal='lastname' />
      </Modal>
      <Modal show={showUserNameUpdate} onClose={setCloseUserNameModal} center escape={escape} opacity='bg-opacity-50'>
        <UpdateUserName onClose={setCloseUserNameModal} user={user} />
      </Modal>
      <Modal show={showEmailUpdate} onClose={setCloseEmailModal} center escape={escape} opacity='bg-opacity-50' >
        <UpdateEmail onClose={setCloseEmailModal} user={user} />
      </Modal>
      <Modal show={showPasswordUpdate} onClose={setClosePasswordModal} center escape={escape} opacity='bg-opacity-50'>
        <UpdatePassword onClose={setClosePasswordModal} user={user} apiSubmit ={updatePasswordApi} />
      </Modal>
    </div>
  )
}
