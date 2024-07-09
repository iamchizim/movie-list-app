import React from "react";
const MovieItem = ({ movies }) => {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.imdbID}>
          <img src={movie.Poster} alt={movie.Title} />
          <div className="movie-info">
            <h2>{movie.Title}</h2>
            <p>{movie.Year}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MovieItem;
