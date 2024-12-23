import Navbar from "./Components/Navbar";
import "./App.css";
import Movies from "./Components/movies";
import Watchlist from "./Components/watchlist";
import { BrowserRouter, Routes, Route, useActionData } from "react-router-dom";
import Banner from "./Components/Banner";
import { useEffect, useState } from "react";
function App() {
  let [watchlist, setWatchList] = useState([]);

  let handleAddtoWatchList = (movieObj) => {
    let newWatchList = [...watchlist, movieObj];

    localStorage.setItem("moviesApp", JSON.stringify(newWatchList));

    setWatchList(newWatchList);
    // console.log(newWatchList)
  };
  let handleRemovefromWatchList = (movieObj) => {
    let filteredwatchList = watchlist.filter((movie) => {
      return movie.id != movieObj.id;
    });

    setWatchList(filteredwatchList);
    localStorage.setItem("moviesApp", JSON.stringify(filteredwatchList));
    // console.log(filteredwatchList)
  };

  useEffect(() => {
    let moviesFromLocalStorage = localStorage.getItem("moviesApp");

    if (!moviesFromLocalStorage) {
      return;
    }
    setWatchList(JSON.parse(moviesFromLocalStorage));
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {" "}
                <Banner />{" "}
                <Movies
                  watchlist={watchlist}
                  handleAddtoWatchList={handleAddtoWatchList}
                  handleRemovefromWatchList={handleRemovefromWatchList}
                />{" "}
              </>
            }
          />

          <Route
            path="/watchlist"
            element={
              <Watchlist
                watchlist={watchlist}
                setWatchList={setWatchList}
                handleRemovefromWatchList={handleRemovefromWatchList}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
