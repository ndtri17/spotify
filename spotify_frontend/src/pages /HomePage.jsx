// src/Homepage.js
import React from "react";
import { useEffect } from "react";
import "../styles/HomePage.css";
import api from "../api/api";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const [popularArtists, setPopularArtists] = React.useState([]);

  const [popularAlbums, setPopularAlbums] = React.useState([]);

  const [popularSongs, setPopularSongs] = React.useState([]);

  const navigate = useNavigate();

  const fetchArtists = async () => {
    try {
      const response = await api.get("popular_artists");
      setPopularArtists(response.data);
    } catch (error) {
      console.error("Error fetching popular artists:", error);
    }
  };

  useEffect(() => {
    fetchArtists();
  }, []);

  const fetchPopularAlbums = async () => {
    try { 
      const response = await api.get("popular_albums");
      setPopularAlbums(response.data);
    } catch (error) {
      console.error("Error fetching popular albums:", error);
    }
  };

  useEffect(() => {
    fetchPopularAlbums();
  }, []);

  const fetchPopularSongs = async () => {
    try {
      const response = await api.get("popular_songs");
      setPopularSongs(response.data);
    } catch (error) {
      console.error("Error fetching popular songs:", error);
    }
  };

  useEffect(() => {
    fetchPopularSongs();
  }, []);

  return (
    <div className="homepage">
      <div className="homepage__content">
        <div className="homepage__popular_artists">
          <h1>Popular Artists</h1>
          <div className="homepage__popular_artists-grid">
            {popularArtists.map((artist) => (
              <div
                key={artist.id}
                className="homepage__popular_artists-grid-item"
                onClick={() => navigate(`/artiste/${artist.id}`)}
              >
                <img
                  src={artist.photo}
                  alt={artist.name}
                  className="homepage__popular_artists-grid-item-image"
                />
                <p className="homepage__popular_artists-grid-item-name">
                  {artist.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="homepage__popular_albums">
          <h1>Popular Albums</h1>
          <div className="homepage__popular_albums-grid">
            {popularAlbums.map((album) => (
              <div
                key={album.id}
                className="homepage__popular_albums-grid-item"
                onClick={() => navigate(`/album/${album.id}`)}
              >
                <img
                  src={album.cover}
                  alt={album.name}
                  className="homepage__popular_albums-grid-item-image"
                />
                <p className="homepage__popular_albums-grid-item-name">
                  {album.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="homepage__popular_songs">
            <h1>Popular Songs</h1>
            <div className="homepage__popular_songs-grid">
                {popularSongs.map((song) => (
                    <div
                        key={song.id}
                        className="homepage__popular_songs-grid-item"
                    >
                        <div className="homepage__popular_songs-grid-item-circle">
                            <div className="homepage__popular_songs-grid-item-play-button">
                                <span>&#9654;</span> 
                            </div>
                        </div>
                        <p className="homepage__popular_songs-grid-item-name">
                            {song.name}
                        </p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
