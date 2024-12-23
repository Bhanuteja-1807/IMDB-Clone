import React, { useEffect, useState } from "react";
import Moviecard from "./Moviecard";
import axios from "axios";
import Pagination from "./Pagination";
function Movies({watchlist, handleAddtoWatchList, handleRemovefromWatchList }) {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageno] = useState(1);

  const handlePrev = () => {
    if(pageNo==1){
        setPageno(1)
    }
    else{
        setPageno(pageNo-1)
    }
    
  }

  const handleNext = () => {
    setPageno(pageNo+1)
  }
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=f290ee8960721fab5d6515a66eb75182&language=en-US&page=${pageNo}`
      )
      .then(function (res) {
        setMovies(res.data.results);
        console.log(res.data.results);
      });
  }, [pageNo]);

  return (
    <div className="p-5">
      <div className=" text-2xl m-5 font-bold text-center">Trending Movies</div>
      <div className="flex flex-row flex-wrap justify-around gap-12">
        {movies.map((movieObj) => {
          return <Moviecard key={movieObj.id} movieObj={movieObj} poster_path={movieObj.poster_path} name={movieObj.original_title} handleAddtoWatchList={handleAddtoWatchList}  handleRemovefromWatchList= {handleRemovefromWatchList}  watchlist={watchlist}/>;
        })}
      </div>
      <Pagination pageNo={pageNo} handleNext={handleNext} handlePrev={handlePrev}/>
    </div>
  );
}

export default Movies;

// https://api.themoviedb.org/3/movie/popular?api_key=f290ee8960721fab5d6515a66eb75182&language=en-US&page=1
