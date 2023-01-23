import React, { useState, useEffect } from 'react';
import axios from "axios";
import Contenedor from '../contenedorimg/Contenedor';
import './NovedadesSeries.css';


const API_URL = "https://api.themoviedb.org/3/trending/tv/week?api_key=1b4876eaca59dc1cf248c634897da2a7&language=es";

function NovedadesPeliculas() {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    axios.get(API_URL)
      .then(response => {
        setSeries(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div className='contenedorPeliculas'>
        {series.slice(0,6).map(serie => (
          <div key={serie.id} className='pelicula'>
            <img src={`https://image.tmdb.org/t/p/original${serie.poster_path}`} alt={serie.name} />
            <div className='titulo'>
                {serie.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NovedadesPeliculas;