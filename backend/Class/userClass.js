class User {
    constructor(firstname, lastname, email, date, telephone, country, username, password) { 
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.date = date;
        this.telephone = telephone;
        this.country = country;
        this.username = username;
        this.password = password;
    }

    set firstname(userFirstName){
        if (typeof userFirstName !== 'string' || userFirstName.trim() === '') {
            throw new Error('Firstname must be a non-empty string');
        }
        this.firstname = userFirstName;
    }

    set lastname(userLastName){
        if (typeof userLastName !== 'string' || userLastName.trim() === '') {
            throw new Error('Lastname must be a non-empty string');
        }
        this.lastname = userLastName;
    }

    set email(userEmail){
        if (typeof userEmail !== 'string' || userEmail.trim() === '' || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(userEmail)) {
            throw new Error('Email must be a valid email address');
        }
        this.email = userEmail;
    }

    set date(userDate){
        if (!(userDate instanceof Date)) {
            throw new Error('Date must be a valid date');
        }
        this.date = userDate;
    }

    set telephone(userTelephone){
        if (typeof userTelephone !== 'string' || userTelephone.trim() === '' || !/^\d{10}$/.test(userTelephone)) {
            throw new Error('Telephone must be a 10-digit number');
        }
        this.telephone = userTelephone;
    }

    set country(userCountry){
        if (typeof userCountry !== 'string' || userCountry.trim() === '') {
            throw new Error('Country must be a non-empty string');
        }
        this.country = userCountry;
    }

    set username(userUserName){
        if (typeof userUserName !== 'string' || userUserName.trim() === '') {
            throw new Error('Username must be a non-empty string');
        }
        this.username = userUserName;
    }

    set password(userPassword){
        if (typeof userPassword !== 'string' || userPassword.trim() === '' || userPassword.length < 8) {
            throw new Error('Password must be a non-empty string with at least 8 characters');
        }
        this.password = userPassword;
    }

    get firstname(){
        return this.firstname;
    }

    get lastname(){
        return this.lastname;
    }

    get email(){
        return this.email;
    }

    get date(){
        return this.date;
    }
    
    get telephone(){
        return this.telephone;
    }

    get country(){
        return this.country;
    }

    get username(){
        return this.username;
    }

    get password(){
        return this.password;
    }
}

module.exports = User;