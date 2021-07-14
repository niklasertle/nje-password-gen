// Assignment Code
const specialChar = '!@#$%^&*()';
const lowerChar = 'abcdefghijklmnopqrstuvwxyz';
const upperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numChar = '0123456789';
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Generates password
function generatePassword() {
  // Gets length of password, requires it to be at least 8 digits
  var passLength = prompt('How long do you want your password to be?');

  if (passLength < 8) {
    alert('Password must be at least 8 digits');
    generatePassword();
    return;
  }

  // Asks what character sets to include in the password, must have selected 'ok' for at least one of the options
  var numbers = confirm('Do you want numbers?');
  var lowerCase = confirm('Do you want lower case letters?');
  var upperCase = confirm('Do you want upper case letters?');
  var symbols = confirm('Do you want symbols?');

  if (numbers === false && lowerCase === false && upperCase === false && symbols === false) {
    alert('Must select at least one of the options')
    generatePassword();
    return;
  }

  // Random generators for each character
  var genPass = [
    function passNumbers(){
      return numChar[Math.floor(Math.random() * numChar.length)];
    },

    function passLower(){
      return lowerChar[Math.floor(Math.random() * lowerChar.length)];
    },

    function passUpper(){
      return upperChar[Math.floor(Math.random() * upperChar.length)];
    },
    
    function passSpecial(){
      return specialChar[Math.floor(Math.random() * specialChar.length)];
    },
  ];

  // Testing which characters to include and removing the function associated from the array genPass
  if (numbers !== true) {
    genPass.splice(0,1);
  };

  if (lowerCase !== true) {
    genPass.splice(genPass.length-3,1);
  };

  if (upperCase !== true) {
    genPass.splice(genPass.length-2,1);
  };

  if (symbols !== true) {
    genPass.splice(genPass.length-1,1);
  };

  // Generating with info from above and storing into emptying string randomPass
  var randomPass = '';

  for (let i = 0; i < (parseInt(passLength)); i++) {
    var finalPass = Math.floor(Math.random() * genPass.length);

    randomPass += genPass[finalPass]();
  };
  
  randomPass = randomPass.toString();

  return randomPass;
};
