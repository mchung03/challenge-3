var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numericValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var specialChar = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", " \ ", "]", "^", "_", "`", "{", "|", "}", "~"]
var candidates = []
var password = ''
var passwordText = document.querySelector("#password");

var generateBtn = document.querySelector("#generate");

function writePassword() {
  passwordText.value = ''

  let lengthInt = getLength()
  if (lengthInt < 8 || lengthInt > 128) {
    alert('Please enter a numerical value between 8 and 128')
    lengthInt = getLength()
  }

  let upperCaseAnswer = confirm('Would you like upper cases?\nPress "Ok" for yes and "Cancel" for no');
  if (upperCaseAnswer) {
    candidates = candidates.concat(upperCase)
  }
  let lowerCaseAnswer = confirm("Would you like lower cases?");
  if (lowerCaseAnswer) {
    candidates = candidates.concat(lowerCase)
  }
  let numericalAnswer = confirm("Would you like numerical values?");
  if (numericalAnswer) {
    candidates = candidates.concat(numericValues)
  }
  let specialCharAnswer = confirm("Would you like special characters?");
  if (specialCharAnswer) {
    candidates = candidates.concat(specialChar)
  }

  for (let i = 0; i < lengthInt; i++) {
    var index = parseInt(Math.random() * candidates.length)
    password += candidates[index]
  }

  passwordText.value = password;

}

function getLength() {
  let length = prompt("Enter the length you would like your password to be between 8 and 128 characters");
  let lengthInt = parseInt(length)
  return lengthInt
}

generateBtn.addEventListener("click", writePassword);