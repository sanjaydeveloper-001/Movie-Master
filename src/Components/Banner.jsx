import React, { useEffect, useState } from "react";
import genreids from "../utilities/gonerids";
import { GoArrowUpRight } from "react-icons/go";

function Banner({ movieList , setCurrentMovie }) {
  let i = 0;
  const [rndNum, setRndNum] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      changeBanner();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  function changeBanner() {
    let random = Math.floor(Math.random() * 20);
    if (i == random) {
      if (i == 0) {
        random++;
      } else {
        random--;
      }
    }
    i = random;
    setRndNum(random);
  }

  return (
    <div
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movieList?.[rndNum]?.backdrop_path})`,
      }}
      className="relative w-full h-[80vh] bg-cover"
    >
      <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_0%,_rgba(0,0,0)_100%)]"></div>
      <div className="p-10 absolute w-[60%] h-max bottom-0 left-0 flex flex-col gap-5">
        <h1
          style={{ fontFamily: "Paytone One, sans-serif" }}
          className="md:text-5xl lg:text-8xl text-4xl font-bold text-white"
        >
          {movieList?.[rndNum]?.title}
        </h1>

        <p style={{scrollbarWidth:'none'}} className="text-xl text-white pr-30 h-20 overflow-y-auto ">
          {movieList?.[rndNum]?.overview}
        </p>

        <div className="flex">
          {movieList[rndNum]?.genre_ids.map((ids)=>{
            return ( <div className="text-xl cursor-pointer text-white mr-5 font-bold hover:underline hover:text-yellow-400" >{genreids[ids]}</div>)
          })}
          <div onClick={()=>{setCurrentMovie(movieList[rndNum])}} className="cursor-pointer flex justify-center items-center py-1 px-3 bg-white text-black rounded-[5px] gap-1 hover:bg-white/50">
          <GoArrowUpRight/> View
        </div>
        </div>

      </div> 
      
    </div>
  );
}

export default Banner;
