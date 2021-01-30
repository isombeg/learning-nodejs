const path = require('path')
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Templating configuration
app.set('view engine', 'pug');
app.set('views', 'views')

// Routers
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
// Controller
const errors = require('./controllers/errors');

// Applying middleware
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRoutes);
app.use(shopRoutes);

// Adding 404 page
app.use(errors.get404)

app.listen(3001);