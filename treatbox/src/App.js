import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import NotFound from './screens/NotFound/NotFound';
import Login from './screens/Login/login'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
