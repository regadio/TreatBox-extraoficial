import React, { useState, useEffect } from 'react';
import axios from "axios";
import Contenedor from '../contenedorimg/Contenedor';
import './NovedadesPeliculas.css';


const API_URL = "https://api.themoviedb.org/3/trending/movie/week?api_key=1b4876eaca59dc1cf248c634897da2a7&language=es";

function NovedadesPeliculas() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(API_URL)
      .then(response => {
        setMovies(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div className='contenedorPeliculas'>
        {movies.slice(0,6).map(movie => (
          <div key={movie.id} className='pelicula'>
            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
            <div className='titulo'>
                {movie.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NovedadesPeliculas;