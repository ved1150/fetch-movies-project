import React, { useState } from "react";

import MoviesList from "./--COMPONENTS--/MoviesList";
import "./App.css";

function App() {
  const [movieInfo, setMovieInfo] = useState([]);
  const [isLoading , setIsLoading] = useState(false)
  async function fetchDataHadler() {
    setIsLoading(true)
    let response = await fetch("https://swapi.dev/api/films/");
    let data = await response.json();
    let collectInfo = data.results.map((movieList) => {
      return {
        id: movieList.episode_id,
        title: movieList.title,
        releaseDate: movieList.release_date,
        openingText: movieList.opening_crawl,
      };
    });
    setMovieInfo(collectInfo)
    setIsLoading(false) 
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={() => fetchDataHadler() } disabled={isLoading}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && <MoviesList movies={movieInfo} /> }
        {isLoading && <h1>Loading...</h1>}
      </section>
    </React.Fragment>
  );
}

export default App;
