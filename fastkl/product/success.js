window.onload = init;

function init() {
document.forms[0].onsubmit = function() {
  if (this.checkValidity()) 
  { alert("Congratulation! The application is succesfully done!");
    alert("Please wait for 2 working days for the card delivery. Thank you for your patience.");
  }
  document.getElementById("form").reset();
  return true;
 }
}