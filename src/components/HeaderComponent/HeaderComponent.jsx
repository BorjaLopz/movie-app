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
    <div className="Header">
      <div className="searchBox">
        <h1>NETFLEX</h1>
        <form id="searchForm" onSubmit={handleSubmit}>
          <input
            type="text"
            id="searchInput"
            placeholder="Buscar película ..."
            onChange={inputHandler}
          />
          <button className="searchBtn" type="submit">
            Buscar
          </button>
        </form>
      </div>
    </div>
  );
}

export default HeaderComponent;
