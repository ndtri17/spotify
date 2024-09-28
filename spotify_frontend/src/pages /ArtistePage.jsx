import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api/api";
import "../styles/ArtistePage.css";

const ArtistePage = () => {
  const { artistId } = useParams();
  const [artist, setArtist] = useState(null);
  const [albums, setAlbums] = useState([]);

  const navigate = useNavigate();

  const fetchArtist = async () => {
    try {
      const response = await api.get(`artistes/${artistId}`);
      if (response.data.length > 0) {
        const artistData = {
          id: response.data[0].id,
          name: response.data[0].name,
          description: response.data[0].description,
          bio: response.data[0].bio,
          photo: response.data[0].photo,
        };
        setArtist(artistData);

        const albumsData = response.data.map(album => ({
          id: album.album_id,
          name: album.album_name,
          cover: album.album_cover,
          releaseDate: album.release_date,
        })).filter(album => album.id); 

        setAlbums(albumsData);
      }
    } catch (error) {
      console.error("Error fetching artist:", error);
    }
  };

  useEffect(() => {
    fetchArtist();
  }, []);

  return (
    <div className="artistePage">
      {artist && (
        <div className="artistePage__header">
          <img
            className="artistePage__headerImage"
            src={artist.photo}
            alt={artist.name}
          />
          <div className="artistePage__info">
            <h1 className="artistePage__name">{artist.name}</h1>
            <p className="artistePage__bio">{artist.bio}</p>
          </div>
        </div>
      )}

      <div className="artistePage__content">
        <h2>Albums</h2>
        <div className="artistePage__albums">
          {albums.length > 0 ? (
            albums.map((album) => (
              <div key={album.id} className="artistePage__albumCard" onClick={() => navigate(`/album/${album.id}`)}>
                <img
                  className="artistePage__albumImage"
                  src={album.cover}
                  alt={album.name}
                />
              </div>
            ))
          ) : (
            <p>No albums available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArtistePage;
