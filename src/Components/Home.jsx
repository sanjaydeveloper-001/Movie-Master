import React, { useState } from 'react'
import Banner from './Banner'
import Movies from './Movies'
import Footer from './Footer';

function Home({HandleAddWatchList , HandleRemoveWatchList , watchList}) {

    const [movieList , setMovieList] = useState([]);

  return (
    <>
        <Banner movieList={movieList} />
        <Movies setMovieList={setMovieList} HandleAddWatchList={HandleAddWatchList} HandleRemoveWatchList={HandleRemoveWatchList} watchList={watchList} />
        <Footer/>
    </>
  )
}

export default Home