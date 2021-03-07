//Declare Variables

const results = document.querySelector('#results');

const UNInum = [48, 57];
const UNIupper = [65, 90];
const UNIlower = [97, 122];
const UNIsym = [33, 47];

// This is the onClick event listener

document.querySelector('#generate').addEventListener('click', () => {

  // Misc. variables used in the onClick function

  // This variable is used to store the values for the various prompts
  var randSelector = [];

  // This variable is the final password that is displayed
  var password = [];

  // First prompt where the user enters their password length
  var passwordLength = parseInt(prompt("Tyler, How long would you like your password to be?"));

  // This alert will trigger if the password length is less than 8 or more than 128
  if (passwordLength < 8 || passwordLength > 128) {

  alert("Password must be more than 8 but no more than 128 characters");


  // This alert will trigger if the password is not a number
  } else if (isNaN(passwordLength)) {

  alert("Password length must be a number");
  
  // If the password length is within the boundaries, the prompts below will fire
  } else if (passwordLength >= 8 || passwordLength <= 128) {
    
    var useUppercase = confirm("Tyler, Would you like uppercase letters?");

    var useNumbers = confirm("Tyler, Would you like numbers?");

    var useSpecialChar = confirm("Tyler, Would you like special characters?");

    var useLowercase = true

  }

  //This is the uppercase condition. If it returns true, the randSelector pushes the values
  if (useUppercase === true) {
    for (let i = UNIupper[0]; i <= UNIupper[1]; i++) {
      randSelector.push(i)
    }
  }

  //This is the lowercase condition. If it is always true
  if (useLowercase === true) {
    for (let i = UNIlower[0]; i <= UNIlower[1]; i++) {
      randSelector.push(i)
    }
  }

  //This is the numbers condition. If it returns true, the randSelector pushes the values
  if (useNumbers === true) {
    for (let i = UNInum[0]; i <= UNInum[1]; i++) {
      randSelector.push(i)
    }
  }

  //This is the special characters condition. If it returns true, the randSelector pushes the values
  if (useSpecialChar === true) {
    for (let i = UNIsym[0]; i <= UNIsym[1]; i++) {
      randSelector.push(i)
    }
  }

  // This is the for lopp that creates the final password
  for (let i = 0; i < passwordLength; i++) {
    password.push(String.fromCharCode(randSelector[Math.floor(Math.random() * randSelector.length)]))
  }

  // This is what displays the final password
  return results.textContent = password.join('');
})
