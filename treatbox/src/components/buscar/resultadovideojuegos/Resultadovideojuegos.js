import React, { useState, useEffect } from 'react';
import axios from "axios";
import '../Buscar.css';
import {Link} from "react-router-dom";


function Resultadovideojuegos() {
  const [games, setGames] = useState([]);
  const [pagina, setpagina] = useState(1);
  const API_URL = "https://api.themoviedb.org/3/discover/tv?api_key=1b4876eaca59dc1cf248c634897da2a7&language=es";

  useEffect(() => {
    axios.get(API_URL)
      .then(response => {
        setGames(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
    }, [pagina]);
    const nextPage = () => {
      setpagina(pagina + 1);
    };
  
    const prevPage = () => {
      setpagina(pagina - 1);
    };
  return (
    <div>
      <div className='contenedorC'>
        {games.map(game => (
          <div key={game.id} className='contenidoC'>
            <Link className='linko' to={`/detalle/${game.id}`}>
            <img src={`https://image.tmdb.org/t/p/original${game.poster_path}`} alt={game.name} />
            <div className='tituloC'>
                {game.name}
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

export default Resultadovideojuegos;