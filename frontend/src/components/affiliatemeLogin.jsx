import { useState } from "react";
import { Link } from "react-router-dom";
import '../stylesheet/affiliateLogin.css'

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
    <div className="main_container">
      <div className="image"></div>

      <div className="login_container">
        <h1 className="login_h1">LOGIN</h1>

        <div className="form_inputs">
          <input
            className="green-bordered"
            type="email"
            placeholder="email"
            name="email"
            value={login.email}
            onChange={handleChange}
          />
          {login.errors.email && <div style={{ color: '#f54545' }}>{login.errors.email}</div>}
          <br />
          <input
            className="green-bordered"
            type="password"
            placeholder="password"
            name="password"
            value={login.password}
            onChange={handleChange}
          />
          {login.errors.password && <div style={{ color: '#f54545' }}>{login.errors.password}</div>}
          <br />
        </div>

        <input type="button" value="Login" className="login_button" onClick={handleSubmit} />

        <div>
          <p className="login_p">Don't have account?</p>
          <Link to="/signup" className="link">SignUp</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;