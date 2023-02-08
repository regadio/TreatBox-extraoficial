import React, { useState } from 'react';
import './Bannerperfil.css';
import bannerfondo from './../../components/Icons/bannerfondo.jpeg';
// import LOGOTREATBOXcabesita from './../../components/Icons/LOGOTREATBOXcabesita.png';
// import Avatar from './../Icons/usuario-de-perfil.png';


function Bannerperfil() {
    const username= localStorage.getItem("username");
    return (
        <div className='Contenedor-banner-perfil'>
            <div className='banner'>
                <div className='level'>
                    <div className='Container-avatar'>
                        {/* <img src={Avatar}></img> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bannerperfil;