import { useState } from "react";
import ReactFlagsSelect from 'react-flags-select';
import '../stylesheet/affiliateSignUp.css'

function SignUp(){ 
    const [selected, setSelected] = useState("");
    const roles = [
        {value: "buyer", label:"Buyer"},
        {value: "vendor", label: "Vendor"}
    ];

  return (
    <div className="SignUpContainer">
      <div className="leftSection"> </div>
      <div className="rightSection">
        <h1>SignUp</h1>
        <p>You are so close on making money</p>
        <div className="form_components">
            <div className="left">
                <input type="text" placeholder="First Name"/> <br />
                <input type="text" placeholder="Last Name"/> <br />
                <input type="email" placeholder="Email"/> <br/>
                <input className = "date" type="date" placeholder="Date of Birth"/> <br/>
                <input type="tel" placeholder="Phone Number"/> <br/>
                <ReactFlagsSelect
                    selected={selected}
                    onSelect={(code) => setSelected(code)}
                    countries={['GH']}
                    
                    className="selectInput"
                    searchable
                    placeholder = "Select Country"
                    searchPlaceholder="Search Country..."
                />
            </div>
            <div className="right">
                <input type="text" placeholder="Username" />
                <select className="roleInput">
                   <option value="">Select Role</option>
                   {roles.map((role => (
                    <option value={role.value}>{role.label}</option>
                   )))}
                </select>
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm Password" />
            </div>
        </div>
        <input className="create_button" type="button" value="Create"/>
      </div>
    </div>
  );
}

export default SignUp;