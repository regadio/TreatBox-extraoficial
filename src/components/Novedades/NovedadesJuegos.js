import React, { useState, useEffect } from 'react';
import axios from "axios";
import Contenedor from '../contenedorimg/Contenedor';
import './NovedadesJuegos.css';


const API_URL = "https://api.themoviedb.org/3/trending/movie/week?api_key=1b4876eaca59dc1cf248c634897da2a7&language=es";

function NovedadesJuegos() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios.get(API_URL)
      .then(response => {
        setGames(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div className='contenedorPeliculas'>
        {games.slice(0,6).map(game => (
          <div key={game.id} className='pelicula'>
            <img src={`https://image.tmdb.org/t/p/original${game.poster_path}`} alt={"pendiente"} />
            <div className='titulo'>
                {"pendiente"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NovedadesJuegos;