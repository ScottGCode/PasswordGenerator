// password character key set
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numeric = '0123456789';
var special = '~!@#$%^&*()';

function generatePassword() {
    var passwordLength = getLength();
    var includeLower = getLower();
    var includeUpper = getUpper();
    var includeNumeric = getNumeric();
    var includeSpecial = getSpecial();

    if (!includeLower && !includeUpper && !includeNumeric && !includeSpecial) {
        window.prompt('Please select at least one character type.');
        return '';
    }

    var charset = '';
    if (includeLower) {
        charset += lowerCase;
    }
    if (includeUpper) {
        charset += upperCase;
    }
    if (includeNumeric) {
        charset += numeric;
    }
    if (includeSpecial) {
        charset += special;
    }

    var password = '';
    for (var i = 0; i < passwordLength; i++) {
        var randomIndex = Math.floor(Math.random() * charset.length);
        password += charset.charAt(randomIndex);
    }

    return password;
}

function getLength() {
    var userLength = parseInt(prompt("Password must be a minimum of 8 characters and a maximum of 128 characters. Enter character amount here:"));
    if (isNaN(userLength) || userLength < 8 || userLength > 128) {
        alert("Password length must be between 8 and 128 characters! Please try again.");
        return getLength();
    }
    return userLength;
}

function getLower() {
    var lowerChoice = window.prompt("Would you like your password to include lower case letters? Y for yes, N for no.").toLowerCase();
    return lowerChoice === 'y';
}

function getUpper() {
    var upperChoice = window.prompt("Would you like your password to include upper case letters? Y for yes, N for no.").toLowerCase();
    return upperChoice === 'y';
}

function getNumeric() {
    var numericChoice = window.prompt("Would you like your password to include numbers? Y for yes, N for no.").toLowerCase();
    return numericChoice === 'y';
}

function getSpecial() {
    var specialChoice = window.prompt("Would you like your password to include special characters? Y for yes, N for no.").toLowerCase();
    return specialChoice === 'y';
}

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", function () {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
});

