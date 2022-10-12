import React, { useState } from "react";

import MoviesList from "./--COMPONENTS--/MoviesList";
import "./App.css";

function App() {
  const [movieInfo, setMovieInfo] = useState([]);

  async function fetchDataHadler() {
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
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={() => fetchDataHadler()}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movieInfo} />
      </section>
    </React.Fragment>
  );
}

export default App;
