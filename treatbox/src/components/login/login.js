
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate  } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useNavigate ();

  const handleSubmit = async e => {
    e.preventDefault();
    if (!username || !password) {
      setError('Faltan parámetros');
      return;
    }
    try {
      const res = await axios.post('http://localhost:8000/login/', {
        username,
        password,
      });
      setError('');
      localStorage.setItem("session_token", res.data.session_token);
      localStorage.setItem("username", username);
      history("/inicio");
      window.location.reload();
    } catch (err) {
      if (err.response.status === 400) {
        setError('La contraseña o el usuario no existen');
      } else {
        setError('Ocurrió un error al registrar al usuario');
      }
    }
  }; return (

    <form id="login" className="login-register" onSubmit={handleSubmit}>
      <input value={username} onChange={e => setUsername(e.target.value)} name="nombre" type="text" className="input-texto" placeholder="Nombre Usuario" required />
      <input value={password} onChange={e => setPassword(e.target.value)} name="nombre" type="password" className="input-texto" placeholder="Introduce Contraseña" required />
      <input name="nombre" type="checkbox" className="check-box" /><span>Recordar Contraseña</span>
      <button type="submit" className="submit-boton">Iniciar Sesión</button>
      {error && <p>{error}</p>}

    </form>
  )
}

export default Login;