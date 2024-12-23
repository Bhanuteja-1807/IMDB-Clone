import React from "react";
import Watchlist from "./watchlist";

function Moviecard({
  movieObj,
  poster_path,
  name,
  handleAddtoWatchList,
  handleRemovefromWatchList,
  watchlist,
}) {
  function doesContain(movieObj) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id == movieObj.id) {
        return true;
      } 
    }
    return false;
  }

  return (
    <div
      className="h-[40vh] w-[200px] bg-center bg-cover rounded-2xl hover:scale-110 duration:300 hover:cursor-pointer flex flex-col justify-between items-end"
      style={{
        backgroundImage: `url(https://www.themoviedb.org/t/p/original/${poster_path})`,
      }}
    >
      {doesContain(movieObj) ? (
        <div
          onClick=  { () => handleRemovefromWatchList (movieObj)}
          className="cursor-pointer m-3 flex justify-center h-7 w-7 items-center rounded-lg bg-gray-900/60"
        >
          &#10060;
        </div>
      ) : (
        <div
          onClick=  { () => handleAddtoWatchList  (movieObj)}
          className="m-3 cursor-pointer flex justify-center h-7 w-7 items-center rounded-lg bg-gray-900/60"
        >
          &#128151;
        </div>
      )}
      <div className="text-xl bg-gray-900/60 text-white text-center w-full p-2 rounded-2xl">
        {name}
      </div>
    </div>
  );
}

export default Moviecard;
