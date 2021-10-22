var currentUser = "Mario";

window.onload = function loadfn() {
	document.getElementById("screen").innerHTML = "It's " + currentUser + "'s turn";
}

window.turnChanger = function turnChanger() {
	if (currentUser == "Mario") {
		currentUser = "Juan";
	} else if (currentUser == "Juan") {
		currentUser = "Josh";
	} else if (currentUser = "Josh") {
		currentUser = "Mario";
	}

	document.getElementById("screen").innerHTML = "It's " + currentUser + "'s turn";
}

/*
Different Way

window.turnChanger = function turnChanger() {

	let names = ["Josh", "Mario", "Juan"];
	
	names.map( function() {
		let ranNum = Math.ceil(Math.random()*names.length)
		currentUser = names[ranNum];
	})

	document.getElementById("screen").innerHTML = "It's " + currentUser + "'s turn";
}

*/