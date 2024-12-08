// Import required modules
const express = require('express');
const userController = require('../Controller/userController');

// Create a new router instance
const router = express.Router();

// Define routes
router.post("/login", userController.validateUser);
router.post("/register", userController.registerUser);

// Export the router
module.exports = router;