import React from 'react'
import FavCard from './FavCard'

function Favourites({ favList , HandleRemoveFav }) {
  return (
    <div className='w-full h-max flex flex-col p-20 gap-10'>

    <div className='text-5xl font-bold w-full border-b-2 border-yellow-400 pb-2'>FavList</div>

    <div className='grid grid-cols-5 gap-5'>
    {
      favList.length == 0 ? <div className='text-xl'>No Favourites</div> : 
      favList.map((movie)=>{
        return <FavCard movie={movie} HandleRemoveFav={HandleRemoveFav}/>
      })
    }
    </div>

    </div>
  )
}

export default Favourites