import React from 'react'



const FileUploader = ({onChange,...props}) => {
  const { name } = props

  return (
      <div className="file-uploader">
          <input className='className="cursor-pointer absolute block opacity-0 pin-r pin-t"' type="file" name={name} onChange={onChange}/>
      </div>
  )
}

export default FileUploader;