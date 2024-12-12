const db = require('../DBConnection/dbconnection');
const CryptoJS = require('crypto-js');
const encryption = require('../util/encryption-decryption');

// Use a consistent secret key for encryption
// const SECRET_KEY = 'Kaden16'; // Store this securely in environment variables in production

exports.validateUser  = async (req, res) => {
    const { email, password } = req.body;

    // Check if email and password are provided
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required." });
    }

    try {
        // Query the database to find the user by email
        const query = 'SELECT * FROM user WHERE email = ?';
        const [results] = await db.query(query, [email]);

        // Check if user exists
        if (results.length === 0) {
            return res.status(401).json({ message: "Invalid email or password." });
        }

        const user = results[0];
        const encryptedInputPassword = encryption.encryption(password);

        console.log(encryptedInputPassword, user.password);
        // Compare the encrypted input password with the stored password
        if (encryptedInputPassword !== user.password) {
            return res.status(401).json({ message: "Invalid email or password." });
        }

        // If the email and password are valid, respond with success
        res.status(200).json({ message: "Login successful", userId: user.idUser  });
    } catch (err) {
        res.status(500).json({ message: "Error processing request: " + err.message });
    }
};

exports.registerUser  = async (req, res) => {
    const receivedRegister = req.body;

    // Validate required fields
    const requiredFields = ['first_name', 'last_name', 'birth_date', 'email', 'username', 'phone_number', 'password'];
    for (const field of requiredFields) {
        if (!receivedRegister[field]) {
            return res.status(400).json({ message: `${field.replace('_', ' ')} is required.` });
        }
    }

    try {
        // Check for existing email or phone number
        const checkQuery = 'SELECT * FROM user WHERE email = ? OR phone_number = ?';
        const checkValues = [receivedRegister.email, receivedRegister.phone_number];
        const [results] = await db.query(checkQuery, checkValues);

        if (results.length > 0) {
            return res.status(400).json({ message: "Email or phone number already exists." });
        }

        // Encrypt the provided password using the same secret key
        const encryptedPassword = encryption.encryption(receivedRegister.password);

        // Proceed with the insert operation
        const insertQuery = 'INSERT INTO user (first_name, last_name, birth_date, email, username, phone_number, password) VALUES (?, ?, ?, ?, ?, ?, ?)';
        const insertValues = [
            receivedRegister.first_name,
            receivedRegister.last_name,
            receivedRegister.birth_date,
            receivedRegister.email,
            receivedRegister.username,
            receivedRegister.phone_number,
            encryptedPassword
        ];

        const [insertResult] = await db.query(insertQuery, insertValues);
        res.status(201).json({ message: "Registration successful", userId: insertResult.insertId });
    } catch (err) {
        res.status(500).json({ message: "Error processing request: " + err.message });
    }
};