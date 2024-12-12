// Import required modules
const express = require('express');
const userController = require('../Controller/userController');
const userInfo = require('../Controller/user/userInfo');

// Create a new router instance
const router = express.Router();

// Define routes
router.post("/login", userController.validateUser);
router.post("/register", userController.registerUser);
router.get('/getuserbyid/:id', userInfo.getUserById);

// Export the router
module.exports = router;