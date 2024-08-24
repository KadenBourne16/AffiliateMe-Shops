const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const port = 3500;
const db = require('./DBConnection/dbconnection');
const userRouter = require('./Router/userRouter');

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // add this line to parse URL-encoded bodies

// Routes
app.use('', userRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Internal Server Error');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});