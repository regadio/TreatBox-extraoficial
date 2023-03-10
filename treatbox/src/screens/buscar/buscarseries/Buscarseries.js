import React from 'react'
import { useParams } from 'react-router-dom'
import Resultadoseries from '../../../components/buscar/resultadoseries/Resultadoseries'
import Footer from '../../../components/footer/Footer'
import FiltroAno from '../../../components/filtros/FiltroAno'
import FiltroBasico from '../../../components/filtros/FiltroBasico'
import FiltroGenero from '../../../components/filtros/FiltroGenero'
import '../buscar.css';


function Buscarseries({genero,year}) {

    return (
        <div className='tipoContainer'>
            <Resultadoseries genero={genero} year={year}/>
        </div>
    )
}

export default Buscarseries;