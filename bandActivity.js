document.getElementById('btn').addEventListener('click', bandQuestion);
var bands = ['Fall Out Boy', 'Red Jumpsuit Apparatus', 'Sum 41'];

function bandQuestion() {
	var bandQuestion = prompt("What's your Favorite Band?", 'ex. Hoobastank');
	if (bandQuestion.toLowerCase() === bands[0].toLowerCase()) {
		alert(bands[0] + " That's my Favorite too!");
		console.log(bandQuestion);
	} else if (bandQuestion.toLowerCase() === bands[1].toLowerCase()) {
		alert(bands[1] + ' yeah i Love them!');
		console.log(bandQuestion);
	} else if (bandQuestion.toLowerCase() === bands[2].toLowerCase()) {
		alert(bands[2] + ' Rock On!');
		console.log(bandQuestion);
	} else {
		alert('Lame!');
		console.log('Lame!');
	}
}
console.log(bands);
