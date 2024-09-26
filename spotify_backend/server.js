const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;
const artistsRoutes = require('./controller/ArtistController'); 
const albumsRoutes = require('./controller/AlbumController');
const songsRoutes = require('./controller/SongController');
const categoriesRoutes = require('./controller/CategoryController');

app.use(cors({
    origin: 'http://localhost:5173',  
    methods: 'GET,POST',         
    allowedHeaders: 'Content-Type'  
}));

app.use(express.json());

app.use('/api', artistsRoutes);
app.use('/api', albumsRoutes);
app.use('/api', songsRoutes);
app.use('/api', categoriesRoutes);


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
