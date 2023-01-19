import React, { useState, useEffect } from 'react';
import axios from "axios";
import Contenedor from '../../components/contenedorimg/Contenedor';
import Buscar from '../../components/buscar/Buscar'
import lupa from '../../components/Icons/lupa.png'

function Inicio() {
  return (
    <div>
        <Buscar/>
        <Contenedor/>
    </div>
  );
}

export default Inicio;