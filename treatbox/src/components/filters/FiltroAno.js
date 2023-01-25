import React, { useState } from 'react';
import './FiltroAno.css';


function FiltroAno() {
  const options = ["Películas", "Series", "Juegos", "Cualquiera"];
  const [selectedOption, setSelectedOption] = useState("Cualquiera");
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  }

  return (
    <div>
        <div className='FiltroContainer'>
      <label className='TitleTipo'>Año</label>
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

export default FiltroAno;