const express = require('express');
const productrouter = express.Router();

const productController = require('../Controller/product/productController')


productrouter.post('/products', productController.postNewProduct);

module.exports = productrouter;