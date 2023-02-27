import React, { useState,useEffect} from 'react'


import {useFormikContext } from 'formik'

// import {updateMerchantProfile } from '../../../services/merchant'


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




  // async function updateMerchantProfileData(values,{setErrors}) {
   

  //   try {

  //     const { data } = await updateMerchantProfile(merchantId,values)

  //     if (data.success) {

  //       toast.success(data.message)
  //       setMerchant(data?.merchant)
  //       toggleEdittingEnabledMode()

  //     }
  //   } catch (error) {
      
  //     if (error.response.status === 401) {
  //       toast.error('Unauthorized!')
  //       // console.log('error: ', error.response.data.message)
  //     } else {
  //       // setUpdated(!updated)
  //       toast.error(error.response.data.message)
        
  //     }
  //   }
  // }

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

     <div class="p-5 h-screen bg-gray-100">
    <h1 class="text-xl mb-2">Your orders</h1>
 
    <div class="overflow-auto rounded-lg shadow hidden md:block">
      <table class="w-full">
        <thead class="bg-gray-50 border-b-2 border-gray-200">
        <tr>
          <th class="w-20 p-3 text-sm font-semibold tracking-wide text-left">No.</th>
          <th class="p-3 text-sm font-semibold tracking-wide text-left">Details</th>
          <th class="w-24 p-3 text-sm font-semibold tracking-wide text-left">Status</th>
          <th class="w-24 p-3 text-sm font-semibold tracking-wide text-left">Date</th>
          <th class="w-32 p-3 text-sm font-semibold tracking-wide text-left">Total</th>
        </tr>
        </thead>
        <tbody class="divide-y divide-gray-100">
        <tr class="bg-white">
          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
            <a href="#" class="font-bold text-blue-500 hover:underline">10001</a>
          </td>
          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
            Kring New Fit office chair, mesh + PU, black
          </td>
          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
          <span
            class="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">Delivered</span>
          </td>
          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">16/10/2021</td>
          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">$200.00</td>
        </tr>
        <tr class="bg-gray-50">
          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
            <a href="#" class="font-bold text-blue-500 hover:underline">10002</a>
          </td>
          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">Kring New Fit office chair, mesh + PU, black</td>
          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
          <span
            class="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50">Shipped</span>
          </td>
          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">16/10/2021</td>
          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">$200.00</td>
        </tr>
        <tr class="bg-white">
          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
            <a href="#" class="font-bold text-blue-500 hover:underline">10002</a>
          </td>
          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">Kring New Fit office chair, mesh + PU, black</td>
          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
          <span
            class="p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-gray-200 rounded-lg bg-opacity-50">Cancelled</span>
          </td>
          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">16/10/2021</td>
          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">$200.00</td>
        </tr>
        </tbody>
      </table>
    </div>
 
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
      <div class="bg-white space-y-3 p-4 rounded-lg shadow">
        <div class="flex items-center space-x-2 text-sm">
          <div>
            <a href="#" class="text-blue-500 font-bold hover:underline">#1000</a>
          </div>
          <div class="text-gray-500">10/10/2021</div>
          <div>
            <span
              class="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">Delivered</span>
          </div>
        </div>
        <div class="text-sm text-gray-700">
          Kring New Fit office chair, mesh + PU, black
        </div>
        <div class="text-sm font-medium text-black">
          $200.00
        </div>
      </div>
      <div class="bg-white space-y-3 p-4 rounded-lg shadow">
        <div class="flex items-center space-x-2 text-sm">
          <div>
            <a href="#" class="text-blue-500 font-bold hover:underline">#1001</a>
          </div>
          <div class="text-gray-500">10/10/2021</div>
          <div>
            <span
              class="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50">Shipped</span>
          </div>
        </div>
        <div class="text-sm text-gray-700">
          Kring New Fit office chair, mesh + PU, black
        </div>
        <div class="text-sm font-medium text-black">
          $200.00
        </div>
      </div>
      <div class="bg-white space-y-3 p-4 rounded-lg shadow">
        <div class="flex items-center space-x-2 text-sm">
          <div>
            <a href="#" class="text-blue-500 font-bold hover:underline">#1002</a>
          </div>
          <div class="text-gray-500">10/10/2021</div>
          <div>
            <span
              class="p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-gray-200 rounded-lg bg-opacity-50">Canceled</span>
          </div>
        </div>
        <div class="text-sm text-gray-700">
          Kring New Fit office chair, mesh + PU, black
        </div>
        <div class="text-sm font-medium text-black">
          $200.00
        </div>
      </div>
    </div>
  </div>
          
        </section>

       
        


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


