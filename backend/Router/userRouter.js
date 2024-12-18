// Router/userRouter.js
const express = require('express');
const userController = require('../Controller/userController');
const userInfo = require('../Controller/user/userInfo');
const authenticateJWT = require('../middleware/auth'); // Import the JWT middleware

// Create a new router instance
const router = express.Router();

// Define routes
router.post("/login", userController.validateUser );
router.post("/register", userController.registerUser );
router.get('/getuserbyid/:id', authenticateJWT, userInfo.getUserById); // Protect this route

// Export the router
module.exports = router;