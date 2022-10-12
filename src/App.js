import React, { useState } from "react";

import MoviesList from "./--COMPONENTS--/MoviesList";
import "./App.css";

function App() {
  const [movieInfo, setMovieInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  async function fetchDataHadler() {
    try {
      setIsLoading(true);
      setError(null);
      let response = await fetch("https://swapi.dev/api/film/");
      if (!response.ok) {
        throw new Error("somthing went wrong");
      }

      let data = await response.json();
      let collectInfo = data.results.map((movieList) => {
        return {
          id: movieList.episode_id,
          title: movieList.title,
          releaseDate: movieList.release_date,
          openingText: movieList.opening_crawl,
        };
      });
      setMovieInfo(collectInfo);
      
    } catch (error) {
      
      setError(error.message);
    }
    setIsLoading(false);
  }
  function cancleRetrying() {
    setError(null)
  }
 
  return (
    <React.Fragment>
      <section>
        <button onClick={() => fetchDataHadler()} disabled={isLoading}>
          Fetch Movies
        </button>
      </section>
      <section>
        {!isLoading && <MoviesList movies={movieInfo} />}
        {!isLoading && movieInfo.length === 0 && !error && (
          <h1>No Movie found (click on fetch button )</h1>
        )}
        {isLoading && <h1>Loading...</h1>}
        {error &&   (
          <div>
            {error}
            <h1>....Retrying</h1>
            <button onClick={cancleRetrying}>Cancle</button>
          </div>
        )}
      </section>
    </React.Fragment>
  );
}

export default App;
