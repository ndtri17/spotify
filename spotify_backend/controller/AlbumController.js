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

module.exports = router