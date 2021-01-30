const http = require('http');
const express = require('express');

const app = express();

app.use('/users', (req, res) => {
    console.log("users");
    res.send("Users");
})

app.use('/', (req, res, next) => {
    console.log("home")
    res.send("Home")
})

app.use((req, res, next) => {
    console.log("m1");
    next();
})

app.use((req, res, next) => {
    console.log("m2");
    res.send("No endpoint")
})

app.listen(3001);