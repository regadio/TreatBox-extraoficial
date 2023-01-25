import React, { useState } from 'react';
import './DisclaimChart.css';
import diagrama from '../Icons/diagrama.png';
import manodedo from '../Icons/manodedo.png';


function DisclaimChart() {

  return (
    <div>
      <div className='chart'>
        <p className='uno'>LA VIDEOTECA AUDIOVISUAL DE ÚLTIMA GENERACIÓN</p>
        <p className='dos'>Descubre, comparte y trackea tus películas, series y videojuegos favoritos.</p>
        <div className='container'>
          <div className='tres'>
            <img src={diagrama}></img>
            <p className='p1'>Crea tu propia videoteca de contenido y analiza tus hábitos de visualización.</p>
          </div>
          <div className='cuatro'>
            <p className='p2'>Encuentra perfiles acordes a tus gustos y descubre según tus preferencias.</p>
            <img src={manodedo}></img>
          </div>
        </div>
        <button type='button'>UNIRME</button>
      </div>
    </div>
  );
}

export default DisclaimChart;