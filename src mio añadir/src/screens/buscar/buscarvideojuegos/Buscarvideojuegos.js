import React from 'react'
import { useParams } from 'react-router-dom'
import Resultadovideojuegos from '../../../components/resultadovideojuegos/Resultadovideojuegos'
import Header from '../../../components/header/Header'
import Footer from '../../../components/footer/Footer'
import FiltroAno from '../../../components/filters/FiltroAno'
import FiltroBasico from '../../../components/filters/FiltroBasico'
import FiltroGenero from '../../../components/filters/FiltroGenero'



function Buscarvideojuegos() {

    return (
        <div>
            <Header />
            <div className='filtros'>
                <FiltroBasico></FiltroBasico><FiltroGenero></FiltroGenero><FiltroAno></FiltroAno>
            </div>
            <Resultadovideojuegos />
            <Footer />
        </div>
    )
}

export default Buscarvideojuegos;