import React, { useCallback, useEffect, useState } from "react";

import MoviesList from "./--COMPONENTS--/MoviesList";
import AddInfomanually from "./--COMPONENTS--/AddInfomanually";
import "./App.css";

function App() {
  const [movieInfo, setMovieInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchDataHadler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      setIsLoading(true);
      setError(null);
      console.log("componenet rendered ");
      let response = await fetch(
        "https://fetch-movies-project-default-rtdb.firebaseio.com/movies.json"
      );
      if (!response.ok) {
        throw new Error("somthing went wrong");
      }

      let data = await response.json();

      console.log(data);

      const loadedMovies = [];

      for (let key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          releaseDate: data[key].releaseDate,
          openingText: data[key].openingText,
        });
      }

      setMovieInfo(loadedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchDataHadler();
  }, [fetchDataHadler]);

  async function addMovieHandler(movie) {
    let res = await fetch(
      "https://fetch-movies-project-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    let data = await res.json();
  }

  function cancleRetrying() {
    setError(null);
  }
  function a() {
    return <h1>...Refreash</h1>;
  }
  return (
    <React.Fragment>
      <section>
        <AddInfomanually addmovie={addMovieHandler} />
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
        {error && (
          <div>
            {error}
            {a()}
            <button onClick={cancleRetrying}>Cancle</button>
          </div>
        )}
      </section>
    </React.Fragment>
  );
}

export default App;
