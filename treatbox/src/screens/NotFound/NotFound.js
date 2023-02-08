import React from 'react'
import { useParams} from 'react-router-dom'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import './NotFound.css';
import Logo from './../../components/Icons/LOGOTREATBOXcabesita.png'

const NotFound = (props) => {
    return (
    <div>
  
    <div className='contentNF'>
        <h1>TreatBox no ha encontrado lo que buscabas, lo sentimos :(</h1>
    </div>

    </div>
    )
}

export default NotFound;