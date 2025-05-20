import { useEffect, useState } from "react";
import genreids from "../utilities/gonerids";
import { FaCircle } from "react-icons/fa";
import {
  IoExitOutline,
  IoHeartOutline,
  IoCheckmarkDoneOutline,
} from "react-icons/io5";

function ShowMovieDetail({
  currentMovie,
  setCurrentMovie,
  HandleAddWatchList,
  HandleAddFavList,
  favList,
  watchList,
}) {
  const [lang, setLang] = useState(currentMovie.original_language);

  const toWatch = (() => {
    const data = localStorage.getItem("ToWatchList");
    return data ? JSON.parse(data) : [];
  })();
  const watched = (() => {
    const data = localStorage.getItem("WatchedList");
    return data ? JSON.parse(data) : [];
  })();
  const watching = (() => {
    const data = localStorage.getItem("WatchingList");
    return data ? JSON.parse(data) : [];
  })();

  const isWatching = watching.some((m) => m.id === currentMovie.id);
  const isWatched = watched.some((m) => m.id === currentMovie.id);
  const isToWatch = toWatch.some((m) => m.id === currentMovie.id);
  const isWatchlist = watchList.some((m) => m.id === currentMovie.id);

  useEffect(() => {
    if (lang == "ta") setLang("Tamil");
    else if (lang == "hi") setLang("Hindi");
    else if (lang == "ma") setLang("Malayalam");
    else if (lang == "te") setLang("Telugu");
    else if (lang == "en") setLang("English");
  }, []);

  const [isSaving, setSaving] = useState(false);

  const HandleShowSave = () => {
    setSaving(true);
    HandleAddFavList(currentMovie);
    setTimeout(() => {
      setSaving(false);
    }, 1000);
  };

  function doesContainFav(movieObj) {
    for (let i = 0; i < favList.length; i++) {
      if (favList[i].id == movieObj.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <div className="fixed top-0 w-[100%] h-[100vh] bg-black/80 flex justify-center items-center">
      <div className="w-[85%] h-[85vh] bg-[#ffffff] rounded-4xl flex justify-between items-center relative">
        <IoExitOutline
          className="absolute flex top-6 right-8 text-4xl hover:scale-110 hover:text-red-500 cursor-pointer"
          onClick={() => {
            setCurrentMovie("");
          }}
        />

        <div className="flex justify-center items-center w-[35%] h-full rounded-l-2xl">
          <div
            className="relative w-[70%] h-[80%] rounded-2xl shadow-[-5px_5px_15px_rgba(0,0,0)] transition-all duration-200 hover:scale-105 hover:shadow-[-25px_25px_10px_rgba(0,0,0,.4)] bg-center bg-cover "
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original${currentMovie.poster_path})`,
            }}
          >
            {doesContainFav(currentMovie) ? (
              isSaving ? (
                <div className="m-3 flex justify-center items-center bg-black h-8 w-20 rounded-[5px] text-white">
                  Saving...
                </div>
              ) : (
                <div className="m-3 flex justify-center items-center bg-red-600 h-8 w-15 text-xl py-2 rounded-[5px] text-white cursor-auto">
                  <IoCheckmarkDoneOutline />
                </div>
              )
            ) : (
              <IoHeartOutline
                onClick={HandleShowSave}
                className="m-3  bg-red-600 h-8 w-15 py-1 rounded-[5px] text-white hover:bg-red-600/50"
              />
            )}
          </div>
        </div>
        <div className=" w-[65%] h-[80%] rounded-r-2xl flex py-5 pr-10">
          <table className="w-full text-start">
            <tbody
              className="text-xl"
              style={{ fontFamily: "Josefin Sans, sans-serif" }}
            >
              <tr>
                
                <td className="w-40 mb-2">Title </td> <td>:</td>
                <td
                  className="flex ml-5 text-4xl text-[#464445] "
                  style={{ fontFamily: "Candal, sans-serif" }}
                >
                  {currentMovie.title}
                </td>
              </tr>
              <tr>
                
                <td className="w-40 mb-2">Original Title </td> <td>:</td>
                <td className="flex ml-5 text-xl">
                  
                  {currentMovie.original_title}
                </td>
              </tr>
              <tr>
                
                <td className="w-40 mb-2">Genre </td> <td>:</td>
                <td className="flex ml-5 text-xl">
                  
                  {currentMovie.genre_ids.map((genre) => {
                    return (
                      <h1 className="mr-5 hover:underline">
                        {genreids[genre]}{" "}
                      </h1>
                    );
                  })}
                </td>
              </tr>
              <tr>
                
                <td className="w-40 mb-2">Language </td> <td>:</td>
                <td className="flex ml-5 text-xl"> {lang}</td>{" "}
              </tr>
              <tr>
                
                <td className="w-40 mb-2">Rating </td> <td>:</td>
                <td className="flex ml-5 text-xl">
                  
                  {currentMovie.vote_average}
                </td>
              </tr>
              <tr>
                
                <td className="w-40 mb-2">Popularity </td> <td>:</td>
                <td className="flex ml-5 text-xl">
                  
                  {currentMovie.popularity}
                </td>
              </tr>
              <tr>
                
                <td className="w-40 mb-2">Release Date </td> <td>:</td>
                <td className="flex ml-5 text-xl">
                  
                  {currentMovie.release_date}
                </td>
              </tr>
              <tr>
                
                <td className="w-40 mb-2">Adult</td> <td>:</td>
                <td className="flex ml-5 text-xl">
                  
                  {currentMovie.adult ? "Yes" : "No"}
                </td>
              </tr>
              <tr>
                
                <td className="w-40 mb-2 flex pt-2 ">Overview </td> <td className="pb-25">:</td>
                <td className="flex ml-5 text-xl h-25 overflow-auto">
                  {currentMovie.overview}
                </td>
              </tr>
              <tr>
                
                <td className="flex items-center justify-center h-10 w-max px-5 pt-1 gap-2 text-[15px] bg-gray-200 rounded-xl">
                  <FaCircle
                    className={`text-[10px] ${
                        isWatching
                        ? "text-blue-500"
                        : isWatched
                        ? "text-green-500"
                        : isToWatch
                        ? "text-gray-500"
                        : isWatchlist
                        ? "text-orange-500"
                        : "text-green-700"
                    }`}
                  />
                  {isWatching ? (
                    "Watching"
                  ) : isWatched ? (
                    "Watched"
                  ) : isToWatch ? (
                    "To Watch"
                  ) : isWatchlist ? (
                    "Newly Added"
                  ) : (
                    <div
                      onClick={() => {
                        HandleAddWatchList(currentMovie);
                        let NewToWatchList = [...toWatch, currentMovie];
                        localStorage.setItem(
                          "ToWatchList",
                          JSON.stringify(NewToWatchList)
                        );
                      }}
                      className="  h-full flex items-center cursor-pointer"
                    >
                      Add to Watch
                    </div>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ShowMovieDetail;
