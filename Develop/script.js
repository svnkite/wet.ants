// Assignment code here

  // Get the modal
  var modal = document.getElementById("myModal");
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
function generatePassword() {
  var characterQuantity = document.getElementById("quantity").value
  var lowercase = document.getElementById('lowercase');
  var uppercase = document.getElementById('uppercase');
  var numbers = document.getElementById('numbers');
  var special = document.getElementById('special');
  var charset = "";
  var retVal = "";

  if (lowercase.checked) {
    charset=charset + lowercase.value;
  }
  if (uppercase.checked) {
    charset=charset + uppercase.value;
  }
  if (numbers.checked) {
    charset=charset + numbers.value;
  }
  if (special.checked) {
    charset=charset + special.value;
  }
  for (var i = 0, n = charset.length; i < characterQuantity; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

function showModal() {
  modal.style.display = "block";
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var showModalBtn = document.querySelector("#showModal");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  modal.style.display = "none";
  passwordText.value = password;

}

// Add event listener to generate button
showModalBtn.addEventListener("click", showModal);
generateBtn.addEventListener("click", writePassword);
