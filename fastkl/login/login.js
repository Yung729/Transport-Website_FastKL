var userNameArray = ["joseph", "btc", "Kah Lok Lim"];
var userPassArray = ["1234", "5361", "4123424"];
var storedUserName = JSON.parse(localStorage.getItem("newUsernameSignup"));
var storedUserPass = JSON.parse(localStorage.getItem("newSignUpPswd"));
console.log(storedUserName);
if(!storedUserName){
  localStorage.setItem("newUsernameSignup",JSON.stringify(userNameArray));
  storedUserName = Object.values(JSON.parse(localStorage.getItem("newUsernameSignup")));
}else{
  storedUserName = Object.values(storedUserName);
}

if(!storedUserPass){
  localStorage.setItem("newSignUpPswd",JSON.stringify(userPassArray));
  storedUserPass = Object.values(JSON.parse(localStorage.getItem("newSignUpPswd")));
}else{
  storedUserPass = Object.values(storedUserPass);
}

function verifyUserName(userName) {
  if (userName == document.getElementById("usernameSignup").value) {
    return userName;
  }
}

function signupUser(event) {
  event.preventDefault();
  var newUserName = document.getElementById("usernameSignup").value;
  var newUserPass = document.getElementById("signupPswd").value;
  
  if(!storedUserName.find(verifyUserName)){
    storedUserName.push(newUserName);
    storedUserPass.push(newUserPass);

    alert("Your sign up is successfully done!!");
    alert("Kindly fill in the details at the login side to process to the next stage. >.< ");
    
    localStorage.setItem("newUsernameSignup",JSON.stringify(storedUserName));
    localStorage.setItem("newSignUpPswd",JSON.stringify(storedUserPass));

    document.getElementById('signupForm').submit();
  }else{
    alert("Username Exist!!");
    document.getElementById("usernameSignup").focus();
  }
}

function checkUserName(userName) {
  if (userName == document.getElementById("usernameLogin").value) {
    return userName;
  }
}

function checkUserPass(pass) {
  if (pass == document.getElementById("loginPwsd").value) {
    return pass;
  }
}

function findFunction() {
  varUser = storedUserName.find(checkUserName);
  varUserIndex = storedUserName.findIndex(checkUserName);

  varUserPass = storedUserPass.find(checkUserPass);
  varUserPassIndex = storedUserPass.findIndex(checkUserPass);

  if (varUser == null) {
    document.getElementById("invalidUserName").style.display = "block";
    document.getElementById("invalidUserName").innerHTML = "Invalid Username" ;
    document.getElementById("invalidUserPass").style.display = "none";
    document.getElementById("usernameLogin").value = "";
    document.getElementById("usernameLogin").focus();
  } else {
    usernameIndex = storedUserName.findIndex(username => username == varUser );
    inputPswd = document.getElementById("loginPwsd").value;
    if (inputPswd && storedUserPass[usernameIndex] == inputPswd) {
      localStorage.setItem("loginName",JSON.stringify(varUser));
      document.getElementById('loginForm').submit();
    }else{
      document.getElementById("invalidUserName").style.display = "none";
      document.getElementById("invalidUserPass").style.display = "block";
      document.getElementById("invalidUserPass").innerHTML = "Password is not matched" ;
      
      document.getElementById("loginPwsd").value = "";
      document.getElementById("loginPwsd").focus();
    }
  } 
}





