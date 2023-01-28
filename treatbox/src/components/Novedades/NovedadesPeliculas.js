import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import './Novedades.css';


const API_URL = "https://api.themoviedb.org/3/trending/movie/week?api_key=1b4876eaca59dc1cf248c634897da2a7&language=es";

function NovedadesPeliculas() {
  const [movies, setMovies] = useState([]);
  const [botonActivo, setBotonActivo] = useState(false);

  useEffect(() => {
    axios.get(API_URL)
      .then(response => {
        setMovies(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  function handleClick() {
    setBotonActivo(!botonActivo)
    console.log("funciona");
  };

  return (
    <div className='componente'>
      <div className='seccion'>
        <div className='tipo'>
          Novedades películas
        </div>
        <div className='mas' onClick={handleClick} >
          Ver más
        </div>
      </div>
      <div className={`contenedor ${botonActivo ? 'activo' : ''}`}>
        {movies.map(movie => (
          <div key={movie.id} className='contenido'>
            <Link className="link" to={`/detalle/${movie.id}`}>
              <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
              <div className='titulo'>
                {movie.title}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NovedadesPeliculas;