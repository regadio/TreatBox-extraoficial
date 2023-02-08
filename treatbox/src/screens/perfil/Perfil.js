import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Bannerperfil from '../../components/bannerperfil/Bannerperfil'
import Usernamedesc from '../../components/Usernamedesc/Usernamedesc'
import General from '../../components/general/General'
import Headerperfil from '../../components/Headerperfil/Headerperfil'
import Listaperfil from '../../components/listasperfil/listaperfil'
import MilistaJuegos from '../../components/mislistas/MilistaJuegos'
import MilistaPeliculas from '../../components/mislistas/MilistaPeliculas'
import MilistaSeries from '../../components/mislistas/MilistaSeries'
import './Perfil.css';
import { useLocation } from 'react-router-dom';
function Perfil() {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const username = localStorage.getItem("username");
  // Se debe validar el token de sesión aquí
  const checkSessionToken = () => {
    const sessionToken = localStorage.getItem("session_token");
    if (sessionToken) {
      setIsLoggedIn(true);
    }
  };
  useEffect(() => {
    checkSessionToken();
  }, []);

  return (
    <div>

      <div>
        <Bannerperfil />
      </div>
      <div className='header-perfil'>
        <Headerperfil />
      </div>
      {
        location.pathname.indexOf("listas") !== -1 ? (
          <div className='listas-perfil'>
            <div className='milista-peliculas'>
              <MilistaPeliculas />
            </div>
            <div className='milista-series'>
              <MilistaSeries />
            </div>
            <div className='milista-juegos'>
              <MilistaJuegos />
            </div>
          </div>
        ) : (
          <div className='user-General'>
            <div className='user-perfil'>
              <Usernamedesc />
            </div>
            <div className='General-perfil'>
              <General />
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Perfil;
