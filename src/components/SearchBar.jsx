import { useState } from "react";

function SearchBar({ initialValue, onSearch }) {
  const [searchValue, setSearchValue] = useState(initialValue);

  const handleInputChange = (event) => setSearchValue(event.target.value);

  const handleSearch = () => onSearch(searchValue);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="input-group mb-4">
      <input
        type="text"
        className="form-control"
        id="searchField"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="basic-addon2"
        value={searchValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
      />
      <div className="input-group-append">
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-SearchBar"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
