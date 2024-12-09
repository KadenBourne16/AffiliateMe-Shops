import { useState, useEffect } from "react";
import ReactFlagsSelect from 'react-flags-select';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function SignUp() { 
  const navigate = useNavigate();
  const [selected, setSelected] = useState("");
  const [userdata, setUserData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    birth_date: "",
    phone_number: "",
    country: "",
    address: "",
    username: "",
    password: "",
    confirmPassword: "",
    errors: {},
  });
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
const password1Change = (e) =>{
  setPassword1(e.target.value);
  setUserData((prev) => ({...prev, password: password1}));
  
}
const password2Change = (e) =>{
  setPassword2(e.target.value);
  setUserData((prev) => ({...prev, confirmPassword: password2}));
}

let isPasswordCorrect = null;
let passwordError = "Password does not match";

useEffect(() => {
  const checkPassword = () =>{
    if(password1 == password2){
        isPasswordCorrect = true;
    }else{
      isPasswordCorrect = false;
    }
  };
  
  checkPassword();

}, [[password1], [password2]]);


const submitToBackend = async (e) => {
  e.preventDefault();
  const newErrors = {}; // Create a new object to hold errors
  let hasError = false; // Flag to check if there are any errors

  // Validate all fields
  Object.keys(userdata).forEach(key => {
      if (key !== "errors" && (userdata[key] === "" || userdata[key] === null)) {
          newErrors[key] = 'Field is empty';
          hasError = true;
      }
  });

  // If there are any errors, update state and prevent submission
  if (hasError) {
      setUserData(prev => ({ ...prev, errors: newErrors }));
      return;
  }

  if (isPasswordCorrect === true) {
      // Prepare the data to send to the backend, excluding confirmPassword
      const {confirmPassword, ...dataToSend } = userdata; // Destructure to exclude confirmPassword

      try {
          console.log(dataToSend); // Log the data being sent
          const res = await axios.post('http://localhost:3000/affluencelink/register', dataToSend);
          if (res.data.message === "Success") {
              navigate("/"); // Redirect to the login page
          }
      } catch (err) {
          console.log("Data could not be sent", err);
      }
  } else {
      setUserData((prev) => ({ ...prev, errors: { ...prev.errors, passwordMatch: passwordError } }));
  }
}

  const handleChange = (e) => {
    // const { name, value } = e.target;
    // setUserData(prev => ({ ...prev, [name]: value, errors: { ...prev.errors, [name]: "" } })); 
    const { name, value } = e.target;
    const errors = {};
    var dataOkay = true;

    // Validations
    if (name === "first_name" && (!/^[a-zA-Z]/.test(value) || value.length < 3)) {
      errors.first_name = "Please enter a valid first name";
      dataOkay = false;
    }
  
    if (name === "last_name" && (!/^[a-zA-Z]/.test(value) || value.length < 3)) {
      errors.last_name = "Please enter a valid last name";
      dataOkay = false;
    }

    if (name === "email" && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
      errors.email = "Please enter a valid email address";
      dataOkay = false;
    }
    if (name === "phone_number" && !/^\d{10}$/.test(value)) {
      errors.phone_number = "Please enter a valid phone number";
      dataOkay = false;
    }

    if (name === "birth_date") {
      const dob = new Date(value);
      const today = new Date();
      const maxDate = new Date(today.getFullYear() - 15, today.getMonth(), today.getDate());
  
      if (dob > maxDate) {
        errors.birth_date = "You must be at least 15 years old to sign up";
        dataOkay = false;
      }
    }

    if (name === "address" && (!/^[a-zA-Z]/.test(value) || value.length < 3)) {
      errors.address = "Please enter a valid Address";
      dataOkay = false;
    }

    if (name === "username" && (!/^[a-zA-Z]/.test(value) || value.length < 3)) {
      errors.username = "Please enter a valid username";
      dataOkay = false;
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
            <input type="text" name="first_name" placeholder="First Name" onChange={handleChange} className="border border-gray-300 rounded-lg p-2 mb-2" />
            {userdata.errors.first_name && <div className="text-red-500">{userdata.errors.first_name}</div>}

            <input type="text" name="last_name" placeholder="Last Name " onChange={handleChange} className="border border-gray-300 rounded-lg p-2 mb-2" />
            {userdata.errors.last_name && <div className="text-red-500">{userdata.errors.last_name}</div>}

            <input type="email" name="email" placeholder="Email" onChange={handleChange} className="border border-gray-300 rounded-lg p-2 mb-2"/>
            {userdata.errors.email && <div className="text-red-500">{userdata.errors.email}</div>}

            <input type="date" name="birth_date" onChange={handleChange} className="border border-gray-300 rounded-lg p-2 mb-2" max={new Date().getFullYear() - 15} min="1900-01-01" />
            {userdata.errors.birth_date && <div className="text-red-500">{userdata.errors.birth_date}</div>}

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

            <input type="text" name="address" placeholder="Address" onChange={handleChange} className="border border-gray-300 rounded-lg p-2 mb-2"/>
            {userdata.errors.address && <div className="text-red-500">{userdata.errors.address}</div>}

            <input type="tel" name="phone_number" placeholder="Phone Number" onChange={handleChange} className="border border-gray-300 rounded-lg p-2 mb-2" />
            {userdata.errors.phone_number && <div className="text-red-500">{userdata.errors.phone_number}</div>}
          </div>
          <div className="flex flex-col">
            <input type="text" name="username" placeholder="Username" onChange={handleChange} className="border border-gray-300 rounded-lg p-2 mb-2" />
            {userdata.errors.username && <div className="text-red-500">{userdata.errors.username}</div>}

            <input type="password" name="password" placeholder="Password" onChange={password1Change} className="border border-gray-300 rounded-lg p-2 mb-2" />
            {userdata.errors.password && <div className="text-red-500">{userdata.errors.password}</div>}

            <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={password2Change} className="border border-gray-300 rounded-lg p-2 mb-2" />
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