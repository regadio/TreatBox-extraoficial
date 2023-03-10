import React, { useState, useEffect } from 'react';
import axios from "axios";
import lupa from '../../components/Icons/lupa.png'
import NovedadesPeliculas from '../../components/Novedades/NovedadesPeliculas';
import NovedadesSeries from '../../components/Novedades/NovedadesSeries';
import NovedadesJuegos from '../../components/Novedades/NovedadesJuegos';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Disclaim from '../../components/disclaimChart/DisclaimChart';
import Ranking from '../../components/ranking/Ranking';
import './inicio.css';

function Inicio(props) {

  return (
    <div>
      <div className='discContainer'>
        <Disclaim />
      </div>
      <div className='tipoContainer'>
        <NovedadesPeliculas />
      </div>
      <div className='tipoContainer'>
        <NovedadesSeries />
      </div>
      <div className='tipoContainer'>
        <NovedadesJuegos />
      </div>
       <div className='rankin'>
        <p className='rankinTitle'>Top usuarios</p>
        <Ranking></Ranking>
        <Ranking></Ranking>
        <Ranking></Ranking>
        <Ranking></Ranking>
        <Ranking></Ranking>
      </div> 
    </div>
  );
}

export default Inicio;