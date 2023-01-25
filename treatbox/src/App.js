import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import NotFound from './screens/NotFound/NotFound';
import Inicio from './screens/inicio/Inicio';
import Detalle from './components/detalle/Detalle';
import Login from './screens/session/Session';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/inicio" element={<Inicio/>} />
      <Route path="/detalle/:id" element={<Detalle/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  );
}

export default App;
