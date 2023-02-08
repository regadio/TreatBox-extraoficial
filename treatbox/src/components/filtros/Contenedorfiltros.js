import React, { useState, useEffect } from 'react';
import FiltroBasico from './FiltroBasico'
import FiltroGenero from './FiltroGenero'
import FiltroAno from './FiltroAno'
import { useLocation } from 'react-router-dom';
import './Contenedorfiltros.css';
function Contenedorfiltros({pasargenero,pasaryear}) {
  const handleGenre = (idgenero) => {
    pasargenero(idgenero)
    console.log("ContenedorFiltros genrro es", idgenero)
  }
  const handleYear = (year) => {
    pasaryear(year)
    console.log("ContenedorFiltros año es", year)
  }

  const location = useLocation();
  return (
    location.pathname.indexOf("inicio") !== -1 && (
      <div className='Contenedor-Filtros'>
        <FiltroBasico />
        <FiltroGenero pasargenero={handleGenre} />
        <FiltroAno pasaryear={handleYear}  />
      </div>
    )
  )
}

export default Contenedorfiltros;