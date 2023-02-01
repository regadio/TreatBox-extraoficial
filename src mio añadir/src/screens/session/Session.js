import React, { useState } from 'react';
import axios from 'axios';
import Login from '../../components/login/login'
import Register from '../../components/register/Register'
import './sessions.css'


function Session() {
    function register() {
        let x = document.getElementById("login");
        let y = document.getElementById("register");
        let z = document.getElementById("boton-absoluto");    
        x.style.left = "-400px";
        y.style.left = "190px";
        z.style.left = "184px";
    }
    function log() {
        let x = document.getElementById("login");
        let y = document.getElementById("register");
        let z = document.getElementById("boton-absoluto");
        x.style.left = "190px";
        y.style.left = "-500px";
        z.style.left = "0";
    }
    return (
        <div>

            <div className="total">
                <div className="log-container">
                    <div className="botones-container">
                        <div id="boton-absoluto"></div>
                        <button type="button" className="botones" onClick={log}>Iniciar Sesión</button>
                        <button type="button" className="botones" onClick={register}>Registrarse</button>
                    </div>
                   <Login/>
                    <Register/>
                </div>
            </div>
        </div>
    );
}

export default Session;
