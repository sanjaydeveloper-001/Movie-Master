import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

function MovNav({language , setLanguage , setSearchMovieName , SearchMovies , SetMovies , SearchMovieName}) {

  const changeLanguageName = (e) =>{
    document.getElementById('SearchInput').value = "";
    setLanguage(e.target.value);
  }

  const HandleSetMovies = () => {
    setSearchMovieName('')
    SetMovies();
  }
  


  return (
    <div className='flex w-full h-18 text-white border-white border-b-2 items-center justify-between px-10'>
        <div className='flex gap-5 items-center'>
            <label className='text-xl' htmlFor="Filter">Filter : </label>
            <select onChange={changeLanguageName} value={language} name="Filter" id="Filter" className='outline-none w-[200px] py-2 border-b-2 hover:border-yellow-400 cursor-pointer hover:text-yellow-400 px-2 text-white gap-10'>
                <option style={{background:'#161616'}} className='text-white' name="Filter" value="ta">Tamil</option>
                {/* <option style={{background:'#161616'}} className='text-white' name="Filter" value="ma">Malayalam</option> */}
                <option style={{background:'#161616'}} className='text-white' name="Filter" value="te">Telugu</option>
                <option style={{background:'#161616'}} className='text-white' name="Filter" value="hi">Hindi</option>
                <option style={{background:'#161616'}} className='text-white' name="Filter" value="en">English</option>
            </select>
        </div>

        <div className='flex items-center relative hover:text-yellow-400'>
          <input id='SearchInput' onChange={(e)=>{setSearchMovieName(e.target.value)}} value={SearchMovieName} type="text" placeholder='Search Movies' className='border-b-2 outline-none hover:border-yellow-400 outline none w-[250px] h-10 px-2 pr-16' />
          <CiSearch onClick={SearchMovies} className='cursor-pointer text-2xl absolute right-2 hover:text-amber-400/50 text-white/90' />
          {  SearchMovieName.length > 0 ?
            <IoClose onClick={HandleSetMovies} className='cursor-pointer text-xl hover:text-amber-400/50 text-white/50 absolute right-10' /> : ''
          }
        </div>
    </div>
  )
}

export default MovNav