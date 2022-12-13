import React from 'react'
import Account from './BusinessProfile'


export default function BusinessSetting({ onClose }) {
  return (
    <div className='focus:outline-none w-full mx-auto  channels--scrollbar'>
         <div className='flex justify-between mt-5 '>
            {/* <h3 className='text-white text-xl font-bold'>Account Settings</h3> */}
            <Account />
          </div>
     
    </div>
  )
}
