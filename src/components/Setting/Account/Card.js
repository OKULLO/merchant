import React, { useState } from 'react'
import { Dialog, Switch, Transition } from '@headlessui/react'
import Modal from '../../shared/Modal'
import UpdateUserName from './UpdateUserName'
import UpdateEmail from './UpdateEmail'
import {updateUserProfile } from '../../../services/account'
import UpdatePhone from './UpdatePhone'
import UpdateName from './UpdateName'
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
                          <h3 className="text-lg leading-6 font-medium text-sky-900 dark:text-slate-200 ">Profile</h3>
                          <p className="max-w-2xl text-sm text-sky-900 dark:text-slate-300">
                            This information will be displayed publicly so be careful what you share.
                          </p>
                        </div>
                        <div className="mt-6">
                          <dl className="divide-y divide-gray-200">
                            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                              <dt className="text-sm font-medium text-sky-900 dark:text-white">First Name</dt>
                              <dd className="mt-1 flex text-sm text-sky-800 dark:text-slate-300 sm:mt-0 sm:col-span-2">
                               
                                  { user?.user_data?.first_name==='None' ? (
                                  <span className='flex-grow text-xs dark:text-slate-300'>
                                    Add your first name{' '}
                                    {/* <span className='text-discord-mainText text-xs'>
                                      #{user?.user_data?.public_id}
                                    </span> */}
                                  </span>):(
                                    <span className='flex-grow dark:text-slate-300'>
                                    {user?.user_data?.first_name}{' '}
                                    
                                  </span>
                                  )}

                                <span className="ml-4 flex-shrink-0">
                                   { user?.user_data?.first_name ==='None' ? (
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
                              <dt className="text-sm font-medium text-sky-900 dark:text-white">Last Name</dt>
                              <dd className="mt-1 flex text-sm text-sky-800 dark:text-slate-300 sm:mt-0 sm:col-span-2">
      
                                { user?.user_data?.last_name ==='None' ? (
                                    <span className='flex-grow text-xs'>
                                     Add your last name{' '}
                                  
                                  </span>
                                  ):(
                                    <span className='flex-grow'>
                                    {user?.user_data?.last_name}{' '}
                                  
                                  </span>
                                  )}
                                <span className="ml-4 flex-shrink-0">
                                   { user?.user_data?.last_name ==='None' ? (
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
                              <dt className="text-sm font-medium text-sky-900 dark:text-white">Username</dt>
                              <dd className="mt-1 flex text-sm text-sky-800 dark:text-slate-300 sm:mt-0 sm:col-span-2">
                              <span className="flex-grow">{user?.user_data?.exploreid}{' '}</span>
                     
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
                              <dt className="text-sm font-medium text-sky-900 dark:text-white">Photo</dt>
                              <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <span className="flex-grow">
                                  <img
                                    className="h-8 w-8 rounded-full"
                                    src={user?.details?.avatar_hash===null ||user?.details?.avatar_hash!== undefined ? user?.details?.avatar_hash :`https://robohash.org/4c6bf950340336dae1895a62062a83f4?set=set4&bgset=&size=400x400`}
                                    alt=""
                                  />

                                </span>
                                <span className="ml-4 flex-shrink-0 flex items-start space-x-4">
                                  <button
                                    type="button"
                                    className="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                                  >
                                    Update
                                  </button>
                                  <span className="text-gray-300" aria-hidden="true">
                                    |
                                  </span>
                                  <button
                                    type="button"
                                    className="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                                  >
                                    Remove
                                  </button>
                                </span>
                              </dd>
                            </div>
                            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                              <dt className="text-sm font-medium text-sky-900 dark:text-white">Email</dt>
                              <dd className="mt-1 flex text-sm text-sky-800 dark:text-slate-300 sm:mt-0 sm:col-span-2">
                                
                                  <span className='flex-grow'>
                                  {user?.user_data?.email}{' '}
                                 
                                </span>
                                <span className="ml-4 flex-shrink-0">
                                   <button
                                    onClick={setCloseEmailModal}
                                    className='hover:bg-sky-700 text-white p-1 px-4 rounded-md bg-sky-600 dark:bg-slate-900 text-sm text-center'
                                  >
                                    Edit
                                  </button>
                                </span>
                              </dd>
                            </div>
                            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-b sm:border-gray-200">
                              <dt className="text-sm font-medium text-sky-900 dark:text-white">Phone Number</dt>
                              <dd className="mt-1 flex text-sm text-sky-800 dark:text-slate-300 sm:mt-0 sm:col-span-2">
                                
                                 {user?.user_data?.phone_number==='None' ?(<span className='flex-grow text-xs'>You haven't added a phone number yet.
                                </span>):(<span className='flex-grow'>{user?.user_data?.phone_number}
                                </span>)}
                                <span className="ml-4 flex-shrink-0">
                                   {user?.user_data?.phone_number==='None' ?(<button onClick ={setClosePhoneModal} className='bg-sky-600 dark:bg-slate-900 text-white p-1 px-4 rounded-md hover:bg-gray-600 text-xs text-center'>
                                      Add
                                    </button>):(<button onClick ={setClosePhoneModal} className='hover:bg-sky-700 text-white p-1 px-4 rounded-md bg-sky-600 dark:bg-slate-900  text-xs text-center'>
                                      Edit phone
                                    </button>)}
                                </span>
                              </dd>
                            </div>
                          </dl>
                        </div>
                      </div>

                      <div className="mt-10 divide-y divide-gray-200">
                        <div className="space-y-1">
                          <h3 className="text-lg leading-6 font-medium text-gray-900">Account</h3>
                          <p className="max-w-2xl text-sm text-gray-500">
                            Manage how information is displayed on your account.
                          </p>
                        </div>
                        <div className="mt-6">
                          <dl className="divide-y divide-gray-200">
                            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                              <dt className="text-sm font-medium text-gray-500">Language</dt>
                              <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <span className="flex-grow">English</span>
                                <span className="ml-4 flex-shrink-0">
                                  <button
                                    type="button"
                                    className="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                                  >
                                    Update
                                  </button>
                                </span>
                              </dd>
                            </div>
                            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                              <dt className="text-sm font-medium text-gray-500">Date format</dt>
                              <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <span className="flex-grow">DD-MM-YYYY</span>
                                <span className="ml-4 flex-shrink-0 flex items-start space-x-4">
                                  <button
                                    type="button"
                                    className="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                                  >
                                    Update
                                  </button>
                                  <span className="text-gray-300" aria-hidden="true">
                                    |
                                  </span>
                                  <button
                                    type="button"
                                    className="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                                  >
                                    Remove
                                  </button>
                                </span>
                              </dd>
                            </div>
                            <Switch.Group as="div" className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                              <Switch.Label as="dt" className="text-sm font-medium text-gray-900" passive>
                                Show Dark Mode
                              </Switch.Label>
                              <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <Switch
                                  checked={automaticTimezoneEnabled}
                                  onChange={setAutomaticTimezoneEnabled}
                                  className={classNames(
                                    automaticTimezoneEnabled ? 'bg-purple-600' : 'bg-gray-200',
                                    'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:ml-auto'
                                  )}
                                >
                                  <span
                                    aria-hidden="true"
                                    className={classNames(
                                      automaticTimezoneEnabled ? 'translate-x-5' : 'translate-x-0',
                                      'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                                    )}
                                  />
                                </Switch>
                              </dd>
                            </Switch.Group>
                            <Switch.Group
                              as="div"
                              className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-b sm:border-gray-200"
                            >
                              <Switch.Label as="dt" className="text-sm font-medium text-gray-500" passive>
                                Auto-update applicant data
                              </Switch.Label>
                              <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <Switch
                                  checked={autoUpdateApplicantDataEnabled}
                                  onChange={setAutoUpdateApplicantDataEnabled}
                                  className={classNames(
                                    autoUpdateApplicantDataEnabled ? 'bg-purple-600' : 'bg-gray-200',
                                    'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:ml-auto'
                                  )}
                                >
                                  <span
                                    aria-hidden="true"
                                    className={classNames(
                                      autoUpdateApplicantDataEnabled ? 'translate-x-5' : 'translate-x-0',
                                      'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                                    )}
                                  />
                                </Switch>
                              </dd>
                            </Switch.Group>
                          </dl>
                        </div>
                      </div>



      <Modal show={showPhoneUpdate} onClose={setClosePhoneModal} center escape={escape} opacity='bg-opacity-50'>
        <UpdatePhone onClose={setClosePhoneModal} user={user} apiSubmit ={updateProfileData} modal='phone' />
      </Modal>

      <Modal show={showUserNameUpdate} onClose={setCloseUserNameModal} center escape={escape} opacity='bg-opacity-50'>
        <UpdatePhone onClose={setCloseUserNameModal} user={user} apiSubmit ={updateProfileData} modal='username'/>
      </Modal>
      <Modal show={showEmailUpdate} onClose={setCloseEmailModal} center escape={escape} opacity='bg-opacity-50'>
        <UpdateEmail onClose={setCloseEmailModal} user={user} />
      </Modal>

      <Modal show={showfNameUpdate} onClose={setCloseFNameModal} center escape={escape} opacity='bg-opacity-50'>
        <UpdateName onClose={setCloseFNameModal} user={user} apiSubmit ={updateProfile} modal='firstname' />
      </Modal>

      <Modal show={showlNameUpdate} onClose={setCloseLNameModal} center escape={escape} opacity='bg-opacity-50'>
        <UpdateName onClose={setCloseLNameModal} user={user} apiSubmit ={updateProfile} modal='lastname' />
      </Modal>
    </div>
  )
}


