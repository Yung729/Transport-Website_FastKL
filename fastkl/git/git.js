window.onload = init;
/*
New Perspectives on Javascript
AACS1483 Group Assignment

git Page of FASTKL
Author: PANG JUN MENG
DATE: 7/8/2022

Filename: git.js
*/
function init() {
document.forms[0].onsubmit = function() {
  if (this.checkValidity()) alert("Thank you so much for your contact details");
  document.getElementById("forms").reset();
  return true;
 }

}