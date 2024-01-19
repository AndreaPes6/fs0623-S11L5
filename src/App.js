import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import LeftBar from "./components/LeftBar";
import Player from "./components/Player";
import HomePage from "./components/HomePage";
import AlbumPage from "./components/AlbumPage";
import RightBar from "./components/RightBar";
import SearchPage from "./components/SearchPage";
import LikedAlbum from "./components/LikedAlbum";
import React, { useState } from "react";

const App = () => {
  const [currentSong, setCurrentSong] = useState(null);

  return (
    <>
      <LeftBar />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<HomePage setCurrentSong={setCurrentSong} />}
            />
            <Route
              path="/album/:id"
              element={<AlbumPage setCurrentSong={setCurrentSong} />}
            />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/MyAlbum" element={<LikedAlbum />} />
          </Routes>
          <RightBar />
          <Player
            cover={currentSong?.album?.cover || ""}
            title={currentSong?.title || "No Song Selected"}
            artist={currentSong?.artist?.name || "No Artist"}
          />
        </BrowserRouter>
      </Container>
    </>
  );
};

export default App;
