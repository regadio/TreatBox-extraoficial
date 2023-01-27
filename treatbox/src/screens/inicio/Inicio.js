import React, { useState, useEffect } from 'react';
import axios from "axios";
import lupa from '../../components/Icons/lupa.png'
import NovedadesPeliculas from '../../components/Novedades/NovedadesPeliculas';
import NovedadesSeries from '../../components/Novedades/NovedadesSeries';
import NovedadesJuegos from '../../components/Novedades/NovedadesJuegos';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
// import Disclam from '../../components/disclaimChart/DisclaimChart';
import Ranking from '../../components/ranking/Ranking';
import FiltroBasico from '../../components/filters/FiltroBasico';
import FiltroGenero from '../../components/filters/FiltroGenero';
import FiltroAno from '../../components/filters/FiltroAno';
import './inicio.css';

function Inicio(props) {
  const username = localStorage.getItem("username")
  useEffect(() => {
    const token = localStorage.getItem("token")
    axios.get(`/users/${username}`,{},{
      header:{
        "session_token" : token
      }
    })

  }, [username]);

  return (
    <div>
      <Header />
      {/* <div className='discContainer'>
        <Disclam/>
        </div> */}
      <div className='filtros'>
        <FiltroBasico></FiltroBasico><FiltroGenero></FiltroGenero><FiltroAno></FiltroAno>
      </div>
      <div className='peliContainer'>
        <NovedadesPeliculas />
      </div>
      <div className='serieContainer'>
        <NovedadesSeries />
      </div>
      <div className='juegoContainer'>
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
      <Footer></Footer>
    </div>
  );
}

export default Inicio;