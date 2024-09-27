import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from "./pages /SearchPage.jsx";
import NavBar from "./components/NavBar.jsx";
import HomePage from "./pages /HomePage.jsx";
import CategoryPage from "./pages /CategoryPage.jsx";
import ArtistePage from "./pages /ArtistePage.jsx";
import AlbumPage from "./pages /AlbumPage.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <NavBar /> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/artiste/:artistId" element={<ArtistePage />} />
          <Route path="/album/:albumId" element={<AlbumPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
