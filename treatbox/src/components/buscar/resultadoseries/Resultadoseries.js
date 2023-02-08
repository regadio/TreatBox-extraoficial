import React, { useState, useEffect } from 'react';
import axios from "axios";
import '../Buscar.css';
import {Link} from "react-router-dom";


function Resultadoseries({genero,year}) {
  const [series, setSeries] = useState([]);
  const [pagina, setpagina] = useState(1);
  const API_URL = `https://api.themoviedb.org/3/discover/tv?api_key=1b4876eaca59dc1cf248c634897da2a7&language=es&page=${pagina}e&with_genres=${genero}&first_air_date_year=${year}`;

  useEffect(() => {
    axios.get(API_URL)
      .then(response => {
        setSeries(response.data.results);
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
        {series.map(serie => (
          <div key={serie.id} className='contenidoC'>
            <Link className='linko' to={`/detalle/series/${serie.id}`}>
            <img src={`https://image.tmdb.org/t/p/original${serie.poster_path}`} alt={serie.name} />
            <div className='tituloC'>
                {serie.name}
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

export default Resultadoseries;