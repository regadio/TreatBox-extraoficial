import React, { useState, useEffect } from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import './NovedadesJuegos.css';


const API_URL = "https://api.themoviedb.org/3/trending/movie/week?api_key=1b4876eaca59dc1cf248c634897da2a7&language=es";

function NovedadesJuegos() {
  const [juego, setJuegos] = useState([]);

  useEffect(() => {
    axios.get(API_URL)
      .then(response => {
        setJuegos(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div className='componente'>
      <div className='seccion'>Novedades juegos</div>
      <div className='contenedor'>
        {juego.slice(0,6).map(juego => (
          <div key={juego.id} className='contenido'>
            <Link className="link" to={`/detalle/${juego.id}`}>
            <img src={`https://image.tmdb.org/t/p/original${juego.poster_path}`} alt={juego.title} />
            <div className='titulo'>
                {juego.title}
            </div>
            </Link>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default NovedadesJuegos;