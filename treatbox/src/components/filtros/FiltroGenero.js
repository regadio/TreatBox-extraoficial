import React, { useState, useEffect } from 'react';
import './Filtro.css';
import axios from 'axios';


function FiltroGenero() {
  const tipo = sessionStorage.getItem("tipo");
  const [selectedOption, setSelectedOption] = useState("Cualquiera");
  const [isOpen, setIsOpen] = useState(false);
  const [options1, setoptions1] = useState([]);
  const [options2, setoptions2] = useState([]);
  const [tipo1, settipo1] = useState();

  const handleClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  }
  useEffect(() => {
    settipo1(tipo);
  }, [tipo]);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=1b4876eaca59dc1cf248c634897da2a7&language=es`)
      .then(response => {
        setoptions1(response.data.genres);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/genre/tv/list?api_key=1b4876eaca59dc1cf248c634897da2a7&language=es`)
      .then(response => {
        setoptions2(response.data.genres);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className='Contenedor-Filtro'>
      <label className='Tipo-Filtro'>Género</label>
      <div onClick={() => setIsOpen(!isOpen)} className='Desplegable'>
        {selectedOption}
      </div>
      {isOpen && (
        <div>
          {tipo === "Películas"
            ? options1.map((option) => (
              <div className={`Opciones-elegir ${selectedOption === option ? "selected" : ""}`} key={option.id} onClick={() => handleClick(option)}>
                {option.name}
              </div>
            ))
            : tipo === "Series"
              ? options2.map((option) => (
                <div className={`Opciones-elegir ${selectedOption === option ? "selected" : ""}`} key={option.id} onClick={() => handleClick(option)}>
                  {option.name}
                </div>
              ))
              : null}
        </div>
      )}
    </div>
  );
}

export default FiltroGenero;