import React, { useEffect, useState } from 'react'
import { FaCircle } from "react-icons/fa";
import { BiMoviePlay } from "react-icons/bi";
import { MdOutlinePlayCircleFilled , MdPauseCircleFilled , MdOutlineRemoveCircle } from "react-icons/md";
import { IoPlayForwardCircle } from "react-icons/io5";

function WatchCard({movie ,toWatch ,  watching , watched , activeBar , HandleAddWatching , HandleAddWatched , HandleRemoveWatched , HandleAddToWatch }) {

    const isWatching = watching.some((m) => m.id === movie.id);
    const isWatched = watched.some((m) => m.id === movie.id);
    const isToWatch = toWatch.some((m) => m.id === movie.id);

    
  return (
    <div className='group cursor-pointer relative w-[230px] h-[260px] border-1 border-gray-300 flex flex-col rounded-[10px] hover:scale-105 transition-all duration-150 shadow-[0_0_10px_rgba(0,0,0,.3)] hover:shadow-[-20px_20px_10px_rgba(0,0,0,.3)]'>
        <img className='h-[120px] w-full rounded-t-[10px]' src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}  />
        <div className='m-3 h-full flex flex-col justify-between pb-3'>
            <h1 className='flex items-center gap-x-1'><BiMoviePlay />{movie.title}</h1>
            <h1></h1>
            <h1>Rating : {movie.vote_average}</h1>
            <h1 className='flex items-center gap-x-1 text-[15px] bg-gray-200 w-max px-2 rounded-xl'><FaCircle className={`text-[10px] ${ isWatching ? 'text-blue-500' : ( isWatched ? 'text-green-500' : (isToWatch ? 'text-gray-500' : 'text-orange-500'))}`}/>{ isWatching ? "Watching" : ( isWatched ? "Watched" : (isToWatch ? "To Watch" : "Newly Added"))}</h1>
        </div>

        { 
            activeBar == 1 ? 
                (isToWatch ?  '': (isWatched ? '' : ( isWatching ? '' : 
                    <IoPlayForwardCircle onClick={()=>{HandleAddToWatch(movie)}} className='text-orange-500 absolute opacity-100 transition-all duration-200 right-2 bottom-2 text-5xl' />
                ) )) :
            (
            isToWatch ? 
            <MdOutlinePlayCircleFilled onClick={()=>{HandleAddWatching(movie)}} className='text-gray-500 absolute opacity-0 group-hover:opacity-100 transition-all duration-200 right-2 bottom-2 text-5xl'/> : 
            ( isWatching ? 
                <MdPauseCircleFilled onClick={()=>{HandleAddWatched(movie)}} className='text-blue-500 absolute opacity-0 group-hover:opacity-100 transition-all duration-200 right-2 bottom-2 text-5xl'/> :
                <MdOutlineRemoveCircle onClick={()=>{HandleRemoveWatched(movie)}} className='text-green-600 absolute opacity-0 group-hover:opacity-100 transition-all duration-200 right-2 bottom-2 text-5xl' />)
            )
        }
         
        

    </div>
  )
}

export default WatchCard