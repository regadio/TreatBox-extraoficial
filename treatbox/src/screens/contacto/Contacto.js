import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import './Contacto.css'
import LOGOTREATBOXcabesita from '../../components/Icons/LOGOTREATBOXcabesita.png';
import reloj from '../../components/Icons/reloj.png'
import correoelectronico from '../../components/Icons/correo-electronico.png';
import ubicacion from '../../components/Icons/ubicacion.png';


function Contacto() {

    return (
        <div>
            <Header />
            <div className='contacto'>
            <h2>Información de contacto</h2>
                <div>
                    <div>
                        <img src={reloj} alt="reloj"/>
                        <div>9:00 - 14:00  / 16:00 - 18:00</div>
                    </div>
                    <div>
                        <img src={correoelectronico} alt="email"/>
                        <div>cpr@fpcoruna.afundacion.org</div>
                    </div>
                    <div>
                        <img src={ubicacion} alt="ubicacion"/>
                        <div>Rúa Papagaio, 15002 
                        A Coruña</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacto;