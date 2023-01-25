import React, { useState, useEffect } from 'react';
import axios from "axios";
import './Resultadoseries.css';
import {Link} from "react-router-dom";

const API_URL = "https://api.themoviedb.org/3/discover/tv?api_key=1b4876eaca59dc1cf248c634897da2a7&language=es";

function Resultadoseries() {
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
      <div className='contenedorC'>
        {series.map(serie => (
          <div key={serie.id} className='contenidoC'>
            <Link className='linko' to={`/detalle/${serie.id}`}>
            <img src={`https://image.tmdb.org/t/p/original${serie.poster_path}`} alt={serie.name} />
            <div className='tituloC'>
                {serie.name}
            </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Resultadoseries;