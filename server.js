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

//GET Route -notes.html
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notes.html'));
});

app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'db/db.json'));
});

//GET route - index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

//POST route - APIs
app.post('/api/notes', (req, res) => {
    let newNote = req.body;
    let savedNotes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    let noteLength = (savedNotes.length).toString();
    newNote.id = noteLength;
    savedNotes.push(newNote);

    fs.writeFileSync('./db/db.json', JSON.stringify(savedNotes));
    res.json(savedNotes);
});

//Delete note
app.delete('./api/notes/:id', (req, res) => {
    let savedNotes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    let noteId = (req.params.id).toString();

    savedNotes = savedNotes.filter(selected => {
        return selected.id !=noteId;
    });

    fs.writeFileSync('./db/db.json', JSON.stringify(savedNotes));
    res.json(savedNotes);
});

//Listen
app.listen(PORT, () => {
    console.log(`API server is ready on port ${PORT}!`);
});