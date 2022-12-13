import React, { useState, useEffect  } from 'react'
import TextField from '../../shared/Inputs/TextField/input'
import TextArea from '../../shared/Inputs/TextArea'
import { AiOutlineClose } from 'react-icons/ai'


import 'react-phone-number-input/style.css';
import S3FileUpload from 'react-s3'
import config from '../../../config'
import {FcAddImage } from 'react-icons/fc'

import { CountryDropdown,RegionDropdown } from 'react-country-region-selector';





export default function Card({modal,apiSubmit,user,onClose }) {



  const title = `Complete your Profile`
  const description = `Complete your User details`

  const [isSubmitting, setIssubmitting] = useState(false)
  const [ ImageUrl, setImageUrl ] = useState("");

  const [selectCountry,setSelectedCountry] = useState()
  const [region,selectRegion] = useState()
  
  const [errors, showErrors] = useState({country:'',image:''})

  const [bioData, setBio] = useState({bio:''})

  const { bio } = bioData


  const handleChange =e=>{

    setBio((prevState)=>({
       ...prevState,
      [e.target.name]:e.target.value,

      }))
    }
 



    const uploadImage = (e) => {
    // handle validations
    const file = e.target.files[0];

    const fileExtension = file.name.split(".").at(-1);
    const allowedFileTypes = ["jpg", "png","jpeg"];
    
    if (file.size > 10e6)
      showErrors({image:'file size is too big upload a file less than 10Mb'})

    else if (!allowedFileTypes.includes(fileExtension)) {
      showErrors({image:`File does not support. Files type must be ${allowedFileTypes.join(", ")}`});
      return false;
  }else{
    // handleImageUpload(file)
    // s3 bucket upload
    S3FileUpload.uploadFile(file,config.Aws).then((data)=>{
      setImageUrl(data.location)
    })
  }
  };

  


  async function updateUserData(e) {
       e.preventDefault();
       
       const initData = {country:selectCountry,city:region,avatar_url:ImageUrl,bio:bio,api_type:'geopy'}

       if(selectCountry===''){
        showErrors({country:`Please select country`})
      
      

      }else{

        await apiSubmit(initData,isSubmitting,setIssubmitting,showErrors)
       }   
  }

 

  return (
    <div className='w-full md:w-1/2 flex flex-col mx-4 mx-auto bg-discord-selectMuted'>
    <div className='w-full  relative flex flex-col items-center justify-center p-4'>
      <h4 className='text-center text-xl font-bold text-white'>{title}</h4>
      <p className='text-sm mt-2 text-discord-mainText'>{description}</p>
      
    </div>

    <div className='w-full  flex flex-col'>
     
          <div className='flex flex-col mt-2 rounded-lg'>

          <form onSubmit={updateUserData}>
             
            <div className='p-4'>
                <div className=' rounded-lg h-20 mx-4  mb-10'>
                  <span className='text-discord-red text-xs'>{errors.image}</span>
                    {ImageUrl!=='' ?(
                      <div className='flex px-1 justify-center items-center'>
                          <img src={ImageUrl} className=' w-24 h-24 inline-block rounded-full ring-1 ring-indigo'></img>

                      </div>
                     
                    ):(
                      
                      <button className=" bg-indigo-600 hover:bg-indigo-dark text-white font-light py-2 mt-2 px-4 w-full inline-flex items-center rounded-full">
                      
                        <FcAddImage/>
                        Upload Profile image
                       
                        {/* <FileUploader onChange={uploadImage} name='product_image'/> */}
                        <input className='className="cursor-pointer absolute block opacity-0 pin-r pin-t"' type="file" name='product_image' onChange={uploadImage}/>
                    </button> 
                    
                      )}
                     
                      </div>

                      <div className='mb-4 mt-2'>
                       <span className='text-discord-red text-xs'>{errors.bio}</span>
     
                        <label className='block text-discord-sideBarChannels font-semibold text-xs mb-2' htmlFor='bio'>
                          Tell us about yourself
                        </label>
                        <textarea className='w-full text-discord-100 p-2 bg-discord-deprecatedTextInput placeholder-discord-200 focus:outline-none leading-normal'  name='bio' onChange={handleChange} value={bio} type='text' placeholder='Tell us about yourself' cols='5' rows='2' />
                      </div>
                 

                <div className='mb-10 '>
                <span className='text-discord-red text-xs'>{errors.country}</span>
              <label for="phone" className="block text-discord-sideBarChannels font-semibold text-xs mb-2">Select Your Country</label>
               <div className="relative rounded-md shadow-sm">
                     <CountryDropdown classes='w-40 bg-discord-deprecatedTextInput '
                     name='countryData'
                    value={selectCountry}
                    onChange={(val) => setSelectedCountry(val)} />

                    <RegionDropdown classes='w-40 bg-discord-deprecatedTextInput pl-2'
                    country={selectCountry}
                    value={region}
                    onChange={(val) => selectRegion(val)} />



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
