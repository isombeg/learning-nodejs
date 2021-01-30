const path = require('path')
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views')

const adminData = require('./routes/admin')
const shopRoutes = require('./routes/shop')

// Applying middleware
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminData.routes);
app.use(shopRoutes);

// Adding 404 page
app.use((req, res) => {
    // res.status(404).send("Page not found");
    // res.status(404).sendFile(path.join(__dirname, 'views', 'not-found.html'))
    res.status(404).render('not-found', {pageTitle: '404 Not Found'})
})

app.listen(3001);