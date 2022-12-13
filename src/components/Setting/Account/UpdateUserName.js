import React ,{ useState } from 'react'
import toast from 'react-hot-toast';
import UpdateCard from './UpdateCard'
import TextField from '../../shared/Inputs/TextField/input'
import UserNameUpdate from '../../../validation/UserName.Schema'
import { updateUserProfile } from '../../../services/account'

export default function Card({ user, onClose }) {
  const title = 'Change your username'
  const description = 'Enter a new username and your existing password.'


  let initData = { username: user?.user_data?.exploreid ?? ''}


  async function updateUserNameProfile(value,{ setErrors }) {
    console.log(value)
    // try {
   
    //   const { data } = await updateUserProfile(user?.user_data?.public_id,value)

    //   if (data.success) {
    //     toast.success('Username  ' +data.message)
    //     // setClose(!close)
    //   }
    // } catch (error) {
      
    //   if (error.response.status === 401) {
    //     setErrors({ username: error.response.data.message })
    //     // console.log('error: ', error.response.data.message)
    //   } else {
    //     console.log('error: ', error.response.data.message)
    //     // setClose(!close)
        
    //   }
    // }
  }

  function Inputs() {
    return (
      <TextField
        fieldClass='mb-4 mt-4'
        labelClass='block text-discord-sideBarChannels font-semibold text-xs mb-2'
        inputClass='w-full text-discord-100 p-2 bg-discord-deprecatedTextInput placeholder-discord-200 focus:outline-none leading-normal'
        label='USERNAME'
        name='username'
        type='text'
      />
    )
  }

  return (
    <UpdateCard
      title={title}
      description={description}
      initData={initData}
      onClose={onClose}
      Input={Inputs}
      UserNameUpdateSchema={UserNameUpdate}
      updateProfile={updateUserNameProfile}
      
    />
  )
}
