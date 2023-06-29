// Assignment code here


// Get references to the #generate element
// Points to creating button using ID generate in HTML
var generateBtn = document.querySelector("#generate");
function generatePassword(){
  console.log()
}

generatePassword()
// Write password to the #password input, creates function password
function writePassword() {
  //calling variable called password
  var password = generatePassword();
  //creates variable pointing to password in HTML
  var passwordText = document.querySelector("#password");
  // sets value of password text to password
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//PHASE 1
//What we need to do
//Characters (8-128)
//Prompt user for upper/lower case (yes/no) and use confirm
//Numerical values (yes/no) and confirm
//Special characters (yes/no) and confirm

//PHASE 2
//What values do we need to track?
//variables for characters, upper/lower, numerical, special characters using an array
//randomize the array and pull from available characters
//create a for loop that runs length number of times based on what user types in
//generate a single random character and append to password