const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../DBConnection/dbconnection')

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send({ message: "Email and password are required" });
    }

    const query = "SELECT * FROM users WHERE email = ?";
    const [results] = await db.query(query, [email]);

    if (results.length === 0) {
      return res.status(401).send({ message: "Invalid email or password" });
    }

    const user = results[0];
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).send({ message: "Invalid email or password" });
    }

    const token = jwt.sign({ userId: user.id }, process.env.SECRET_KEY, { expiresIn: '1h' });
    res.send({ message: "Login successful", token });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Error logging in user" });
  }
};

exports.registerUser = async (req, res) => {
    const { username, email, password } = req.body;
  
    try {
      const query = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
      await db.query(query, [username, email, password]);
      res.status(201).send({ message: 'User registered successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: 'Error registering user' });
    }
  };