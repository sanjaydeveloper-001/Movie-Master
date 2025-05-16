import React from 'react'
import { FaHeart } from "react-icons/fa6";

function Footer() {
  return (
    <div className='flex w-full h-[15vh] flex-col text-center items-center justify-center text-xl text-white' style={{fontFamily:'Candal, sans-serif' , backgroundColor:'#252525'}}>
        <div className='flex justify-center items-center'>Dedicated to All Movie Lovers</div>
        <div className='flex justify-center gap-2 items-center'>Made with <FaHeart className='text-red-600'/> by Sanjay </div>
    </div>
  )
}

export default Footer