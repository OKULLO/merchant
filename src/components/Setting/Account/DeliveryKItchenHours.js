import { useEffect, useState } from "react"
import UpdateKitchenHours from './Kitchenhours/UpdateKitchenHours'
import AddKitchenHours from './Kitchenhours/AddKitchenhours'
import Modal from '../../shared/Modal'
import { updateKitchenHours } from '../../../services/merchant'
import { formatTime } from '../../../utils/dateUtils'
import toast from 'react-hot-toast';
import { PlusIcon} from '@heroicons/react/outline'



export default function DeliveryKItchenHours({merchantData, merchantId}){

  const [showUpdate, setShowUpdateModal] = useState(false)
  const [ kitchenhours, setKitchenhours] = useState([])
  const [ toggleUpdate, setToggleUpdateModal] = useState(false)
  const [kitchenHr, setkitchenHr ] = useState({})

  function toggleUpdateKitchenHours(kitchenhrs){
    setkitchenHr(kitchenhrs)
    setToggleUpdateModal(!toggleUpdate)
    
  }


  function toggleKitchenHours(){
    setShowUpdateModal(!showUpdate)
   
  }

  // sort only dine in kitchen hours

  useEffect(()=>{
 
  let filteredData = merchantData?.filter((el)=>{
    return el.kitchen_hour_type ==='delivery'
  })

  setKitchenhours(filteredData);

  },[merchantData])

  async function updateKitchenHoursApi(payload) {
   

    try {

      const { data } = await updateKitchenHours(merchantId,payload)

      if (data.success) {
        console.log(data)

        toast.success(data?.message)

        const upd_obj = kitchenhours.map(obj => {
        
          if (obj.kitchenId === data?.kitchenhours?.kitchenId) {
            for( let el in obj){
               obj[el] = data?.kitchenhours[el]
            } 
          }
          return obj;
         })
         
        setKitchenhours(upd_obj);
        setToggleUpdateModal()
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
    <>
       <form>
        <div class="mt-4">
            <div className="mt-6 mb-4">
                      {/* user details*/}
                      <div className="space-y-1">
                       {kitchenhours?.length>0 ? (
                           <div className="py-4 grid grid-cols-6 gap-6 mt-4 sm:grid-cols-2">
                           {/* <dt className="text-sm font-medium text-slate-900 dark:text-white">Bio</dt> */}
                           {kitchenhours?.map((hrs,index)=>(
                            <dd className="mt-1 flex justify-between text-sm text-slate-500 dark:text-slate-300 sm:mt-0 sm:col-span-2">
   
                            <span className='flex-grow text-md text-slate-800 font-semibold'>
                                {hrs.day_of_week}
                              
                              </span>
                              <span className='flex-grow text-md py-1 rounded-full px-4 text-center bg-gray-100 mx-10'>
                              {formatTime(hrs.from_time)}
                              
                              </span>
                              <span className='flex-grow text-md font-semibold'>
                                to
                              
                              </span>
                              <span className='flex-grow text-md py-1 rounded-full px-4 text-center border border-gray-200 mx-10'>
                                {hrs.day_of_week}
                              
                              </span>
                              <span className='flex-grow text-md py-1 rounded-full px-4 text-center bg-gray-100 mx-10'>
                              {formatTime(hrs.to_time)}
                              
                              </span>
                            <span className="ml-4 flex-shrink-0">
                              
                                <button
                                type='button'
                                onClick={()=>toggleUpdateKitchenHours(hrs)}
                                
                                className='bg-indigo-800 dark:bg-slate-900 text-white p-0.25 px-4 text-xs text-center rounded-full hover:bg-gray-600'
                              >
                                Edit
                              </button>
                       
                            </span>
                          </dd>

                           ))}
                           
                         </div>
                       ):(
                        <div className="text-center py-6 pb-10">
            
                        <p className="mt-1 text-sm text-gray-500 dark:text-slate-50">Delivery kitchen hours not set</p>
                        <div className="mt-2">
                        <button type="button" onClick={toggleKitchenHours} className="inline-flex items-center px-4 py-0.5 border border-transparent shadow-sm text-sm font-medium rounded-lg text-white bg-primary hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <PlusIcon className='w-3 h-3 mr-1'/>
                          Add kitchen hours
                        </button>
                        </div>
                      </div>
                       )}

                            
                              
                            
                            
                         
                        
                        </div>
                        </div>
            
        </div>
    </form> 
    <Modal show={showUpdate} onClose={setShowUpdateModal} center  opacity='bg-opacity-50'>
        <AddKitchenHours onClose={toggleKitchenHours} isAdding={false} merchantId ={merchantId}  />
      </Modal>
      <Modal show={toggleUpdate} onClose={setToggleUpdateModal} center  opacity='bg-opacity-50'>
        <UpdateKitchenHours onClose={toggleUpdateKitchenHours} isAdding={false} merchantId ={merchantId} kitchenHr={kitchenHr}  apiSubmit={updateKitchenHoursApi}/>
      </Modal>
    </>
  )
}