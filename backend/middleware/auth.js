// middleware/auth.js
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key'; // Use the same secret key

const authenticateJWT = (req, res, next) => {
    const token = req.headers['authorization'] && req.headers['authorization'].split(' ')[1];

    if (token) {
        jwt.verify(token, JWT_SECRET, (err, user) => {
            if (err ) {
                return res.sendStatus(403); // Forbidden
            }
            req.user = user; // Save user info to request object
            next();
        });
    } else {
        res.sendStatus(401); // Unauthorized
    }
};

module.exports = authenticateJWT;