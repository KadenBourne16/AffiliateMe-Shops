exports.encryption = (passwordInput) => {
    const code = ["a","b","c","d","e","f","g","h", "%", "!", "+", "/"];
    
    const string = passwordInput;
    var encryptedPassword = null;

    for (let times = 0; times < string.length; times++){
        var codeValue = [];
        for (let codetimes = 0; codetimes < string.length;  codetimes++){
            codeValue.push[code[codetimes]];
            if(codeValue !== null){
                encryptedPassword = string[times] + codeValue[codetimes - 1];
            }
        }
        
    }
    console.log(encryptedPassword);
    return encryptedPassword;  
}