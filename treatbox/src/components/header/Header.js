import React from 'react';
import logo from '../Icons/recortadolo.png';
import './header.css';
function Header() {
  return (
    <div className="header">
        <header>
         <a class="logo" href=""><img src={logo} alt="Logo" width="200px"/></a>
            <ul class="nav">
                <li><a href="">Buscar</a></li>
                <li><a href="">Mis listas</a></li>
            </ul>
            <a class="login" href="">Login</a>
        </header>
    </div>
  );
}

export default Header;