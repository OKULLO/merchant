import React, { useState } from 'react'
// import {  useNavigate } from 'react-router-dom'
// import S3FileUpload from 'react-s3'
// import config from '../../../config'
import { Formik,Form,Field,ErrorMessage } from 'formik';


// import EventSchema from '../../../validation/Login.Schema'


//custom text area to use with formik
const CustomTextAreaComponent = (props) => (
  <textarea className="rounded-md appearance-none relative block w-full  py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:border-sky-500 focus:ring-slate-500 focus:z-10 sm:text-sm" type="text" {...props} />
);

// fix buffer error-Then import it at the top of your file like so

// window.Buffer = window.Buffer || require("buffer").Buffer;


export default function Card({ user, onClose,apiSubmit }) {

  const [ ImageUrl, setImageUrl ] = useState("");
  const [error, showErrors] = useState({image:''})
  const [loading, setLoading] = useState(false)
  const [IsSubmitting,setIssubmitting] =useState(false);


  

  const title = 'Publish new Event'
  const formDescription = 'Let others know whats happening'

   
  
  // const { product_name,instock,discount,description, price } = formData



   const uploadImage = (e,setFieldValue ) => {
    // handle validations
    
    const file = e.target.files[0];

    const fileExtension = file.name.split(".").at(-1);
    const allowedFileTypes = ["jpg", "png","jpeg"];
    
  //   if (file.size > 10e6)
  //     showErrors({image:'file size is too big upload a file less than 10Mb'})

  //   else if (!allowedFileTypes.includes(fileExtension)) {
  //     showErrors({image:`File type is not supported. File type must be ${allowedFileTypes.join(", ")}`});
  //     return false;
  // }else{
  //   // setFieldValue("imageUrll","https://robohash.org/4c6bf950340336dae1895a62062a83f4?set=set4&bgset=&size=400x400")
  //   setLoading(!loading)
  //   // handleImageUpload(file)
  //   // s3 bucket upload
  //   S3FileUpload.uploadFile(file,config.Aws).then((data)=>{
  //     setImageUrl(data.location)
  //     setFieldValue("event_image", data.location);
  //     setLoading(!loading)
  //   })
  // }
  };

  

  async function handleuploadEvent(values, { setError}){
    console.log(values)
  
   
    await apiSubmit(values)

  }
  
 

  return (

     <div className='w-full h-screen  md:w-2/3 flex flex-col  mx-auto bg-slate-50 shadow-sm dark:bg-slate-700  rounded-md overflow-y-auto'>
      <div className='w-full  relative flex flex-col items-center justify-center p-1 '>
        <h4 className='text-center text-xl font-bold dark:text-white text-sky-900 mt-2'>{title}</h4>
        <p className='text-sm mt-1 dark:text-white text-sky-900'>{formDescription}</p>
        <button
          onClick={onClose}
          className='absolute top-0 right-0 m-2 rounded-full p-2 flex items-center justify-center border-sky-100 focus:outline-none '
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 dark:text-white text-sky-900">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>

        </button>
      </div>
      

      <div className='w-full  flex flex-col'>
     
        
            <Formik
                  initialValues={{ name:'', number_of_openings:'',event_link:'',description:'',detail_description:"",price:'',event_image:'',city:'',country:"",starting_at:null,ending_at:null}}
                  
                   onSubmit={handleuploadEvent}
                >
                  {({ isSubmitting,handleChange,values,setFieldValue }) => (
                    <Form className="mt-4 space-y-6 flex flex-col rounded-lg p-4">
                        <div className="-space-y-px rounded-md shadow-sm">
                        
                      
                          <div className='mb-3 '>
                            <label htmlFor="product_name" className='sr-only text-sky-50 text-sm'>Event Title</label>
                              <ErrorMessage name='name' className='text-red-800 mb-1 text-xs' component='span'/>
                            <Field id="name" name="name" type="text"   className="relative block w-full appearance-none  rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-sky-500 focus:outline-none focus:ring-slate-500 sm:text-sm" placeholder="Title.*" />  
                            
                           
                          </div>

                           <div className=' bg-sky-900 dark:bg-slate-900 py-3 mb-3 rounded  '>
                          <div className='flex space-x-6 '>
                            
                          <div className="shrink-0">
                            {loading ?(
                               <>
                                 { ImageUrl==='' && loading ?(
                              <div className="justify-center">Uploading....</div>
                            ):(
                              <img className="h-16 w-16 object-cover rounded-full" src={ImageUrl} alt="Current product image" />
                            )}
                               </>
                             
                       
                    ):(
                      
                      <img className="h-16 w-16 object-cover rounded-full" src="https://robohash.org/4c6bf950340336dae1895a62062a83f4?set=set4&bgset=&size=400x400" alt="event photo" />
                    
                      )}
                          
                        </div>
                          <label className="block">
                          <span className="text-red-800 mb-1 text-xs">{error.image}</span>
                          <ErrorMessage name='event_image' className='text-red-800 mb-1 text-xs' component='div'/>

                            <span className="text-sky-800">Choose event image</span>
                            <input type="file"  name='imageUrll'  onChange={(e)=>uploadImage(e,setFieldValue)} className="block w-full text-sm text-slate-500
                              file:mr-4 file:py-2 file:px-4
                              file:rounded-full file:border-0
                              file:text-sm file:font-semibold
                              file:bg-sky-100 file:text-slate-700
                              hover:file:bg-violet-100
                            "/>
                          </label>
                          </div>
                          
                          </div>

                          <div className='flex flex-row py-3 mb-3'>
                            <div className='flex mr-2'>
                            <label htmlFor="price" className='sr-only block text-xs'>Starting Date</label>
                             <ErrorMessage name='price' className='text-red-800 mb-1 text-xs' component='span'/>
                            <Field id="price" name="starting_at" type="text" className="rounded-md appearance-none relative block w-full px-2 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:border-sky-500 focus:ring-slate-500 focus:z-10 sm:text-sm" placeholder="Starting date.*"/>
                            </div>
                            <div className='flex ml-2 pl-9 '>
                            <label htmlFor="last-name" className='sr-only '>End date(Optional)</label>
                            
                            <Field id="discount" name='ending_at' type="number" className="rounded-md appearance-none relative block w-full px-2 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:border-sky-500 focus:ring-slate-500 focus:z-10 sm:text-sm" placeholder="End date (Optional)"/>
                            </div>
                            

                          
                          </div>

                        
                      

                          <div className='py-3 mb-3'>

                            <label htmlFor="description" className='text-sky-50 sr-only text-sm'>Short Description</label>
                            <ErrorMessage name='description' className='text-red-800 mb-1 text-xs' component='span'/>
                          
                            <Field id="description" name="description" as={CustomTextAreaComponent}  rows={4}  placeholder="Short description"/>
                          </div>

                          <div className='py-3 mb-3'>

                            <label htmlFor="description" className='text-sky-50 sr-only text-sm'>Detail Description</label>
                            <ErrorMessage name='detail_description' className='text-red-800 mb-1 text-xs' component='span'/>
                          
                            <Field id="description" name="detail_description" as={CustomTextAreaComponent}  rows={4}  placeholder="detail description"/>
                          </div>

                          

                        
                             
                         
                         

                          

                        </div>
                          <div className='flex bg-sky-50 dark:bg-slate-700 justify-end p-4 items-center'>
                            <button type='button' className='text-sm rounded-md hover:bg-slate-900 dark:text-white hover:text-white text-sky-900 mr-4 p-2 px-6' onClick={onClose}>
                              Cancel
                            </button>
                            <button type='submit' className='bg-sky-500 dark:bg-slate-900 hover:bg-slate-900 hover:dark:bg-slate-800 text-sm rounded-md  text-white p-2 px-6'>
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
                                'Publish'
                              )}
                            </button>
            </div>
                  </Form>
                )}
          </Formik>
         
      
      </div>
      
    </div>
  )
}
