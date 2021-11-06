//Dependencies
const express = require('express');
const path = require('path');
const fs = require ('fs');
const util = require('util');

//Setting up server
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "./public")));

const writefileAsync = util.promisify(fs.writeFile);
const readFileAsync = util.promisify(fs.readFile);

























//Listen
app.listen(PORT, () => {
    console.log(`API server is ready on port ${PORT}!`);
});