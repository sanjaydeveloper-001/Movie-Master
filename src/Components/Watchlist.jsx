import WatchCard from "./WatchCard";
import { MdOutlinePlayCircle, MdPauseCircleOutline } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { LuLibrary } from "react-icons/lu";
import { useEffect, useState } from "react";

function Watchlist({ watchList, HandleRemoveWatchList }) {
  const [activeBar, setActiveBar] = useState(1);

  const tabs = [
    { id: 1, label: "All", icon: <LuLibrary /> },
    { id: 2, label: "To Watch", icon: <MdOutlinePlayCircle /> },
    { id: 3, label: "Watching", icon: <MdPauseCircleOutline /> },
    { id: 4, label: "Watched", icon: <IoMdCheckmarkCircleOutline /> },
  ];

  // WatchingHandle

  const [toWatch, setToWatch] = useState(() => {
    const data = localStorage.getItem("ToWatchList");
    return data ? JSON.parse(data) : watchList;
  });

  const [watching, setWatching] = useState(() => {
    const data = localStorage.getItem("WatchingList");
    return data ? JSON.parse(data) : [];
  });

  const [watched, setWatched] = useState(() => {
    const data = localStorage.getItem("WatchedList");
    return data ? JSON.parse(data) : [];
  });

  const HandleAddToWatch = (movie) => {
    let NewToWatchList = [...toWatch, movie];
    localStorage.setItem("ToWatchList", JSON.stringify(NewToWatchList));
    setToWatch(NewToWatchList);
  };

  const HandleAddWatching = (movie) => {
    let NewWatchingList = [...watching, movie];
    localStorage.setItem("WatchingList", JSON.stringify(NewWatchingList));
    setWatching(NewWatchingList);

    let filteredTolist = toWatch.filter((m) => {
      return m.id != movie.id;
    });
    localStorage.setItem("ToWatchList", JSON.stringify(filteredTolist));
    setToWatch(filteredTolist);
  };

  const HandleAddWatched = (movie) => {
    let NewWatchingList = [...watched, movie];
    localStorage.setItem("WatchedList", JSON.stringify(NewWatchingList));
    setWatched(NewWatchingList);

    let filteredTolist = watching.filter((m) => {
      return m.id != movie.id;
    });
    localStorage.setItem("WatchingList", JSON.stringify(filteredTolist));
    setWatching(filteredTolist);
  };

  const HandleRemoveWatched = (movie) => {
    let filteredWatchedlist = watched.filter((m) => {
      return m.id != movie.id;
    });
    localStorage.setItem("WatchedList", JSON.stringify(filteredWatchedlist));
    setWatched(filteredWatchedlist);

    HandleRemoveWatchList(movie);
  };

  return (
    <div className="flex flex-col w-full h-max items-center">
      <div className="flex flex-col h-[88vh] w-full p-20 gap-10">
        <div className="text-4xl font-bold">WatchList</div>
        <div className="flex gap-x-5 text-[18px] w-full border-b-1 border-amber-400">
          {tabs.map((tab) => {
            return (
              <h1
                onClick={() => setActiveBar(tab.id)}
                className={`flex items-center cursor-pointer gap-x-1 ${
                  activeBar == tab.id
                    ? "border-b-4 border-yellow-400"
                    : "border-none"
                }`}
              >
                {tab.icon}
                {tab.label}
              </h1>
            );
          })}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 pb-10 ">
          {activeBar == 1
            ? watchList.length == 0
              ? "No WatchList"
              : watchList.map((movie) => {
                  return (
                    <WatchCard
                      movie={movie}
                      toWatch={toWatch}
                      watching={watching}
                      watched={watched}
                      activeBar={activeBar}
                      HandleAddToWatch={HandleAddToWatch}
                    />
                  );
                })
            : activeBar == 2
            ? toWatch.length == 0
              ? "No ToWatch"
              : toWatch.map((movie) => {
                  return (
                    <WatchCard
                      movie={movie}
                      toWatch={toWatch}
                      watching={watching}
                      watched={watched}
                      activeBar={activeBar}
                      HandleAddWatching={HandleAddWatching}
                    />
                  );
                })
            : activeBar == 3
            ? watching.length == 0
              ? "No Watching"
              : watching.map((movie) => {
                  return (
                    <WatchCard
                      movie={movie}
                      toWatch={toWatch}
                      watching={watching}
                      watched={watched}
                      activeBar={activeBar}
                      HandleAddWatched={HandleAddWatched}
                    />
                  );
                })
            : watched.length == 0
            ? "No Watched"
            : watched.map((movie) => {
                return (
                  <WatchCard
                    movie={movie}
                    toWatch={toWatch}
                    watching={watching}
                    watched={watched}
                    activeBar={activeBar}
                    HandleRemoveWatched={HandleRemoveWatched}
                  />
                );
              })}
        </div>
      </div>
    </div>

    //  <div className="group relative w-64 h-40 bg-gray-300 rounded-md overflow-hidden cursor-pointer">
    //   {/* Play Button - hidden by default, shown on hover */}
    //   <div className="bg-amber-400 absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    //     <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
    //       {/* <svg
    //         className="w-6 h-6 text-black"
    //         fill="currentColor"
    //         viewBox="0 0 20 20"
    //       >
    //         <path d="M6 4l12 6-12 6V4z" />
    //       </svg> */}
    //     </div>
    //   </div>
    // </div>
  );
}

export default Watchlist;
