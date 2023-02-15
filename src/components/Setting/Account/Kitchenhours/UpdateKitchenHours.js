import React, { useState, useEffect } from 'react'
import toast from 'react-hot-toast';

// import UserNameUpdateSchema from '../../../validation/userNameUpdate.schema'
// import {updateUserProfile } from '../../../services/account'

export default function Card({ user, onClose }) {
  const title = 'Enter an email address'
  const description = 'Enter a new email address and your existing password.'
 
  let initData = { email: user?.user_data?.email ?? ''}

  
  // async function updateProfile(value,{ setErrors }) {

  //   try {

  //     const { data } = await updateUserProfile(user?.user_data?.public_id,value)

  //     if (data.success) {

  //       toast.success('Email '+data?.message)
  //     }
  //   } catch (error) {
      
  //     if (error.response.status === 401) {
  //       setErrors({ username: error.response.data.message })
  //       // console.log('error: ', error.response.data.message)
  //     } else {
  //       // setUpdated(!updated)
  //       toast.error(error.response.data.message)
        
  //     }
  //   }
  // }
 



  return (
    <div className=" w-full lg:w-1/2 mt-5 md:col-span-2 md:mt-0">
            <form action="#" method="POST">
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        Start Time
                      </label>
                      <input type="time" placeholder="From time" className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-1 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                        End Time
                      </label>
                      <input type="time" placeholder="Time of day" className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-1 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
                    </div>

                    {/* <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                        Day of week
                      </label>
                      <input type="text" placeholder="Day of week" className="input py-1 input-bordered input-primary w-full" />
                    </div> */}

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                        Day of week
                      </label>
                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-1 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      >
                        <option>Monday</option>
                        <option>Tuesday</option>
                        <option>Wednesday</option>
                        <option>Thursday</option>
                        <option>Friday</option>
                        <option>Saturday</option>
                        <option>Sunday</option>
                      </select>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                        Order Mode
                      </label>
                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-1 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      >
                        <option>Dine In</option>
                        <option>Takeaway</option>
                      </select>
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
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
  )
}
