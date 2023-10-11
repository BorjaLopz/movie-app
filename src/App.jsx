import "./App.css";
import Header from "./pages/Header";
import Main from "./pages/Main";
import Footer from "./pages/Footer";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";

function App() {
  const [movieFiltered, setMovieFiltered] = useState("");

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <MainPage
              handleInputChange={setMovieFiltered}
              movieFiltered={movieFiltered}
            />
          }
        />
        {/* <Route path="/" element={<p>/</p>} /> */}
        <Route path="/contact" element={<p>Contacto</p>} />
        <Route path="/add" element={<p>Añadir</p>} />
      </Routes>
    </>
  );
}

export default App;
