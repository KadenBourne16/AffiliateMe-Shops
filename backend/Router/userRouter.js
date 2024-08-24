// Import required modules
const express = require('express');
const userController = require('../Controller/userController');

// Create a new router instance
const router = express.Router();

// Define routes
router.post('/registerUser', userController.registerUser);
router.post('/loginUser', userController.loginUser);

// Export the router
module.exports = router;