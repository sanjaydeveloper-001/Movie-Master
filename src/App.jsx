import Header from './Components/Header'
import { Routes , Route } from 'react-router-dom'
import Home from './Components/Home'
import Watchlist from './Components/Watchlist'
import { useState } from 'react'
import Favourites from './Components/Favourites'

function App() {

  const [watchList , setWatchList] = useState(()=>{
    const data = localStorage.getItem("Watchlist");
    return ( data ?  JSON.parse(data) : [] )
  });

  const HandleAddWatchList = (movieObj) =>{
    let newWatchList = [...watchList , movieObj];
    localStorage.setItem("Watchlist", JSON.stringify(newWatchList));
    setWatchList(newWatchList);
  }

  const HandleRemoveWatchList = (movieObj) =>{
    let filteredWatchlist = watchList.filter((movie) => {
      return movie.id != movieObj.id;
    });
    localStorage.setItem("Watchlist", JSON.stringify(filteredWatchlist));
    setWatchList(filteredWatchlist);
  }



  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home HandleAddWatchList={HandleAddWatchList} HandleRemoveWatchList={HandleRemoveWatchList} watchList={watchList} />} />
        <Route path='/Watchlist' element={<Watchlist watchList={watchList} HandleRemoveWatchList={HandleRemoveWatchList}/>} />
        <Route path='/Favourite' element={<Favourites/>} />
      </Routes>
    </>
    
  )
}

export default App