const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'r00tpassword',
        database: 'nodemysql'
    }
);

// connect to mysql
db.connect(err => {
    if (err) {
        throw err
    }
    console.log('MySQL Connected!')
});

//create database
app.get('/createdb', (req, res) => {
    const sql = 'CREATE DATABASE nodemysql';
    db.query(sql, err => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: 'Success, database created!',
        });
    });
});

//Create Table
app.get('/createdemployee', (req, res) => {
    let sql = 'CREATE TABLE employee(id int AUTO_INCREMENT, first_name VARCHAR(30),last_name VARCHAR(30), role_id INT, manager_id INT)';
    db.query(sql, err => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: 'Success, employee table created!',
        });
    });
});

//Insert employee
app.get('/employee1', (req, res) => {
    let post = { first_name: 'Alexis', last_name: 'Mastro', role_id: 'Web Developer', manager_id: '1' };
    let sql = 'INSERT INTO employee SET'
    db.query(sql, post, err => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: 'Success, employee added!',
        });
    });
});

//Select employee
app.get('/selectemployee', (req, res) => {
    let sql = 'SELECT * FROM employee'
    let query = db.query(sql, post, err => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: 'Success, employee added!',
        });
    });
});

// Insert 

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
