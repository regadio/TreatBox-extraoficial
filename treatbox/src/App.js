import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import NotFound from './screens/NotFound/NotFound';

function App() {
  return (
    <Routes>
      <Route path="*" element={<NotFound/>} />
    </Routes>
  );
}

export default App;
