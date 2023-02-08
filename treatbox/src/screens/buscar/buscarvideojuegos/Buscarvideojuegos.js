import React from 'react'
import { useParams } from 'react-router-dom'
import Resultadovideojuegos from '../../../components/buscar/resultadovideojuegos/Resultadovideojuegos'
import Footer from '../../../components/footer/Footer'
import FiltroAno from '../../../components/filtros/FiltroAno'
import FiltroBasico from '../../../components/filtros/FiltroBasico'
import FiltroGenero from '../../../components/filtros/FiltroGenero'
import '../buscar.css';


function Buscarvideojuegos() {

    return (
        <div className='tipoContainer'>
            <Resultadovideojuegos />
        </div>
    )
}

export default Buscarvideojuegos;