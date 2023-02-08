import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import './Milista.css';



function MilistaPeliculas() {
  const username = localStorage.getItem("username");
  const [movies, setMovies] = useState([]);
  const [idmovies, setidMovies] = useState([]);
  const [botonActivo, setBotonActivo] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:8000/peliculas/${username}/`)
      .then(response => {
        setidMovies(response.data.results);
        console.log("mostrar id peliculas",response.data.results)
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${idmovies}?api_key=1b4876eaca59dc1cf248c634897da2a7&language=es`)
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
          Peliculas favoritas
        </div>
        <div className='mas' onClick={handleClick} >
          {botonActivo ? "Ver menos" : "Ver más"}
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

export default MilistaPeliculas;