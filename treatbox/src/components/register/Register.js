import React, { useState } from 'react';
import axios from 'axios';

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();

        if (!username || !email || !password || !passwordConfirm) {
            setError('Faltan parámetros');
            return;
        }

        if (password !== passwordConfirm) {
            setError('Las contraseñas no coinciden');
            return;
        }

        try {
            const res = await axios.post('http://localhost:8000/register/', {
                username,
                email,
                password,
                passwordConfirm
            });
            setError('');
        } catch (err) {
            if (err.response.status === 400) {
                setError('Faltan parámetros');
            } else if (err.response.status === 409) {
                setError('El usuario ya existe');
            } else {
                setError('Ocurrió un error al registrar al usuario');
            }
        }
    };

    return (


        <form id="register" className="login-register" onSubmit={handleSubmit}>
            <input
                name="nombre"
                type="text"
                className="input-texto"
                placeholder="Nombre Usuario"
                value={username}
                onChange={e => setUsername(e.target.value)}
                required
            />
            <input
                name="email"
                type="email"
                className="input-texto"
                placeholder="Introduce E-mail"
                value={email} onChange={e => setEmail(e.target.value)}
                required
            />
            <input
                name="password"
                type="password"
                className="input-texto"
                placeholder="Introduce Contraseña"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
            />
            <input
                name="password"
                type="password"
                className="input-texto"
                placeholder="Confirma Contraseña"
                value={passwordConfirm}
                onChange={e => setPasswordConfirm(e.target.value)}
                required
            />
            <button type="submit" className="submit-boton">Registrarse</button>
            {error && <p>{error}</p>}

        </form>

    );
}

export default Register;