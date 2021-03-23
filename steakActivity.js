//* Create a website (from scratch) that asks users if they eat steak.
//* If they respond with "yes", alert the following to the page: "Here’s a Steak Sandwich!"
//* If they respond with "no", alert the following to the page: "Here’s a Tofu Stir-Fry!"
//* *BONUS:* Ask what the user’s birth year is. If they are under 21, alert the following: "No Sake for you!"

/*	var confirmSteak = confirm('Do you eat steak?');
			var promptmAge = prompt('How old are you?');
			var ageLimit = 21;
			var alertYes = 'Here’s a Steak Sandwich!';
			var alertNo = 'Here’s a Tofu Stir-Fry!';
			var ageAlert = 'No Steak for you!';

			if (confirmSteak && promptmAge >= ageLimit) {
				alert(alertYes);
			} else if (confirmSteak && promptmAge < ageLimit) {
				alert(ageAlert);
			} else if ((confirmSteak = false && promptmAge < ageLimit)) {
				alert(ageAlert + 'but ' + alertNo + ' instead.');
			} else {
				alert(alertNo);
			} 
		*/

var confirmSteak = confirm('Do you eat steak?');
if (confirmSteak) {
	alert('heres a steak sammy');
} else {
	alert("here's a tofu stir fry");
}
var promptmAge = prompt('How old are you?');
if (promptmAge >= 21) {
	alert('sake sake sake');
} else {
	alert('no sake for you');
}
