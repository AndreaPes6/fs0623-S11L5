import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { Row, Col } from "react-bootstrap";

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = async (value) => {
    setSearchQuery(value);
    setIsLoading(true);

    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${value}&limit=10`);

      if (response.ok) {
        const data = await response.json();
        setSearchResults(data.data);
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const getRandomElements = (array, maxElements) => {
    const shuffledArray = array.sort(() => 0.5 - Math.random());
    return shuffledArray.slice(0, maxElements);
  };

  return (
    <Container>
      <SearchBar initialValue={searchQuery} onSearch={handleSearch} small={true} />
      {isLoading && <div>Loading...</div>}
      {searchResults.length > 0 && (
        <Row>
          {searchResults.map((result) => (
            <Col key={result.id} xs={12} md={3} className="mb-3">
              <div>
                <Link to={`/album/${result.album.id}`}>
                  <img className="img-fluid" src={result.album.cover_medium} alt={result.album.title} id="ImgSearchPage"/>
                </Link>
                <p className="LinkSearchPage m-0">
                  <Link to={`/album/${result.album.id}`}>{result.album.title}</Link>
                </p>
                <p className="LinkSearchPage">
                  <Link to={`/artist/${result.artist.id}`}>{result.artist.name}</Link>
                </p>
              </div>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default SearchPage;
