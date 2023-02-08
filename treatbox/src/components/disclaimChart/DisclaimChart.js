import React, { useState } from 'react';
import './DisclaimChart.css';
import diagrama from '../Icons/diagrama.png';
import manodedo from '../Icons/manodedo.png';
import {useNavigate} from 'react-router-dom';
import Equis from '../Icons/letra-x.png';


function DisclaimChart() {
  const navigate = useNavigate()
  const[show, setShow] = useState(true)

  const cerrar = () => {
    setShow(false)
  }

  return (
    <div>
    {show && !localStorage.getItem("session_token") &&(
      <div className='dchart'>
        <div className='equisContainer'> 
          <div className='equis' onClick={() => cerrar()}><img src={Equis}></img></div>
        </div>
       
        <div className='intro'>
        <h1 className='duno'>LA VIDEOTECA AUDIOVISUAL DE ÚLTIMA GENERACIÓN</h1>
        <h2 className='ddos'>Descubre, comparte y trackea tus películas, series y videojuegos favoritos.</h2>
        </div>
        <div className='dcontainer'>
          <div className='dtres'>
            <div><img src={diagrama}></img></div>
            <div className='dp1'>Crea tu propia videoteca de contenido y analiza tus hábitos de visualización.</div>
          </div>
          <div className='dcuatro'>
            <div className='dp2'>Encuentra perfiles acordes a tus gustos y descubre según tus preferencias.</div>
            <div><img src={manodedo}></img></div>
          </div>
        </div>
        <button type='button' className='dbutton' onClick={() => {navigate('/login')}}>UNIRME</button>
      </div>)}
    </div>
  );
}

export default DisclaimChart;