import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movie from "../src/screens/Movie";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/movie" element={<Movie />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;