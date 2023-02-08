import React, { useState, useEffect } from 'react';
import './Usernamedesc.css';
import axios from 'axios';
function Usernamedesc() {
  const username = localStorage.getItem("username");
  const [user, setUser] = useState();
  const [error, setError] = useState([]);
  const descriptionn = "aaaaaaaaaaathdghdgghaadcdfffffggggghhhhjjjjjjjjj";
  const [descripcion,setDescription] = useState("Descripción de ejemplo");
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
    } catch (err) {
      if (err.response.status === 405) {
        setError('Ocurrió un error');
      } else {
        setError('a');
      }
    }
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
          </div>
          <button type="button" onClick={handleClick}>Editar Descripcion</button>
        </div>
      ))}
    </div>
  )
}

export default Usernamedesc;