const db = require('../DBConnection/dbconnection')
const body = require('body-parser');
const axios = require('axios');

exports.validateUser = async(req, res) => {
    const loginData = {
        email: "",
        password: ""
    }

    try{
        const recievedData = req.body
        loginData.email = recievedData.email;
        loginData.password = recievedData.password;
        res.json({message: "Success"});
    }catch(err){
        res.status(500).json({message: "Error posting data"})
    }

    console.log("The login data is: " , loginData);
}

exports.registerUser = async(req, res) => {
    const registerData = {
        firstname: "",
        lastname: "",
        email: "",
        date: "",
        phonenumber: "",
        country: "",
        username: "",
        password: "",
    };

    try{
        const recievedRegister = req.body;
        registerData.firstname = recievedRegister.firstname;
        registerData.lastname = recievedRegister.lastname;
        registerData.email = recievedRegister.email;
        registerData.date = recievedRegister.date;
        registerData.phonenumber = recievedRegister.phonenumber;
        registerData.country = recievedRegister.country;
        registerData.username = recievedRegister.username;
        registerData.password = recievedRegister.password;
        res.json({message: "Validating"});
    }catch(err){
        res.status(200).json({message: err});
    };

    console.log(registerData);
}