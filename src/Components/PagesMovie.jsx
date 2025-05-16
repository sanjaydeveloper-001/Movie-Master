import React from 'react'
import { FaArrowLeft , FaArrowRight } from "react-icons/fa6";

function PagesMovie({pageNo , HandleNext , HandlePrevious}) {



  return (
    <div style={{fontFamily : 'Signika, sans-serif'}} className='flex w-full h-10 justify-center items-center gap-10 text-2xl font-bold'>
        <button onClick={HandlePrevious} className='cursor-pointer text-white'><FaArrowLeft /></button>
        <h1 className='text-yellow-500'>{pageNo}</h1>
        <button onClick={HandleNext} className='cursor-pointer text-white'><FaArrowRight /></button>
    </div>
  )
}

export default PagesMovie