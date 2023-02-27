import React, { useState,useEffect,useRef } from 'react'
import { Switch } from '@headlessui/react'
import Modal from '../../shared/Modal'
import KitchenHours from './KitchenHours';
import { Field, Formik, Form, useFormikContext } from 'formik'

import {updateMerchantProfile } from '../../../services/merchant'


import toast from 'react-hot-toast';




function SetFormikValues({merchantData}){

  const { setFieldValue } = useFormikContext();

  useEffect(() => {
                       
                          
    const fields = ['merchant_name', 'merchant_type','about','business_email','business_phone','city','country','street_address'];

    fields.forEach(field => setFieldValue(field, merchantData?.merchant[field], false));


}, []);

}

export default function Card({ merchantData, merchantId }) {
  
  const [showUserNameUpdate, toggleUserNameUpdateModal] = useState(false)
  const [showEmailUpdate, toggleEmailUpdateModal] = useState(false)
  const [showPhoneUpdate, togglePhoneUpdateModal] = useState(false)
  const [merchant , setMerchant] = useState()

  const [isEditting, setEdittingEnabled] = useState(false)
  const [autoUpdateApplicantDataEnabled, setAutoUpdateApplicantDataEnabled] = useState(false)




  const [showPasswordUpdate, togglePasswordUpdateModal] = useState(false)
  const [showlNameUpdate, toggleLNameUpdateModal] = useState(false)
  const [showfNameUpdate, togglefNameUpdateModal] = useState(false)

 

 useEffect (()=>{
   if(merchantData?.merchant !==null || merchantData?.merchant!==undefined) setMerchant(merchantData?.merchant)
 },[merchantData?.merchant])

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

  function toggleEdittingEnabledMode() {
    setEdittingEnabled(!isEditting)
    
  }




  async function updateMerchantProfileData(values,{setErrors}) {
   

    try {

      const { data } = await updateMerchantProfile(merchantId,values)

      if (data.success) {

        toast.success(data.message)
        setMerchant(data?.merchant)
        toggleEdittingEnabledMode()

      }
    } catch (error) {
      
      if (error.response.status === 401) {
        toast.error('Unauthorized!')
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
     <section className=" w-full  mt-4 rounded-md p-2 dark:bg-gray-800 dark:text-gray-50">
          <div className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
            
              <Formik  initialValues={{ merchant_name:'', merchant_type:'',about:'',business_email:'',business_phone:'',city:'',country:'',street_address:''}}
                   onSubmit={updateMerchantProfileData}>

                   {({ isSubmitting }) => {
                    
  
                     return (
                      <div>
                         {isEditting ? (
                              <Form  className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-md dark:bg-gray-900">
                                              
                              <div className="space-y-2 col-span-full lg:col-span-1">
                                <p className="font-medium text-slate-900">Restaurant details</p>
                                <p className="text-sm text-slate-500 ">Your restaurant information</p>
                              </div>
                              <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                                <div className="col-span-full sm:col-span-3">
                                  <label for="firstname" className="text-sm">Restaurant Name</label>
                                  <Field id="firstname" type="text" placeholder="Merchant name" name='merchant_name'  className="block w-full text-sm px-4 py-1 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                  <label for="lastname" className="text-sm">Restaurant type</label>
                                  <Field id="lastname" type="text" name='merchant_type' placeholder="Last name" className="block w-full px-4 py-1 mt-2 text-gray-700 text-sm bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                  <label for="email" className="text-sm">Business Email</label>
                                  <Field id="email" type="email" name='business_email'  placeholder="Email"  className="block w-full px-4 py-1 mt-2 text-gray-700 text-sm bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                                </div>
                                <div className="col-span-full">
                                  <label for="address" className="text-sm">Address</label>
                                  <Field id="address" type="text" name='street_address' placeholder="Physical address" className="block w-full px-4 py-1 mt-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                                </div>
                                <div className="col-span-full">
                                  <label for="bio" className="text-sm">About</label>
                                  <Field as='textarea' id="bio" placeholder="" name='about' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white text-sm  border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
                                </div>
                                <div className="col-span-full sm:col-span-2">
                                  <label for="city" className="text-sm">City</label>
                                  <Field id="city" type="text" placeholder="city" name='city' value={merchantData?.merchant?.city} className="block w-full text-sm px-4 py-1 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                                </div>
                                <div className="col-span-full sm:col-span-2">
                                  <label for="state" className="text-sm">Country</label>
                                  <Field id="state" type="text" placeholder="country" name='country'   className="block w-full px-4 py-1 text-sm mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                                </div>
                                <div className="col-span-full sm:col-span-2">
                                  <label for="zip" className="text-sm">Business Phone</label>
                                  <Field id="zip" type="text" placeholder="business phone" name='business_phone'  className="block w-full px-4 py-1 mt-2 text-sm  text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                                </div>
                              </div>
                              <div class="flex justify-end mt-6 col-span-full">
                              <button onClick={toggleEdittingEnabledMode} className="px-6 py-1 mx-1 text-sm leading-5 text-white transition-colors duration-200 transform bg-accent border border-gray-100 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">
                                Cancel
                              </button>
                              <button type='submit' className="px-6 py-1 leading-5 text-white text-sm transition-colors duration-200 transform bg-indigo-900 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">
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
                                      'Save'
                                    )}
                              </button>
      
                              </div>
                              <SetFormikValues merchantData={merchantData}/>
      
                              </Form>

                         ):(
                          <div className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-md dark:bg-gray-900">
                                              
                              <div className="space-y-2 col-span-full lg:col-span-1">
                                <p className="font-medium text-slate-900">Restaurant details</p>
                                <p className="text-sm text-slate-500 ">Your restaurant information</p>
                              </div>
                              <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                                <div className="col-span-full sm:col-span-3">
                                  <label for="firstname" className="text-sm font-medium">Restaurant Name</label>
                                  <div className='text-gray-500 text-sm'>{merchant?.merchant_name}</div>
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                  <label for="lastname" className="text-sm font-medium">Restaurant type</label>
                                  <div className='text-gray-500 text-sm'>{merchant?.merchant_type}</div>
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                  <label for="email" className="text-sm font-medium">Business Email</label>
                                  <div className='text-gray-500 text-sm'>{merchant?.business_email}</div>
                                </div>
                                <div className="col-span-full">
                                  <label for="address" className="text-sm font-medium">Address</label>
                                  <div className='text-gray-500 text-sm'>{merchant?.street_address}</div>
                                </div>
                                <div className="col-span-full">
                                  <label for="bio" className="text-sm font-medium">About</label>
                                  <div className='text-gray-500 text-sm'>{merchant?.about}</div>
                                </div>
                                <div className="col-span-full sm:col-span-2">
                                  <label for="city" className="text-sm font-medium">City</label>
                                  <div className='text-gray-500 text-sm'>{merchantData?.merchant?.city}</div>
                                </div>
                                <div className="col-span-full sm:col-span-2">
                                  <label for="state" className="text-sm font-medium">Country</label>
                                  <div className='text-gray-500 text-sm'>{merchant?.country}</div>
                                </div>
                                <div className="col-span-full sm:col-span-2">
                                  <label for="zip" className="text-sm">Business Phone</label>
                                  <div className='text-gray-500 text-sm'>{merchant?.business_phone}</div>
                                </div>
                              </div>
                              <div class="flex justify-end mt-6 col-span-full">
                              <button onClick={toggleEdittingEnabledMode} className="px-6 py-1 text-sm leading-5 text-white transition-colors duration-200 transform bg-indigo-900 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">
                                Edit Profile
                              </button>
      
                              </div>
                             
      
                              </div>
                         )}
                      </div>
                     
                     )

                   }}
                    
                   
             

              </Formik>
             
           
            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-md dark:bg-gray-900">
              <div className="space-y-2 col-span-full lg:col-span-1">
                <p className="font-medium text-slate-800">Brand details</p>
                <p className="text-sm text-gray-500">Delight customers with custom branding when they visit your menu</p>
              </div>
              <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                  <label for="website" className="text-sm">Main color</label>
                  <input id="website" type="color" value={merchantData?.brandColors[0]?.primaryColor}  className="block w-full px-4 py-1 mt-2 text-gray-700  border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label for="website" className="text-sm">Secondary color</label>
                  <input id="website" type="color"  value={merchantData?.brandColors[0]?.secondaryColor} className="block w-full px-4 py-1 mt-2 text-gray-700  border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                </div>
                
                <div className="col-span-full sm:col-span-3">
                  <label for="website" className="text-sm">Accent color</label>
                  <input id="website" type="color" value={merchantData?.brandColors[0]?.accentColor} className="block w-full px-4 py-1 mt-2 text-gray-700  border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                </div>
                {/*  */}
                <div className="col-span-full sm:col-span-3">
                  <label for="logo" className="text-sm font-medium mb-1">Restaurant Logo</label>
                  <p className="text-sm text-gray-500">Set your restaurant logo, so customers know you personally </p>
                  <div className="flex items-center space-x-2 mt-2">
                    <img src={merchantData?.brandColors[0]?.merchant_logo} alt="" className="w-10 h-10 rounded-full dark:bg-gray-500 dark:bg-gray-700" />
                    <label for="file-upload" class="px-4 py-2 border rounded-md dark:border-gray-100">
                      <span class="">Change</span>
                      <input id="file-upload" name="file-upload" type="file" class="sr-only"/>
                    </label>
                    
                  </div>
                </div>

                <div className='col-span-full sm:col-span-3'>
                <label class="block text-sm font-medium mb-1 ">
                Banner Image
              </label>
              <p className="text-sm text-gray-500">This picture will show up as a banner across the top of your menu. </p>
              <img src={merchantData?.brandColors[0]?.brand_image} alt="" className="w-full h-20 mt-2 rounded-md  dark:bg-gray-500 dark:bg-gray-700" />
              <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              
                <div class="space-y-1 text-center">
                  <svg className="mx-auto h-12 w-12 text-indigo-200" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div class="flex text-sm text-gray-600">
                    <label for="file-upload" class="relative cursor-pointer bg-slate-100 rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                      <span class="">Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" class="sr-only"/>
                    </label>
                    <p class="pl-1">or drag and drop</p>
                  </div>
                  <p class="text-xs ">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>

              <div class="flex justify-end mt-6 col-span-full">
              <button class="px-6 py-1 leading-5 text-white transition-colors duration-200 transform bg-indigo-900 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">Save</button>
          </div>

              </div>
            </fieldset>
            </div>
          
        </section>

        <KitchenHours merchantData ={merchantData?.kitchenHours} merchantId={merchantId}/>
        


{/* 
      

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
      </Modal> */}
    </div>
  )
}


