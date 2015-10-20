//******************EDIT MODE************************
var editButtonSibling;
var editMode = false;

//**************DECLARE VARIABLES******************
var inputText = document.getElementById("enter-message");
var clearMessage = document.getElementById("clear-message");
var messageBoard = document.getElementById("messages");

//***************CREATE ARRAY**************************
var messageBox = [];
//***************ENTER MESSAGE***********************
document.getElementById("enter-message").addEventListener("keyup", function() {
	if (event.keyCode === 13) {
		if (editMode === false) {
//*******************ADD DATE AND TIME*****************************
		var date = new Date();
		var year = date.getFullYear();
		var month = date.getMonth() + 1;
		var day = date.getDate();
		var hours = date.getHours();
		var minutes = date.getMinutes();
		var printDate = month + "/" + day + "/" + year + " at " + hours + ":" + minutes;
		console.log(printDate);
//*******************ADD DATE AND TIME*****************************
		var inputMessage = "<div><span class='only-text'>";
		inputMessage += inputText.value;
		inputMessage += "</span><button class='edit'>Edit</button><button class='delete-button'>Delete</button>";
		inputMessage += printDate + "</div>";
//*******************UNSHIFT TO ARRAY MESSAGEBOX*****************************
		if (messageBox.length <= 19) {
		messageBox.unshift(inputMessage);
		} else if (messageBox.length >= 20) {
			messageBox.unshift(inputMessage);
			messageBox.pop();
		} 
		console.log("messageBox", messageBox);
		console.log("length", messageBox.length);
//*******************INSERT MESSAGE BOX TO HTML*****************************
		messageBoard.innerHTML =  messageBox.join(" ");
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
	messageBox = [""];
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
























