import React, { useState } from 'react';
import './FiltroGenero.css';


function FiltroGenero() {
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
      <label className='TitleTipo'>Género</label>
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

export default FiltroGenero;