import React from 'react'


export default function TextField({ label,error,value,id,HandleChange, ...props }) {
  const { fieldClass, labelClass, inputClass, name, type } = props

  return (
    <div className={fieldClass}>
  
        <span className='text-discord-red text-xs'>{error}</span>
      
      <label className={labelClass} htmlFor={name}>
        {label}
      </label>
      <input className={inputClass} value={value} id={id} onChange={HandleChange} name={name} type={type} />
    </div>
  )
}