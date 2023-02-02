import React from 'react';
import logo from '../Icons/recortadolo.png';
import './header.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import defaultImg from '../Icons/usuario-de-perfil.png';

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Se debe validar el token de sesión aquí
  const checkSessionToken = () => {
    const sessionToken = localStorage.getItem("session_token");

    if (sessionToken) {
      setIsLoggedIn(true);
    }
  };


  const handleLogout = () => {
    localStorage.removeItem("session_token"); //
    //Redirigir a la página de inicio
    window.location.replace("/inicio");
  };

  useEffect(() => {
    checkSessionToken();
  }, []);



  return (
    <div className="header">
      <header>
        <a className="logo" href="/inicio"><img src={logo} alt="Logo" width="200px" /></a>
        <ul className="nav">
          <li className='desplegable-li'>
            <a href="/inicio">Buscar</a>
            <ul className="desplegable">
              <li><a href={`/inicio/peliculas`}>Peliculas</a></li>
              <li><a href={`/inicio/series`}>Series</a></li>
              <li><a href={`/inicio/juegos`}>Juegos</a></li>
            </ul>
          </li>
          <li><a href="#">Mis listas</a></li>
        </ul>
        {isLoggedIn ? (
          <div className="loged">
            <a href='/perfil'><img src={defaultImg} alt="User avatar" /></a>
            <div className="logoutuno">
              <a className="logoutdos" href='#' onClick={handleLogout}>Logout</a>
            </div>
          </div>

        ) : (
          <a className="login" href="/login">Login</a>
        )}

      </header>
    </div>
  );
}

export default Header;