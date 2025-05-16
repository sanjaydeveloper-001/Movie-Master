import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { RiPlayList2Line } from "react-icons/ri";
import { Link, useLocation } from 'react-router-dom';


function Navbar() {

  const location = useLocation();

  return (
    <div className='flex w-max h-max items-center gap-10 '>
        <Link className='flex items-center text-white hover:text-yellow-400 hover:scale-110 transition-all duration-200 gap-x-2' to="/" ><IoHomeOutline/>Home</Link>
        { location.pathname == '/WatchList' ? '' : <Link className='flex items-center text-white hover:text-yellow-400 hover:scale-110 transition-all duration-200 gap-x-2' to="/WatchList" ><RiPlayList2Line />WatchList</Link> }
        { location.pathname == '/Favourite' ? '' : <Link className='flex items-center text-white hover:text-yellow-400 hover:scale-110 transition-all duration-200 gap-x-2' to="/Favourite" ><CiHeart />Favourites</Link> }
    </div>
  )
}

export default Navbar