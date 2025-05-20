import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Watchlist from "./Components/Watchlist";
import { useState } from "react";
import Favourites from "./Components/Favourites";

function App() {
  const [favList, setFavList] = useState(() => {
    const data = localStorage.getItem("FavList");
    return data ? JSON.parse(data) : [];
  });

  const HandleAddFavList = (movie) => {
    let newFavList = [...favList, movie];
    localStorage.setItem("FavList", JSON.stringify(newFavList));
    setFavList(newFavList);
  };

  const HandleRemoveFav = (movieObj) => {
    let filteredFavList = favList.filter((movie) => {
      return movie.id != movieObj.id;
    });
    localStorage.setItem("FavList", filteredFavList);
    setFavList(filteredFavList);
  };

  const [watchList, setWatchList] = useState(() => {
    const data = localStorage.getItem("Watchlist");
    return data ? JSON.parse(data) : [];
  });

  const HandleAddWatchList = (movieObj) => {
    let newWatchList = [...watchList, movieObj];
    localStorage.setItem("Watchlist", JSON.stringify(newWatchList));
    setWatchList(newWatchList);
  };

  const HandleRemoveWatchList = (movieObj) => {
    let filteredWatchlist = watchList.filter((movie) => {
      return movie.id != movieObj.id;
    });
    localStorage.setItem("Watchlist", JSON.stringify(filteredWatchlist));
    setWatchList(filteredWatchlist);
  };

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              HandleAddWatchList={HandleAddWatchList}
              HandleRemoveWatchList={HandleRemoveWatchList}
              watchList={watchList}
              favList={favList}
              HandleAddFavList={HandleAddFavList}
              HandleRemoveFav={HandleRemoveFav}
            />
          }
        />
        <Route
          path="/Watchlist"
          element={
            <Watchlist
              watchList={watchList}
              HandleRemoveWatchList={HandleRemoveWatchList}
            />
          }
        />
        <Route
          path="/Favourite"
          element={
            <Favourites 
              favList={favList} 
              HandleRemoveFav={HandleRemoveFav} 
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
