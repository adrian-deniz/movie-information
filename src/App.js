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
 

useEffect(function () {
  (async function() {
    setIsLoading(true)
    
    let [movieArray, response, responseError] = await getMovieDetailsById(idName);
    
    if(response) {
      setMovies(movieArray);
      setError(responseError);
      setIsLoading(false);
    }
    else {
      setMovies(movieArray);
      setError(responseError);
      setIsLoading(false);
    }

  }())
}, [idName])

useEffect(function () {
  if(isLoading) {
    console.log("I am Loading.");
  }
  else {
    console.log("I am not loading.");
  }
}, [isLoading])

useEffect(function () {
  if(error === null) return;
  console.log(error);
}, [error])

useEffect(function () {
  if(movies.length === 0) return;
  console.log("Fetched Successfully");
}, [movies])

  
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

    {isLoading && <div>...is loading</div>}
    {movies.map((movie) => {
      return (
        <MovieDetails
          key = {movie.imdbID}
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


