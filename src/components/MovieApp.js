import React from "react";
import { useState, useEffect } from "react";

const MovieApp = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesData = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(
        `https://www.omdbapi.com/?i=tt3896198&apikey=e9ef6996//`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch movie data");
      }
      const data = await response.json();
      setMovies(data);
    } catch (error) {
      setError(error.message);
      setMovies(null);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() =>{
    if(movies){
        fetchMoviesData(movies)
    }
  }, [movies])
return{
  {}
}

};
export default MovieApp;