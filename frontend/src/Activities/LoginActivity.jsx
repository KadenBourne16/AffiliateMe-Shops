import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'; // Import axios for making HTTP requests

function Login() {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: "",
    password: "",
    errors: {},
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setLogin((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = {};
    let dataOkay = true;

    // Validate email
    if (login.email === "" || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(login.email)) {
      errors.email = "Please fill the email";
      dataOkay = false;
    }

    // Validate password
    if (login.password === "") {
      errors.password = "Please enter password";
      dataOkay = false;
    }

    // If there are validation errors, set them in state
    if (!dataOkay) {
      setLogin((prev) => ({ ...prev, errors }));
      setTimeout(() => {
        setLogin((prev) => ({ ...prev, errors: {} }));
      }, 3000);
    } else {
      await sendToBackend(); // Call the function to send data to the backend
    }
  };

  const sendToBackend = async () => {
    try {
      const response = await axios.post('http://localhost:3000/affluencelink/login', {
        email: login.email,
        password: login.password,
      });

      // Check if the response is valid
      if (!response || !response.data) {
        throw new Error("Invalid response from the server.");
      }

      // Check for success message
      if (response.data.message === "Login successful") {
        // Store the JWT token in local storage
        localStorage.setItem('token', response.data.token); // Store the token
        localStorage.setItem('userId', response.data.userId); // Store userId if needed

        navigate("/dashboard"); // Redirect to the dashboard
      } else {
        // Handle other messages (e.g., invalid credentials)
        setErrorMessage(response.data.message);
        console.error("Login failed:", response.data.message);
      }
    } catch (err) {
      // Handle errors (network issues, server errors, etc.)
      setErrorMessage("An error occurred during login. Please try again");
      console.error("An error occurred during login:", err.message || err);
    }
  };

  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('../Images/Vita.png')" }}>
      <div className="absolute inset-0 bg-black"></div>
      <div className="relative flex items-center justify-center h-full">
        <div className="bg-gradient-to-br from-gray-900 to-black bg-opacity-80 backdrop-blur-lg shadow-lg rounded-lg p-10 sm:p-12 md:p-16 lg:p-20 mx-4 w-full max-w-lg">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-l from-green-400 to-green-600 text-4xl sm:text-5xl font-bold text-center mb-8">LOGIN</h1>

          <div className="flex flex-col space-y-6">
            <input
              className="border-b-2 border-green-500 bg-transparent text-white placeholder-white focus:outline-none focus:border-green-500 py-3 text-lg"
              type="email"
              placeholder="Email"
              name="email"
              value={login.email}
              onChange={handleChange}
            />
            {login.errors.email && <div className="text-red-500">{login.errors.email}</div>}
            
            <input
              className="border-b-2 border-green-500 bg-transparent text-white placeholder-white focus:outline-none focus:border-green-500 py-3 text-lg"
              type="password"
              placeholder="Password"
              name="password"
              value={login.password}
              onChange={handleChange}
            />
            {login.errors.password && <div className="text-red-500">{login.errors.password}</div>}
          </div>

          <input
            type="button"
 value="Login"
            className="mt-8 w-full h-14 bg-green-500 rounded-lg text-white font-bold transition-all duration-500 ease-in-out hover:bg-green-600 text-lg"
            onClick={handleSubmit}
          />
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          <div className="mt-6 text-center">
            <p className="text-white text-lg">Don't have an account?</p>
            <Link to="/signup" className="text-blue-400 font-bold text-lg">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;