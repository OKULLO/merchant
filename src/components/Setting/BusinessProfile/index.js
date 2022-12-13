import React,{ useState,useRef,useEffect } from 'react'

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
import { Me ,GetCompanyDetail} from '../../../hooks/reactQuery'
import Card from './profile'
import Bookings from './ManageBookings'
import Orders from './ManageOrders'



const tabs = [
  {id:1, name: 'Business profile', href: '#', current: true },
  {id:2, name: 'Manage Bookings', href: '#', current: false },
  {id:3, name: 'Manage Orders', href: '#', current: false },
 
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Account() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [ activeTab, setActiveTab ] = useState(1);
  const [ currentTab, setCurrentTab ] = useState(tabs[0]);

  const { user }= useSelector((state) => state.auth)
  // console.log(user)

  const { data:company } = GetCompanyDetail(user?.public_id)

   // check if user has a comapny registered
  const IsCompanyAuthorizedToViewProducts = company?.details && company?.details?.business_type==='Art and Crafts Industry' ? true : false

  // const tabRef = useRef()

  // function manageTabRef(){
  //   if(!IsCompanyAuthorizedToViewProducts && abRef.current.value=='Manage Orders'){
  //     tabs.remove(tabs[2])

  //   }
   
  // }

  
 


  function handleTabClick(currentTab){
        setActiveTab(currentTab);
        const currentTabContent = tabs.filter(item => item.id === currentTab);
        setCurrentTab(currentTabContent[0]);
    };
//  console.log(data)
  return (
    <div className='w-full flex-1 mx-auto     py-2 '>

      <main className="flex-1">
              <div className="relative max-w-4xl mx-auto md:px-8 xl:px-0">
                <div className="pt-5 pb-16">
                  <div className="px-4 sm:px-6 md:px-0">
                    <h1 className="text-2xl font-bold text-sky-900 dark:text-slate-200 ">Business Profile</h1>
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
                          defaultValue={tabs.find((tab) => tab.id)?.name}
                        >
                          {tabs.map((tab) => (
                            <option onClick={() => handleTabClick(tab?.id)} key={tab?.name}>{tab?.name}</option>
                          ))}
                        </select>
                      </div>
                      <div className="hidden lg:block">
                        <div className="border-b border-gray-200">
                          <nav className="-mb-px flex space-x-8">
                            {tabs.map((tab) => (
                              <a
                                onClick={() => handleTabClick(tab.id)}
                                key={tab?.name}
                                href={tab?.href}
                                className={classNames(
                                  activeTab === tab?.id
                                    ? 'border-sky-400 dark:border-slate-500 text-sky-600 dark:text-slate-200'
                                    : 'border-transparent text-sky-900 dark:text-slate-400 hover:border-sky-400 hover:text-gray-600',
                                  'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm'
                                )}
                              >
                                {tab?.name}
                              </a>
                            ))}
                          </nav>
                        </div>
                      </div>
                      {currentTab.id===1 && (
                          <Card profile={ company } />
                        )}
                      {currentTab.id===2 && (
                          <Bookings user={ user } />
                        )}

                      {currentTab.id===3 && (
                          <Orders user={ user } />
                        )}
                      
                      
                     
                    </div>
                  </div>
                </div>
              </div>
            </main>



    </div>
    
    
  )
}


