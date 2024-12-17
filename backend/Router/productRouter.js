const express = require('express');
const multer = require('multer');
const upload = multer({ dest: '../uploads/' });
const productrouter = express.Router();

const productController = require('../Controller/product/productController');

productrouter.post('/products', upload.array('images'), productController.postNewProduct);

module.exports = productrouter;