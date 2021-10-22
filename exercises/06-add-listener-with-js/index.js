window.onload = function myLoadFunction() {
	alert("The website just finished loading!");

	//the listener function here
	let button =  document.querySelector("#theGreen");

	button.addEventListener("click", function() {
		alert("woohoo!");
	});
};




