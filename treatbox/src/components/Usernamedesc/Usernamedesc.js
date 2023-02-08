import React, { useState, useEffect } from 'react';
import './Usernamedesc.css';
import axios from 'axios';
function Usernamedesc() {
  const username = localStorage.getItem("username");
  const [user, setUser] = useState();
  useEffect(() => {
    axios.get(`http://localhost:8000/user/${username}/`)
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  console.log("mostrar datos user",user)


  return (
    <div className='contenedor-Usernamedesc'>
      <div className='nombre-usuario'>
        {username}
      </div>
      <div className='descripcion-usuario'>
        
      </div>

    </div>
  )
}

export default Usernamedesc;