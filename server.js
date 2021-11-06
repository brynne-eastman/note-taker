//Dependencies
const express = require('express');
const path = require('path');
const fs = require ('fs');

//Setting up server
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//notes.html route
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notes.html'));
});

app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'db/db.json'));
});




























//Listen
app.listen(PORT, () => {
    console.log(`API server is ready on port ${PORT}!`);
});