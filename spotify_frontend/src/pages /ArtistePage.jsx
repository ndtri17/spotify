import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../api/api";
import "../styles/ArtistePage.css";

const ArtistePage = () => {
  const { artistId } = useParams();
  const [artist, setArtist] = useState([]);

  const fetchArtist = async () => {
    try {
      const response = await api.get(`artistes/${artistId}`);
      if (response.data) {
        setArtist(response.data[0]);
      }
    } catch (error) {
      console.error("Error fetching artist:", error);
    }
  };

  useEffect(() => {
    fetchArtist();
  }, []);



  return (
    <div>
        <h1>{artist.artist}</h1>
        
    </div>
  );
};

export default ArtistePage;
