//create secretNumber
var secretNumber = 4;

//ask user for guess
var guess = Number(prompt("Guess a number"));

//check if guess is right
if (guess === secretNumber) {
		alert("You got it right!");
} else if (guess > secretNumber) {
		alert("Too high, guess again!");
} else if (guess < secretNumber) {
		alert("Too low, guess again!");
}