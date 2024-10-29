const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Set up MySQL connection
const db = mysql.createConnection({
    host: 'localhost',  // Your MySQL host
    user: 'root',       // Your MySQL user
    password: 'root',       // Your MySQL password
    database: 'mydb'    // Your MySQL database name
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL: ', err);
    } else {
        console.log('Connected to MySQL');
    }
});

// API endpoint to get data
app.get('/api/data', (req, res) => {
    const query = 'SELECT * FROM getTouch';  // Example table
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results);
    });
});

// POST route to handle form submissions
app.post('/api/submit', (req, res) => {
    const { name, email, phone, message } = req.body;

    // SQL query to insert data into the table
    const query = 'INSERT INTO getTouch (Name, Email, Phone, Message) VALUES (?, ?, ?, ?)';

    db.query(query, [name, email, phone, message], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ success: true, message: 'Form submitted successfully' });
    });
});

// API to delete a record by ID
app.delete('/api/records/:Name', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM getTouch WHERE Name = ?';
  
    db.query(sql, [Name], (err, result) => {
      if (err) throw err;
  
      if (result.affectedRows === 0) {
        return res.status(404).send({ message: 'Record not found' });
      }
  
      res.send({ message: 'Record deleted successfully', id });
    });
  });

// Start the server
app.listen(5000, () => {
    console.log('Server running on port 5000');
});
