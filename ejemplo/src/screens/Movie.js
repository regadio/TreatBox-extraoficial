import React, { useState, useEffect } from 'react';
import axios from "axios";
import MovieBox from '../components/MovieBox';
import './Movie.css';



const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=1b4876eaca59dc1cf248c634897da2a7&language=es";
const API_SEARCH = "https://api.themoviedb.org/3/search/movie?api_key=1b4876eaca59dc1cf248c634897da2a7language=es&query";

function Movie() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    axios.get(API_URL)
      .then(response => {
        setMovies(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const searchMovie = (e) => {
    e.preventDefault();
    axios.get(`${API_SEARCH}=${query}`)
      .then(response => {
        setMovies(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
    setQuery('');
  }

  const changeHandler = (e) => {
    setQuery(e.target.value);
  }

  return (
    <div className='todo'>
      <form class="" onSubmit={searchMovie}>
        <input class="" type="search" placeholder="Buscador pelicula" value={query} onChange={changeHandler} />
        <button class="" type="submit" >Search</button>
      </form>

      <div className='tarjetatotal'>
        <h2>Top Popular</h2>
        {
          movies.length > 0 ? (
            <div className='principal'>
              {movies.map((movieReq) =>
                <MovieBox key={movieReq.id} {...movieReq} />)}
            </div>
          ) : (
            <h2>Peliculas no encontradas</h2>
          )
        }
      </div>
    </div>
  );
}

export default Movie;