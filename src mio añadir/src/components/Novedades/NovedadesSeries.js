import React, { useState, useEffect } from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import './Novedades.css';


const API_URL = "https://api.themoviedb.org/3/trending/tv/week?api_key=1b4876eaca59dc1cf248c634897da2a7&language=es";

function NovedadesJuegos() {
  const [serie, setSeries] = useState([]);
  const [botonActivo, setBotonActivo] = useState(false);

  useEffect(() => {
    axios.get(API_URL)
      .then(response => {
        setSeries(response.data.results);
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
    <div>
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
        {serie.map(serie => (
          <div key={serie.id} className='contenido'>
             <Link className="link" to={`/detalle/${serie.id}`}>
            <img src={`https://image.tmdb.org/t/p/original${serie.poster_path}`} alt={serie.name} />
            <div className='titulo'>
                {serie.name}
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