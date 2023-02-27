import React, { useState, useEffect } from 'react'

import { Formik, Form, Field } from 'formik'

// import UserNameUpdateSchema from '../../../validation/userNameUpdate.schema'


export default function Card({ onClose, isAdding,merchantId,apiSubmit }) {
 


  async function updateKitchenHours(values,{ setErrors }) {

     await apiSubmit(values)
  }
 



  return (
    <Formik  initialValues={{ from_time:'', to_time:'',kitchen_hour_type:'',day_of_week:''}}
    onSubmit={updateKitchenHours}

    className=" w-full lg:w-1/2 mt-5 md:col-span-2 md:mt-0">
      
      {({ isSubmitting }) => {
        
        return (
          
            <Form>
              
            <div className="overflow-hidden shadow sm:rounded-md">
              <div className="bg-white px-4 py-5 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                      Start Time
                    </label>
                    <Field type="time" name='from_time' placeholder="From time" className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-1 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
                  </div>
   
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                      End Time
                    </label>
                    <Field type="time" placeholder="Time of day" name='to_time' className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-1 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
                  </div>
   
                  {/* <div className="col-span-6 sm:col-span-4">
                    <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                      Day of week
                    </label>
                    <input type="text" placeholder="Day of week" className="input py-1 input-bordered input-primary w-full" />
                  </div> */}
   
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="day_of_week" className="block text-sm font-medium text-gray-700">
                      Day of week
                    </label>
                    <Field as="select" 
                      id="day_of_week"
                      name="day_of_week"
                      
                      className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-1 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    >
                      <option >Day of week</option>
                      <option value='Monday'>Monday</option>
                      <option value='Tuesday'>Tuesday</option>
                      <option value='Wednesday'>Wednesday</option>
                      <option value='Thursday'>Thursday</option>
                      <option value='Friday'>Friday</option>
                      <option value='Saturday'>Saturday</option>
                      <option value='Sunday'>Sunday</option>
                    </Field>
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                      Order Mode
                    </label>
                    <Field
                      id="order_mode"
                      name="kitchen_hour_type"
                      as='select'
                    
                      className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-1 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                     
                    >
                      <option >Order mode</option>
                      <option value='dine_in'>Dine In</option>
                      <option value='delivery'>Delivery</option>
                      <option value='pickup'>Pickup</option>
                    </Field>
                  </div>
   
                  
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                <button
                onClick={onClose}
                  type="button"
                  className="inline-flex justify-center rounded-md border border-transparent  py-1 px-4 text-sm font-medium text-white bg-accent mx-1 shadow-sm hover:bg-violate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-primary py-1 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
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
                 ):(
                  'Save'
                 )}
                </button>
              </div>
            </div>
          </Form>
   
        )
      }}
       
           
    </Formik>
  )
}
