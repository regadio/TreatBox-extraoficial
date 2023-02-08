import React, { useState, useEffect } from 'react';
import axios from "axios";
import '../Buscar.css';
import { Link } from "react-router-dom";

function Resultadopeliculas({genero,year}) {  
  const [movies, setMovies] = useState([]);
  const [pagina, setpagina] = useState(1);  
  console.log("El genro en ResultadoPeliculas ",genero);
  console.log("El año en ResultadoPeliculas ",year);

  const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=1b4876eaca59dc1cf248c634897da2a7&language=es&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pagina}&with_watch_monetization_types=flatrate&with_genres=${genero}&year=${year}`;
  useEffect(() => {
    axios.get(API_URL)
      .then(response => {
        setMovies(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, [pagina,genero,year]);

  const nextPage = () => {
    setpagina(pagina + 1);
  };

  const prevPage = () => {
    setpagina(pagina - 1);
  };

  return (
    <div>
      <div className='contenedorC'>
        {movies.map(movie => (
          <div key={movie.id} className='contenidoC'>
            <Link className='linko' to={`/detalle/peliculas/${movie.id}`}>
              <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
              <div className='tituloC'>
                {movie.title}
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className='paginador'>
        <button disabled={pagina <= 1} onClick={prevPage}>
          Anterior
        </button>
        <span>Página {pagina}</span>
        <button onClick={nextPage}>Siguiente</button>
      </div>
    </div>
  );
}

export default Resultadopeliculas;