
//**************DECLARE VARIABLES******************
var inputText = document.getElementById("enter-message");
var clearMessage = document.getElementById("clear-message");
var messageBoard = document.getElementById("messages");

//***************CREATE ARRAY**************************

//***************ENTER MESSAGE***********************
document.getElementById("enter-message").addEventListener("keyup", function() {
	if (event.keyCode === 13) {
		var inputMessage = "<p>"
		inputMessage += inputText.value
		inputMessage += "<button id='delete-button'>Delete</button>"
		inputMessage += "</p>"
		messageBoard.innerHTML += inputMessage;
		inputText.value = "";
	}
	console.log("message-board", messageBoard.innerHTML.length);
	if (messageBoard.innerHTML.length > 0) {
	clearMessage.removeAttribute("disabled");
	} 
});

//***********SETTING CLEAR MESSAGE TO DISABLED***********
clearMessage.addEventListener("click", function () {
	document.getElementById("messages").innerHTML = "";
	clearMessage.setAttribute("disabled", true);
});

//*************SETTING DARK THEME************************
var darkTheme = document.getElementById("dark-theme");
darkTheme.addEventListener("click", function() {
	document.getElementById("body").classList.toggle("dark");
})

//***********SET LARGE TEXT********************************
var largeText = document.getElementById("large-text");
largeText.addEventListener("click", function() {
	document.getElementById("body").classList.toggle("large");
})

//****************DELETING SPECIFIC MESSAGE*******************
document.querySelector("body").addEventListener("click", function(event) {
  console.log("event", event);
  // Handle the click event on any P
  // event.target
  if (event.target.id === "delete-button") {
	event.target.parentNode.remove();
	}
})
























