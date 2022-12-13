import React, { useState, useEffect  } from 'react'
import TextField from '../../shared/Inputs/TextField/input'
import { AiOutlineClose } from 'react-icons/ai'



export default function Card({modal,apiSubmit,user,onClose }) {


  const labelName = modal==='phone' ?'Phone Number':'Username'
  const fieldType  = modal ==='phone'? 'number' :'text'

  const title = `Update  ${labelName}`
  const description = `Enter your ${labelName}`

  const [isSubmitting, setIssubmitting] = useState(false)
  const [errors, showErrors] = useState('')
  
  

  const [formData, setFormData] = useState({ dataValue:''})

  const { dataValue } = formData




  const handleChange =e=>{

    setFormData((prevState)=>({
       ...prevState,
      [e.target.name]:e.target.value,

      }))
    }


  async function updateUserData(e) {
       e.preventDefault();
       
       const initData = modal==='phone' ? { phone_number:dataValue }:{ exploreid:dataValue }

       if(dataValue===''){
        showErrors(`${labelName}  is required`)

       }else{

        apiSubmit(initData,isSubmitting,setIssubmitting,showErrors,modal)
       }   
  }

 

  return (
    <div className='w-full md:w-1/2 flex flex-col mx-4 mx-auto dark:bg-slate-800 bg-white rounded-lg'>
    <div className='w-full  relative flex flex-col items-center justify-center p-4'>
      <h4 className='text-center text-xl font-bold  text-sky-900 dark:text-white'>{title}</h4>
      <p className='text-sm mt-2 text-sky-900 dark:text-white'>{description}</p>
      <button
        onClick={onClose}
        className='absolute top-0 right-0 m-2 rounded-full p-2 flex items-center justify-center border-slate-700 focus:outline-none'
      >
        <AiOutlineClose className='dark:text-white text-slate-900'/>
      </button>
    </div>

    <div className='w-full  flex flex-col'>
     
          <div className='flex flex-col mt-2 rounded-lg'>

          <form onSubmit={updateUserData}>
             
            <div className='p-4'>
               <TextField
                  fieldClass='mb-2 mt-2'
                  labelClass='block text-discord-sideBarChannels font-semibold text-xs mb-2'
                  inputClass='w-full text-discord-100 p-2 bg-discord-deprecatedTextInput placeholder-discord-200 focus:outline-none leading-normal'
                  label={labelName}
                  name='dataValue'
                  type={fieldType}
                  error={errors}
                  id ='value'
                  value={dataValue}
                  HandleChange={handleChange}
                />
             
            </div>

            <div className='flex  justify-end p-4 items-center'>
              <button className=' bg-slate-700 p-2  rounded-md px-4 text-sm text-white mr-4' onClick={onClose}>
                Cancel
              </button>
              <button type='submit' className='bg-slate-900 hover:bg-bg-sky-900 text-sm rounded-md text-white p-2 px-6'>
                {isSubmitting ? (
                    <svg
                    className='animate-spin h-5 w-5 text-white mx-auto'
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
                  </svg>
                ) : (
                  'Done'
                )}
              </button>
            </div>
            </form>
          </div>
      
    </div>
  </div>
  )
}
