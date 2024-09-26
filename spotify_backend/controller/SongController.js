const express = require('express');
const router = express.Router();
const database = require('../config/db');


router.get('/popular_songs', (req, res) => {

    const query = 'SELECT * FROM tracks ORDER BY RAND() LIMIT 8';
    
    database.query(query, (error, results) => {
        if (error) {
            console.error('Error retrieving popular songs:', error);   
            res.status(500).send('Error retrieving popular songs');
        } else {
            res.status(200).json(results); 
        }
    });
});

module.exports = router