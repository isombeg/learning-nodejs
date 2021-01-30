const path = require('path')
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, 'public')))

app.get('/users', (req, res) => {
    res.sendFile(path.join(__dirname, 'users.html'));
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'));
})

app.listen(3001);