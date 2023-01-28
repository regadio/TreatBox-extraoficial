import React from 'react';
import logo from '../Icons/recortadolo.png';
import './header.css';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div className="header">
      <header>
        <a class="logo" href="/inicio"><img src={logo} alt="Logo" width="200px" /></a>
        <ul class="nav">
          <li className='desplegable-li'>
            <a href="/inicio">Buscar</a>
            <ul class="desplegable">
              <li><a href={`/inicio/peliculas`}>Peliculas</a></li>
              <li><a href={`/inicio/series`}>Series</a></li>
              <li><a href={`/inicio/juegos`}>Juegos</a></li>
            </ul>
          </li>
          <li><a href="#">Mis listas</a></li>
        </ul>
        <a class="login" href="/login">Login</a>
      </header>
    </div>
  );
}

export default Header;