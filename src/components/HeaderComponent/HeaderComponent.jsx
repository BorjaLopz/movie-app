import { useState } from "react";
import "./style.css";

function HeaderComponent({ handleMovieFilter }) {
  const [filteredMovie, setFilteredMovie] = useState("");
  let inputHandler = (e) => {
    setFilteredMovie(e.target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleMovieFilter(filteredMovie);
  };

  return (
    <header className="Header">
      <div className="searchBox">
        <h1>Neflis</h1>
        <nav className="navLinks">
          <ul>
            <li>home</li>
            <li>top movies</li>
            <li>top series</li>
          </ul>
        </nav>
        <form id="searchForm" onSubmit={handleSubmit}>
          <input
            type="text"
            id="searchInput"
            placeholder="Buscar película..."
            onChange={inputHandler}
          />
          <button className="searchBtn" type="submit">
            Buscar
          </button>
        </form>
      </div>
    </header>
  );
}

export default HeaderComponent;
