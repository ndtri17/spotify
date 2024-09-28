const express = require("express");
const router = express.Router();
const database = require("../config/db");

router.get("/popular_artists", (req, res) => {
  const query = "SELECT * FROM artists ORDER BY RAND() LIMIT 8";

  database.query(query, (error, results) => {
    if (error) {
      console.error("Error retrieving popular artists:", error);
      res.status(500).send("Error retrieving popular artists");
    } else {
      res.status(200).json(results);
    }
  });
});

router.get("/artistes", (req, res) => {
  const query = "SELECT * FROM artists";

  database.query(query, (error, results) => {
    if (error) {
      console.error("Error retrieving artistes:", error);
      res.status(500).send("Error retrieving artistes");
    } else {
      res.status(200).json(results);
    }
  });
});

router.get("/artistes/:artisteId", (req, res) => {
  const query = `
    SELECT artists.*, albums.id AS album_id, albums.name AS album_name, albums.cover AS album_cover
    FROM artists 
    LEFT JOIN albums ON artists.id = albums.artist_id 
    WHERE artists.id = ?
`;
  database.query(query, [req.params.artisteId], (error, results) => {
    if (error) {
      console.error("Error retrieving artist:", error);
      res.status(500).send("Error retrieving artist");
    } else {
      res.status(200).json(results);
    }
  });
});

module.exports = router;
