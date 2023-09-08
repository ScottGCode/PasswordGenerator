// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
    getLength();
    getLower();
    getUpper();
    getNumeric();
    getSpecial();
}

function getLength(){
    var userLength = window.prompt("Password must be a minimum of 8 characters and a maximum of 128 characters. Enter character amount here:");
    if (userLength < 8) {
        window.alert("Password length must be between 8 and 128 characters! Please try again.");
        getLength();
    } else if(userLength > 128) {
        window.alert("Password length must be between 8 and 128 characters! Please try again.");
        getLength();
    } else {
        var passwordLength = userLength;
        window.alert(passwordLength);
    }
}

function getLower() {
    var lowerChoice = window.prompt("Would you like your password to include lower case letters? Y for yes, N for no.");
    if (lowerChoice == "n") {
        console.log(lowerChoice);
        return;
    } else if(lowerChoice == "y") {
        password.push(lowerCase);
        console.log(lowerChoice);
        getLower();
        return;
    } else {
        window.alert("Enter y for yes and n for no. Please try again");
        console.log(lowerChoice);
        lowerChoice = window.prompt("Would you like your password to include lower case letters? Y for yes, N for no.");
    }
}

function getUpper() {
    var upperChoice = window.prompt("Would you like your password to include upper case letters? Y for yes, N for no.");
    if (upperChoice == "n") {
        //do nothing
    } else if(upperChoice == "y") {
        password.push(upperCase);
        console.log(upperChoice);
        getUpper();
        return;
    } else { 
        window.alert("Enter y for yes and n for no. Please try again");
        console.log(upperChoice);
        upperChoice = window.prompt ("Would you like your password to include upper case letters? Y for yes, N for no.");
    }
}

function getNumeric() {
    var numericChoice = window.prompt("Would you like your password to include numbers? Y for yes, N for no.");
    if (numericChoice == "n") {
        //do nothing
    } else if(numericChoice == "y") {
        password.push(Numeric);
        console.log(numericChoice);
        getNumeric();
        return;
    } else { 
        window.alert("Enter y for yes and n for no. Please try again");
        console.log(numericChoice);
        numericChoice = window.prompt ("Would you like your password to include numbers? Y for yes, N for no.");
    }
}

function getSpecial() {
    var specialChoice = window.prompt("Would you like your password to include special characters? Y for yes, N for no.");
    if (specialChoice == "n") {
        //do nothing
    } else if(specialChoice == "y") {
        password.push(Special);
        console.log(specialChoice);
        getSpecial();
        return;
    } else { 
        window.alert("Enter y for yes and n for no. Please try again");
        console.log(specialChoice);
        specialChoice = window.prompt ("Would you like your password to include numbers? Y for yes, N for no.");
    }
}







// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
