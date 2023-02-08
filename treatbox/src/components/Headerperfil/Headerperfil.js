import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Headerperfil() {
    const username = localStorage.getItem("username");

    return (
        <div className='total-nav-perfil'>
            <ul className="nav-perfil">
                <li><Link to={`/perfil/${username}`}>General</Link></li>
                <li><Link to={`/perfil/${username}/listas`}>Mis listas</Link></li>
            </ul>
        </div>
    )
}

export default Headerperfil