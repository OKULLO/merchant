import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Dialog, Switch, Transition } from '@headlessui/react'
import Modal from '../../shared/Modal'
import { useTitle } from '../../../hooks/hook';

import {updateUserProfile } from '../../../services/account'

import { GetAllBusinessOrders } from '../../../hooks/reactQuery'
import {formatCurrency } from '../../../utils/currencyFormater'
import {chatDividerFormat } from '../../../utils/dateUtils'
import DeleteModal from "../../shared/Modal/deleteModal";
import Pagination from "../../shared/Pagination";
import  paginate from '../../../utils/paginate'
import {getOrderDetails,deleteOrder } from '../../../services/marketplace'
import toast from 'react-hot-toast';
import {
  ArrowNarrowLeftIcon,
  ArrowNarrowRightIcon,
  BriefcaseIcon,
  CalendarIcon,
  CheckCircleIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronRightIcon,

} from '@heroicons/react/solid'

import { 
  STOCK,ORDER_URL,MARKET_PAGE,PRODUCT_PURCHASE_URL
          } from '../../../constants/history.constants'




function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Card({ user }) {

  const [activePage, setActivePage] = useState(0);
  const [orders, setOrders] =useState([])
  const [order_data, setData] = useState([]);
  const [productid, setProductId] = useState('')
  const [orderId, setOrderId] = useState('')
  const [escape,setOnEscape] = useState(false)
  const [title, setTitle] = useState('')
  const [isButtonClicked, setIsButtonClicked] = useState(false)
 
  const [deleteTitle,setDeleteTitle] = useState('')
  const [modalOpen, setIsModalOpen] = useState(false)
  console.log(user?.public_id)

  const {data:order,isLoading,isError} = GetAllBusinessOrders(user?.public_id)


  const pageTitle ='Manage client orders'

  useTitle (pageTitle)

  useEffect(() => {
         if (!isLoading && !isError){
        setData(paginate(order?.order_list));
        // setError(isError)
        // setLoading(isLoading)
        // setLoading(false);
      }
      }, [order?.order_list,isLoading,isError]);
   

     useEffect(() => {
        if (isLoading) return;
        setOrders(order_data[activePage]);
      }, [order_data,isLoading, activePage]);

      const handlePage = (index) => {
        setActivePage(index);
      };

      const nextPage = () => {
        if (activePage === order_data?.length - 1) {
          setActivePage(0);
        } else {
          setActivePage(activePage + 1);
        }
      };
      const prevPage = () => {
        if (activePage === 0) {
          setActivePage(order_data?.length - 1);
        } else {
          setActivePage(activePage - 1);
        }
      };
 
  function toggleDeleteOrderModal(order_id,product_name){
        setIsModalOpen(!modalOpen)
        setOrderId(order_id)
        setDeleteTitle(`Delete order # ${product_name} ` )
    }



async function handleDeletOrder(order_id){
   setIsButtonClicked(!isButtonClicked)
        try {


      const { data } = await deleteOrder(order_id)

      if (data.success) {
        console.log(data)
        setIsButtonClicked(isButtonClicked)
        setIsModalOpen(!modalOpen)

        toast.success(data.message)
        setData(paginate(data?.orders));
        setOrders(order_data[activePage]);
        // setProducts(data?.products)
      }
    } catch (error) {

      setIsButtonClicked(isButtonClicked)
      toast.error(error.response.data.message)

      
     
    }


}





  return (
    <div className='pl-4'>


     {/* Description list with inline editing */}
                      <div className="mt-10 divide-y divide-gray-200">
                        <div className="space-y-1">
                          <h3 className="text-md leading-6 font-medium text-sky-900 dark:text-slate-200 ">Manage Orders </h3>
                          <p className="max-w-2xl text-sm text-sky-900 dark:text-slate-300">
                            Mange client orders on your products from marketplace.
                          </p>
                        </div>
                        </div>

                        <div>


      {isLoading=== false ? (  
      <div>
         {orders?.length>0 ?(
                  <div className='pb-20'>
                  <ul role="list" className="mt-5 border-t border-gray-200 divide-y divide-gray-200 sm:mt-0 sm:border-t-0">
                      {orders?.map((order,index) => (
                <li key={order.index}>
                  <a href="#" className="group block hover:bg-sky-100 hover:dark:bg-slate-700 hover:rounded ">
                    <div className="flex items-center py-5 px-4 sm:py-6 sm:px-0">
                      <div className="min-w-0 flex-1 flex items-center hover:mx-1">
                        <div className="flex-shrink-0">
                          <img
                            className="h-20 w-20 rounded-md group-hover:opacity-75"
                            src={order[1].image_url}
                            alt=""
                          />
                        </div>
                        <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-4 md:gap-4">
                          <div>
                             <p className="text-sm font-medium text-blue-900 dark:text-slate-300 ">{order[1]?.prduct_name}</p>
                            <p className="text-sm text-gray-900 dark:text-slate-500">
                              Ordered on <time dateTime={order[1]?.added_since}>{chatDividerFormat(order[1]?.added_since)}</time>
                              </p>
                          </div>

                          <div class='mx-auto hidden lg:block md:block'>
                            <p className="text-xs mb-1 font-medium text-sky-600 dark:text-slate-300 truncate">Unit price </p>
                            <p className="mt-2 flex items-center text-sm text-gray-800 dark:text-gray-400">
        
                              <span className="truncate">{formatCurrency('UGX',order[1]?.price)}</span>
                            </p>
                            
                          </div>
                          <div class='mx-auto hidden lg:block md:block'>
                            <p className="text-xs mb-1 font-medium text-sky-600 dark:text-slate-300 truncate">Quantity Ordered </p>
                            <p className="mt-2 flex items-center text-sm text-gray-800 dark:text-gray-400">
        
                              <span className="truncate">{order[0]?.orderQty}</span>
                            </p>
                            
                          </div>
                          <div class='mx-auto hidden lg:block md:block'>
                            <p className="text-xs mb-1 font-medium text-sky-600 dark:text-slate-300 truncate">Status </p>
                            <p className="mt-2 flex items-center text-sm text-gray-800 dark:text-gray-400">
        
                              {order[0]?.orderStatus==='Completed' &&
                               (<span className="truncate text-green-600">Payment completed </span>)}
                              {order[0]?.orderStatus==='cancelled' &&
                               (<span className="truncate text-yellow-600">cancelled</span>)}
                               {order[0]?.orderStatus==='pending' &&
                               (<span className="truncate text-yellow-600">Payment pending</span>)}

                            </p>
                         
                            
                          </div>
                          
                       
                        </div>
                        <div className='mx-4'>
    
                            <p className="mt-2 text-sm lg:text-md xl:text-md flex items-center font-semibold text-gray-800 dark:text-slate-100">
        
                              <span className="truncate block group-hover:hidden ">{formatCurrency('UGX',order[0]?.amount)}</span>
                              <span className="truncate  hidden group-hover:block py-1 bg-sky-900 dark:bg-slate-900 px-2 text-white  rounded" >View Order</span>
                              
                              <span className="truncate  hidden group-hover:block py-1 bg-slate-900 dark:bg-slate-800 px-2 mx-2 text-white  rounded" onClick={()=>toggleDeleteOrderModal(order[0]?.order_public_id,order[1]?.prduct_name)}>Delete Order</span>
                            </p>
                          </div>
                      </div>
                      
                      <div>
                        <ChevronRightIcon
                          className="h-5 w-5 text-gray-400 dark:text-gray-200   group-hover:text-gray-400 "
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </a>
                </li>
              ))}
                  </ul>


            {/* Pagination */}
            <nav
              className="border-t border-gray-200 px-4 flex items-center justify-between sm:px-0"
              aria-label="Pagination"
            >
              <div className="-mt-px w-0 flex-1 flex">
                <a
                  href="#"
                  className="border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-sky-900 dark:text-white hover:text-gray-700 hover:border-gray-200"
                >
                  <ArrowNarrowLeftIcon className="mr-3 h-5 w-5 text-sky-900 dark:text-white" aria-hidden="true" />
                 {!isLoading ? "Previous" : null}
                </a>
              </div>
              <div className="hidden md:-mt-px md:flex">
                {isLoading
                        ? null
                        : order_data?.map((item, index) => {
                            return (
                                  <a
                                    href="#"
                                    key={index}
                                    className={`border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium ${
                                                    index === activePage ? "border-indigo-500 text-indigo-600 dark:text-gray-400" : null
                                                  }`}

                                    onClick={() => {
                                                    handlePage(index);
                                                  }}
                                  >
                                    {index + 1}
                                     
                                  </a>
                            );
                          })}
                   
               
              </div>
              <div className="-mt-px w-0 flex-1 flex justify-end">
                <a
                  href="#"
                  className="border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-sky-900 dark:text-white hover:text-gray-700 hover:border-gray-200"
                >
                  {!isLoading ? "Next" : null}
                  <ArrowNarrowRightIcon className="ml-3 h-5 w-5 text-sky-900 dark:text-white" aria-hidden="true" />
                </a>
              </div>
            </nav>
            </div>
                  ):(
                    <div className="text-center py-10 pb-10">

                  <h3 className="mt-2 text-sm font-medium text-sky-900 dark:text-slate-400">You don't have any client orders yet</h3>
                  
                 </div>
                  )}
       </div>
      ):(
        <div className=" mt-20  pt-5 sm:py-4 sm:px-2 lg:max-w-7xl lg:px-4 justify-center">
                
              <div className='text-center dark:text-gray-400 text-sky-800 '><svg
                            className='animate-spin h-5 w-5 text-slate-800 dark:text-white mx-auto'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                          >
                            <circle
                              className='opacity-25'
                              cx='12'
                              cy='12'
                              r='10'
                              stroke='currentColor'
                              strokeWidth='4'
                            ></circle>
                            <path
                              className='opacity-75'
                              fill='currentColor'
                              d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                            ></path>
                          </svg>One moment please...</div>
              </div>
      )}

                        </div>
                  

                   

                    

 <DeleteModal show={modalOpen} title={deleteTitle}   isSubmitting={isButtonClicked} onClose={()=>setIsModalOpen(!modalOpen)} message='Do you want to delete this order? All information related to this order will be removed' handleDelete={()=>handleDeletOrder(orderId)} />


    </div>
  )
}


