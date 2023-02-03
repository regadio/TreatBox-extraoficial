import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './Filtro.css';


function FiltroBasico() {
  const tipo = sessionStorage.getItem("tipo");
  const options = ["Películas", "Series", "Juegos", "Cualquiera"];
  const [selectedOption, setSelectedOption] = useState("Cualquiera");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const handleClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (option === "Películas") {
      sessionStorage.setItem("tipo", "Películas")
      navigate("/inicio/peliculas")
    } else if (option === "Series") {
      sessionStorage.setItem("tipo", "Series")
      navigate("/inicio/series")
    } else if (option === "Juegos") {
      sessionStorage.setItem("tipo", "Juegos")
      navigate("/inicio/juegos")
    } else if (option === "Cualquiera") {
      sessionStorage.setItem("tipo", "Cualquiera")

      navigate("/inicio")
    }
  }
  useEffect(() => {
    setSelectedOption(tipo);
  }, [tipo]);

  useEffect(() => {
    const path = window.location.pathname;
    if (path === "/inicio/peliculas") {
      setSelectedOption("Películas");
    } else if (path === "/inicio/series") {
      setSelectedOption("Series");
    } else if (path === "/inicio/juegos") {
      setSelectedOption("Juegos");
    } else if (path === "/inicio") {
      setSelectedOption("Cualquiera");
    }
  }, []);
  return (
    <div className='Contenedor-Filtro'>
      <label className='Tipo-Filtro'>Tipo</label>
      <div onClick={() => setIsOpen(!isOpen)} className='Desplegable'>
        {selectedOption}
      </div >
      {isOpen && (
        <div >
          {options.map((option) => (
            <div className={`Opciones-elegir ${selectedOption === option ? "selected" : ""}`} key={option} onClick={() => handleClick(option)}>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FiltroBasico;