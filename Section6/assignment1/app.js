const express = require('express');
const bodyParser = require('body-parser');

let users = [];

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views')

app.use(bodyParser.urlencoded());

app.get('/users', (req, res) => {
    res.render('users', {users: users});
})

app.post('/users', (req, res) => {
    users.push({username: req.body.username});
    res.redirect('/');
})

app.get('/', (req, res) => {
    res.render('home');
})

app.listen(3001);