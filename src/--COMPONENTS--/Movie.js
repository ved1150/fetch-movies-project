import React from "react";

import classes from "./Movie.module.css";

const Movie = (props) => {
  async function deleteMovie(deleteItem) {
    let res = await fetch(
      `https://fetch-movies-project-default-rtdb.firebaseio.com/movies/${deleteItem}.json/`,
      { method: "DELETE" }
    );
    let data = await res.json();
    console.log(data);
  }

  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
      <button onClick={() => deleteMovie(props.name)}>Delete </button>
    </li>
  );
};

export default Movie;
