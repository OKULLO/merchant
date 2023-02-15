
import {
  ArrowLeftIcon,
  CurrencyDollarIcon,
  ScaleIcon,

} from '@heroicons/react/outline'
import {
  CashIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  OfficeBuildingIcon,
  SearchIcon,
  UserIcon,
  UsersIcon
} from '@heroicons/react/solid'

import {greetings} from '../../utils/dateUtils'

const cards = [
  { name: 'Account balance', href: '#', icon: ScaleIcon, amount: 'UGX 0' },
  { name: 'Total Articles', href: '#', icon: ScaleIcon, amount: '50' },
  { name: 'Users', href: '#', icon: UsersIcon, amount: '50' },
  { name: 'Sermons', href: '#', icon: UsersIcon, amount: '50' },
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

export default function Dashboard({user}){
  

	return (
		   <main className="flex-1 pb-8">
            {/* Page header */}
        
              <div className="mx-auto max-w-5xl px-4 py-8 sm:py-4 sm:px-6 lg:px-4">
                <div className="flex items-center justify-between">
                  <div className=" text-center sm:text-left">
                    <h1 className="text-md font-bold text-gray-900 sm:text-xl">
                      Daily Report
                    </h1>

                    <p class="mt-1.5 text-sm text-gray-500">
                      24th, February 2023, 18:56
                    </p>
                  </div>

                  <div class="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
                    <button
                      class="inline-flex items-center justify-center rounded-xl border border-gray-200 px-5 py-2 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring"
                      type="button"
                    >
                      <span class="text-sm font-medium"> Export </span>

                      <svg
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
                      </svg>
                    </button>

                    <button
                      class="block rounded-lg btn-accent px-5 py-2 text-sm font-medium text-white transition  focus:outline-none focus:ring"
                      type="button"
                    >
                      Close Report
                    </button>
                  </div>
                </div>
              </div>
               {/* timing */}
              <div className="mx-4  mt-2 py-4 overflow-hidden rounded-lg dark:bg-gray-900 shadow-sm bg-slate-100 dark:text-gray-100">
                    <div className='flex '>
                    <div className=' px-4'>
                    <p className="text-md font-semibold uppercase text-gray-500">Start Time</p>
                      <p className='text-slate-800 capitalize text-sm font-medium px-1'>10th/08/2023 at 10:00 pm</p>
                      

                    </div>
                    <div className='px-4'>
                    <p className="text-md font-semibold uppercase text-gray-500">End time</p>
                      <p className='text-slate-800 capitalize text-sm font-medium px-1'>Closing at 3:30 Pm today</p>
                      

                    </div>

                    </div>
                   
                  </div>

              {/* statistics */}
              <section className="p-4 my-6 md:p-4 dark:bg-gray-800 dark:text-gray-100">
                <div className="container grid grid-cols-1 gap-6 m-4 mx-auto md:m-0 md:grid-cols-3 xl:grid-cols-3">

                  <div className="flex overflow-hidden border border-gray-200 rounded-lg dark:bg-gray-900 dark:text-gray-100">
                    <div className="flex items-center justify-center px-4 bg-violet-900 text-white dark:text-gray-800">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-6 h-6">
                        <path d="M487.938,162.108l-224-128a16,16,0,0,0-15.876,0l-224,128a16,16,0,0,0,.382,28l224,120a16,16,0,0,0,15.112,0l224-120a16,16,0,0,0,.382-28ZM256,277.849,65.039,175.548,256,66.428l190.961,109.12Z"></path>
                        <path d="M263.711,394.02,480,275.061V238.539L256,361.74,32,238.539v36.522L248.289,394.02a16.005,16.005,0,0,0,15.422,0Z"></path>
                        <path d="M32,362.667,248.471,478.118a16,16,0,0,0,15.058,0L480,362.667V326.4L256,445.867,32,326.4Z"></path>
                      </svg>
                    </div>
                    <div className="flex items-center bg-white justify-between flex-1 p-3">
                      <p className="text-lg font-semibold">20</p>
                      <p className='text-slate-600'>Drinks</p>
                    </div>
                  </div>

                  <div className="flex overflow-hidden rounded-lg dark:bg-gray-900 border border-gray-200 dark:text-gray-100">
                    <div className="flex items-center justify-center px-4 bg-violet-900 text-white dark:text-gray-800">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-6 h-6">
                        <path d="M462.541,316.3l-64.344-42.1,24.774-45.418A79.124,79.124,0,0,0,432.093,192V120A103.941,103.941,0,0,0,257.484,43.523L279.232,67a71.989,71.989,0,0,1,120.861,53v72a46.809,46.809,0,0,1-5.215,21.452L355.962,284.8l89.058,58.274a42.16,42.16,0,0,1,19.073,35.421V432h-72v32h104V378.494A74.061,74.061,0,0,0,462.541,316.3Z"></path>
                        <path d="M318.541,348.3l-64.343-42.1,24.773-45.418A79.124,79.124,0,0,0,288.093,224V152A104.212,104.212,0,0,0,184.04,47.866C126.723,47.866,80.093,94.581,80.093,152v72a78,78,0,0,0,9.015,36.775l24.908,45.664L50.047,348.3A74.022,74.022,0,0,0,16.5,410.4L16,496H352.093V410.494A74.061,74.061,0,0,0,318.541,348.3ZM320.093,464H48.186l.31-53.506a42.158,42.158,0,0,1,19.073-35.421l88.682-58.029L117.2,245.452A46.838,46.838,0,0,1,112.093,224V152a72,72,0,1,1,144,0v72a46.809,46.809,0,0,1-5.215,21.452L211.962,316.8l89.058,58.274a42.16,42.16,0,0,1,19.073,35.421Z"></path>
                      </svg>
                    </div>
                    <div className="flex items-center bg-white justify-between flex-1 p-3">
                      <p className="text-lg font-semibold">70</p>
                      <p className='text-slate-600'>Customers</p>
                    </div>
                  </div>
                  <div className="flex overflow-hidden rounded-lg dark:bg-gray-900 dark:text-gray-100 border border-gray-200 ">
                    <div className="flex items-center justify-center px-4 bg-violet-900 text-white dark:text-gray-800">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-6 h-6">
                        <polygon points="328.375 384 332.073 458.999 256.211 406.28 179.924 459.049 183.625 384 151.586 384 146.064 496 182.756 496 256.169 445.22 329.242 496 365.936 496 360.414 384 328.375 384"></polygon>
                        <path d="M415.409,154.914l-2.194-48.054L372.7,80.933,346.768,40.414l-48.055-2.2L256,16.093,213.287,38.219l-48.055,2.2L139.3,80.933,98.785,106.86l-2.194,48.054L74.464,197.628l22.127,42.715,2.2,48.053L139.3,314.323l25.928,40.52,48.055,2.195L256,379.164l42.713-22.126,48.055-2.195,25.928-40.52L413.214,288.4l2.195-48.053,22.127-42.715Zm-31.646,76.949L382,270.377l-32.475,20.78-20.78,32.475-38.515,1.76L256,343.125l-34.234-17.733-38.515-1.76-20.78-32.475L130,270.377l-1.759-38.514L110.5,197.628,128.237,163.4,130,124.88,162.471,104.1l20.78-32.474,38.515-1.76L256,52.132l34.234,17.733,38.515,1.76,20.78,32.474L382,124.88l1.759,38.515L401.5,197.628Z"></path>
                      </svg>
                    </div>
                    <div className="flex items-center bg-white justify-between flex-1 p-3">
                      <p className="text-lg font-semibold">14</p>
                      <p className='text-slate-600'>Orders</p>
                    </div>
                  </div>
                  <div className="flex overflow-hidden rounded-lg dark:bg-gray-900 border border-gray-200 dark:text-gray-100">
                    <div className="flex items-center justify-center px-4 bg-violet-900 text-white dark:text-gray-800">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-6 h-6">
                        <path d="M256.25,16A240,240,0,0,0,88,84.977V16H56V144H184V112H106.287A208,208,0,0,1,256.25,48C370.8,48,464,141.2,464,255.75S370.8,463.5,256.25,463.5,48.5,370.3,48.5,255.75h-32A239.75,239.75,0,0,0,425.779,425.279,239.75,239.75,0,0,0,256.25,16Z"></path>
                        <polygon points="240 111.951 239.465 288 368 288 368 256 271.563 256 272 112.049 240 111.951"></polygon>
                      </svg>
                    </div>
                    <div className="flex items-center bg-white justify-between flex-1 p-3">
                      <p className="text-lg font-semibold">24</p>
                      <p className='text-slate-600'>Items Served</p>
                    </div>
                  </div>
                  <div className="flex overflow-hidden rounded-lg dark:bg-gray-900 border border-gray-200 dark:text-gray-100">
                    <div className="flex items-center justify-center px-4 text-white bg-violet-900 dark:text-gray-800">
                     <CurrencyDollarIcon className="h-6 w-6" aria-hidden="true"/>
                    </div>
                    <div className="flex items-center bg-white justify-between flex-1 p-3">
                      <p className="text-lg font-semibold">Ugx 200,000</p>
                      <p>Revenue</p>
                    </div>
                  </div>
                  <div className="flex overflow-hidden rounded-lg dark:bg-gray-900 dark:text-gray-100 border border-gray-200">
                    <div className="flex items-center justify-center px-4 text-white bg-violet-900 dark:text-gray-800">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-6 h-6">
                        <path d="M416,180H320V340h96a20.023,20.023,0,0,0,20-20V200A20.023,20.023,0,0,0,416,180ZM404,308H352V212h52Z"></path>
                        <path d="M436.574,120H352V64H32V408a64.072,64.072,0,0,0,64,64H288a64.072,64.072,0,0,0,64-64v-8h84.574A59.493,59.493,0,0,0,496,340.574V179.426A59.493,59.493,0,0,0,436.574,120ZM464,340.574A27.457,27.457,0,0,1,436.574,368H320v40a32.036,32.036,0,0,1-32,32H96a32.036,32.036,0,0,1-32-32V96H320v56H436.574A27.457,27.457,0,0,1,464,179.426Z"></path>
                      </svg>
                    </div>
                    <div className="flex items-center bg-white justify-between flex-1 p-3">
                      <p className="text-lg font-semibold">72%</p>
                      <p className='text-slate-600'>Taxes</p>
                    </div>
                  </div>
                </div>
                {/* gross profit */}
                <div className="cols-span-full mt-2 overflow-hidden rounded-lg dark:bg-gray-900 border border-gray-200 dark:text-gray-100">
                <div className=' flex justify-between bg-slate-100 py-2 '>
                <h5 className="text-sm font-bold px-2">Gross Profit</h5>
                <div className='flex justify-end px-1 '>
                  <span>View details</span>
                  <span><ChevronRightIcon className="h-6 w-6" aria-hidden="true"/></span>
                </div>
                </div>
                    <div className="flex items-center bg-white justify-start flex-1 p-3">
                    <div className="flex items-center justify-center px-4 py-1 rounded-md text-white bg-slate-400 dark:text-gray-800">
                     <CurrencyDollarIcon className="h-6 w-6" aria-hidden="true"/>
                    </div>
                    <div className='px-4'>
                    <p className="text-md font-semibold text-slate-800">Ugx 200,000</p>
                      <p className='text-slate-500 uppercase text-sm font-medium'>total profit</p>

                    </div>
                    
                      
                    </div>
                    <div className='flex '>
                    <div className='flex px-4'>
                    <p className="text-md font-semibold text-slate-800">Ugx 10,000</p>
                      <p className='text-slate-500 uppercase text-sm font-medium px-1'>Tax</p>
                      <p className='text-slate-500 uppercase text-sm font-medium px-1'>19 %</p>

                    </div>
                    <div className='flex px-4'>
                    <p className="text-md font-semibold text-slate-800">10</p>
                      <p className='text-slate-500 uppercase text-sm font-medium px-1'>Items sold</p>
                      <p className='text-slate-500 uppercase text-sm font-medium px-1'>19 %</p>

                    </div>

                    </div>
                   
                  </div>
              </section>



              <section className="p-4 my-6 md:p-4 dark:bg-gray-800 dark:text-gray-100">

              <div className="container grid grid-cols-1 gap-6 m-4 mx-auto md:m-0 md:grid-cols-2 xl:grid-cols-3">
              <div className=" w-full">
                {/* cash journal */}
              <div className="rounded-md w-full bg-base-100 shadow-md">
              <div className=' flex justify-between bg-slate-100 py-2 '>
                <h5 className="text-sm font-bold px-2">Cash journal</h5>
                <div className='flex justify-end px-1'>
                  <span>View details</span>
                  <span><ChevronRightIcon className="h-6 w-6" aria-hidden="true"/></span>
                </div>
                </div>
                <div className="card-body">
                  
                  
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
              
              </div>
              {/* best selling items */}

              <div className="rounded-md w-full bg-base-100 shadow-md">
              <div className=' flex justify-between bg-slate-100 py-2 '>
                <h5 className="text-sm font-bold px-2">Best selling Items</h5>
                <div className='flex justify-end px-1 text-slate-500'>
                  <span>View details</span>
                  <span><ChevronRightIcon className="h-6 w-6" aria-hidden="true"/></span>
                </div>
                </div>
                <div className="card-body">
                <ul>
                    <li class="flex justify-between items-center bg-gray-50 mt-2 p-2 hover:shadow-lg rounded cursor-pointer transition">
                        <div className="flex ml-2">
                           <img src="https://i.imgur.com/aq39RMA.jpg" width="40" height="40" class="rounded-md"/>
                            <div className="flex flex-col ml-2"> <span class="font-medium text-black">Jessica Koel</span> <span class="text-sm text-gray-400 truncate w-32">Hey, Joel, I here to help you out please tell me</span> </div>
                        </div>
                        <div className="flex flex-col items-center"> <span class="text-gray-300 bg-primary px-1 rounded-full text-sm">10 +</span> <i className="fa fa-star text-green-400"></i> </div>
                    </li>
                    <li className="flex justify-between items-center bg-gray-50 mt-2 p-2 hover:shadow-lg rounded cursor-pointer transition">
                        <div className="flex ml-2"> <img src="https://i.imgur.com/eMaYwXn.jpg" width="40" height="40" className="rounded-md"/>
                            <div className="flex flex-col ml-2"> <span class="font-medium text-black">Komeial Bolger</span> <span className="text-sm text-gray-400 truncate w-32">I will send you all documents as soon as possible</span> </div>
                        </div>
                        <div className="flex flex-col items-center"> <span class="text-gray-300 rounded-full px-1 text-sm bg-secondary">20+</span> <i className="fa fa-star text-green-400"></i> </div>
                    </li>
                    <li className="flex justify-between items-center bg-gray-50 mt-2 p-2 hover:shadow-lg rounded cursor-pointer transition">
                        <div className="flex ml-2"> <img src="https://i.imgur.com/zQZSWrt.jpg" width="40" height="40" className="rounded-md"/>
                            <div className="flex flex-col ml-2"> <span class="font-medium text-black">Tamaara Suiale</span> <span class="text-sm text-gray-400 truncate w-32">Are you going to business trip next week</span> </div>
                        </div>
                        <div class="flex flex-col items-center"> <span class="text-gray-100 px-1 bg-warning rounded-full text-sm">2 +</span> <i class="fa fa-star text-green-400"></i> </div>
                    </li>
                    <li class="flex justify-between items-center bg-gray-50 mt-2 p-2 hover:shadow-lg rounded cursor-pointer transition">
                        <div class="flex ml-2"> <img src="https://i.imgur.com/agRGhBc.jpg" width="40" height="40" class="rounded-md"/>
                            <div class="flex flex-col ml-2"> <span class="font-medium text-black">Sam Nielson</span> <span class="text-sm text-gray-400 truncate w-32">I suggest to start new business soon</span> </div>
                        </div>
                        <div class="flex flex-col items-center"> <span class="text-gray-50 bg-error px-1 rounded-full text-sm">1+</span> <i class="fa fa-star text-green-400"></i> </div>
                    </li>
                   
                </ul>
                  
                  
                </div>
              </div>
             {/* improvement areas */}
              <div className="rounded-md w-full bg-base-100 shadow-md ">
              <div className=' flex justify-between bg-slate-100 py-2 '>
                <h5 className="text-sm font-bold px-2">Improvement Areas</h5>
                <div className='flex justify-end px-1 text-slate-500'>
                  <span>View details</span>
                  <span><ChevronRightIcon className="h-6 w-6" aria-hidden="true"/></span>
                </div>
                </div>
                <div className="card-body">
                  
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>

              </div>

              </section>
 
            

          </main>
		)
}