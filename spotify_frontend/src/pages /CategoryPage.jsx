import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api/api";
import "../styles/CategoryPage.css";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [albums, setAlbums] = useState([]);
  const [visibleAlbums, setVisibleAlbums] = useState(24);
  const navigate = useNavigate();

  const fetchAlbumsInCategory = async () => {
    try {
      const response = await api.get(`categories/${categoryName}`);
      if (response.data) {
        setAlbums(response.data);
      }
    } catch (error) {
      console.error("Error fetching category:", error);
    }
  };

  useEffect(() => {
    fetchAlbumsInCategory();
  }, []);

  const handleShowMore = () => {
    setVisibleAlbums((prev) => prev + 24);
  };

  return (
    <div className="categoryPage">
      <div className="categoryPage__content">
        <h1>{categoryName}</h1>
        <div className="categoryPage__albums-grid">
          {albums.slice(0, visibleAlbums).map((album) => (
            <div key={album.id} className="categoryPage__albums-grid-item" onClick={() => navigate(`/album/${album.id}`)}>
              <img
                src={album.cover}
                alt={album.name}
                className="categoryPage__albums-grid-item-image"
              />
              <p className="categoryPage__albums-grid-item-name">
                {album.name}
              </p>
            </div>
          ))}
        </div>

        {visibleAlbums < albums.length && (
          <div className="button-container">
            <button className="voir-plus-button" onClick={handleShowMore}>
              Voir Plus
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
