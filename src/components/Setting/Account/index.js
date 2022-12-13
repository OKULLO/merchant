import React,{ useState } from 'react'

// import { Fragment, useState } from 'react'

import {
  BellIcon,
  BriefcaseIcon,
  ChatIcon,
  CogIcon,
  DocumentSearchIcon,
  HomeIcon,
  MenuAlt2Icon,
  QuestionMarkCircleIcon,
  UsersIcon,
  XIcon,
} from '@heroicons/react/outline'
import { SearchIcon } from '@heroicons/react/solid'
import { useSelector } from 'react-redux'
import { Me } from '../../../hooks/reactQuery'
import Card from './Card'
import ProfileCard from './ProfileCard'
import BusinessCard from './BusinessCard'


const tabs = [
  { name: 'General', href: '#', current: true },
  { name: 'Password', href: '#', current: false },
  { name: 'Notifications', href: '#', current: false },
  { name: 'Plan', href: '#', current: false },
  { name: 'Payment Options', href: '#', current: false },
  { name: 'Team Members', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Account() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [current,setCurrent] = useState(false)

  const { user }= useSelector((state) => state.auth)

  const { data } = Me(user)

  function toggleCurrent(){
    setCurrent(!current)
  }
//  console.log(data)
  return (
    <div className='w-full flex-1 mx-auto   scrollbar--show--hide channels--scrollbar  py-2 '>

      <main className="flex-1">
              <div className="relative max-w-4xl mx-auto md:px-8 xl:px-0">
                <div className="pt-5 pb-16">
                  <div className="px-4 sm:px-6 md:px-0">
                    <h1 className="text-2xl font-bold text-sky-900 dark:text-slate-200 ">Settings</h1>
                  </div>
                  <div className="px-4 sm:px-6 md:px-0">
                    <div className="py-6">
                      {/* Tabs */}
                      <div className="lg:hidden">
                        <label htmlFor="selected-tab" className="sr-only">
                          Select a tab
                        </label>
                        <select
                          id="selected-tab"
                          name="selected-tab"
                          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm rounded-md"
                          defaultValue={tabs.find((tab) => tab.current).name}
                        >
                          {tabs.map((tab) => (
                            <option key={tab.name}>{tab.name}</option>
                          ))}
                        </select>
                      </div>
                      <div className="hidden lg:block">
                        <div className="border-b border-gray-200">
                          <nav className="-mb-px flex space-x-8">
                            {tabs.map((tab) => (
                              <a
                                onClick={toggleCurrent}
                                key={tab.name}
                                href={tab.href}
                                className={classNames(
                                  tab.current
                                    ? 'border-sky-400 dark:border-slate-500 text-sky-600 dark:text-slate-200'
                                    : 'border-transparent text-sky-900 dark:text-slate-400 hover:border-sky-400 hover:text-gray-600',
                                  'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm'
                                )}
                              >
                                {tab.name}
                              </a>
                            ))}
                          </nav>
                        </div>
                      </div>

                      <Card user={ data } />
                     
                    </div>
                  </div>
                </div>
              </div>
            </main>



    </div>
    
    
  )
}


 // <div className='w-full flex flex-col justify-center px-4 mb-20'>
 //          <div className='flex  mt-6 '> 
 //          <h5 className=" mb-2 text-xl text-sky-900 dark:text-white ">Account Settings</h5>
 //          </div>
 //              <div className='w-full lg:flex '>
 //                <div className='flex  w-full lg:w-7/12  mb-3'>
 //                    <Card user={ data } />
 //                </div>
 //                <div className='flex w-5/12  '>
                  
 //                    <ProfileCard user={ data } />
 //                </div>

 //          </div>
 //          <div className='mb-10'>
 //              <div className="flex-1">
 //                <div className='flex mt-2 '> <h5 className="ml-2 px-2 text-x text-gray-400  hover:text-white">Company/Business Profile</h5>
 //            </div>
 //            <div className='flex w-full flex-col px-3 mb-3'>
 //            <BusinessCard user={ data } />
 //              </div>
 //                </div>
 //          </div>
 //          </div>
