import { useState } from "react";
import ReactFlagsSelect from 'react-flags-select';
import '../stylesheet/affiliateSignUp.css'
import axios from "axios";

function SignUp(){ 
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
    errors: {},
    errorTimeout: null
  });

  const [confirmpassword, setConfirmPassword] = useState(null);

  const handleClick = async (e) => { 
    e.preventDefault();
    try{
      const res = await axios.post('/register', userdata);
      return res;
    }catch(err){
      console.log("Data could not be sent")
    }
  }

  const handleChange = (e) =>{
    const {name, value} = e.target;
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
      errors.username = "Please enter a valid first name";
      dataOkay = false;
    }

    //Error with matching password validation
    if(name ==  "password" && value.length < 8){
      console.log(value);
      errors.password = "Password must be at least 8 characters"
    }else{
      setUserData((prev) =>  ({ ...prev, password: value}));
    }

    if (name === "confirmPassword") {
      console.log(value);
      if (value !== userdata.password) {
        errors.confirmPassword = "Passwords do not match";
      } else {
        errors.passwordMatch = "Password matches now";
        setUserData((prev) => ({ ...prev, errors: { ...prev.errors, passwordMatch: "Password matches now" } }));
        setUserData((prev) => ({...prev, password: value}));
      }
    }
  
    // Clear error message after 3 seconds
    if (userdata.errorTimeout) {
      clearTimeout(userdata.errorTimeout);
    }

    setUserData((prev) => ({...prev, errorTimeout: setTimeout(() => {
      setUserData((prev) => ({...prev, errors: {}}));
    }, 3000)}));

    if(dataOkay){
      setUserData((prev) => ({ ...prev, [name]: value }));
      setUserData((prev) => ({ ...prev, errors: {} }));
      console.log(name, value)
    }else{
      setUserData((prev) => ({ ...prev, errors: { ...prev.errors, ...errors } }));
    }
  }

  const handleSelect = (code) => {
    setSelected(code);
    setUserData((prev) => ({...prev, country: code}));
  }

  return (
    <div className="SignUpContainer">
      <div className="leftSection">

      </div>
      <div className="rightSection">
        <h1 className="signup_h1">SignUp</h1>
        <p>You are so close on making money</p>
        <div className="form_components">
            <div className="left">
                <input type="text" name="firstname" placeholder="First Name" onChange={handleChange}/> 
                {userdata.errors.firstname && <div style={{ color: 'red' }}>{userdata.errors.firstname}</div>}

                <input type="text" name="lastname" placeholder="Last Name" onChange={handleChange}/> 
                {userdata.errors.lastname && <div style={{ color: 'red' }}>{userdata.errors.lastname}</div>}

                <input type="email" name="email" placeholder="Email" onChange={handleChange}/> 
                {userdata.errors.email && <div style={{ color: 'red' }}>{userdata.errors.email}</div>}

                <input className="date" type="date" name="date" onChange={handleChange} max={new Date().getFullYear() - 15} min="1900-01-01"/> 
                {userdata.errors.date && <div style={{ color: 'red' }}>{userdata.errors.date}</div>}

                <ReactFlagsSelect
                    selected={selected}
                    onSelect={handleSelect}
                    countries={['GH']}
                    className="selectInput"
                    searchable
                    placeholder = "Select Country"
                    searchPlaceholder="Search Country..."
                />
                {userdata.errors.country && <div style={{ color: 'red' }}>{userdata.errors.country}</div>}

                <input type="tel" name="phonenumber" placeholder="Phone Number" onChange={handleChange}/> 
                {userdata.errors.phonenumber && <div style={{ color: 'red' }}>{userdata.errors.phonenumber}</div>}
            </div>
            <div className="right">
                <input type="text" name="username" placeholder="Username" onChange={handleChange}/>
                {userdata.errors.username && <div style={{ color: 'red' }}>{userdata.errors.username}</div>}

                <input type="password" name="password" placeholder="Password" onChange={handleChange}/>
                {userdata.errors.password && <div style={{ color: 'red' }}>{userdata.errors.password}</div>}

                <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange}/>
                {userdata.errors.confirmPassword && <div style={{ color: 'red' }}>{userdata.errors.confirmPassword}</div>}
                {userdata.errors.passwordMatch && <div style={{ color: 'green' }}>{userdata.errors.passwordMatch}</div>}
            </div>
        </div>
        <input className="create_button" type="button" value="Create" onClick={handleClick}/>
      </div>
    </div>
  );
}

export default SignUp;