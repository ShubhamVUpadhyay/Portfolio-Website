import React from 'react'

export const Button = ({text}) => {
  return (
    <div className='m-4 p-4'>
      <button className='bg-orange-500 text-white text-center px-4 font-semibold text-sm py-2 rounded-xl'>{text}</button>
    </div>
  )
}
