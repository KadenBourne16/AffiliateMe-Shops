const db = require('../DBConnection/dbconnection')
const body = require('body-parser');
const axios = require('axios');
const CryptoJS = require('crypto-js');

exports.validateUser  = async (req, res) => {
    const loginData = {
        email: "",
        password: ""
    };

    try {
        const receivedData = req.body;
        loginData.email = receivedData.email;
        loginData.password = receivedData.password;

        // Check if email and password are provided
        if (!loginData.email || !loginData.password) {
            return res.status(400).json({ message: "Email and password are required." });
        }

        // Query the database to find the user by email
        const query = 'SELECT * FROM user WHERE email = ?';
        db.query(query, [loginData.email], (err, results) => {
            if (err) {
                return res.status(500).json({ message: "Database error: " + err });
            }

            // Check if user exists
            if (results.length === 0) {
                return res.status(401).json({ message: "Invalid email or password." });
            }

            const user = results[0];

            // Encrypt the provided password using the same secret key
            const secretKey = 'your-secret-key'; // Use the same secret key used for encryption
            const encryptedInputPassword = CryptoJS.AES.encrypt(loginData.password, secretKey).toString();

            // Compare the encrypted input password with the stored password
            if (encryptedInputPassword !== user.password) {
                return res.status(401).json({ message: "Invalid email or password." });
            }

            // If the email and password are valid, respond with success
            res.json({ message: "Login successful", userId: user.idUser  });
        });
    } catch (err) {
        res.status(500).json({ message: "Error processing request: " + err.message });
    }

    console.log("The login data is: ", loginData);
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

    // Check for existing email or phone number
    const checkQuery = 'SELECT * FROM user WHERE email = ? OR phone_number = ?';
    const checkValues = [receivedRegister.email, receivedRegister.phone_number];

    db.query(checkQuery, checkValues, (err, results) => {
        if (err) {
            return res.status(500).json({ message: "Database error: " + err });
        }
        if (results.length > 0) {
            return res.status(400).json({ message: "Email or phone number already exists." });
        }

        // Encrypt the password before storing it
        const secretKey = 'your-secret-key'; // Use a strong secret key
        const encryptedPassword = CryptoJS.AES.encrypt(receivedRegister.password, secretKey).toString();

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

        db.query(insertQuery, insertValues, (err, result) => {
            if (err) {
                return res.status(500).json({ message: "Error inserting user: " + err });
            }
            res.status(201).json({ message: "Success", userId: result.insertId });
        });
    });
};