import React, { useState, useEffect  } from 'react'
import TextField from '../../shared/Inputs/TextField/input'
import { AiOutlineClose } from 'react-icons/ai'
import lookupCountry from '../../../utils/LookupCountry'

import Input, { getCountries, getCountryCallingCode } from 'react-phone-number-input/input';
import en from 'react-phone-number-input/locale/en.json';
import 'react-phone-number-input/style.css';


const CountrySelect = ({ value, onChange, labels, ...rest }) => (
   <div class="absolute inset-y-0 left-0  flex items-center">
    <select {...rest} value={value} onChange={(event) => onChange(event.target.value || undefined)}>
      <option value="">{labels.ZZ}</option>
      {getCountries().map((country) => (
        <option key={country} value={country}>
          {labels[country]} +{getCountryCallingCode(country)}
        </option>
      ))}
    </select>
  </div>
);



export default function Card({modal,apiSubmit,user,onClose }) {



  const title = `Complete your Profile`
  const description = `Complete your profile registration`

  const [isSubmitting, setIssubmitting] = useState(false)
  // const [phoneNumber, setPhoneNumber] = useState();
  const [country, setCountry] = useState();
  const [errors, showErrors] = useState({ firstname:'',lastname:'',phone:''})
  
  

  const [formData, setFormData] = useState({ firstname:'',lastname:'',phone:''})

  const { firstname,lastname,phone } = formData


  //get country's geolocation using navigator Api
  async function handleNavigator(pos) {
    const { latitude, longitude } = pos.coords;
    const userCountryCode = await lookupCountry({ latitude, longitude });
    setCountry(userCountryCode);
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(handleNavigator, () => console.warn('permission was rejected'));
  }, []);

  const handleChange =e=>{

    setFormData((prevState)=>({
       ...prevState,
      [e.target.name]:e.target.value,

      }))
    }

   


  async function updateUserData(e) {
       e.preventDefault();
       
       const initData = { first_name:firstname,last_name:lastname,phone_number:phone }

       if(firstname===''){
        showErrors({firstname:`First name  is required`})
      }
      else if(lastname===''){
        showErrors({lastname:`Last name  is required`})
      }
      else if(phone===''){
        showErrors({phone:`Phone number  is required`})

      }else{

        await apiSubmit(initData,isSubmitting,setIssubmitting,showErrors,modal)
       }   
  }

 

  return (
    <div className='w-full md:w-1/2 flex flex-col mx-4 mx-auto bg-slate-100 dark:bg-slate-800 rounded-lg'>
    <div className='w-full  relative flex flex-col items-center justify-center p-4'>
      <h4 className='text-center text-xl font-bold text-sky-900'>{title}</h4>
      <p className='text-sm mt-2 text-sky-500'>{description}</p>
      
    </div>

    <div className='w-full  flex flex-col'>
     
          <div className='flex flex-col mt-2 rounded-lg'>

          <form onSubmit={updateUserData}>
             
            <div className='p-4'>
               <TextField
                  fieldClass='mb-2 mt-2'
                  labelClass='block text-sky-300 font-semibold text-xs mb-2'
                  inputClass='rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500  text-gray-900 focus:outline-none focus:border-sky-500 focus:ring-slate-500 focus:z-10'
                  label='First name'
                  name='firstname'
                  type='text'
                  error={errors.firstname}
                  id ='value'
                  value={firstname}
                  HandleChange={handleChange}
                />

                <TextField
                  fieldClass='mb-2 mt-2'
                  labelClass='rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500  text-gray-900 focus:outline-none focus:border-sky-500 focus:ring-slate-500 focus:z-10'
                  label='Last name'
                  name='lastname'
                  type='text'
                  error={errors.lastname}
                  id ='value'
                  value={lastname}
                  HandleChange={handleChange}
                />

                <div>
                <span className='text-discord-red text-xs'>{errors.phone}</span>
              <label for="phone" className="block text-discord-sideBarChannels font-semibold text-xs mb-2">Telephone</label>
               <div class="mt-1 relative rounded-md shadow-sm">
                 <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                   <span className="text-gray-500 sm:text-sm"> <CountrySelect labels={en} className='focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md' name="countrySelect" /></span>
                 </div>
                 <input type="phone" name="phone" id="phone" value={phone} onChange={handleChange} className="pl-40 pr-0 focus:ring-indigo-500 w-full text-discord-100 p-2 bg-discord-deprecatedTextInput placeholder-discord-200 focus:outline-none leading-normal" placeholder="Enter Phone number"/>

               </div>
             </div>
                       
              </div>

            <div className='flex bg-discord-700 justify-end p-4 items-center'>
              
              <button type='submit' className='bg-discord-experiment500 hover:bg-discord-experiment500Disabled text-sm rounded-sm text-white p-2 px-6'>
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
                  'Continue'
                )}
              </button>
            </div>
            </form>
          </div>
      
    </div>
  </div>
  )
}
