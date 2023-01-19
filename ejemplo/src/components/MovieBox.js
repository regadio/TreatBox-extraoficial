import React, { useState } from 'react';
import './MovieBox.css';
const API_IMG = "https://image.tmdb.org/t/p/original";

const MovieBox = ({ titel, poster_path, vote_average, release_date, overview }) => {

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <div>
            <div className="cont-imagen" >
                <img className="imagenprinci" src={API_IMG + poster_path} />
                <button className="boton" type="button" onClick={handleShow} >Ver más</button>
            </div>
            <div className="detalles" style={{ display: show ? 'block' : 'none' }}>
                <div className="">
                    <button type="button" className="close" style={{ display: show ? 'block' : 'none' }} onClick={handleClose}>x</button>
                </div>
                <img className="imagendetalle" src={API_IMG + poster_path} />
                <h3>{titel}</h3>
                <h4>IMDb: {vote_average}</h4>
                <h5>Release Date: {release_date}</h5>
                <br></br>
                <h6>Overview</h6>
                <p>{overview}</p>

            </div>
        </div>
    )
}

export default MovieBox;