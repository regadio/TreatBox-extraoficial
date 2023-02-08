import React, { useState, useEffect } from 'react';
import './Usernamedesc.css';
import axios from 'axios';

function Usernamedesc() {
  const username = localStorage.getItem("username");
  const [user, setUser] = useState();
  const [error, setError] = useState([]);
  const [descriptionn, setDescription] = useState("Escribe tu descripción");
  const [showDescription, setShowDescription] = useState(false);
  const [btnText, setBtnText] = useState("Editar descripción");

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/user/${username}/`);
      setUser(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = async e => {
    e.preventDefault();
    try {
      const res = await axios.put(`http://localhost:8000/user/edit/${username}/`, {
        username,
        descriptionn,
      });
      setError('');
      getUser();
      setShowDescription(!showDescription);
      setBtnText(showDescription ? "Editar descripción" : "Cerrar");

    } catch (err) {
      if (err.response.status === 405) {
        setError('Ocurrió un error');
      } else {
        setError('a');
      }
    }
  };

  const handleDescription = () => {
    setShowDescription(!showDescription);
    setBtnText(showDescription ? "Editar descripción" : "Cerrar");
  };
  const handleInputChange = e => {
    setDescription(e.target.value);
    };

  return (
    <div className='contenedor-Usernamedesc'>
      {user && user.map((item) => (
        <div key={item.id}>
          <div className='nombre-usuario'>
            {item.nickname}
          </div>
          <div className='descripcion-usuario'>
            {item.descriptionn}
            <button type="button" onClick={handleDescription}>{btnText}</button>
          </div>
          {showDescription && (
            <div className='cambiar-des'>
              <input onChange={handleInputChange} value={descriptionn}></input>
              <button type="button" onClick={handleClick}>Guardar</button>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default Usernamedesc;
