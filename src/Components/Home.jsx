import React, { useState } from "react";
import Banner from "./Banner";
import Movies from "./Movies";
import Footer from "./Footer";

function Home({
  HandleAddWatchList,
  HandleRemoveWatchList,
  watchList,
  HandleAddFavList,
  favList,
  HandleRemoveFav,
}) {

  const [movieList, setMovieList] = useState([]);
  const [currentMovie, setCurrentMovie] = useState("");

  return (
    <>
      <Banner 
        movieList={movieList} 
        setCurrentMovie={setCurrentMovie}
         />

      <Movies
        setMovieList={setMovieList}
        HandleAddWatchList={HandleAddWatchList}
        HandleRemoveWatchList={HandleRemoveWatchList}
        watchList={watchList}
        HandleAddFavList={HandleAddFavList}
        HandleRemoveFav={HandleRemoveFav}
        favList={favList}
        currentMovie={currentMovie}
        setCurrentMovie={setCurrentMovie}
      />
      <Footer />
    </>
  );
}

export default Home;
