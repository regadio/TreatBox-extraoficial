import React, { useState, useEffect } from 'react';
import axios from "axios";
import Contenedor from '../contenedorimg/Contenedor';
import './Resultadopeliculas.css';
import {Link} from "react-router-dom";

const API_URL = "https://api.themoviedb.org/3/discover/movie?api_key=1b4876eaca59dc1cf248c634897da2a7&language=es";

function Resultadopeliculas() {
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
      <div className='contenedorC'>
        {movies.map(movie => (
          <div key={movie.id} className='contenidoC'>
            <Link className='linko' to={`/detalle/${movie.id}`}>
            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
            <div className='tituloC'>
                {movie.title}
            </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Resultadopeliculas;