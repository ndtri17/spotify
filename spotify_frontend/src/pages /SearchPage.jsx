// src/Categorypage.js

import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";
import "../styles/SearchPage.css";

const CategoryPage = () => {
  const [category, setCategory] = useState([]);
  const [artistes, setArtistes] = useState([]);
  const [visibleArtistes, setVisibleArtistes] = useState(10);
  const navigate = useNavigate();

  const fetchCategory = async () => {
    try {
      const response = await api.get("categories");
      setCategory(response.data);
    } catch (error) {
      console.error("Error fetching category:", error);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  const handleShowMore = () => {
    setVisibleArtistes((prev) => prev + 10);
  };

  const fetchArtistes = async () => {
    try {
      const response = await api.get("artistes");
      setArtistes(response.data);
    } catch (error) {
      console.error("Error fetching artistes:", error);
    }
  };

  useEffect(() => {
    fetchArtistes();
  }, []);

  return (
    <div className="categoryPage">
      <div className="categoryPage__content">
        <h1>Category</h1>
        <ul>
          {category.map((cat) => (
            <li key={cat.id} onClick={() => navigate(`/category/${cat.name}`)}>
              {cat.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="categoryPage__content">
        <h1>Artiste</h1>
        <ul>
          {artistes.slice(0, visibleArtistes).map((artiste) => (
            <li
              key={artiste.id}
              onClick={() => navigate(`/artiste/${artiste.id}`)}
            >
              {artiste.name}
            </li>
          ))}
        </ul>
      </div>

      {visibleArtistes < artistes.length && (
        <div className="button-container">
          <button className="voir-plus-button" onClick={handleShowMore}>
            Voir Plus
          </button>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
