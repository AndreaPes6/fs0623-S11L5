import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";

const AlbumPage = ({ setCurrentSong }) => {
  const { id } = useParams();
  const [album, setAlbum] = useState(null);
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSongState] = useState(null);

  const fetchAlbum = async () => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/${id}`);
      if (response.ok) {
        const data = await response.json();
        console.log("Album data:", data);
        setAlbum(data);
        setSongs(data.tracks.data);
      } else {
        console.log("Error getting album");
      }
    } catch (error) {
      console.log("Error catching album:", error);
    }
  };

  const handleSongClick = (selectedSong) => {
    setCurrentSong(selectedSong);
    setCurrentSongState(selectedSong);
  };

  useEffect(() => {
    fetchAlbum();
  }, [id]);

  return (
    <Col className="col-12 col-md-9 offset-md-2">
      <Row>
        <Col className="col-md-4 pt-5" id="img-container">
          {album && (
            <>
              <img src={album.cover} className="card-img img-fluid" alt="Album Cover" />
              <div className="mt-2 text-center">
                <p className="album-title">{album.title}</p>
              </div>
              <div className="text-center">
                <p className="artist-name">{album.artist.name}</p>
              </div>
              <div className="text-center">
                <button id="btnPlay" className="btn btn-success" type="button">
                  Play
                </button>
              </div>
            </>
          )}
        </Col>
        <Col className="col-md-8 py-5 px-4">
          <Row>
            <Row className="col-md-10 mb-5" id="trackList">
              {songs.map((song) => (
                <div
                  className={`py-3 ${currentSong && currentSong.id === song.id ? "active" : ""}`}
                  id="albumPage-TracksMin"
                  key={song.id}
                  onClick={() => handleSongClick(song)}
                >
                  <Link to="#" className="card-title" id="albumPage-Tracks">
                    {song.title}
                  </Link>
                  <small id="albumPage-Min">
                    {Math.floor(parseInt(song.duration) / 60)}:
                    {parseInt(song.duration) % 60 < 10
                      ? "0" + (parseInt(song.duration) % 60)
                      : parseInt(song.duration) % 60}
                  </small>
                </div>
              ))}
            </Row>
          </Row>
        </Col>
      </Row>
    </Col>
  );
};

export default AlbumPage;
