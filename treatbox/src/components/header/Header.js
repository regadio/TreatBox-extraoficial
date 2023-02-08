import React from 'react';
import logo from '../Icons/recortadolo.png';
import './header.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import defaultImg from '../Icons/usuario-de-perfil.png';
import FiltroBasico from '../filtros/FiltroBasico';
function Header() {
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

  const handleLogout = () => {
    localStorage.removeItem("session_token"); 
    localStorage.removeItem("username");
    //Redirigir a la página de inicio
    window.location.replace("/inicio");
  };

 
  const enviarTipo = (value) => {
    sessionStorage.setItem("tipo",value);
  }

  return (
    <div className="header">
      <header>
        <Link className="logo" to="/inicio"><img src={logo} alt="Logo" width="200px" /></Link>
        <ul className="nav">
          <li className='desplegable-li'>
            <Link to="/inicio">Buscar</Link>
            <ul className="desplegable">
              <li><Link onClick={() => enviarTipo("Películas")} to="/inicio/peliculas">Películas</Link></li>
              <li><Link onClick={() => enviarTipo("Series")} to="/inicio/series">Series</Link></li>
              <li><Link onClick={() => enviarTipo("Juegos")} to="/inicio/juegos">Juegos</Link></li>
            </ul>
          </li>
          <li><Link to={`/perfil/${username}/listas`}>Mis listas</Link></li>
        </ul>
        {isLoggedIn ? (
          <div className="loged">
            <Link to={`/perfil/${username}`}><img src={defaultImg} alt="User avatar" /></Link>
            <div className="logoutuno">
              <Link className="logoutdos" to='#' onClick={handleLogout}>Logout</Link>
            </div>
          </div>

        ) : (
          <Link className="login" to="/login">Login</Link>
        )}

      </header>
    </div>
  );
}

export default Header;