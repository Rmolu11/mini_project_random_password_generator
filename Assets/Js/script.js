// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(passwordLength, passCharacters){
  var passwordLength = choosePasswordLength();
  var passCharacters = chooseCriteria();
  var finalPassword = "";

  // loop through password characters and select a password of required length
  for (var i = 0; i < passwordLength; i++){
    var randomIndex = Math.floor(Math.random()*passCharacters.length);
    finalPassword += passCharacters[randomIndex];
  }
  alert("Your Password is:" + finalPassword);
  return finalPassword;
}


function choosePasswordLength(){
 //choose the length of the passwerd
 do{
    var passLength = prompt("Choose the length of your password between 8 and 128 characters");
 } while (passLength < 8 || passLength > 128);
  alert("You chose: " + passLength);
  return passLength;
}

function chooseCriteria(){
  //user choses their password criteria stored as a boolean using the confirm() method
  var hasLowercase = confirm ("Would you like lowercase letters in your password?");
  var hasUppercase = confirm ("Would you like uppercase letters in your password?");
  var hasNumeric = confirm ("Would you like numbers in your password?");
  var hasSpecial = confirm ("Would you like special characters in your pasword?");

  // create strings containing all possible characters
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numericCharacters = "0123456789";
  const specialCharacters = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"; 
  // neeed to add " to the string of special characters

  //empty string which will hold all characters selected by the user
  var passwordCharacters = "";

  //based on user choice, fill up passwordCharacters with correspoding strings
  if (hasLowercase){passwordCharacters += lowercaseLetters;}
  if (hasUppercase){passwordCharacters += uppercaseLetters;}
  if (hasNumeric){passwordCharacters += numericCharacters;}
  if (hasSpecial){passwordCharacters += specialCharacters;} 

  //check if at least a choice was made
  if (passwordCharacters.length === 0){
    alert("You have to choose what to include in your password")
  }

  return passwordCharacters;

}
