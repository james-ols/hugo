function toggle() {
  var x = document.getElementById("topnav");
  if (x.className === "dn") {
    x.className += " db";
  } else {
    x.className = "dn";
  }
}