import {useState} from 'react';
import { Link } from 'react-router-dom';
import { Switch } from '@headlessui/react'
import {
  BellIcon,
  ClockIcon,
  CogIcon,
  CreditCardIcon,
  DocumentReportIcon,
  HomeIcon,
  MenuAlt1Icon,
  QuestionMarkCircleIcon,
  ScaleIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  XIcon,
  PlusIcon,
  ChevronDownIcon
} from '@heroicons/react/outline'
import { ImGlass } from 'react-icons/im'
import { BiDish } from 'react-icons/bi'
import DropDown from '../shared/DropDown';
const statusStyles = {
  success: 'bg-green-100 text-green-800',
  processing: 'bg-yellow-100 text-yellow-800',
  failed: 'bg-gray-100 text-gray-800',
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const dropdowns =['Board View','Table View']





const tabs = [
  { name: 'All', href: '#', id: 1 },
  { name: 'Dine In', href: '#', id: 2 },
  { name: 'Takeaway', href: '#', id: 3 },
  { name: 'Delivery', href: '#', id: 4 },
]



export default function Dashboard(){
   const [ activeTab, setActiveTab ] = useState(1);
  const [ currentTab, setCurrentTab ] = useState(tabs[0]);
  const [sermons,setSermons] = useState([])
   const [enabled, setEnabled] = useState(false)


  function handleTabClick(currentTab){
      setActiveTab(currentTab);
      const currentTabContent = tabs.filter(item => item.id === currentTab);
      setCurrentTab(currentTabContent[0]);
  };

	return (
		   <main className="flex-1 pb-8">
            {/* Page header */}
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="px-4 sm:px-0">
              
            <div className=" text-center sm:text-left">
                    <h1 className="text-lg font-bold text-slate-900 sm:text-xl">
                      Orders
                    </h1>

                    <p class="mt-1.5 text-sm text-gray-500">
                      Track customers orders, as they come in
                    </p>
                  </div>
               
              {/* Tabs */}
              <div className="sm:hidden">
                <label htmlFor="tabs" className="sr-only">
                  Select a tab
                </label>
                {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
                <select
                  id="tabs"
                  name="tabs"
                  className="mt-4 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md"
                  defaultValue={tabs.find((tab) => tab.id).name}
                >
                  {tabs.map((tab) => (
                    <option key={tab.name}>{tab.name}</option>
                  ))}
                </select>
              </div>
              <div className="hidden sm:block">
                <div className="border-b border-gray-200">
                  <nav className="mt-2 -mb-px flex space-x-8" aria-label="Tabs">
                    {tabs.map((tab) => (
                      <a
                        onClick={() => handleTabClick(tab.id)}
                        key={tab.name}
                        href={tab.href}
                        className={classNames(
                          activeTab === tab.id
                            ? 'border-sky-500 text-indigo-900'
                            : 'border-transparent text-gray-700 dark:text-gray-400  hover:text-gray-700 hover:border-gray-200',
                          'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm'
                        )}
                      >
                        {tab.name}
                        {tab.id===1 ? (
                          <span
                            className={classNames(
                              tab.id===activeTab ? 'bg-sky-100 text-sky-600' : 'bg-gray-100 text-gray-900',
                              'hidden ml-2 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block'
                            )}
                          >
                            0
                          </span>
                        ) : null}
                         {tab.id===2 ? (
                          <span
                            className={classNames(
                              tab.id===activeTab ? 'bg-sky-100 text-sky-600' : 'bg-gray-100 text-gray-900',
                              'hidden ml-2 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block'
                            )}
                          >
                            0
                          </span>
                        ) : null}
                         {tab.id===3 ? (
                          <span
                            className={classNames(
                              tab.id===activeTab  ? 'bg-sky-100 text-sky-600' : 'bg-gray-100 text-gray-900',
                              'hidden ml-2 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block'
                            )}
                          >
                            0
                          </span>
                        ) : null}
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
             {currentTab.id===1 && (
                <div className="text-center py-10 pb-10">

                <h3 className="mt-2 text-sm font-medium text-sky-900 dark:text-slate-400">You don't have any Refunds on your account yet</h3>
                <a href='/app/packages' className="mt-1 text-sm hover:underline hover:text-indigo-900 text-gray-500 dark:text-slate-50">Book a package and pay in Installments</a>
              
               </div>
              )}

              {currentTab.id===2 && (
                
               <div className='relative  h-screen max-w-4xl lg:max-w-4xl mx-auto md:px-4 xl:px-0 mt-4'>
                  <div class="p-5  rounded-md">
                    <h1 class="text-xl mb-2">Your orders</h1>
                
                    <div class="overflow-auto rounded-lg shadow hidden md:block">
                      <table class="w-full">
                        <thead class="bg-gray-50 border-b-2 border-gray-200">
                        <tr>
                          <th class="w-20 p-3 text-sm font-semibold tracking-wide text-left">Order No</th>
                          <th class="p-3 text-sm font-semibold tracking-wide text-left">Name</th>
                          <th class="w-24 p-3 text-sm font-semibold tracking-wide text-left">Table NO</th>
                          <th class="w-24 p-3 text-sm font-semibold tracking-wide text-left">Date</th>
                          <th class="w-24 p-3 text-sm font-semibold tracking-wide text-left">Time</th>
                          <th class="w-24 p-3 text-sm font-semibold tracking-wide text-left">Status</th>
                          
                          <th class="w-32 p-3 text-sm font-semibold tracking-wide text-left">Total</th>
                          <th class="w-32 p-3 text-sm font-semibold tracking-wide text-left">Order Mode</th>
                        </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-100">
                        <tr class="bg-white my-2">
                          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                            <a href="#" class="font-bold text-blue-500 hover:underline">10001</a>
                          </td>
                          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                            Kring New Fit 
                          </td>
                          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">$200.00</td>
                          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">$200.00</td>
                          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">$200.00</td>
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
                          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">Kring New Fit office chair</td>
                          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">$200.00</td>
                          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">$200.00</td>
                          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">$200.00</td>
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
                          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">Kring New Fit office chair</td>
                          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">$200.00</td>
                          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">$200.00</td>
                          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">$200.00</td>
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
               
                {/* <div className="text-center py-10 pb-10">

                <h3 className="mt-2 text-sm font-medium text-sky-900 dark:text-slate-400">You don't have any Refunds on your account yet</h3>
                <a href='/app/packages' className="mt-1 text-sm hover:underline hover:text-indigo-900 text-gray-500 dark:text-slate-50">Book a package and pay in Installments</a>

                </div> */}
               </div>
              )}

             {currentTab.id===3 && (
               <>

            {/* Stacked list */}
               <div className="flex flex-col h-screen  overflow-auto text-gray-700 bg-gray-100 ">
            
                  <div className="flex flex-col gap-4  sm:flex-row sm:items-center px-10 mt-6 justify-end">
                    <DropDown  items={dropdowns}/>
                    <button
                      className="inline-flex items-center justify-center btn-primary rounded-md border border-gray-200 px-5 py-0.5 text-gray-100 transition hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring"
                      type="button"
                    >
                      <span className="text-sm font-medium"> Add New </span>
                      {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="ml-1.5 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg> */}
                    </button>
                        {/* <h1 class="text-lg font-bold">Takeaway orders</h1> */}
                      </div>
              <div class="flex flex-grow px-10 mt-4 space-x-6 overflow-auto ">
                <div class="flex flex-col flex-shrink-0 w-80">
                  <div class="flex items-center flex-shrink-0 h-10 px-2">
                    <span class="block text-sm font-semibold">Incoming</span>
                    <span class="flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-indigo-500 bg-white rounded bg-opacity-30">6</span>
                    <button class="flex items-center justify-center w-6 h-6 ml-auto text-indigo-500 rounded hover:bg-indigo-500 hover:text-indigo-100">
                      <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                      </svg>
                    </button>
                  </div>
                  <div class="flex flex-col pb-2 overflow-auto">

                    <div class="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100" draggable="true">
                      <button class="absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                        <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                        </svg>
                      </button>

                      <div className='flex'>
                      <span class="flex items-center h-6 px-3 text-xs font-semibold ">#2345</span>
                        <span class="flex items-center h-6 px-3 text-xs font-semibold ">Okullo Gilbert</span>
                        <span class="flex items-center h-6 px-3 text-xs font-semibold text-pink-500 bg-pink-100 rounded-full">NEW</span></div>
                    
                      <div class="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
                        <div class="flex items-center">
                          <BiDish className='w-4 h-4'/>
                          <span class="ml-1 leading-none">4</span>
                        </div>
                        <div class="relative flex items-center ml-4">
                         <ImGlass className='w-4 h-4'/>
                          <span class="ml-1 leading-none">4</span>
                        </div>
                        <div class="flex items-center ml-4">
                          <CurrencyDollarIcon className='w-4 h-4'/>
                          <span class="ml-1 leading-none">Ugx 20,000</span>
                        </div>
                        <div class="flex   items-center ml-5">
                        
                          <span class=" ml-1 leading-none  border-dotted border-2 border-indigo-600 text-xs px-4 py-4 rounded-3xl text-slate-800">12:10 h</span>
                        </div>
                        {/* <img class="w-6 h-6 ml-auto rounded-full" src='https://randomuser.me/api/portraits/women/26.jpg'/> */}
                      </div>

                      <div class="flex items-center w-full mt-3 text-xs font-medium text-slate-800">
                        <div class="flex items-center border border-gray-100 bg-gray-200 px-1 py-1 rounded-full">
                          <svg class="w-4 h-4 text-slate-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                          </svg>
                          <span class="ml-1 leading-none">Deliver today at 12:00PM</span>
                        </div>
                         <div class="flex flex-1 items-center ml-1">
                        
                          <span class=" ml-1 leading-none bg-red-100 text-xs px-1 py-1 rounded-full">Payment missing</span>
                        </div>
                        {/*
                        <div class="flex items-center ml-4">
                          <svg class="w-4 h-4 text-gray-300 fill-current"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd" />
                          </svg>
                          <span class="ml-1 leading-none">1</span>
                        </div> */}
                        
                      </div>
                    </div>
                    {/* next order */}
                    <div class="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100" draggable="true">
                      <button class="absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                        <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                        </svg>
                      </button>

                      <div className='flex'>
                      <span class="flex items-center h-6 px-3 text-xs font-semibold ">#2345</span>
                        <span class="flex items-center h-6 px-3 text-xs font-semibold ">Okullo Gilbert</span>
                        <span class="flex items-center h-6 px-3 text-xs font-semibold text-pink-500 bg-pink-100 rounded-full">NEW</span></div>
                    
                      <div class="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
                        <div class="flex items-center">
                          <BiDish className='w-4 h-4'/>
                          <span class="ml-1 leading-none">4</span>
                        </div>
                        <div class="relative flex items-center ml-4">
                         <ImGlass className='w-4 h-4'/>
                          <span class="ml-1 leading-none">4</span>
                        </div>
                        <div class="flex items-center ml-4">
                          <CurrencyDollarIcon className='w-4 h-4'/>
                          <span class="ml-1 leading-none">Ugx 20,000</span>
                        </div>
                        <div class="flex   items-center ml-5">
                        
                          <span class=" ml-1 leading-none  border-dotted border-2 border-indigo-600 text-xs px-4 py-4 rounded-3xl text-slate-800">12:10 h</span>
                        </div>
                        {/* <img class="w-6 h-6 ml-auto rounded-full" src='https://randomuser.me/api/portraits/women/26.jpg'/> */}
                      </div>

                      <div class="flex items-center w-full mt-3 text-xs font-medium text-slate-800">
                        <div class="flex items-center border border-gray-100 bg-gray-200 px-1 py-1 rounded-full">
                          <svg class="w-4 h-4 text-slate-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                          </svg>
                          <span class="ml-1 leading-none">Deliver today at 12:00PM</span>
                        </div>
                         <div class="flex flex-1 items-center ml-1">
                        
                          <span class=" ml-1 leading-none bg-red-100 text-xs px-1 py-1 rounded-full">Payment missing</span>
                        </div>
                        {/*
                        <div class="flex items-center ml-4">
                          <svg class="w-4 h-4 text-gray-300 fill-current"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd" />
                          </svg>
                          <span class="ml-1 leading-none">1</span>
                        </div> */}
                        
                      </div>
                    </div>
                    <div class="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100" draggable="true">
                      <button class="absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                        <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                        </svg>
                      </button>

                      <div className='flex'>
                      <span class="flex items-center h-6 px-3 text-xs font-semibold ">#2345</span>
                        <span class="flex items-center h-6 px-3 text-xs font-semibold ">Okullo Gilbert</span>
                        <span class="flex items-center h-6 px-3 text-xs font-semibold text-pink-500 bg-pink-100 rounded-full">NEW</span></div>
                    
                      <div class="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
                        <div class="flex items-center">
                          <BiDish className='w-4 h-4'/>
                          <span class="ml-1 leading-none">4</span>
                        </div>
                        <div class="relative flex items-center ml-4">
                         <ImGlass className='w-4 h-4'/>
                          <span class="ml-1 leading-none">4</span>
                        </div>
                        <div class="flex items-center ml-4">
                          <CurrencyDollarIcon className='w-4 h-4'/>
                          <span class="ml-1 leading-none">Ugx 20,000</span>
                        </div>
                        <div class="flex   items-center ml-5">
                        
                          <span class=" ml-1 leading-none  border-dotted border-2 border-indigo-600 text-xs px-4 py-4 rounded-3xl text-slate-800">12:10 h</span>
                        </div>
                        {/* <img class="w-6 h-6 ml-auto rounded-full" src='https://randomuser.me/api/portraits/women/26.jpg'/> */}
                      </div>

                      <div class="flex items-center w-full mt-3 text-xs font-medium text-slate-800">
                        <div class="flex items-center border border-gray-100 bg-gray-200 px-1 py-1 rounded-full">
                          <svg class="w-4 h-4 text-slate-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                          </svg>
                          <span class="ml-1 leading-none">Deliver today at 12:00PM</span>
                        </div>
                         <div class="flex flex-1 items-center ml-1">
                        
                          <span class=" ml-1 leading-none bg-red-100 text-xs px-1 py-1 rounded-full">Payment missing</span>
                        </div>
                        {/*
                        <div class="flex items-center ml-4">
                          <svg class="w-4 h-4 text-gray-300 fill-current"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd" />
                          </svg>
                          <span class="ml-1 leading-none">1</span>
                        </div> */}
                        
                      </div>
                    </div>
                    <div class="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100" draggable="true">
                      <button class="absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                        <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                        </svg>
                      </button>

                      <div className='flex'>
                      <span class="flex items-center h-6 px-3 text-xs font-semibold ">#2345</span>
                        <span class="flex items-center h-6 px-3 text-xs font-semibold ">Okullo Gilbert</span>
                        <span class="flex items-center h-6 px-3 text-xs font-semibold text-pink-500 bg-pink-100 rounded-full">NEW</span></div>
                    
                      <div class="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
                        <div class="flex items-center">
                          <BiDish className='w-4 h-4'/>
                          <span class="ml-1 leading-none">4</span>
                        </div>
                        <div class="relative flex items-center ml-4">
                         <ImGlass className='w-4 h-4'/>
                          <span class="ml-1 leading-none">4</span>
                        </div>
                        <div class="flex items-center ml-4">
                          <CurrencyDollarIcon className='w-4 h-4'/>
                          <span class="ml-1 leading-none">Ugx 20,000</span>
                        </div>
                        <div class="flex   items-center ml-5">
                        
                          <span class=" ml-1 leading-none  border-dotted border-2 border-indigo-600 text-xs px-4 py-4 rounded-3xl text-slate-800">12:10 h</span>
                        </div>
                        {/* <img class="w-6 h-6 ml-auto rounded-full" src='https://randomuser.me/api/portraits/women/26.jpg'/> */}
                      </div>

                      <div class="flex items-center w-full mt-3 text-xs font-medium text-slate-800">
                        <div class="flex items-center border border-gray-100 bg-gray-200 px-1 py-1 rounded-full">
                          <svg class="w-4 h-4 text-slate-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                          </svg>
                          <span class="ml-1 leading-none">Deliver today at 12:00PM</span>
                        </div>
                         {/* <div class="flex flex-1 items-center ml-1">
                        
                          <span class=" ml-1 leading-none bg-red-100 text-xs px-1 py-1 rounded-full">Payment missing</span>
                        </div> */}
                        {/*
                        <div class="flex items-center ml-4">
                          <svg class="w-4 h-4 text-gray-300 fill-current"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd" />
                          </svg>
                          <span class="ml-1 leading-none">1</span>
                        </div> */}
                        
                      </div>
                    </div>
                    <div class="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100" draggable="true">
                      <button class="absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                        <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                        </svg>
                      </button>

                      <div className='flex'>
                      <span class="flex items-center h-6 px-3 text-xs font-semibold ">#2345</span>
                        <span class="flex items-center h-6 px-3 text-xs font-semibold ">Okullo Gilbert</span>
                        <span class="flex items-center h-6 px-3 text-xs font-semibold text-pink-500 bg-pink-100 rounded-full">NEW</span></div>
                    
                      <div class="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
                        <div class="flex items-center">
                          <BiDish className='w-4 h-4'/>
                          <span class="ml-1 leading-none">4</span>
                        </div>
                        <div class="relative flex items-center ml-4">
                         <ImGlass className='w-4 h-4'/>
                          <span class="ml-1 leading-none">4</span>
                        </div>
                        <div class="flex items-center ml-4">
                          <CurrencyDollarIcon className='w-4 h-4'/>
                          <span class="ml-1 leading-none">Ugx 20,000</span>
                        </div>
                        <div class="flex   items-center ml-5">
                        
                          <span class=" ml-1 leading-none  border-dotted border-2 border-indigo-600 text-xs px-4 py-4 rounded-3xl text-slate-800">12:10 h</span>
                        </div>
                        {/* <img class="w-6 h-6 ml-auto rounded-full" src='https://randomuser.me/api/portraits/women/26.jpg'/> */}
                      </div>

                      <div class="flex items-center w-full mt-3 text-xs font-medium text-slate-800">
                        <div class="flex items-center border border-gray-100 bg-gray-200 px-1 py-1 rounded-full">
                          <svg class="w-4 h-4 text-slate-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                          </svg>
                          <span class="ml-1 leading-none">Deliver today at 12:00PM</span>
                        </div>
                         {/* <div class="flex flex-1 items-center ml-1">
                        
                          <span class=" ml-1 leading-none bg-red-100 text-xs px-1 py-1 rounded-full">Payment missing</span>
                        </div> */}
                        {/*
                        <div class="flex items-center ml-4">
                          <svg class="w-4 h-4 text-gray-300 fill-current"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd" />
                          </svg>
                          <span class="ml-1 leading-none">1</span>
                        </div> */}
                        
                      </div>
                    </div>
                  </div>
                </div>
                {/* Preparing orders */}
                <div class="flex flex-col flex-shrink-0 w-72">
                  <div class="flex items-center flex-shrink-0 h-10 px-2">
                    <span class="block text-sm font-semibold">Preparing</span>
                    <span class="flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-indigo-500 bg-white rounded bg-opacity-30">3</span>
                    <button class="flex items-center justify-center w-6 h-6 ml-auto text-indigo-500 rounded hover:bg-indigo-500 hover:text-indigo-100">
                      <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                      </svg>
                    </button>
                  </div>
                  <div class="flex flex-col pb-2 overflow-auto">
                    <div class="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100" draggable="true">
                      <button class="absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                        <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                        </svg>
                      </button>
                      <span class="flex items-center h-6 px-3 text-xs font-semibold text-pink-500 bg-pink-100 rounded-full">Design</span>
                      <h4 class="mt-3 text-sm font-medium">This is the title of the card for the thing that needs to be done.</h4>
                      <div class="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
                        <div class="flex items-center">
                          <svg class="w-4 h-4 text-gray-300 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                          </svg>
                          <span class="ml-1 leading-none">Dec 12</span>
                        </div>
                        <div class="relative flex items-center ml-4">
                          <svg class="relative w-4 h-4 text-gray-300 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd" />
                          </svg>
                          <span class="ml-1 leading-none">4</span>
                        </div>
                        <div class="flex items-center ml-4">
                          <svg class="w-4 h-4 text-gray-300 fill-current"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd" />
                          </svg>
                          <span class="ml-1 leading-none">1</span>
                        </div>
                        <img class="w-6 h-6 ml-auto rounded-full" src='https://randomuser.me/api/portraits/women/26.jpg'/>
                      </div>
                    </div>
                    <div class="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100" draggable="true">
                      <button class="absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                        <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                        </svg>
                      </button>
                      <span class="flex items-center h-6 px-3 text-xs font-semibold text-green-500 bg-green-100 rounded-full">Dev</span>
                      <h4 class="mt-3 text-sm font-medium">This is the title of the card for the thing that needs to be done.</h4>
                      <div class="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
                        <div class="flex items-center">
                          <svg class="w-4 h-4 text-gray-300 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                          </svg>
                          <span class="ml-1 leading-none">Dec 12</span>
                        </div>
                        <div class="relative flex items-center ml-4">
                          <svg class="relative w-4 h-4 text-gray-300 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd" />
                          </svg>
                          <span class="ml-1 leading-none">4</span>
                        </div>
                        <div class="flex items-center ml-4">
                          <svg class="w-4 h-4 text-gray-300 fill-current"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd" />
                          </svg>
                          <span class="ml-1 leading-none">1</span>
                        </div>
                        <img class="w-6 h-6 ml-auto rounded-full" src='https://randomuser.me/api/portraits/men/64.jpg'/>
                      </div>
                    </div>
                    <div class="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100" draggable="true">
                      <button class="absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                        <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                        </svg>
                      </button>
                      <span class="flex items-center h-6 px-3 text-xs font-semibold text-pink-500 bg-pink-100 rounded-full">Design</span>
                      <h4 class="mt-3 text-sm font-medium">This is the title of the card for the thing that needs to be done.</h4>
                      <div class="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
                        <div class="flex items-center">
                          <svg class="w-4 h-4 text-gray-300 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                          </svg>
                          <span class="ml-1 leading-none">Dec 12</span>
                        </div>
                        <div class="relative flex items-center ml-4">
                          <svg class="relative w-4 h-4 text-gray-300 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd" />
                          </svg>
                          <span class="ml-1 leading-none">4</span>
                        </div>
                        <div class="flex items-center ml-4">
                          <svg class="w-4 h-4 text-gray-300 fill-current"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd" />
                          </svg>
                          <span class="ml-1 leading-none">1</span>
                        </div>
                        <img class="w-6 h-6 ml-auto rounded-full" src='https://randomuser.me/api/portraits/women/26.jpg'/>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Ready orders */}
                <div class="flex flex-col flex-shrink-0 w-72">
                  <div class="flex items-center flex-shrink-0 h-10 px-2">
                    <span class="block text-sm font-semibold">Ready</span>
                    <span class="flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-indigo-500 bg-white rounded bg-opacity-30">2</span>
                    <button class="flex items-center justify-center w-6 h-6 ml-auto text-indigo-500 rounded hover:bg-indigo-500 hover:text-indigo-100">
                      <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                      </svg>
                    </button>
                  </div>
                  <div class="flex flex-col pb-2 overflow-auto">
                    <div class="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100" draggable="true">
                      <button class="absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                        <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                        </svg>
                      </button>
                      <span class="flex items-center h-6 px-3 text-xs font-semibold text-pink-500 bg-pink-100 rounded-full">Design</span>
                      <h4 class="mt-3 text-sm font-medium">This is the title of the card for the thing that needs to be done.</h4>
                      <div class="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
                        <div class="flex items-center">
                          <svg class="w-4 h-4 text-gray-300 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                          </svg>
                          <span class="ml-1 leading-none">Dec 12</span>
                        </div>
                        <div class="relative flex items-center ml-4">
                          <svg class="relative w-4 h-4 text-gray-300 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd" />
                          </svg>
                          <span class="ml-1 leading-none">4</span>
                        </div>
                        <div class="flex items-center ml-4">
                          <svg class="w-4 h-4 text-gray-300 fill-current"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd" />
                          </svg>
                          <span class="ml-1 leading-none">1</span>
                        </div>
                        <img class="w-6 h-6 ml-auto rounded-full" src='https://randomuser.me/api/portraits/women/26.jpg'/>
                      </div>
                    </div>
                    <div class="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100" draggable="true">
                      <button class="absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                        <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                        </svg>
                      </button>
                      <span class="flex items-center h-6 px-3 text-xs font-semibold text-green-500 bg-green-100 rounded-full">Dev</span>
                      <h4 class="mt-3 text-sm font-medium">This is the title of the card for the thing that needs to be done.</h4>
                      <div class="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
                        <div class="flex items-center">
                          <svg class="w-4 h-4 text-gray-300 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                          </svg>
                          <span class="ml-1 leading-none">Dec 12</span>
                        </div>
                        <div class="relative flex items-center ml-4">
                          <svg class="relative w-4 h-4 text-gray-300 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd" />
                          </svg>
                          <span class="ml-1 leading-none">4</span>
                        </div>
                        <div class="flex items-center ml-4">
                          <svg class="w-4 h-4 text-gray-300 fill-current"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd" />
                          </svg>
                          <span class="ml-1 leading-none">1</span>
                        </div>
                        <img class="w-6 h-6 ml-auto rounded-full" src='https://randomuser.me/api/portraits/men/64.jpg'/>
                      </div>
                    </div>
                  </div>
                </div>

		{/* <div class="flex-shrink-0 w-6"></div> */}
	</div>
                
                 </div>
               </>
              )}



          </div>
          </main>
		)
}