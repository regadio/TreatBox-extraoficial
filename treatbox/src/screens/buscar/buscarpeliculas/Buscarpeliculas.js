import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import Resultadopeliculas from '../../../components/buscar/resultadopeliculas/Resultadopeliculas'
import '../buscar.css';

function Buscarpeliculas({genero,year}){
        console.log("Genero En buscarpeliculas es",genero )

    return (
        <div className='tipoContainer'>
            <Resultadopeliculas genero={genero} year={year}/>
        </div>
    )
}

export default Buscarpeliculas;