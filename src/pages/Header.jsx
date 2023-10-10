import HeaderComponent from "../components/HeaderComponent/HeaderComponent";

function Header({ handleInputChange }) {
  const handleFilter = (_filter) => {
    handleInputChange(_filter);
  };

  return <HeaderComponent handleMovieFilter={handleFilter} />;
}

export default Header;
