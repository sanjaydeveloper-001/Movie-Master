import React, { useEffect, useState } from 'react'
import genreids from '../utilities/gonerids'
import { FaCircle } from "react-icons/fa";
import { IoExitOutline } from "react-icons/io5";



function ShowMovieDetail({currentMovie , setCurrentMovie , HandleAddWatchList}) {

    console.log(currentMovie)

    const [lang , setLang] = useState(currentMovie.original_language)

    const toWatch = (()=>{
        const data = localStorage.getItem("ToWatchList");
        return data ? JSON.parse(data) : [];
    })();
    const watched = (()=>{
        const data = localStorage.getItem("WatchedList");
        return data ? JSON.parse(data) : [];
    })();
    const watching = (()=>{
        const data = localStorage.getItem("WatchingList");
        return data ? JSON.parse(data) : [];
    })();
    const watchList = (()=>{
        const data = localStorage.getItem("WatchList");
        return data ? JSON.parse(data) : [];
    })();

    
    const isWatching = watching.some((m) => m.id === currentMovie.id);
    const isWatched = watched.some((m) => m.id === currentMovie.id);
    const isToWatch = toWatch.some((m) => m.id === currentMovie.id);
    const isWatchlist = watchList.some((m) => m.id === currentMovie.id);

    useEffect(()=> {
        if(lang == 'ta') setLang("Tamil");
        else if(lang == 'hi') setLang("Hindi");
        else if(lang == 'ma') setLang("Malayalam");
        else if(lang == 'te') setLang("Telugu");
        else if(lang == 'en') setLang("English");
    },[])

  return (
    <div className='fixed top-0 w-[100%] h-[100vh] bg-black/80 flex justify-center items-center'>
        <div className='w-[85%] h-[85vh] bg-[#ffffff] rounded-4xl flex justify-between items-center relative' >

            <IoExitOutline className='absolute flex top-6 right-8 text-4xl hover:scale-110 hover:text-red-500 cursor-pointer' onClick={()=>{setCurrentMovie('')}} />

            <div  className='flex justify-center items-center w-[35%] h-full rounded-l-2xl'>
                <img className='w-[60%] h-[70%] rounded-2xl shadow-[-5px_5px_15px_rgba(0,0,0)] transition-all duration-200 hover:scale-105 hover:shadow-[-25px_25px_10px_rgba(0,0,0,.4)] ' src={`https://image.tmdb.org/t/p/original${currentMovie.poster_path}`} alt="" />
            </div>
            <div className=' w-[65%] h-[75%] rounded-r-2xl flex py-5'>

                <table className='w-full text-start'>

                    <tbody className='text-xl' style={{fontFamily:"Josefin Sans, sans-serif"}}>
                        <tr> <td className='w-40'>Title </td> <td>:</td>
                             <td className='flex ml-5 text-4xl text-[#464445] ' style={{fontFamily:'Candal, sans-serif'}}>{currentMovie.title}</td>             </tr>
                        <tr> <td className='w-40'>Original Title </td>  <td>:</td>
                            <td className='flex ml-5 text-xl'> {currentMovie.original_title}</td>             </tr>
                        <tr> <td className='w-40'>Genre </td>  <td>:</td>
                            <td className='flex ml-5 text-xl'> {currentMovie.genre_ids.map((genre)=>{return( <h1 className='mr-5 hover:underline'>{genreids[genre]} </h1>)})}</td>             </tr>
                        <tr> <td className='w-40'>Language </td> <td>:</td>
                             <td className='flex ml-5 text-xl'> {lang}</td>             </tr>
                        <tr> <td className='w-40'>Rating </td> <td>:</td>
                             <td className='flex ml-5 text-xl'> {currentMovie.vote_average}</td>             </tr>
                        <tr> <td className='w-40'>Popularity </td> <td>:</td>
                             <td className='flex ml-5 text-xl'> {currentMovie.popularity}</td>             </tr>
                        <tr> <td className='w-40'>Release Date </td>  <td>:</td>
                            <td className='flex ml-5 text-xl'> {currentMovie.release_date}</td>             </tr>
                        <tr> <td className='w-40'>Adult</td>  <td>:</td>
                            <td className='flex ml-5 text-xl'> {currentMovie.adult ? "Yes" : "No"}</td>             </tr>
                        <tr> <td className='w-40 text-start '>Overview </td>  <td>:</td>
                            <td className='flex ml-5 text-xl'> {currentMovie.overview}</td>             </tr>
                        <tr> <td className='flex items-center justify-center gap-x-1 pt-3 text-[15px] bg-gray-200 p-2  rounded-xl'><FaCircle className={`text-[10px] ${ isWatching ? 'text-blue-500' : ( isWatched ? 'text-green-500' : (isToWatch ? 'text-gray-500' : (isWatchlist ? 'text-orange-500' : 'text-green-700')))}`}/>{ isWatching ? "Watching" : ( isWatched ? "Watched" : (isToWatch ? "To Watch" :  (isWatchlist ? "Newly Added" : <div onClick={()=> {HandleAddWatchList(currentMovie); let NewToWatchList = [...toWatch , currentMovie]; localStorage.setItem("ToWatchList" , JSON.stringify(NewToWatchList));}} className='hover:underline  h-full flex items-center cursor-pointer'>Add to Watch</div> )))}</td></tr>
                    </tbody>


                </table>


                {/* <div style={{fontFamily:"Josefin Sans, sans-serif"}} className='w-full h-full flex flex-col justify-between '>
                    <h1 className='flex text-xl items-center gap-x-2 text-[#090909] '>Title  <span>:</span> <span </span></h1>
                    <h1 className='flex text-xl items-center gap-x-2 text-[#090909] '>Original title  <span>:</span> <span className='flex ml-5 text-xl font-bold'>{currentMovie.original_title}</span></h1>
                    <h1 className='flex text-xl items-center gap-x-2 text-[#090909] '> Genre  <span>:</span> <span className='flex ml-5 text-xl' >{currentMovie.genre_ids.map((genre)=>{return( <h1 className='mr-5 hover:underline'>{genreids[genre]}</h1> )})}</span></h1>
                    <h1 className='flex text-xl items-center gap-x-2 text-[#090909] '>Language  <span>:</span><span className='flex ml-5 text-xl '>{lang}</span></h1>
                    <h1 className='flex text-xl items-center gap-x-2 text-[#090909] '>Rating  <span>:</span> <span className='flex ml-5 text-xl '>{currentMovie.vote_average}</span></h1>
                    <h1 className='flex text-xl items-center gap-x-2 text-[#090909] '>Popularity  <span>:</span><span className='flex ml-5 text-xl '>{currentMovie.popularity}</span></h1>
                    <h1 className='flex text-xl items-center gap-x-2 text-[#090909] '>Release Date <span>:</span> <span className='flex ml-5 text-xl '>{currentMovie.release_date}</span></h1>
                    <h1 className='flex text-xl items-center gap-x-2 text-[#090909] '>Adult  <span>:</span> <span className='flex ml-5 text-xl '>{currentMovie.adult ? "Yes" : "No"}</span></h1>
                    <h1 className='flex text-xl items-start gap-x-5 text-[#090909] '>OverView <span>:</span> <p className='text-xl flex pr-10'>{currentMovie.overview}</p></h1>
                    <h1 className='flex text-xl items-center gap-x-2 text-[#090909] '>Watching <span>:</span> </h1>
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default ShowMovieDetail