import React from 'react'

function login() {
  return (
    <form id="login" className="login-register" >
    <input name="nombre" type="text" className="input-texto" placeholder="Nombre Usuario" required />
    <input name="nombre" type="password" className="input-texto" placeholder="Introduce Contraseña" required />
    <input name="nombre" type="checkbox" className="check-box" /><span>Recordar Contraseña</span>
    <button type="submit" className="submit-boton">Iniciar Sesión</button>
</form>
  )
}

export default login