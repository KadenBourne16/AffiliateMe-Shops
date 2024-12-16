const axios = require('axios');
const body = require('body-parser')
exports.postNewProduct = async(req, res) => {
    const newProduct = req.body;
    console.log(newProduct);
}

