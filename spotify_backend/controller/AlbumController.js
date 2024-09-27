const express = require('express');
const router = express.Router();
const database = require('../config/db');


router.get('/popular_albums', (req, res) => {

    const query = 'SELECT * FROM albums ORDER BY POPULARITY DESC LIMIT 8';
    
    database.query(query, (error, results) => {
        if (error) {
            console.error('Error retrieving popular albums:', error);   
            res.status(500).send('Error retrieving popular albums');
        } else {
            res.status(200).json(results); 
        }
    });
});

router.get('/albums/:albumId', (req, res) => {

    const query = 'SELECT albums.name, albums.cover, albums.release_date, artists.name AS artist, tracks.name AS track, tracks.duration as duration FROM albums JOIN tracks ON albums.id = tracks.album_id JOIN artists ON albums.artist_id = artists.id WHERE albums.id = ?';
    
    database.query(query, [req.params.albumId], (error, results) => {
        if (error) {
            console.error('Error retrieving albums:', error);   
            res.status(500).send('Error retrieving albums');
        } else {
            res.status(200).json(results); 
        }
    });
});

module.exports = router