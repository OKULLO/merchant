import React, { useState, useEffect } from 'react'
import {  useNavigate } from 'react-router-dom'

import { LOGIN_PAGE } from '../../../constants/history.constants'
import TextField from '../../shared/Inputs/TextField/input'
import { AiOutlineClose } from 'react-icons/ai'
// import UserNameUpdateSchema from '../../../validation/userNameUpdate.schema'
import { updatePassword } from '../../../services/account'

export default function Card({ user,apiSubmit, onClose }) {

  const navigate = useNavigate()

  const title = 'Update your Password'
  const description = 'Enter your old password and new Password'

  const [isSubmitting, setIssubmitting] = useState(false)
  const [errors, showErrors] = useState('')
  


  const [formData, setFormData] = useState({
    password:'',new_password:'',confirm_password:''
  })

  const { password,new_password,confirm_password } = formData

  

  const handleChange =e=>{

    setFormData((prevState)=>({
       ...prevState,
      [e.target.name]:e.target.value,

      }))

    }
  


  async function updatePasswords(e) {
       e.preventDefault();
       
       const initData = { password:new_password ,old_password:password}

       if(new_password!==confirm_password){
        showErrors('Please enter the correct password'  )
       }else if(errors ===''){

        apiSubmit(initData,isSubmitting,setIssubmitting,showErrors)
       }
     
       
  }

 

  return (
    <div className='w-full md:w-1/2 flex flex-col mx-4 mx-auto bg-discord-selectMuted'>
    <div className='w-full  relative flex flex-col items-center justify-center p-4'>
      <h4 className='text-center text-xl font-bold text-white'>{title}</h4>
      <p className='text-sm mt-2 text-discord-mainText'>{description}</p>
      <button
        onClick={onClose}
        className='absolute top-0 right-0 m-2 rounded-full p-2 flex items-center justify-center border-discord-popOutHeader focus:outline-none'
      >
        <AiOutlineClose className='text-white'/>
      </button>
    </div>

    <div className='w-full  flex flex-col'>
     
          <div className='flex flex-col mt-2 rounded-lg'>

          <form onSubmit={updatePasswords}>
             
            <div className='p-4'>
               {/* <Input/> */}
            
               <TextField
                  fieldClass='mb-2 mt-2'
                  labelClass='block text-discord-sideBarChannels font-semibold text-xs mb-2'
                  inputClass='w-full text-discord-100 p-2 bg-discord-deprecatedTextInput placeholder-discord-200 focus:outline-none leading-normal'
                  label='Current Password'
                  name='password'
                  type='password'
                  error={errors}
                  id ='password'
                  value={password}
                  HandleChange={handleChange}
                />

                <TextField
                  fieldClass='mb-4 mt-2'
                  labelClass='block text-discord-sideBarChannels font-semibold text-xs mb-2'
                  inputClass='w-full text-discord-100 p-2 bg-discord-deprecatedTextInput placeholder-discord-200 focus:outline-none leading-normal'
                  label='New Password'
                  name='new_password'
                  type='password'
                  error=''
                  id='new_password'
                  value={new_password}
                  HandleChange={handleChange}
                />
                <TextField
                  fieldClass='mb-4 mt-2'
                  labelClass='block text-discord-sideBarChannels font-semibold text-xs mb-2'
                  inputClass='w-full text-discord-100 p-2 bg-discord-deprecatedTextInput placeholder-discord-200 focus:outline-none leading-normal'
                  label='Confirm New Password'
                  name='confirm_password'
                  type='password'
                  id='confirm_password'
                  value={confirm_password}
                  error=''
                  HandleChange={handleChange}
                />
             
            </div>

            <div className='flex bg-discord-700 justify-end p-4 items-center'>
              <button className='text-sm text-white mr-4' onClick={onClose}>
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
            </form>
          </div>
          {/* <AlertModal show={showAlert} onClose={setCloseAlertModal} title='Password Update' message={message} alertMode={showAlertMode}/> */}
    </div>
  </div>
  )
}
