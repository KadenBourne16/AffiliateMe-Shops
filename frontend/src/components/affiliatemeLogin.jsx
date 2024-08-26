import { useState } from "react";
import { Link } from "react-router-dom";
import '../stylesheet/affiliateLogin.css'

function Login() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
    errors: {}
  });

  const handleChange = (e) => {
    const [name, value] = e.target;
    var dataOkay = true;
    if(name == "email" && value == ""){
        errors.email = "Please fill the email"
        dataOkay = false;
    }

    if(name == "password" && value == ""){
        errors.password = "Please enter password"
        dataOkay = false;
    }

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="main_container">
        <div className="image">

        </div>

         <div className="login_container">
      <h1 className="login_h1">LOGIN</h1>
      
      <div form_inputs>
      <input
          className="green-bordered"
          type="email"
          placeholder="email"
          name="email"
          onChange={handleChange}
        />
        <br />
        <input
            className="green-bordered"
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <br />
      </div>
    
       <input type="button" value="Login" className="login_button"/>

      <div>
        <p className="login_p">Don't have account?</p>
        <Link to="/signup" className="link">SignUp</Link>
      </div>
    </div>
    </div>
   
  );
}

export default Login;