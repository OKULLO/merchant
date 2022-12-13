import React, { useState } from 'react'
import { Dialog, Switch, Transition } from '@headlessui/react'
import Modal from '../../shared/Modal'

import {updateUserProfile } from '../../../services/account'

import toast from 'react-hot-toast';




function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Card({ profile }) {
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


  console.log(profile)



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



//   const profile_default = ``
// console.log(user?.details?.avatar_hash)

//   async function updateProfileData(initData,isSubmitting,setIssubmitting,showErrors,modal) {
//     setIssubmitting(!isSubmitting)

//     try {

//       const { data } = await updateUserProfile(user?.user_data?.public_id,initData)

//       if (data.success) {

//         setIssubmitting(isSubmitting)
//         toast.success(`${modal} `+data.message)

//         modal==='phone'?setClosePhoneModal():setCloseUserNameModal()
        
//       }else {
//         setIssubmitting(isSubmitting)
//         console.log(data.message.error)
//          // setMessage(data.message.reset)
//          showErrors(data.message)
//       }
//     } catch (error) {
      
//       if (error.response.status === 401) {
//         showErrors({ username: error.response.data.message })
//         // console.log('error: ', error.response.data.message)
//       } else {
//         // setUpdated(!updated)
//         toast.error(error.response.data.message)
        
//       }
//     }
//   }

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
                          <h3 className="text-lg leading-6 font-medium text-slate-900 dark:text-slate-200 ">Business Profile Overview</h3>
                          <p className="max-w-2xl text-sm text-slate-900 dark:text-slate-300">
                            Manage business profile for business & companies.
                          </p>
                        </div>
                        <div className="mt-6">
                          <dl className="divide-y divide-gray-200">
                            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                              <dt className="text-sm font-medium text-slate-900 dark:text-white">Business/Company Name</dt>
                              <dd className="mt-1 flex text-sm text-sky-800 dark:text-slate-300 sm:mt-0 sm:col-span-2">
                               
                                  { profile?.details?.company_name==='None' ? (
                                  <span className='flex-grow text-xs dark:text-slate-300'>
                                    Add your company name{' '}
                                  
                                  </span>):(
                                    <span className='flex-grow dark:text-slate-300'>
                                    {profile?.details?.company_name}{' '}
                                    
                                  </span>
                                  )}

                                <span className="ml-4 flex-shrink-0">
                                   { profile?.details?.company_name==='None' ? (
                                      <button
                                      onClick={setCloseFNameModal}
                                      className='bg-sky-600 dark:bg-slate-900 text-white p-1 px-4 rounded text-sm text-center rounded-md hover:bg-gray-600'
                                    >
                                      Add
                                    </button>
                                    ):(
                                      <button
                                      onClick={setCloseFNameModal}
                                      className='bg-sky-600 dark:bg-slate-900 text-white p-1 px-4 rounded text-sm text-center rounded-md hover:bg-gray-600'
                                    >
                                      Edit
                                    </button>
                                    )}
                                  </span>
                              </dd>
                            </div>

                            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                              <dt className="text-sm font-medium text-slate-900 dark:text-white">Business Category</dt>
                              <dd className="mt-1 flex text-sm text-sky-800 dark:text-slate-300 sm:mt-0 sm:col-span-2">
      
                                {  profile?.details?.business_type==='None' ==='None' ? (
                                    <span className='flex-grow text-xs'>
                                     Add your Business category{' '}
                                  
                                  </span>
                                  ):(
                                    <span className='flex-grow'>
                                    { profile?.details?.business_type}{' '}
                                  
                                  </span>
                                  )}
                                <span className="ml-4 flex-shrink-0">
                                   { profile?.details?.business_type ? (
                                    <button
                                    onClick={setCloseLNameModal}
                                    className='bg-sky-600 dark:bg-slate-900 text-white p-1 px-4 rounded text-sm text-center rounded-md hover:bg-gray-600'
                                  >
                                    Add
                                  </button>
                            ):(
                              <button
                              onClick={setCloseLNameModal}
                              className='bg-sky-600 dark:bg-slate-900 text-white p-1 px-4 rounded text-sm text-center rounded-md hover:bg-gray-600'
                            >
                              Edit
                            </button>
                            )}
                                </span>
                              </dd>
                            </div>

                             <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                              <dt className="text-sm font-medium text-slate-900 dark:text-white">Website</dt>
                              <dd className="mt-1 flex text-sm text-sky-800 dark:text-slate-300 sm:mt-0 sm:col-span-2">
                              <span className="flex-grow">{ profile?.details?.website_url}{' '}</span>
                     
                            <span className="ml-4 flex-shrink-0">
                            <button
                              onClick={setCloseUserNameModal}
                              className='hover:bg-sky-700 text-white p-1 px-4 rounded-md dark:bg-slate-900 bg-sky-600 text-sm text-center'
                            >
                              Edit
                            </button>
                            </span>
                              </dd>
                            </div>
                              
                          
                            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                              <dt className="text-sm font-medium text-slate-900 dark:text-white">Business Email</dt>
                              <dd className="mt-1 flex text-sm text-sky-800 dark:text-slate-300 sm:mt-0 sm:col-span-2">
                                
                                  <span className='flex-grow'>
                                  { profile?.details?.business_email}{' '}
                                 
                                </span>
                                <span className="ml-4 flex-shrink-0">
                                   <button
                                    onClick={setCloseEmailModal}
                                    className='hover:bg-sky-700 text-white p-1 px-4 rounded-md bg-slate-600 dark:bg-slate-900 text-sm text-center'
                                  >
                                    Edit
                                  </button>
                                </span>
                              </dd>
                            </div>
                            
                            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-b sm:border-gray-200">
                              <dt className="text-sm font-medium text-slate-900 dark:text-white">Business Phone Number</dt>
                              <dd className="mt-1 flex text-sm text-sky-800 dark:text-slate-300 sm:mt-0 sm:col-span-2">
                                
                                 {profile?.detail?.business_phone_number==='None' ?(<span className='flex-grow text-xs'>You haven't added a phone number yet.
                                </span>):(<span className='flex-grow'>{profile?.detail?.business_phone_number}
                                </span>)}
                                <span className="ml-4 flex-shrink-0">
                                   {profile?.detail?.business_phone_number==='None' ?(<button onClick ={setClosePhoneModal} className='bg-sky-600 dark:bg-slate-900 text-white p-1 px-4 rounded-md hover:bg-gray-600 text-xs text-center'>
                                      Add
                                    </button>):(<button onClick ={setClosePhoneModal} className='hover:bg-sky-700 text-white p-1 px-4 rounded-md bg-sky-600 dark:bg-slate-900  text-xs text-center'>
                                      Edit phone
                                    </button>)}
                                </span>
                              </dd>
                            </div>

                             <div className="py-4 sm:py-5 sm:grid sm:grid-cols-6 sm:gap-4 sm:border-b sm:border-gray-200">
                              <dt className="text-sm font-medium text-slate-900 dark:text-white">Country</dt>
                              <dd className="mt-1 flex text-sm text-sky-800 dark:text-slate-300 sm:mt-0 sm:col-span-2">
                                
                                 {profile?.details?.country==='None' ?(<span className='flex-grow text-xs'>You haven't added country.
                                </span>):(<span className='flex-grow'>{profile?.details?.country}
                                </span>)}
                                
                              </dd>

                              <dt className="text-sm font-medium text-slate-900 dark:text-white">City</dt>
                              <dd className="mt-1 flex text-sm text-sky-800 dark:text-slate-300 sm:mt-0 sm:col-span-2">
                                
                                 {profile?.details?.city==='None' ?(<span className='flex-grow text-xs'>You haven't added a city yet.
                                </span>):(<span className='flex-grow'>{profile?.details?.city}
                                </span>)}
                                <span className="ml-4 flex-shrink-0">
                                   {profile?.details?.city==='None' ?(<button onClick ={setClosePhoneModal} className='bg-sky-600 dark:bg-slate-900 text-white p-1 px-4 rounded-md hover:bg-gray-600 text-xs text-center'>
                                      Add
                                    </button>):(<button onClick ={setClosePhoneModal} className='hover:bg-sky-700 text-white p-1 px-4 rounded-md bg-sky-600 dark:bg-slate-900  text-xs text-center'>
                                      Edit location
                                    </button>)}
                                </span>
                              </dd>
                            </div>
                               

                          </dl>
                        </div>
                      </div>

                      <div className="mt-10 divide-y divide-gray-200">
                        <div className="space-y-1">
                          <h3 className="text-sm leading-6 font-medium text-gray-900">About Destiny technology</h3>
                          <p className="max-w-2xl text-sm text-gray-500">
                          {profile?.details?.about}
                          </p>
                        </div>
                 
                      
                      </div>



    </div>
  )
}


