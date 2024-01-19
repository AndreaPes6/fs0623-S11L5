import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SingleCard from "./SingleCard";

const LikedAlbum = () => {
  const [favoriteSongs, setFavoriteSongs] = useState([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favoriteSongs");
    if (storedFavorites) {
      const favoriteSongsData = JSON.parse(storedFavorites);
      setFavoriteSongs(favoriteSongsData);
    }
  }, []);

  return (
    <Container>
      <h2 className="my-4">My Album</h2>
      {favoriteSongs.length > 0 ? (
        <Row xs={1} md={3} className="g-4" id="links-MyAlbum">
          {favoriteSongs.map((favSong) => (
            <Col key={favSong.id}>
              <SingleCard element={favSong.title} isFavorite={true} />
            </Col>
          ))}
        </Row>
      ) : (
        <div className="text-center">
          <p className="mt-3">no album added</p>
        </div>
      )}
    </Container>
  );
};

export default LikedAlbum;
