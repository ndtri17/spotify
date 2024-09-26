const express = require('express');
const router = express.Router();
const database = require('../config/db');


router.get('/popular_artists', (req, res) => {

    const query = 'SELECT * FROM artists ORDER BY RAND() LIMIT 8';
    
    database.query(query, (error, results) => {
        if (error) {
            console.error('Error retrieving popular artists:', error);   
            res.status(500).send('Error retrieving popular artists');
        } else {
            res.status(200).json(results); 
        }
    });
});

module.exports = router