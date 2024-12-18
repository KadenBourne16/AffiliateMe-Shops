const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const jwt = require('jsonwebtoken'); // Import jsonwebtoken
const port = 3000;
const userRouter = require('./Router/userRouter');
const productRouter = require('./Router/productRouter');
const bodyParser = require('body-parser');

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Apply the JWT middleware to specific routes
app.use('/affluencelink', userRouter); // No need to apply authenticateJWT here
app.use('/affluencelink', productRouter); // No need to apply authenticateJWT here

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Internal Server Error');
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});