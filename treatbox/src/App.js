import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import NotFound from './screens/NotFound/NotFound';
import Inicio from './screens/inicio/Inicio';
import Detalle from './components/detalle/Detallepelicula';
import Login from './screens/session/Session';
import Buscarpeliculas from './screens/buscar/buscarpeliculas/Buscarpeliculas';
import Buscarseries from './screens/buscar/buscarseries/Buscarseries';
import Buscarvideojuegos from './screens/buscar/buscarvideojuegos/Buscarvideojuegos';
import Contacto from './screens/contacto/Contacto';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Contenedorfiltros from './components/filtros/Contenedorfiltros';
function App() {
  return (
    <>
      <Header />
      <Contenedorfiltros/>
      <Routes>        
        <Route path="/" element={<Inicio />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detalle/:id" element={<Detalle />} />
        <Route path='/inicio/peliculas' element={<Buscarpeliculas />} />
        <Route path='/inicio/series' element={<Buscarseries />} />
        <Route path='/inicio/juegos' element={<Buscarvideojuegos />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}


export default App;
