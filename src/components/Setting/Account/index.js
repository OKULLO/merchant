import React,{ useState } from 'react'

import { useSelector } from 'react-redux'
import { GetMerchantProfile } from '../../../hooks/reactQuery'
import Card from './Card'
import RevenueCenter from './RevenueCenter'




const tabs = [
  { name: 'Merchant Setting', href: '#', id:1},
  { name: 'Extra charges', href: '#', id:2 },
  { name: 'Social Accounts', href: '#', id:3 },
  { name: 'Revenue Centers', href: '#', id:4 },
  { name: 'Payments', href: '#', id:5 },
  { name: 'Team Members', href: '#', id:6 },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Account() {

  const [ activeTab, setActiveTab ] = useState(1);
  const [ currentTab, setCurrentTab ] = useState(tabs[0]);

  function handleTabClick(currentTab){
    setActiveTab(currentTab);
    const currentTabContent = tabs.filter(item => item.id === currentTab);
    setCurrentTab(currentTabContent[0]);
  };

  const { user }= useSelector((state) => state.auth)

  // const { data } = Me(user)
  const { data:merchantData } = GetMerchantProfile (user?.merchantId)


  return (
    <div className='w-full flex-1 mx-auto   scrollbar--show--hide channels--scrollbar  py-2 '>

      <main className="flex-1">
              <div className="relative max-w-4xl mx-auto md:px-2 xl:px-0">
                <div className="pt-2 pb-16">
                  <div className="px-4 sm:px-6 md:px-0">
                    <h1 className="text-xl font-bold text-slate-900 dark:text-slate-200 ">Settings</h1>
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
                          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-sky-500 focus:border-[#0BOB27] sm:text-sm rounded-md"
                          defaultValue={tabs.find((tab) => tab.id).name}
                        >
                          {tabs.map((tab) => (
                            <option onChange={() => handleTabClick(tab.id)} key={tab.name}>{tab.name}</option>
                          ))}
                        </select>
                      </div>
                      <div className="hidden lg:block">
                        <div className="border-b border-gray-200">
                          <nav className="-mb-px flex space-x-8">
                            {tabs.map((tab) => (
                              <button
                               onClick={() => handleTabClick(tab.id)}
                                key={tab.name}
                                className={classNames(
                                  activeTab===tab.id
                                    ? 'border-indigo-800 dark:border-slate-700 text-indigo-900 dark:text-slate-200'
                                    : 'border-transparent text-slate-700 dark:text-slate-400 hover:border-indigo-800 hover:text-gray-600',
                                  'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm'
                                )}
                              >
                                {tab.name}
                              </button>
                            ))}
                          </nav>
                        </div>
                      </div>

                      {currentTab.id===1 && (<Card merchantData={ merchantData } merchantId={user?.merchantId} />)}
                      {currentTab.id===2 && (<div>Okullo</div>)}
                      {currentTab.id===3 && (<div>Okullo</div>)}
                      {currentTab.id===4 && (<RevenueCenter merchantData={ merchantData } merchantId={user?.merchantId} />)}
                      {currentTab.id===5 && (<div>Okullo</div>)}
                     
                    </div>
                  </div>
                </div>
              </div>
            </main>



    </div>
    
    
  )
}


