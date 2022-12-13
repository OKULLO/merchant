import React, { useState } from 'react'
import { Dialog, Switch, Transition } from '@headlessui/react'
import Modal from '../../shared/Modal'

import {updateUserProfile } from '../../../services/account'

import toast from 'react-hot-toast';




function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Card({ user }) {
  
  const [showUserNameUpdate, toggleUserNameUpdateModal] = useState(false)
  const [showEmailUpdate, toggleEmailUpdateModal] = useState(false)
  const [showPhoneUpdate, togglePhoneUpdateModal] = useState(false)

  const [automaticTimezoneEnabled, setAutomaticTimezoneEnabled] = useState(true)
  const [autoUpdateApplicantDataEnabled, setAutoUpdateApplicantDataEnabled] = useState(false)
   const [escape,setOnEscape] = useState(true)


  // const [showUserNameUpdate, toggleUserNameUpdateModal] = useState(false)
  // const [showEmailUpdate, toggleEmailUpdateModal] = useState(false)
  const [showPasswordUpdate, togglePasswordUpdateModal] = useState(false)
  const [showlNameUpdate, toggleLNameUpdateModal] = useState(false)
  const [showfNameUpdate, togglefNameUpdateModal] = useState(false)



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
  

  function setCloseUserNameModal() {
    toggleUserNameUpdateModal(!showUserNameUpdate)
  }

  function setCloseEmailModal() {
    toggleEmailUpdateModal(!showEmailUpdate)
  }

  function setClosePhoneModal() {
    togglePhoneUpdateModal(!showPhoneUpdate)
  }



  const profile_default = ``
console.log(user?.details?.avatar_hash)

  async function updateProfileData(initData,isSubmitting,setIssubmitting,showErrors,modal) {
    setIssubmitting(!isSubmitting)

    try {

      const { data } = await updateUserProfile(user?.user_data?.public_id,initData)

      if (data.success) {

        setIssubmitting(isSubmitting)
        toast.success(`${modal} `+data.message)

        modal==='phone'?setClosePhoneModal():setCloseUserNameModal()
        
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

    // update profile->firstname-lastname
  async function updateProfile(initData,isSubmitting,setIssubmitting,showErrors,modal) {
    // setIssubmitting(!isSubmitting)

    // try {

    //   const { data } = await updateUserProfile(user?.user_data?.public_id,initData)

    //   if (data.success) {

    //     setIssubmitting(isSubmitting)
    //     toast.success(`${modal} `+data.message)

    //     modal==='firstname'?setCloseFNameModal():setCloseLNameModal()
        
    //     dispatch(updateSuccess(data))
    //     // updateUser(user)
    //   }else {
    //     setIssubmitting(isSubmitting)
    //     console.log(data.message.error)
    //      // setMessage(data.message.reset)
    //      showErrors(data.message)
    //   }
    // } catch (error) {
      
    //   if (error.response.status === 401) {
    //     showErrors({ username: error.response.data.message })
    //     // console.log('error: ', error.response.data.message)
    //   } else {
    //     // setUpdated(!updated)
    //     toast.error(error.response.data.message)
        
    //   }
    // }
  }


  return (
    <div className='pl-4'>


     {/* Description list with inline editing */}
                      <div className="mt-10 divide-y divide-gray-200">
                        <div className="space-y-1">
                          <h3 className="text-md leading-6 font-medium text-sky-900 dark:text-slate-200 ">Manage bookings </h3>
                          <p className="max-w-2xl text-sm text-sky-900 dark:text-slate-300">
                            Mange bookings from clients on packages and trips.
                          </p>
                        </div>
                        </div>
                  

                   

    


    </div>
  )
}


