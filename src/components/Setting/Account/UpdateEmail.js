import React, { useState, useEffect } from 'react'
import UpdateCard from './UpdateCard'
import toast from 'react-hot-toast';
import TextField from '../../shared/Inputs/TextField'
import UserNameUpdateSchema from '../../../validation/userNameUpdate.schema'
import {updateUserProfile } from '../../../services/account'

export default function Card({ user, onClose }) {
  const title = 'Enter an email address'
  const description = 'Enter a new email address and your existing password.'
 
  let initData = { email: user?.user_data?.email ?? ''}

  
  async function updateProfile(value,{ setErrors }) {

    try {

      const { data } = await updateUserProfile(user?.user_data?.public_id,value)

      if (data.success) {

        toast.success('Email '+data?.message)
      }
    } catch (error) {
      
      if (error.response.status === 401) {
        setErrors({ username: error.response.data.message })
        // console.log('error: ', error.response.data.message)
      } else {
        // setUpdated(!updated)
        toast.error(error.response.data.message)
        
      }
    }
  }
 


  function Input() {
    return (
      <TextField
        fieldClass='mb-4 mt-4'
        labelClass='block text-discord-sideBarChannels font-semibold text-xs mb-2'
        inputClass='w-full text-discord-100 p-2 bg-discord-deprecatedTextInput placeholder-discord-200 focus:outline-none leading-normal'
        label='EMAIL'
        name='email'
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
      Input={Input}
      UserNameUpdateSchema={UserNameUpdateSchema}
      updateProfile={updateProfile}
      
    />
  )
}
