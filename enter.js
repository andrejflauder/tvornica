//getting ENTER key to run search
var enter = document.getElementById("searchquery");
enter.addEventListener("keydown", function(event) {
//key code for ENTER is 13
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("searchbtn").click();
  }
});