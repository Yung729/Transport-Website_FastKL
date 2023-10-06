function myFunction() {
  document.getElementById("menu").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.sidemenu')) {
    var dropdowns = document.getElementsByClassName("menu");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function logout() {
  localStorage.clear();
  window.location.reload();
}

var varUser = JSON.parse(localStorage.getItem("loginName"));
if (varUser)  {
  var logoutBtn = '<a id="logoutBtn" onclick="logout()" >Log out</a>'
  document.getElementById('loginStatus').innerHTML =logoutBtn+ "&nbsp &nbsp" +varUser;
}
