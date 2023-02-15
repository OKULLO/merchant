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
  PlusIcon
} from '@heroicons/react/outline'


// import Blog from './Blog/blog'
// import Sermon from './Sermons/sermons'
// import Events from './Events/events'
// import Podcasts from './Podcasts/podcasts'
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
  { name: 'All Menu', href: '#', id: 1 },
  { name: 'Modifiers', href: '#', id: 2 },
  { name: 'All Items', href: '#', id: 3 },
  // { name: 'Delivery', href: '#', id: 4 },
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
                      Menu management
                    </h1>

                    <p class="mt-1.5 text-sm text-gray-500">
                      Track your menu and items
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
               <>

                <div className="text-center py-10 pb-10">

                <h3 className="mt-2 text-sm font-medium text-sky-900 dark:text-slate-400">You don't have any Refunds on your account yet</h3>
                <a href='/app/packages' className="mt-1 text-sm hover:underline hover:text-indigo-900 text-gray-500 dark:text-slate-50">Book a package and pay in Installments</a>

                </div>
               </>
              )}

             {currentTab.id===3 && (
               <>
              <section className="p-4 my-6 md:p-8 dark:bg-gray-800 dark:text-gray-100">
                <div className="container grid grid-cols-1 gap-6 m-4 mx-auto md:m-0 md:grid-cols-2 xl:grid-cols-3">

                  <div className="flex overflow-hidden border border-gray-200 rounded-lg dark:bg-gray-900 dark:text-gray-100">
                    <div className="flex items-center justify-center px-4 bg-violet-900 text-white dark:text-gray-800">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-6 h-6">
                        <path d="M487.938,162.108l-224-128a16,16,0,0,0-15.876,0l-224,128a16,16,0,0,0,.382,28l224,120a16,16,0,0,0,15.112,0l224-120a16,16,0,0,0,.382-28ZM256,277.849,65.039,175.548,256,66.428l190.961,109.12Z"></path>
                        <path d="M263.711,394.02,480,275.061V238.539L256,361.74,32,238.539v36.522L248.289,394.02a16.005,16.005,0,0,0,15.422,0Z"></path>
                        <path d="M32,362.667,248.471,478.118a16,16,0,0,0,15.058,0L480,362.667V326.4L256,445.867,32,326.4Z"></path>
                      </svg>
                    </div>
                    <div className="flex items-center justify-between flex-1 p-3">
                      <p className="text-2xl font-semibold">20</p>
                      <p>Drinks</p>
                    </div>
                  </div>

                  <div className="flex overflow-hidden rounded-lg dark:bg-gray-900 border border-gray-200 dark:text-gray-100">
                    <div className="flex items-center justify-center px-4 bg-violet-900 text-white dark:text-gray-800">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-6 h-6">
                        <path d="M462.541,316.3l-64.344-42.1,24.774-45.418A79.124,79.124,0,0,0,432.093,192V120A103.941,103.941,0,0,0,257.484,43.523L279.232,67a71.989,71.989,0,0,1,120.861,53v72a46.809,46.809,0,0,1-5.215,21.452L355.962,284.8l89.058,58.274a42.16,42.16,0,0,1,19.073,35.421V432h-72v32h104V378.494A74.061,74.061,0,0,0,462.541,316.3Z"></path>
                        <path d="M318.541,348.3l-64.343-42.1,24.773-45.418A79.124,79.124,0,0,0,288.093,224V152A104.212,104.212,0,0,0,184.04,47.866C126.723,47.866,80.093,94.581,80.093,152v72a78,78,0,0,0,9.015,36.775l24.908,45.664L50.047,348.3A74.022,74.022,0,0,0,16.5,410.4L16,496H352.093V410.494A74.061,74.061,0,0,0,318.541,348.3ZM320.093,464H48.186l.31-53.506a42.158,42.158,0,0,1,19.073-35.421l88.682-58.029L117.2,245.452A46.838,46.838,0,0,1,112.093,224V152a72,72,0,1,1,144,0v72a46.809,46.809,0,0,1-5.215,21.452L211.962,316.8l89.058,58.274a42.16,42.16,0,0,1,19.073,35.421Z"></path>
                      </svg>
                    </div>
                    <div className="flex items-center justify-between flex-1 p-3">
                      <p className="text-2xl font-semibold">7 50</p>
                      <p>Apetizers</p>
                    </div>
                  </div>
                  <div className="flex overflow-hidden rounded-lg dark:bg-gray-900 dark:text-gray-100">
                    <div className="flex items-center justify-center px-4 dark:bg-violet-400 dark:text-gray-800">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-6 h-6">
                        <polygon points="328.375 384 332.073 458.999 256.211 406.28 179.924 459.049 183.625 384 151.586 384 146.064 496 182.756 496 256.169 445.22 329.242 496 365.936 496 360.414 384 328.375 384"></polygon>
                        <path d="M415.409,154.914l-2.194-48.054L372.7,80.933,346.768,40.414l-48.055-2.2L256,16.093,213.287,38.219l-48.055,2.2L139.3,80.933,98.785,106.86l-2.194,48.054L74.464,197.628l22.127,42.715,2.2,48.053L139.3,314.323l25.928,40.52,48.055,2.195L256,379.164l42.713-22.126,48.055-2.195,25.928-40.52L413.214,288.4l2.195-48.053,22.127-42.715Zm-31.646,76.949L382,270.377l-32.475,20.78-20.78,32.475-38.515,1.76L256,343.125l-34.234-17.733-38.515-1.76-20.78-32.475L130,270.377l-1.759-38.514L110.5,197.628,128.237,163.4,130,124.88,162.471,104.1l20.78-32.474,38.515-1.76L256,52.132l34.234,17.733,38.515,1.76,20.78,32.474L382,124.88l1.759,38.515L401.5,197.628Z"></path>
                      </svg>
                    </div>
                    <div className="flex items-center justify-between flex-1 p-3">
                      <p className="text-2xl font-semibold">14</p>
                      <p>Awards</p>
                    </div>
                  </div>
                  <div className="flex overflow-hidden rounded-lg dark:bg-gray-900 dark:text-gray-100">
                    <div className="flex items-center justify-center px-4 dark:bg-violet-400 dark:text-gray-800">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-6 h-6">
                        <path d="M256.25,16A240,240,0,0,0,88,84.977V16H56V144H184V112H106.287A208,208,0,0,1,256.25,48C370.8,48,464,141.2,464,255.75S370.8,463.5,256.25,463.5,48.5,370.3,48.5,255.75h-32A239.75,239.75,0,0,0,425.779,425.279,239.75,239.75,0,0,0,256.25,16Z"></path>
                        <polygon points="240 111.951 239.465 288 368 288 368 256 271.563 256 272 112.049 240 111.951"></polygon>
                      </svg>
                    </div>
                    <div className="flex items-center justify-between flex-1 p-3">
                      <p className="text-2xl font-semibold">24/7 h</p>
                      <p>Support</p>
                    </div>
                  </div>
                  <div className="flex overflow-hidden rounded-lg dark:bg-gray-900 dark:text-gray-100">
                    <div className="flex items-center justify-center px-4 dark:bg-violet-400 dark:text-gray-800">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-6 h-6">
                        <path d="M415.313,358.7c36.453-36.452,55.906-85.231,54.779-137.353-1.112-51.375-21.964-99.908-58.715-136.66L388.75,107.314A166.816,166.816,0,0,1,438.1,222.039c.937,43.313-15.191,83.81-45.463,114.083l-48.617,49.051.044-89.165-32-.016L311.992,440H456.063V408H366.449Z"></path>
                        <path d="M47.937,112h89.614L88.687,161.3c-36.453,36.451-55.906,85.231-54.779,137.352a198.676,198.676,0,0,0,58.715,136.66l22.627-22.627A166.818,166.818,0,0,1,65.9,297.962c-.937-43.314,15.191-83.811,45.463-114.083l48.617-49.051-.044,89.165,32,.015L192.008,80H47.937Z"></path>
                      </svg>
                    </div>
                    <div className="flex items-center justify-between flex-1 p-3">
                      <p className="text-2xl font-semibold">99,9 %</p>
                      <p>Uptime</p>
                    </div>
                  </div>
                  <div className="flex overflow-hidden rounded-lg dark:bg-gray-900 dark:text-gray-100">
                    <div className="flex items-center justify-center px-4 dark:bg-violet-400 dark:text-gray-800">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-6 h-6">
                        <path d="M416,180H320V340h96a20.023,20.023,0,0,0,20-20V200A20.023,20.023,0,0,0,416,180ZM404,308H352V212h52Z"></path>
                        <path d="M436.574,120H352V64H32V408a64.072,64.072,0,0,0,64,64H288a64.072,64.072,0,0,0,64-64v-8h84.574A59.493,59.493,0,0,0,496,340.574V179.426A59.493,59.493,0,0,0,436.574,120ZM464,340.574A27.457,27.457,0,0,1,436.574,368H320v40a32.036,32.036,0,0,1-32,32H96a32.036,32.036,0,0,1-32-32V96H320v56H436.574A27.457,27.457,0,0,1,464,179.426Z"></path>
                      </svg>
                    </div>
                    <div className="flex items-center justify-between flex-1 p-3">
                      <p className="text-2xl font-semibold">720 L</p>
                      <p>Coffee</p>
                    </div>
                  </div>
                </div>
              </section>
               </>
              )}



          </div>
          </main>
		)
}