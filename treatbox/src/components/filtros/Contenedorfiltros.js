import React from 'react'
import FiltroBasico from './FiltroBasico'
import FiltroGenero from './FiltroGenero'
import FiltroAno from './FiltroAno'
import { useLocation } from 'react-router-dom';
import './Contenedorfiltros.css';
function Contenedorfiltros() {
  const location = useLocation();
  return (
    location.pathname !== "/login" && (
      <div className='Contenedor-Filtros'>
        <FiltroBasico />
        <FiltroGenero />
        <FiltroAno />
      </div>
    )
  )
}

export default Contenedorfiltros