const generateBtn = document.querySelector("#generate");

const lowerCaseOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCaseOptions = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

let passwordLength = 0;
let passwordType = "";


const generatePassword = () => {
  const findPasswordLength = prompt("How long would you like your password to be (8-128 characters)?");
    if (findPasswordLength < 8) {
      alert("Please input a number EQUAL to or GREATER than 8");
    }
    else if (findPasswordLength > 128) {
      alert("Please input a number EQUAL to or LESS than 128");
    }
    else {
      passwordLength = findPasswordLength;
      const findPasswordType = prompt("What TYPE of characters would you like your password to be (lowercase, uppercase, numeric, or special)?").toLowerCase();
      if (findPasswordType === "lowercase") {
        passwordType = "lowercase";
      }
      else if (findPasswordType === "uppercase") {
        passwordType = "uppercase";
      }
      else if (findPasswordType === "numeric") {
        passwordType = "numeric";
      }
      else if (findPasswordType === "special") {
        passwordType = "special";
      }
      else {
        alert("Please input one of the listed TYPE options")
      }
    }
}

// const determineLength = () => {
// }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
