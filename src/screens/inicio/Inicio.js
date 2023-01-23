import React, { useState, useEffect } from 'react';
import axios from "axios";
import Contenedor from '../../components/contenedorimg/Contenedor';
import Buscar from '../../components/buscar/Buscar'
import lupa from '../../components/Icons/lupa.png'
import NovedadesPeliculas from '../../components/Novedades/NovedadesPeliculas';
import NovedadesSeries from '../../components/Novedades/NovedadesSeries';
import NovedadesJuegos from '../../components/Novedades/NovedadesJuegos';
function Inicio() {
  return (
    <div>
        <NovedadesPeliculas/>
        <NovedadesSeries/>
        <NovedadesJuegos/>
    </div>
  );
}

export default Inicio;