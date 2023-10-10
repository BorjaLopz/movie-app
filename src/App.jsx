import "./App.css";
import Header from "./pages/Header";
import Main from "./pages/Main";
import Footer from "./pages/Footer";
import { useState } from "react";

function App() {
  const [movieFiltered, setMovieFiltered] = useState("");

  console.log("movieFiltered desde APP");
  console.log(movieFiltered);

  return (
    <>
      <Header handleInputChange={setMovieFiltered} />
      <Main movieFiltered={movieFiltered} />
      <Footer />
    </>
  );
}

export default App;
