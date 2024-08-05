const express = require('express');
const router = express.Router();
const database = require('../config/db');

router.get('/api/popular_artists', (req, res) => {

    const query = 'SELECT * FROM artists ORDER BY popularity DESC LIMIT 10';

    console.log(query);
    
    database.query(query, (error, results) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error retrieving popular artists');
        } else {
            res.send(results, 200);
        }
    });
})


module.exports = router