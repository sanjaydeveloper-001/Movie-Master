import { MdDelete } from "react-icons/md";
import { BiMoviePlay } from "react-icons/bi";


function FavCard({movie , HandleRemoveFav }) {

  return (
    <div className='group relative w-60 h-50 rounded-xl shadow-[-5px_5px_10px_gray] hover:shadow-[-15px_15px_5px_gray] transition-all duration-200 hover:scale-105'>
        <div className='h-[60%] w-full rounded-t-xl bg-center bg-cover' style={{backgroundImage:`url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`}}></div>
        <div className='flex gap-1 items-center px-3 py-1 text-black'><BiMoviePlay/>{movie.title}</div>
        <div onClick={()=>{alert("Wait For this Update")}} className="absolute left-3 bottom-4 text-blue-500 hover:text-blue-700 hover:underline cursor-pointer">Add Notes</div>
        <MdDelete onClick={()=>{HandleRemoveFav(movie)}} className="absolute right-2 bottom-4 text-3xl text-red-600 cursor-pointer" />
    </div>
  )
}

export default FavCard