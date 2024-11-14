import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
    errors: {},
  });

  const handleChange = (e) => {
    setLogin((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = {};
    let dataOkay = true;

    if (login.email === "" || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(login.email)) {
      errors.email = "Please fill the email";
      dataOkay = false;
    }

    if (login.password === "") {
      errors.password = "Please enter password";
      dataOkay = false;
    }

    if (!dataOkay) {
      setLogin((prev) => ({ ...prev, errors }));
      const errorTimeOut = setTimeout(() => {
        setLogin((prev) => ({ ...prev, errors: {} }));
      }, 3000);
      setLogin((prev) => ({ ...prev, errorTimeOut }));
    }
  };

  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('../Images/Vita.png')" }}>
      <div className="absolute inset-0 bg-black opacity-80"></div> {/* Darker background */}
      <div className="relative flex items-center justify-center h-full">
        <div className="bg-gradient-to-br from-gray-900 to-black bg-opacity-80 backdrop-blur-lg shadow-lg rounded-lg p-10 sm:p-12 md:p-16 lg:p-20 mx-4 w-full max-w-lg"> {/* Increased padding and max width */}
          <h1 className="text-transparent bg-clip-text bg-gradient-to-l from-green-400 to-green-600 text-4xl sm:text-5xl font-bold text-center mb-8">LOGIN</h1>

          <div className="flex flex-col space-y-6"> {/* Increased space between inputs */}
            <input
              className="border-b-2 border-green-500 bg-transparent text-white placeholder-white focus:outline-none focus:border-green-500 py-3 text-lg" // Increased padding and font size
              type="email"
              placeholder="Email"
              name="email"
              value={login.email}
              onChange={handleChange}
            />
            {login.errors.email && <div className="text-red-500">{login.errors.email}</div>}
            
            <input
              className="border-b-2 border-green-500 bg-transparent text-white placeholder-white focus:outline-none focus:border-green-500 py-3 text-lg" // Increased padding and font size
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
            className="mt-8 w-full h-14 bg-green-500 rounded-lg text-white font-bold transition-all duration-500 ease-in-out hover:bg-green-600 text-lg" // Increased height and font size
            onClick={handleSubmit}
          />

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