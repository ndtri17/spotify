const express = require('express');
const cors = require('cors'); // Import the CORS middleware

const app = express();
const port = 8000;

app.use(cors({
    origin: 'http://localhost:5173',  
    methods: ['GET', 'POST'],         
    allowedHeaders: ['Content-Type']  
}));

app.use(express.json());

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
