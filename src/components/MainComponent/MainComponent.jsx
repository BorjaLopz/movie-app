import { useEffect, useState } from "react";
import "./style.css";
import RenderMovies from "../RenderMovies/RenderMovies";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZjg3MzlmYzQ3NDRlODk2MjNkMWJkMDRhMzdkMTdkNSIsInN1YiI6IjY1MjUyNzZhNjI5YjJjMDBlMjY0ZWZhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TqMxuU1_tkE-tfODYg6z_dJ5ugubXI0UnqejoBX4VDo",
  },
};

const API_KEY = "3f8739fc4744e89623d1bd04a37d17d5";

function MainComponent({ movieFiltered }) {
  const [moviesFiltered, setMoviesFiltered] = useState({});
  const [topMovies, setTopMovies] = useState({});
  const [movieCardsToSee, setMovieCardsToSee] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSetCurrentPage = () => {
    console.log("HOLA HOLA HOLA");
    if (topMovies.page < topMovies.total_pages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const fetchFilteredData = async () => {
    try {
      const resp = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${movieFiltered}&language=es`
      );
      const data = await resp.json();
      setMoviesFiltered(data);
    } catch (e) {
      console.log("Error. Couldn't fetch data. ", e.message);
    }
  };

  const fetchTopMovies = async () => {
    try {
      const resp = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?language=es&page=${currentPage}`,
        options
      );
      const data = await resp.json();

      setTopMovies(data);
      if (data.page === 1) {
        setMovieCardsToSee(data.results);
      } else {
        setMovieCardsToSee((prevMovieCards) => [
          ...prevMovieCards,
          ...data.results,
        ]);
      }
    } catch (e) {
      console.log("Error. Couldn't fetch data. ", e.message);
    }
  };

  useEffect(() => {
    fetchFilteredData();
  }, [movieFiltered]);

  // useEffect(() => {
  //   fetchTopMovies();
  // }, []);

  console.log("movieCardsToSee");
  console.log(movieCardsToSee);

  useEffect(() => {
    fetchTopMovies();
  }, [currentPage]);

  return (
    <main className="Main">
      <section id="sectionMoviesFiltered">
        {/* Si tenemos algo en la busqueda de peliculas */}
        {moviesFiltered?.total_results !== 0 && (
          <RenderMovies
            data={moviesFiltered}
            render={movieCardsToSee}
            setPage={setCurrentPage}
            page={currentPage}
            handleSetCurrentPage={handleSetCurrentPage}
          />
        )}

        {/* Si no tenemos nada en la busqueda, queremos mostrar el top de peliculas */}
        {
          <RenderMovies
            data={topMovies}
            render={movieCardsToSee}
            setPage={setCurrentPage}
            page={currentPage}
            handleSetCurrentPage={handleSetCurrentPage}
          />
        }
      </section>

      {/* <PaginationComponent
        data={moviesFiltered}
        currentPage={moviesFiltered.page}
        totalPages={moviesFiltered.total_pages}
      /> */}
    </main>
  );
}

export default MainComponent;
