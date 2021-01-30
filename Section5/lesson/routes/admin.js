const path = require('path')
const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const products = [];

router.get('/add-product', (req, res, next) => {
    // res.send('<form action="/admin/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></input></form>')
    // res.sendFile(path.join(rootDir,'views', 'add-product.html'))
    res.render('add-product', {pageTitle: 'Add Product', path: '/admin/add-product'})
})

router.post('/add-product', (req, res, next) => {
    products.push({title: req.body.title})
    res.redirect('/')
})

module.exports.routes = router;
module.exports.products = products;