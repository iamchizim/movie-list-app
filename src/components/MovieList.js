import React from "react";
import MovieApp from "./MovieApp";
import { useState } from "react";

const MovieItem = (props) =>{
const [movies] = props;
return(
    <ul>
        {movies.map(movie =>(
          <li key={movie.imdbID}>
            {movie.Title}, {movie.Year}
          </li>  
        ))}
    </ul>
)
}
export default MovieApp;