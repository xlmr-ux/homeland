const date = new Date();
document.querySelector(".year").innerHTML = date.getFullYear();

// Remove messages after 3 seconds
setTimeout(function() {
  $("#message").fadeOut("slow");
}, 3000);
