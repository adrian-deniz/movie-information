import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import { getMoviesByName, getMovieDetailsById  } from "./Utilities/movies-utils.js";
import MovieCard from "./Components/MovieCard";
import MovieDetails from "./Components/MovieDetails";

let App = function () {
  let [searchTerm, setSearchTerm] = useState("The Matrix");
  let [isLoading, setIsLoading] = useState(false);
  let [movies, setMovies] = useState([]);
  let [error, setError] = useState(null);
  let [idName, setIdName] = useState("tt1877830"); //The Batman
  
  // useEffect(function () {
  //   getMoviesByName(searchTerm)
  //   .then(setMovies);

  // }, [searchTerm]);
 
console.log(movies, error, isLoading, "TEST")
useEffect(function () {
  (async function() {
    let [movieArray, response, responseError] = await getMovieDetailsById(idName)
    console.log(movieArray, "Adrian De Niz", response, responseError)
    if(response) {
      setMovies(movieArray);
      setError(responseError);
      isLoading(false);
    }
    else {
      setMovies(movieArray);
      setError(responseError);
      isLoading(false);
    }

  }())
}, [idName])

  
  return (
    // <div>
    //   {movies.map((movie) => {
    //     return (
    //       <MovieCard
    //         title={movie.Title}
    //         type={movie.Type}
    //         posterUrl={movie.Poster}
    //       />
    //     );
    //   })}
    // </div>

  <div>
    {movies.map((movie) => {
      return (
        <MovieDetails
          posterUrl = {movie.Poster}
          title = {movie.Title}
          rated = {movie.Rated}
          runtime = {movie.Runtime}
          genre = {movie.Genre}
          plot = {movie.Plot}
          actors = {movie.Actors}
          rating = {movie.imdbRating}
        />
      );
    })}
  </div>
    
  );
};

export default App;


