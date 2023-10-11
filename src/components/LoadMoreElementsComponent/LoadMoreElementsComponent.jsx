import "./style.css";

function LoadMoreElementsComponent({
  data,
  setPage,
  page,
  handleSetCurrentPage,
}) {
  const handleClick = () => {
    console.log("data.total_pages");
    console.log(data.total_pages);
    console.log("page");
    console.log(page);
    if (page !== data.total_pages) {
      setPage(page++);
      console.log("HOLA");
    }
  };
  return (
    <section>
      <button className="loadMoreBtn" onClick={handleSetCurrentPage}>
        Load More
      </button>
    </section>
  );
}

export default LoadMoreElementsComponent;
