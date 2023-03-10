import react, { useState } from 'react'
import DineIn from './DineKitchenHours'
import PickupKItchenHours from './PickupKitchenHours'
import DeliveryKItchenHours from './DeliveryKItchenHours'
import AddKitchenHours from './Kitchenhours/AddKitchenhours'
import Modal from '../../shared/Modal'
import { addKitchenHours } from '../../../services/merchant'
import toast from 'react-hot-toast';

import { PlusIcon} from '@heroicons/react/outline'

const tabs = [
  { name: 'Dine In', href: '#', id: 1 },
  { name: 'Delivery', href: '#', id: 2 },
  { name: 'Pickup', href: '#', id: 3 }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function KitchenHours({merchantData,merchantId}){
 

  const [ activeTab, setActiveTab ] = useState(1);
  const [ currentTab, setCurrentTab ] = useState(tabs[0]);

  const [showUpdate, setShowUpdateModal] = useState(false)
  const [ isAdding,setIsAdding] = useState(false)

  function toggleKitchenHours(){
    setShowUpdateModal(!showUpdate)
  }
   function toggleIsAdding(){
    setIsAdding(!isAdding)
   }

  function handleTabClick(currentTab){
      setActiveTab(currentTab);
      const currentTabContent = tabs.filter(item => item.id === currentTab);
      setCurrentTab(currentTabContent[0]);
  };

  async function updateKitchenHours(values) {

    try {

      const { data } = await addKitchenHours(merchantId,values)

      if (data.success) {

        const upd_obj = merchantData.map(obj => {
        
          if (obj.kitchenId === data?.kitchenHour?.kitchenId) {
            for( let el in obj){
               obj[el] = data?.kitchenHour[el]
            } 
          }
          return obj;
         })
         merchantData.push(upd_obj)
         toast.success(data?.message)
        toggleKitchenHours()
      }
    } catch (error) {
      
      if (error.response.status === 401) {
        toast.error('UnAuthorized')
      } else {
        // setUpdated(!updated)
        toast.error(error.response.data.message)
        
      }
    }
  }

  return (
    <section class="max-w-4xl p-6 mx-auto bg-white dark:bg-gray-800 mt-8">
    <h1 class="text-md font-bold text-slate-800 capitalize dark:text-white">Kitchen Hours</h1>
    <p className="text-sm text-gray-500">Customers cannot place orders beyond your set kitchen hours </p>

    <div className="bg-white shadow">
              <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
                <div className="py-6 md:flex md:items-center md:justify-between ">
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
                          <button
                            onClick={() => handleTabClick(tab.id)}
                            key={tab.name}
                          
                            className={classNames(
                              activeTab===tab.id? 'bg-indigo-100 text-indigo-700' : 'text-gray-500 hover:text-gray-700',
                              'px-3 py-2 font-medium text-sm rounded-md'
                            )}
                            aria-current={tab.current ? 'page' : undefined}
                          >
                            {tab.name}
                          </button>
                        ))}
                      <span className='flex-1  justify-end'>
                      <button  onClick={toggleKitchenHours} type="button"  className="flex items-center px-3 py-0.5 border border-gray-200 shadow-sm text-sm font-medium rounded-xl text-slate-800 hover:text-white bg-gray-50  hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <PlusIcon className='w-3 h-3 mr-1'/>
                                                Add kitchen hours
                          </button>

                      </span>
            
                      </nav>
                    </div>
                  </div>
                  
                   
 
              </div>
            </div>
            </div>

              {/* Description list */}
              <div className="mt-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 ">
                {currentTab.id===1 && (<DineIn merchantData={merchantData} merchantId={merchantId}/>)}
                {currentTab.id===2 && (<DeliveryKItchenHours merchantData={merchantData} merchantId={merchantId}/>)}
                {currentTab.id===3 && (<PickupKItchenHours merchantData={merchantData} merchantId={merchantId}/>)}

                
                  </div>
            </div>
            
                
               
                  
        <Modal show={showUpdate} onClose={setShowUpdateModal} center  opacity='bg-opacity-50'>
        <AddKitchenHours onClose={toggleKitchenHours} isAdding ={isAdding} merchantId={merchantId} apiSubmit={updateKitchenHours} />
      </Modal>     
    
</section>
  )
}