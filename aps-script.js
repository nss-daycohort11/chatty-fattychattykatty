//******************EDIT MODE************************
var editButtonSibling;
var editMode = false;

//**************DECLARE VARIABLES******************
var inputText = document.getElementById("enter-message");
var clearMessage = document.getElementById("clear-message");
var messageBoard = document.getElementById("messages");

//***************CREATE ARRAY**************************

//***************ENTER MESSAGE***********************
document.getElementById("enter-message").addEventListener("keyup", function() {
	if (event.keyCode === 13) {
		if (editMode === false) {
		var inputMessage = "<p><span class='only-text'>"
		inputMessage += inputText.value
		inputMessage += "</span><button class='edit'>Edit</button><button class='delete-button'>Delete</button>"
		inputMessage += "</p>"
		messageBoard.innerHTML += inputMessage;
		inputText.value = "";
	    } else if (editMode === true) {
	    	editButtonSibling.innerHTML = inputText.value;
	    	editMode = false;
	    }
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
  if (event.target.className === "delete-button") {
	event.target.parentNode.remove();
	}
})
//*****************EDIT BUTTON**********************************
document.querySelector("body").addEventListener("click", function(event) {
  console.log("event", event);
  if (event.target.className === "edit") {
  	editButtonSibling = event.target.previousSibling;
  	inputText.value = editButtonSibling.innerHTML;
  	editMode = true;
  }
})
  	//document.getElementById("enter-message").addEventListener("keyup", function() {
	// if (event.keyCode === 13) {
	// 	event.target.previousSibling.innerHTML = inputText.value;
	// }
 //  })
 //  }
























