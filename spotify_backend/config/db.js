const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Trihihihi123',
    database: 'spotify'
})

connection.connect()

module.exports = connection