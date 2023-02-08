import React, { useState } from 'react';
import './Bannerperfil.css';
import bannerfondo from './../../components/Icons/bannerfondo.jpeg';
import Avatar from '../../components/Icons/usuario-de-perfil.png';


function Bannerperfil() {
    const username = localStorage.getItem("username");
    return (
        <div className='Contenedor-banner-perfil'>
            <div className='banner'>
                <div className='Container-avatar'>
                    <img src={Avatar}></img>
                </div>
            </div>
        </div>
    );
}

export default Bannerperfil;