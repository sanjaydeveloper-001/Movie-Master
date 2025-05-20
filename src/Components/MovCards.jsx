import { useState } from "react";
import {
  IoBookmark,
  IoCheckmarkDoneOutline,
  IoHeartOutline,
} from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

function MovCards({
  movieObj,
  HandleAddWatchList,
  setCurrentMovie,
  watchList,
  HandleAddFavList,
  favList,
}) {
  const [isSaving, setSaving] = useState(false);

  const HandleShowSave = () => {
    setSaving(true);
    HandleAddFavList(movieObj);
    setTimeout(() => {
      setSaving(false);
    }, 1500);
  };

  function doesContain(movieObj) {
    for (let i = 0; i < watchList.length; i++) {
      if (watchList[i].id == movieObj.id) {
        return true;
      }
    }
    return false;
  }

  function doesContainFav(movieObj) {
    for (let i = 0; i < favList.length; i++) {
      if (favList[i].id == movieObj.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <div className="relative w-[100px] h-[250px] md:w-[150px] md:h-[310px] lg:w-[250px] lg:h-[420px] gap-2 flex flex-col justify-center items-center">
      <div
        className=" group w-full h-[95%] bg-cover bg-center rounded-xl hover:scale-102 transition-all duration-100"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movieObj.poster_path})`,
        }}
      >
        <div className="group-hover:opacity-100 cursor-pointer transition-all duration-100 opacity-0 bg-black/50 w-full h-full absolute top-0 rounded-xl flex flex-col justify-between py-2 items-center">
          <div className="flex w-full h-[95%] justify-between py-1 px-3">
            {doesContainFav(movieObj) ? (
              (isSaving ? <div></div> : <div className="flex justify-center items-center bg-red-600 h-8 w-15 text-xl py-2 rounded-[5px] text-white cursor-auto">
                <IoCheckmarkDoneOutline />
              </div>)
            ) : (
              <IoHeartOutline
                onClick={HandleShowSave}
                className="bg-red-600 h-8 w-15 py-1 rounded-[5px] text-white hover:bg-red-600/50"
              />
            )}
            {doesContain(movieObj) ? (
              ""
            ) : (
              <div
                onClick={() => {
                  HandleAddWatchList(movieObj);
                }}
                className="h-10 w-10 rounded-[50%] flex justify-center items-center bg-white hover:bg-white/50"
              >
                <IoBookmark className=" text-xl" />
              </div>
            )}
          </div>
          <div className="w-full justify-end flex px-4 py-2">
            <div
              onClick={() => {
                setCurrentMovie(movieObj);
              }}
              className="flex justify-center items-center py-1 px-3 bg-white text-black rounded-[5px] gap-1 hover:bg-white/50"
            >
              <GoArrowUpRight /> View
            </div>
          </div>
        </div>
        {doesContain(movieObj) ? (
          <div className="absolute top-3 right-3 h-10 w-10 rounded-[50%] flex justify-center items-center bg-green-700 cursor-auto">
            <FaCheck className="text-white" />
          </div>
        ) : (
          ""
        )}
        {
          isSaving ? <div className="absolute top-3 left-3 py-2 flex justify-center items-center bg-black h-8 w-20 rounded-[5px] text-white">
                  Saving...
                </div> : ""
        }
      </div>
      <div className="text-white h-[5%]">{movieObj.title}</div>
    </div>
  );
}

export default MovCards;
