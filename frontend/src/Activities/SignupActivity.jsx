import { useState } from "react";
import ReactFlagsSelect from 'react-flags-select';
import axios from "axios";

function SignUp() { 
  const [selected, setSelected] = useState("");
  const [userdata, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    date: "",
    phonenumber: "",
    country: "",
    username: "",
    password: "",
    confirmPassword: "",
    errors: {},
  });

  const submitToBackend = async (e) => {
    e.preventDefault();
    const newErrors = {}; // Create a new object to hold errors
    let hasError = false; // Flag to check if there are any errors

    // Validate all fields
    Object.keys(userdata).forEach(key => {
      if (key !== "errors" && (userdata[key] === "" || userdata[key] === null)) {
        newErrors[key] = `${key} is required`;
        hasError = true;
      }
    });

    // Check password match
    if (userdata.password !== userdata.confirmPassword) {
      newErrors.passwordMatch = "Passwords do not match";
      hasError = true;
    }

    // If there are any errors, update state and prevent submission
    if (hasError) {
      setUserData(prev => ({ ...prev, errors: newErrors }));
      return;
    }

    // If no errors, proceed to submit the data
    try {
      const res = await axios.post('http://localhost:3000/affluencelink/register', userdata);
      console.log(res);
      // Optionally reset the form or show a success message
    } catch (err) {
      console.log("Data could not be sent", err);
    }
  }

  const handleChange = (e) => {
    // const { name, value } = e.target;
    // setUserData(prev => ({ ...prev, [name]: value, errors: { ...prev.errors, [name]: "" } })); 
    const { name, value } = e.target;
    const errors = {};
    var dataOkay = true;

    // Validations
    if (name === "firstname" && (!/^[a-zA-Z]/.test(value) || value.length < 3)) {
      errors.firstname = "Please enter a valid first name";
      dataOkay = false;
    }
  
    if (name === "lastname" && (!/^[a-zA-Z]/.test(value) || value.length < 3)) {
      errors.lastname = "Please enter a valid last name";
      dataOkay = false;
    }

    if (name === "email" && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
      errors.email = "Please enter a valid email address";
      dataOkay = false;
    }
    if (name === "phonenumber" && !/^\d{10}$/.test(value)) {
      errors.phonenumber = "Please enter a valid phone number";
      dataOkay = false;
    }

    if (name === "date") {
      const dob = new Date(value);
      const today = new Date();
      const maxDate = new Date(today.getFullYear() - 15, today.getMonth(), today.getDate());
  
      if (dob > maxDate) {
        errors.date = "You must be at least 15 years old to sign up";
        dataOkay = false;
      }
    }

    if (name === "username" && (!/^[a-zA-Z]/.test(value) || value.length < 3)) {
      errors.username = "Please enter a valid username";
      dataOkay = false;
    }

    // Error with matching password validation
    if (name === "password" && value.length < 8) {
      errors.password = "Password must be at least 8 characters";
    } else {
      setUserData((prev) => ({ ...prev, password: value }));
    }

    if (name === "confirmPassword") {
      if (value == userdata.password) {
        errors.confirmPassword = "Passwords matches";
        dataOkay = true;
        setUserData((prev) => ({ ...prev, passwordMatch: value}));
        console.log(value);
      } else {
        errors.passwordMatch = "Password does not match";
      }
    }
  
    // Clear error message after 3 seconds
    if (userdata.errorTimeout) {
      clearTimeout(userdata.errorTimeout);
    }

    setUserData((prev) => ({ ...prev, errorTimeout: setTimeout(() => {
      setUserData((prev) => ({ ...prev, errors: {} }));
    }, 3000) }));

    if (dataOkay) {
      setUserData((prev) => ({ ...prev, [name]: value }));
      setUserData((prev) => ({ ...prev, errors: {} }));
    } else {
      setUserData((prev) => ({ ...prev, errors: { ...prev.errors, ...errors } }));
    }
  }

  const handleSelect = (code) => {
    setSelected(code);
    let country_name = "";
    switch(code){
      case "GH":
        country_name = "Ghana";
        break;
      default:
        country_name = "";
    }
    setUserData(prev => ({ ...prev, country: country_name }));
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8 bg-white shadow-lg rounded-lg mx-4 md:mx-10 lg:mx-20 mt-16">
      <div className="hidden md:block bg-cover bg-center rounded-l-lg" style={{ backgroundImage: "url('../Images/Vita.png')" }} ></div>
      <div className="flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 mb-4">Sign Up</h1>
        <p className="text-lg mb-6">You are so close to making money</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <div className="flex flex-col">
            <input type="text" name="firstname" placeholder="First Name" onChange={handleChange} className="border border-gray-300 rounded-lg p-2 mb-2" required />
            {userdata.errors.firstname && <div className="text-red-500">{userdata.errors.firstname}</div>}

            <input type="text" name="lastname" placeholder="Last Name " onChange={handleChange} className="border border-gray-300 rounded-lg p-2 mb-2" required/>
            {userdata.errors.lastname && <div className="text-red-500">{userdata.errors.lastname}</div>}

            <input type="email" name="email" placeholder="Email" onChange={handleChange} className="border border-gray-300 rounded-lg p-2 mb-2" required/>
            {userdata.errors.email && <div className="text-red-500">{userdata.errors.email}</div>}

            <input type="date" name="date" onChange={handleChange} className="border border-gray-300 rounded-lg p-2 mb-2" max={new Date().getFullYear() - 15} min="1900-01-01" />
            {userdata.errors.date && <div className="text-red-500">{userdata.errors.date}</div>}

            <ReactFlagsSelect
              selected={selected}
              onSelect={handleSelect}
              countries={['GH']}
              className="border border-gray-300 rounded-lg p-2 mb-2"
              searchable
              placeholder="Select Country"
              searchPlaceholder="Search Country..."
            />
            {userdata.errors.country && <div className="text-red-500">{userdata.errors.country}</div>}

            <input type="tel" name="phonenumber" placeholder="Phone Number" onChange={handleChange} className="border border-gray-300 rounded-lg p-2 mb-2" />
            {userdata.errors.phonenumber && <div className="text-red-500">{userdata.errors.phonenumber}</div>}
          </div>
          <div className="flex flex-col">
            <input type="text" name="username" placeholder="Username" onChange={handleChange} className="border border-gray-300 rounded-lg p-2 mb-2" />
            {userdata.errors.username && <div className="text-red-500">{userdata.errors.username}</div>}

            <input type="password" name="password" placeholder="Password" onChange={handleChange} className="border border-gray-300 rounded-lg p-2 mb-2" />
            {userdata.errors.password && <div className="text-red-500">{userdata.errors.password}</div>}

            <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} className="border border-gray-300 rounded-lg p-2 mb-2" />
            {userdata.errors.confirmPassword && <div className="text-red-500">{userdata.errors.confirmPassword}</div>}
            {userdata.errors.passwordMatch && <div className="text-red-500">{userdata.errors.passwordMatch}</div>}
          </div>
          {userdata.errors.overall && <div className="text-red-500">{userdata.errors.overall}</div>}
        </div>
        <input className="mt-4 w-full h-12 bg-green-500 rounded-lg text-white font-bold transition-all duration-300 ease-in-out hover:bg-green-600 cursor-pointer" type="button" value="Create" onClick={submitToBackend} />
      </div>
    </div>
  );
}

export default SignUp;