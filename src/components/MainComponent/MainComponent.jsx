import { useEffect, useState } from "react";
import "./style.css";

const API_KEY = "3f8739fc4744e89623d1bd04a37d17d5";
const IMG_API = "https://image.tmdb.org/t/p/w500/";
const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

function MainComponent({ movieFiltered }) {
  console.log("movieFiltered");
  console.log(movieFiltered);
  return (
    <div className="Main">
      <h2>Main Component</h2>
    </div>
  );
}

export default MainComponent;
