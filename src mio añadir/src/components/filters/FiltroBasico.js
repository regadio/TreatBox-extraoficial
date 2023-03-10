import React, { useState } from 'react';
import './FiltroBasico.css';


function FiltroBasico() {
  const options = ["Películas", "Series", "Juegos", "Usuario", "Cualquiera"];
  const [selectedOption, setSelectedOption] = useState("Cualquiera");
  const [isOpen, setIsOpen] = useState(false);

  function handleClick(option) {
    setSelectedOption(option);
    setIsOpen(false);
    const encodedOption = encodeURIComponent(option.toLowerCase());
    window.location.href = `http://localhost:3000/inicio/${encodedOption}`;
  }

  return (
    <div>
        <div className='FiltroContainer'>
      <label className='TitleTipo'>Tipo</label>
      <div  onClick={() => setIsOpen(!isOpen)} className='selectedOption'>
        {selectedOption}
      </div >
      {isOpen && (
        <div >
          {options.map((option) => (
            <div
              key={option}
              className={`custom-option ${
                selectedOption === option ? "selected" : ""
              }`}
              onClick={() => handleClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
      </div>
    </div>
  );
}

export default FiltroBasico;