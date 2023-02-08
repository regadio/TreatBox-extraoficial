import React, { useState } from 'react';
import './Filtro.css';


function FiltroAno({pasaryear}) {
  const options = [];
  for (let i = 2023; i >= 1920; i--) {
    options.push(i);
  }
  const [selectedOption, setSelectedOption] = useState("Cualquiera");
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (year) => {
    setSelectedOption(year);
    setIsOpen(false);
    pasaryear (year);
  }
  return (
    <div className='Contenedor-Filtro'>
      <label className='Tipo-Filtro'>Fecha Salida</label>
      <div onClick={() => setIsOpen(!isOpen)} className='Desplegable'>
        {selectedOption}
      </div >
      {isOpen && (
        <div className='contenedor-tamaño'>
          {options.map((year) => (
            <div className={`Opciones-elegir ${selectedOption === year ? "selected" : ""}`} key={year} onClick={() => handleClick(year)}>
              {year}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FiltroAno;