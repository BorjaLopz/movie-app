import LoadMoreElementsComponent from "../LoadMoreElementsComponent/LoadMoreElementsComponent";
import MovieCardsComponents from "../MovieCardsComponent/MovieCardsComponent";

function RenderMovies({ data, render, setPage, page, handleSetCurrentPage }) {
  return (
    <>
      {render.map((m) => {
        return <MovieCardsComponents movie={m} />;
      })}

      {data?.page !== data?.total_pages && (
        <LoadMoreElementsComponent
          data={data}
          setPage={setPage}
          page={page}
          handleSetCurrentPage={handleSetCurrentPage}
        />
      )}
    </>
  );
}

export default RenderMovies;
