window.onload = init;

function init() {

   document.getElementById("jobApplication").onclick = turnOnJobApplication;
   document.getElementById("apprenticeship").onclick = turnOnApprenticeship;

   var x = document.getElementById("thanks");

   document.forms[0].onsubmit = function() {
      if (this.checkValidity()) {
         x.play();
         alert("Form Submited. Thank you for applying!\nWe will get to you as soon as possible.");
      }
   }
}

function turnOnJobApplication() {
   document.getElementById("jobApplicationList").disabled=false;
   document.getElementById("apprenticeshipList").disabled=true;
}

function turnOnApprenticeship() {
   document.getElementById("jobApplicationList").disabled=true;
   document.getElementById("apprenticeshipList").disabled=false;
}