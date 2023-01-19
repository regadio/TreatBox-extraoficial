import React from 'react'
import './login.css'


function login() {
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
                    <form id="login" className="login-register" >
                        <input name="nombre" type="text" className="input-texto" placeholder="Nombre Usuario" required />
                        <input name="nombre" type="password" className="input-texto" placeholder="Introduce Contraseña" required />
                        <input name="nombre" type="checkbox" className="check-box" /><span>Recordar Contraseña</span>
                        <button type="submit" className="submit-boton">Iniciar Sesión</button>
                    </form>

                    <form id="register" className="login-register">
                        <input name="nombre" type="text" className="input-texto" placeholder="Nombre Usuario" required />
                        <input name="email" type="email" className="input-texto" placeholder="Introduce E-mail" required />
                        <input name="password" type="password" className="input-texto" placeholder="Introduce Contraseña" required />
                        <input name="password" type="password" className="input-texto" placeholder="Confirma Contraseña" required />
                        <button type="submit" className="submit-boton">Registrarse</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default login