import React, { useEffect, useState } from "react";
import genreids from '../Utility/Genre'

function Watchlist({ watchlist, setWatchList , handleRemovefromWatchList}) {
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState(["All Genres"])
  const [currGenre, setcurrGenre] = useState('All Genres')

  let handleSearch = (e) => {
    setSearch(e.target.value);
  };

  let handleFilter = (genre) => {
    setcurrGenre(genre)
  }

  let sortIncrease = () => {

    let sortedIncrease =watchlist.sort((movieA, movieB) =>{
        return movieA.vote_average - movieB.vote_average
    })
    setWatchList([...sortedIncrease])

  }
  let sortDecrease = () => {

    let sortedDecrease = watchlist.sort((movieA, movieB) =>{
        return movieB.vote_average - movieA.vote_average
    })

    setWatchList([...sortedDecrease])

  }

  let sortUpPopular = () => {

    let sortedUp = watchlist.sort((movieA, movieB) =>{
        return movieA.popularity - movieB.popularity
    })
    setWatchList([...sortedUp])

  }

  let sortDownPopular = () => {
    let sortedDown =watchlist.sort((movieA, movieB) =>{
        return movieB.popularity - movieA.popularity
    })
    setWatchList([...sortedDown])

  }
  useEffect (() => {
    let temp = watchlist.map((movieObj)=>{
      return genreids[movieObj.genre_ids[0]]
    }) 
    temp = new Set (temp)
    setGenreList(['All Genres', ...temp])
    console.log(temp)

  }, [watchlist])

  return (
    <>
      <div className="flex justify-center flex-wrap m-3">
        {genreList.map((genre)=>{
          return <div onClick={()=>handleFilter(genre)}  className={ currGenre==genre ?  "flex justify-center items-center  h-[3rem] w-[9rem] bg-blue-600  rounded-xl text-white font-bold mx-4" : "flex justify-center items-center  h-[3rem] w-[9rem] bg-gray-400  rounded-xl text-white font-bold mx-4"}>
            {genre}
          </div>
        })}


      </div>
      <div className="flex justify-center my-4">
        <input
          onChange={handleSearch}
          value={search}
          type="text"
          placeholder="Search Movies"
          className="h-[3rem] w-[18rem] bg-gray-300  outline-none p-3"
        />
      </div>

      <div className="overflow-hidden rounded-lg border border-gray-200 m-7">
        <table className="w-full text-gray text-center">
          <thead className="border-b-2 bg-gray-300 ">
            <tr>
              <th>Name</th>
              <th className="flex justify-center">
                <div onClick={sortIncrease}  className="cursor-pointer p-2"><i class="fa-solid fa-arrow-up"></i></div>
                <div className="p-2">Ratings</div>
                <div  onClick={sortDecrease} className="cursor-pointer p-2"><i class="fa-solid fa-arrow-down"></i></div>
              </th>

              <th >
                <div className="p-2">Popularity</div>
              </th>
              <th>Genre</th>
            </tr>
          </thead>

          <tbody>
            {watchlist.filter((movieObj)=>{
              if (currGenre=='All Genres'){
                return true
              }
              else{
                return genreids[movieObj.genre_ids[0]]==currGenre
              }
            })
              .filter((movieObj) => {
                return movieObj.title
                  .toLowerCase()
                  .includes(search.toLocaleLowerCase());
              })
              .map((movieObj) => {
                return (
                  <tr className="border ">
                    <td className="flex items-center p-4">
                      <img
                        className="h-[6rem] w-[10rem]"
                        src={`https://www.themoviedb.org/t/p/original/${movieObj.poster_path}`}
                      />
                      <div className="mx-12">{movieObj.title}</div>
                    </td>

                    <td>{movieObj.vote_average}</td>

                    <td>{movieObj.popularity}</td>

                    <td>{genreids[movieObj.genre_ids[0]]} </td>

                    <td onClick={()=> handleRemovefromWatchList(movieObj)}  className=" cursor-pointer text-red-800">Delete</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Watchlist;
