// Definiere die Funktionen
function firstFunction() {
	secondFunction();
}
function secondFunction() { 
	thirdFunction();
}
function thirdFunction() {
	fourthFunction();
}
function fourthFunction() {
	headline.innerHTML = "Sie haben auf die Headline geklickt. ";
}

alert("ICH BIN DA");
// hole das Headline-Element
let headline = document.getElementById("mainHeading");


// füge Eventlistener hinzu
headline.onclick = function() {
	alert("Jamöp");
	firstFunction();
};





