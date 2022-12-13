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
  ShieldCheckIcon,
  UserGroupIcon,
  XIcon,
} from '@heroicons/react/outline'
import {
  CashIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  OfficeBuildingIcon,
  SearchIcon,
  PlusIcon
} from '@heroicons/react/solid'

import Blog from './Blog/blog'
import Sermon from './Sermons/sermons'
import Events from './Events/events'
import Podcasts from './Podcasts/podcasts'
const cards = [
  { name: 'Account balance', href: '#', icon: ScaleIcon, amount: '$30,659.45' },
  // More items...
]
const transactions = [
  {
    id: 1,
    name: 'Payment to Molly Sanders',
    href: '#',
    amount: '$20,000',
    currency: 'USD',
    status: 'success',
    date: 'July 11, 2020',
    datetime: '2020-07-11',
  },
  // More transactions...
]
const statusStyles = {
  success: 'bg-green-100 text-green-800',
  processing: 'bg-yellow-100 text-yellow-800',
  failed: 'bg-gray-100 text-gray-800',
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const people = [
  {
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    department: 'Optimization',
    email: 'lindsay.walton@example.com',
    role: 'Member',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  // More people...
]




const tabs = [
  { name: 'Sermons', href: '#', id: 1 },
  { name: 'Blog', href: '#', id: 2 },
  { name: 'Podcasts', href: '#', id: 3 },
  { name: 'Events', href: '#', id: 4 },
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
            <div className="bg-white shadow">
              <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
                <div className="py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200">
                  <div className="flex-1 min-w-0">
                    {/* Profile */}

                     <div>
                    <div className="sm:hidden">
                      <label htmlFor="tabs" className="sr-only">
                        Select a tab
                      </label>
                      {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
                      <select
                        id="tabs"
                        name="tabs"
                        className="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                        defaultValue={tabs.find((tab) => tab.id).name}
                      >
                        {tabs.map((tab) => (
                          <option onChange={() => handleTabClick(tab.id)} key={tab.name}>{tab.name}</option>
                        ))}
                      </select>
                    </div>
                    <div className="hidden sm:block">
                      <nav className="flex space-x-4" aria-label="Tabs">
                        {tabs.map((tab) => (
                          <a
                            onClick={() => handleTabClick(tab.id)}
                            key={tab.name}
                            href={tab.href}
                            className={classNames(
                              activeTab===tab.id? 'bg-indigo-100 text-indigo-700' : 'text-gray-500 hover:text-gray-700',
                              'px-3 py-2 font-medium text-sm rounded-md'
                            )}
                            aria-current={tab.current ? 'page' : undefined}
                          >
                            {tab.name}
                          </a>
                        ))}
                      </nav>
                    </div>
                  </div>
                  
                   
 
              </div>
            </div>
            </div>
            </div>
            {/* Description list */}
                <div className="mt-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {currentTab.id===1 && (<Sermon />)}

                {currentTab.id===2 && (
                   <Blog/>
                  )}

                {currentTab.id===3 && (
                   <Podcasts/>
                  )}
                {currentTab.id===4 && (
                   <Events/>
                  )}
                
               
                  
                </div>
          </main>
		)
}