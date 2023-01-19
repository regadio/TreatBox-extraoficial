import React, { useState, useEffect } from 'react';
import axios from "axios";
import Contenedor from '../contenedorimg/Contenedor';


const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=1b4876eaca59dc1cf248c634897da2a7&language=es";

function Popular() {
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
      <div className='tarjetatotal'>
        <h2>Top Popular</h2>
        {
          movies.length > 0 ? (
            <div className='principal'>
              {movies.slice(0,6).map((movieReq) =>
                <Contenedor key={movieReq.id} {...movieReq} />)}
            </div>
          ) : (
            <h2>Peliculas no encontradas</h2>
          )
        }
      </div>
    </div>
  );
}

export default Popular;