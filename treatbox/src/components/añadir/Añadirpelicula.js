import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './añadir.css';

function Añadir() {
  const [movie, setMovie] = useState([]);
  const [movie_state, setmovie_state] = useState([]);
  const [times_view, settimes_view] = useState(0);
  const [notes, setnotes] = useState(0);
  const [final_date, setfinal_date] = useState();
  const [comment, setcomment] = useState([]);
  const [error, setError] = useState([]);
  let { id } = useParams();
  const id_movie = id;
  const sessionToken = localStorage.getItem('session_token');
  const username = localStorage.getItem('username');
  console.log("username",username);
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=1b4876eaca59dc1cf248c634897da2a7&language=es`)
      .then(response => {
        setMovie(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);

  const handleClick = async e => {
    e.preventDefault();
    console.log(
      id_movie,
      movie_state,
      notes,
      times_view,
      final_date,
      comment,)
    try {
      const res = await axios.put(`http://localhost:8000/peliculas/favoritos/${id_movie}/`, {
        movie_state,
        notes,
        times_view,
        final_date,
        comment,
        username,
      },
      ); setError('');
    } catch (err) {
      if (err.response.status === 405) {
        setError('Ocurrió un error');
      } else {
        setError('a');
      }
    }
  };


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
            <select name="estado" onChange={e => setmovie_state(e.target.value)}>
              <option value="Pendiente">Pendiente</option>
              <option value="Visto">Visto</option>
            </select>
          </div>
          <div>
            <label for="veces">Veces vista:</label>
            <input value={times_view} onChange={e => settimes_view(e.target.value)} type="text" name="veces"></input>
          </div>
          <div>
            <label for="puntuacion">Puntuación:</label>
            <input value={notes} onChange={e => setnotes(e.target.value)} type="text" name="puntuacion"></input>
          </div>
          <div>
            <label for="fecha">Fecha de finalización:</label>
            <input value={final_date} onChange={e => setfinal_date(e.target.value)} type="date" name="fecha"></input>
          </div>
        </div>
        <div className='row2'>
          <div>
            <label for="notas">Notas:</label>
            <input value={comment} onChange={e => setcomment(e.target.value)} type="text" name="notas"></input>
          </div>
        </div>
        <div className='guardar-btn'>
          <button type="button" onClick={handleClick}>Guardar</button>
        </div>
      </div>
    </div>
  )
}

export default Añadir