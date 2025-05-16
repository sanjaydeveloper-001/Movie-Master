import React, { useState } from "react";
import { IoBookmark } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";

function MovCards({ movieObj , HandleAddWatchList , setCurrentMovie , watchList}) {

  function doesContain(movieObj){
    for(let i=0; i<watchList.length; i++){
      if(watchList[i].id == movieObj.id){
        return true;
      }
    }
    return false;
  }

  return (
    <>
    
      <div
        className="w-[250px] h-[430px] flex flex-col justify-center items-center"
      >
          <div className="relative w-[100%] h-[98%] rounded-xl bg-center bg-cover hover:scale-105 transition-all duration-100 " 
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movieObj.poster_path})`,
          }} >
            {
               doesContain(movieObj) ? <div className="w-10 h-10 rounded-[50%] flex justify-center items-center text-2xl absolute right-1 top-1 bg-green-500"><FaCheck className="text-xl text-green-800"/></div> :  
               <div onClick={()=>HandleAddWatchList(movieObj)} className="w-10 h-10 rounded-[50%] flex justify-center items-center text-2xl absolute right-1 top-1 cursor-pointer bg-gray-100 hover:bg-gray-100/50 "><IoBookmark className="hover:text-green-800 text-2xl text-green-600"/></div>
              //  <BsBookmarkPlusFill  className="absolute right-0 top-1 text-5xl text-green-700/80 hover:text-green-500/60 cursor-pointer" />

            }
          </div>

          <div className="text-xl mt-5 text-white text-center">{movieObj.title}</div>
          <div onClick={()=>{setCurrentMovie(movieObj)}} className="text-white hover:underline cursor-pointer hover:text-yellow-300">View</div>
      </div>

    </>
  );
}

export default MovCards;
