import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../../components/header/Header'
import Resultadoseries from '../../../components/resultadoseries/Resultadoseries'
import Footer from '../../../components/footer/Footer'
import FiltroAno from '../../../components/filters/FiltroAno'
import FiltroBasico from '../../../components/filters/FiltroBasico'
import FiltroGenero from '../../../components/filters/FiltroGenero'


function Buscarseries() {

    return (
        <div>
            <Header />
            <div className='filtros'>
                <FiltroBasico></FiltroBasico><FiltroGenero></FiltroGenero><FiltroAno></FiltroAno>
            </div>
            <Resultadoseries />
            <Footer />
        </div>
    )
}

export default Buscarseries;