import React, { useState, useEffect } from "react";
import MovieItem from "./MovieItem";
import "./styles.css"; // Import the CSS file

const MovieApp = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesData = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(
        `https://www.omdbapi.com/?s=star+wars&apikey=e9ef6996`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch movie data");
      }
      const data = await response.json();
      if (data.Search) {
        setMovies(data.Search);
      } else {
        throw new Error("No movies found");
      }
    } catch (error) {
      setError(error.message);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMoviesData();
  }, []);

  if (loading) {
    return <p className="loading">Loading...</p>;
  }

  if (error) {
    return <p className="error-message">Error message: {error}</p>;
  }

  return (
    <div className="movie-app">
      <h1>Movie List App</h1>
      {movies.length > 0 ? (
        <MovieItem movies={movies} />
      ) : (
        <p className="no-movies">No movies found</p>
      )}
    </div>
  );
};

export default MovieApp;
