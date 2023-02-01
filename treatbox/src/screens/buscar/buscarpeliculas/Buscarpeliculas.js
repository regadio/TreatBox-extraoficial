import React from 'react'
import { useParams} from 'react-router-dom'
import Resultadopeliculas from '../../../components/resultadopeliculas/Resultadopeliculas'
import Header from '../../../components/header/Header'
import Footer from '../../../components/footer/Footer'
import FiltroAno from '../../../components/filters/FiltroAno'
import FiltroBasico from '../../../components/filters/FiltroBasico'
import FiltroGenero from '../../../components/filters/FiltroGenero'


function Buscarpeliculas() {

    return (
        <div>
            <Header />
            <div className='filtros'>
                <FiltroBasico></FiltroBasico><FiltroGenero></FiltroGenero><FiltroAno></FiltroAno>
            </div>
            <Resultadopeliculas />
            <Footer />
        </div>
    )
}

export default Buscarpeliculas;