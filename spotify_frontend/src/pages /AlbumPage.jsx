import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../api/api";
import "../styles/AlbumPage.css";

const AlbumPage = () => {
  const { albumId } = useParams();
  const [album, setAlbum] = useState([]);

  const fetchAlbum = async () => {
    try {
      const response = await api.get(`albums/${albumId}`);

      if (!response.data) {
        return;
      }

      const { name, cover, release_date, artist } = response.data[0];
      const tracks = response.data.map((item) => (
        {
          name: item.track,
          duration: item.duration
        }
      ));
      setAlbum({ name, cover, release_date, artist, tracks });
    } catch (error) {
      console.error("Error fetching album:", error);
    }
  };

  useEffect(() => {
    fetchAlbum();
  }, []);

  const formatDuration = (duration) => {
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="album-page">
      <div className="album-header">
        <img src={album.cover} alt={album.name} />
        <div className="album-info">
          <h1>{album.name}</h1>
          <p>{album.artist}</p>
          <p>
            Release Date:{" "}
            {new Date(album.release_date * 1000).toLocaleDateString()}
          </p>
        </div>
      </div>
      <div className="tracks">
        <h2>Tracks</h2>
        <ul className="track-list">
          {album.tracks && album.tracks.length > 0 ? (
            album.tracks.map((track, index) => (
              <li key={index}>
                <div className="track-title">
                  <span className="track-number">{index + 1}</span>
                  {track.name}
                </div>
                <div className="track-duration">{formatDuration(track.duration)}</div>
              </li>
            ))
          ) : (
            <p>No tracks available.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default AlbumPage;
