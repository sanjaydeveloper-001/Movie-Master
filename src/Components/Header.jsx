import React from 'react'
import Navbar from './Navbar'
import Login from './Login'
import { IoHomeOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';


function Header() {

  

  return (
    <div style={{fontFamily:'Sora, sans-serif' , backgroundColor:'#161616'}} className='flex w-full h-[12vh] text-yellow-400 text-xl justify-between items-center px-10 '>
        <Link className='italic font-bold text-2xl text-shadow-2xs hover:text-yellow-400/90 hover:scale-110 transition-all duration-75' to="/" >MovieMania</Link>
        <Navbar/>
        <Login/>
    </div>
  )
}

export default Header