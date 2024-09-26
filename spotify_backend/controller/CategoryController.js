const express = require("express");
const router = express.Router();
const database = require("../config/db");

router.get("/categories", (req, res) => {
  const query = "SELECT * FROM genres";

  database.query(query, (error, results) => {
    if (error) {
      console.error("Error retrieving categories:", error);
      res.status(500).send("Error retrieving categories");
    } else {
      res.status(200).json(results);
    }
  });
});

router.get("/categories/:categoryName", (req, res) => {
  const query = `
        SELECT albums.id, albums.name, albums.cover
        FROM albums
        JOIN genres_albums ON albums.id = genres_albums.album_id
        JOIN genres ON genres.id = genres_albums.genre_id
        WHERE LOWER(genres.name) = LOWER(?)
    `;

  database.query(query, [req.params.categoryName], (error, results) => {
    if (error) {
      console.error("Error retrieving categories:", error);
      res.status(500).send("Error retrieving categories");
    } else {
      res.status(200).json(results);
    }
  });
});

module.exports = router;
