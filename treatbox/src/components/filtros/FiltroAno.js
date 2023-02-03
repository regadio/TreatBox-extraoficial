import React, { useState } from 'react';
import './Filtro.css';


function FiltroAno() {
  const options = ["Películas", "Series", "Juegos", "Cualquiera"];
  const [selectedOption, setSelectedOption] = useState("Cualquiera");
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  }

  return (
    <div className='Contenedor-Filtro'>
      <label className='Tipo-Filtro'>Año</label>
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

export default FiltroAno;