import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './añadir.css';

function Añadir() {
  const [movie, setMovie] = useState({});
  let { id } = useParams();
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=1b4876eaca59dc1cf248c634897da2a7&language=es`)
      .then(response => {
        setMovie(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);

  return (
    <div className='total-añadir'>
      <div className='añadir'>
        <div className='añadir-poster'>
          <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
          <h2>{movie.title}</h2>
        </div>
        <div className='row1'>
          <div>
            <label for="estado">Estado:</label>
            <select name="estado" id="cars">
              <option value="pendiente">Pendiente</option>
              <option value="visto">Visto</option>
            </select>
          </div>
          <div>
            <label for="veces">Veces vista:</label>
            <input type="text" name="veces"></input>
          </div>
          <div>
            <label for="puntuacion">Puntuación:</label>
            <input type="text" name="puntuacion"></input>
          </div>
          <div>
            <label for="fecha">Fecha de finalización:</label>
            <input type="date" name="fecha"></input>
          </div>
        </div>
        <div className='row2'>
          <div>
            <label for="notas">Notas:</label>
            <input type="text" name="notas"></input>
          </div>
        </div>
        <div className='guardar-btn'>
          <button type="button" onClick={() => window.location.reload()}>Guardar</button>
        </div>
      </div>
    </div>
  )
}

export default Añadir