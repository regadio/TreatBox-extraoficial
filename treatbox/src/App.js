import React, { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import NotFound from './screens/NotFound/NotFound';
import Inicio from './screens/inicio/Inicio';
import Detallepelicula from './components/detalle/Detallepelicula';
import Detalleseries from './components/detalle/Detalleseries';
import Login from './screens/session/Session';
import Buscarpeliculas from './screens/buscar/buscarpeliculas/Buscarpeliculas';
import Buscarseries from './screens/buscar/buscarseries/Buscarseries';
import Buscarvideojuegos from './screens/buscar/buscarvideojuegos/Buscarvideojuegos';
import Contacto from './screens/contacto/Contacto';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Contenedorfiltros from './components/filtros/Contenedorfiltros';
import Perfil from './screens/perfil/Perfil';
function App({}) {
  const [genero, setGenero] = useState({})
  const [year, setYear] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const checkSessionToken = () => {
    const sessionToken = localStorage.getItem("session_token");
    if (sessionToken) {
      setIsLoggedIn(true);
    }
  };
  useEffect(() => {
    checkSessionToken();
  }, []);

  const handleGenre = (idgenero) => {
    setGenero(idgenero);
    console.log("Appjs genrro es", idgenero)
  }
  const handleYear = (year) => {
    setYear(year);
    console.log("Appjs año es", year)
  }


  return (
    <>
      <Header />
      <Contenedorfiltros pasargenero={handleGenre} pasaryear={handleYear} />
      <Routes>        
        <Route path="/" element={<Inicio />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detalle/peliculas/:id" element={<Detallepelicula />} />
        <Route path="/detalle/series/:id" element={<Detalleseries />} />
        <Route path='/inicio/peliculas' element={<Buscarpeliculas genero={genero} year={year} />} />
        <Route path='/inicio/series' element={<Buscarseries genero={genero} year={year}/>} />
        <Route path='/inicio/juegos' element={<Buscarvideojuegos />} />
        <Route path='/perfil/:nick' element={<Perfil />} />
        <Route path='/perfil/:nick/listas' element={<Perfil />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}


export default App;
