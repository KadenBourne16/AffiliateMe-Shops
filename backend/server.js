const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const port = 3000;
const userRouter = require('./Router/userRouter');
const productRouter = require('./Router/productRouter')
const bodyParser = require('body-parser');

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // add this line to parse URL-encoded bodies
app.use(bodyParser.json());

// Routes
app.use('/affluencelink', userRouter);
app.use('/affluencelink', productRouter);


// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Internal Server Error');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});