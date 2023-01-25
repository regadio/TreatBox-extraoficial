import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './Detalle.css'

function Detalle() {
  const [movie, setMovie] = useState({});
  let { id } = useParams();
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=1b4876eaca59dc1cf248c634897da2a7&language=es`)
      .then(response => {
        setMovie(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);
  if (!movie.poster_path) {
    return null;
  }
  const year = new Date(movie.release_date).getFullYear();

  return (
    <div className='total'>
          {/* <img className='imagen-fondo' src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} /> */}
      <div className='contenedor-poster-detalles'>
        <div className='poster'>
          <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
        </div>
        <div className='detalles'>
          <div className='nombre'>
            {movie.title}
          </div>
          <div className='fecha-generos'>
            <div className='fecha'>
              {movie.release_date}
            </div>
            <div className='generos'>
              {movie.genres.map(genre => <div key={genre.id}>{genre.name}</div>)}
            </div>
            
          </div>
          <div className='duracion'>
              Duración: {movie.runtime}m
            </div>
          <div className='lenguaje'>
            ({movie.original_language.toUpperCase()})
          </div>

          <div className='puntuacion'>
            {movie.vote_average}
          </div>
          <div className='descripcion'>
            {movie.overview}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detalle;