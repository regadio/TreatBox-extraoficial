import React from 'react'
import { useParams } from 'react-router-dom'
import Resultadopeliculas from '../../../components/buscar/resultadopeliculas/Resultadopeliculas'
import Footer from '../../../components/footer/Footer'
import FiltroAno from '../../../components/filtros/FiltroAno'
import FiltroBasico from '../../../components/filtros/FiltroBasico'
import FiltroGenero from '../../../components/filtros/FiltroGenero'


function Buscarpeliculas() {

    return (
        <div>
            <Resultadopeliculas />
        </div>
    )
}

export default Buscarpeliculas;