exports.postNewProduct = async (req, res) => {
    console.log(req.body); // This will contain the other form fields
    console.log(req.files); // This will contain the uploaded files
    res.send('Product added successfully'); // Send a response back
};