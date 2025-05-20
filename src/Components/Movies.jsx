import React, { useEffect, useState } from "react";
import MovNav from "./MovNav";
import MovCards from "./MovCards";
import axios from "axios";
import PagesMovie from "./PagesMovie";
import ShowMovieDetail from "./ShowMovieDetail";

function Movies({
  setMovieList,
  HandleAddWatchList,
  HandleRemoveWatchList,
  watchList,
  HandleAddFavList,
  favList,
  currentMovie,
  setCurrentMovie
}) {
  const [movies, setMovies] = useState([]);
  const [language, setLanguage] = useState("ta");
  const [SearchMovieName, setSearchMovieName] = useState("");
  const [pageNo, setPageNo] = useState(() => {
    let data = localStorage.getItem("PageNo");
    return data ? JSON.parse(data) : 1;
  });

  const HandlePrevious = () => {
    if (pageNo > 1) {
      let data = pageNo - 1;
      localStorage.setItem("PageNo", data);
      setPageNo(pageNo - 1);
    }
  };

  const HandleNext = () => {
    let data = pageNo + 1;
    localStorage.setItem("PageNo", data);
    setPageNo(pageNo + 1);
  };

  const SetMovies = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=e93024c976aae365e9e0bf4e379f4181&with_original_language=${language}&release_date.lte=2025-01-01&release_date.gte=2023-05-01&region=IN&page=${pageNo}`
      )
      .then(function (res) {
        setMovies(res.data.results);
        setMovieList(res.data.results);
      });
  };

  const SearchMovies = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=e93024c976aae365e9e0bf4e379f4181&query=${SearchMovieName}`
      )
      .then(function (res) {
        setMovies(res.data.results);
      });
  };

  useEffect(() => {
    SetMovies();
  }, [language, pageNo]);

  return (
    <>
      <div
        className="w-full h-max px-10 pb-10 bg-[#161616]"
      >
        <MovNav
          setLanguage={setLanguage}
          SearchMovies={SearchMovies}
          setSearchMovieName={setSearchMovieName}
          SetMovies={SetMovies}
          SearchMovieName={SearchMovieName}
        />

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 pt-10 ">
          {movies.map((movieObj) => {
            return (
              <MovCards
                movieObj={movieObj}
                HandleAddWatchList={HandleAddWatchList}
                HandleRemoveWatchList={HandleRemoveWatchList}
                watchList={watchList}
                setCurrentMovie={setCurrentMovie}
                favList={favList}
                HandleAddFavList={HandleAddFavList}
              />
            );
          })}
        </div>

        {SearchMovieName == "" ? (
          <PagesMovie
            HandlePrevious={HandlePrevious}
            HandleNext={HandleNext}
            pageNo={pageNo}
          />
        ) : (
          ""
        )}
      </div>
      {currentMovie != "" ? (
        <ShowMovieDetail
          HandleAddWatchList={HandleAddWatchList}
          currentMovie={currentMovie}
          setCurrentMovie={setCurrentMovie}
          favList={favList}
          HandleAddFavList={HandleAddFavList}
          watchList={watchList}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default Movies;
