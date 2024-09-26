// src/Categorypage.js

import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";
import "../styles/SearchPage.css";

const CategoryPage = () => {
  const [category, setCategory] = useState([]);
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

  return (
    <div className="categoryPage">
      <div className="categoryPage__content">
        <h1>Category</h1>
        <ul>
          {category.map((cat) => (
            <li key={cat.id} onClick={() => navigate(`/category/${cat.name}`)}>{cat.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoryPage;
