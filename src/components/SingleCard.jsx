import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const SingleCard = ({ element }) => {
  const [singleSong, setSingleSong] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${element}`);
        if (response.ok) {
          const data = await response.json();
          setSingleSong(data.data[0]);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [element]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favoriteSongs");
    if (storedFavorites) {
      const favoriteSongs = JSON.parse(storedFavorites);
      const isSongFavorite = favoriteSongs.some((favSong) => favSong.id === singleSong?.id);
      setIsFavorite(isSongFavorite);
    }
  }, [singleSong]);

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favoriteSongs");
    const favoriteSongs = storedFavorites ? JSON.parse(storedFavorites) : [];

    if (isFavorite) {
      localStorage.setItem("favoriteSongs", JSON.stringify([...favoriteSongs, singleSong]));
    } else {
      const updatedFavorites = favoriteSongs.filter((favSong) => favSong.id !== singleSong?.id);
      localStorage.setItem("favoriteSongs", JSON.stringify(updatedFavorites));
    }
  }, [isFavorite, singleSong]);

  return (
    <>
      {singleSong && (
        <div className="col text-center" key={singleSong.id}>
          <Link to={`/album/${singleSong.album.id}`}>
            <img className="img-fluid img-SingleCard" src={singleSong.album?.cover_medium} alt="1" />
          </Link>
          <p>
            <Link to={`/album/${singleSong.album.id}`}>
              Album: {singleSong.album?.title?.slice(0, 16) + (singleSong.album?.title?.length > 16 ? "..." : "")}
            </Link>
            <br />
            <Link to={`/artist/${singleSong.artist.name}`}>Artist: {singleSong.artist?.name}</Link>
            <button
              onClick={handleToggleFavorite}
              className="favorite-button"
              style={{ background: "transparent", border: "none" }}
            >
              {isFavorite ? <FaHeart color="green" /> : <FaRegHeart color="gray" />}
            </button>
          </p>
        </div>
      )}
    </>
  );
};

export default SingleCard;
