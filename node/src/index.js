const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

const connection = mysql.createConnection({
    host: 'db', 
    port: 3306,       
    user: 'root',    
    password: 'root', 
    database: 'desafio_docker_db', 
});

connection.connect((err) => {
    const insertQuery = `INSERT INTO people (name) VALUES ('Antonio')`;
    connection.query(insertQuery, (err, results) => {});
});

app.get('/', (req, res) => {
    const selectQuery = 'SELECT name FROM people';
    connection.query(selectQuery, (err, results) => {

        let names = '';
        results.forEach(row => {
            names += `<p>${row.name}</p>`;
        });

        res.send(`<h1>Full Cycle Rocks!!</h1>${names}`);
    });
});

app.listen(port, () => {
    console.log('Projeto rodando na porta' + port);
})