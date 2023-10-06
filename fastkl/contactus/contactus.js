
// faq popup function
function showMore_travel() {
  var content = document.getElementById("travelContent");
  var info = document.getElementById("messageTravel");
  var dropdown = document.getElementById("dropdown-icon");

  if (content.style.display === "none") {
    content.style.display = "inline"; 
    info.style.display = "none";
    dropdown.style.transform = "scaleY(1)";

  } 
  else {
    content.style.display = "none";
    info.style.display = "inline-block";
    dropdown.style.transform = "scaleY(-1)";
  }
}

function showMore_pass() {
  var content = document.getElementById("passContent");
  var info = document.getElementById("messagePass");
  var dropdown = document.getElementById("dropdown-icon1");

  if (content.style.display === "none") {
    content.style.display = "inline"; 
    info.style.display = "none";
    dropdown.style.transform = "scaleY(1)";
  } 
  else {
    content.style.display = "none";
    info.style.display = "inline";
    dropdown.style.transform = "scaleY(-1)";
  }
}

function showMore_map() {
  var content = document.getElementById("mapContent");
  var info = document.getElementById("messageMap");
  var dropdown = document.getElementById("dropdown-icon2");

  if (content.style.display === "none") {
    content.style.display = "inline"; 
    info.style.display = "none";
    dropdown.style.transform = "scaleY(1)";
  } 
  else {
    content.style.display = "none";
    info.style.display = "inline";
    dropdown.style.transform = "scaleY(-1)";
  }
}

function showMore_cash() {
  var content = document.getElementById("cashContent");
  var info = document.getElementById("messageCash");
  var dropdown = document.getElementById("dropdown-icon3");

  if (content.style.display === "none") {
    content.style.display = "inline"; 
    info.style.display = "none";
    dropdown.style.transform = "scaleY(1)";
  } 
  else {
    content.style.display = "none";
    info.style.display = "inline";
    dropdown.style.transform = "scaleY(-1)";
  }
}

//contact us validation 
function checkvalid(){
  name_ok=true;
  if(document.contactusform.name.value=="")name_ok=false;

  email_ok=true;
  if(document.contactusform.email.value=="")email_ok=false;

  contact_ok=true;
  if(document.contactusform.contact.value=="")contact_ok=false;

  form_ok=(name_ok&&email_ok&&contact_ok);

  if(form_ok){
     alert("Your order has been submitted");}
    else { 
      if(name_ok==false) alert("Please enter the name");
      if(email_ok==false) alert("Please enter your email address "); 
      if(contact_ok==false) alert("Enter a phone number");  }
    

  

  return form_ok;
}