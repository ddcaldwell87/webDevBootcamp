// Define all variables
var p1 = document.querySelector("#p1");
var p2 = document.querySelector("#p2");
var p1ScoreDisplay = document.querySelector("#p1ScoreDisplay");
var p2ScoreDisplay = document.querySelector("#p2ScoreDisplay");
var playingTo = document.querySelector("#playingTo");
var playToInput = document.querySelector("#playToInput").valueAsNumber;
var reset = document.querySelector("#reset");
var p1Score = 0;
var p2Score = 0;

// Add one to player ones score when player ones button is clicked.
p1.addEventListener("click", function(){
	// Check to see if player one score is lower than what is in playToInput input field and lower than whats in player two score. If true, increment score.
	if(p1Score < playToInput && p2Score !== playToInput){
		p1Score++;
	}
	// When player one scores equals playToInput, turn display green.
	else if(p1Score === playToInput){
		p1ScoreDisplay.style.color = "green";
	}
	console.log(p1Score);
	// Display player one score.
	p1ScoreDisplay.textContent = p1Score;
});

// Add one to player twos score when player twos button is clicked.
p2.addEventListener("click", function(){
	// Check to see if player two score is lower than what is in playToInput input field and lower than whats in player one score. If true, increment score.
	if(p2Score < playToInput && p1Score !== playToInput){
		p2Score++;
	} else if(p2Score === playToInput){
		// When player two scores equals playToInput, turn display green.
		p2ScoreDisplay.style.color = "green";
	}
	console.log(p2Score);
	// Display player two score.
	p2ScoreDisplay.textContent = p2Score;
});

// Reset scores when reset button is clicked.
reset.addEventListener("click", function(){
	p1Score = 0;
	p2Score = 0;
	p1ScoreDisplay.textContent = p1Score;
	p2ScoreDisplay.textContent = p2Score;
});

// Change play to text to reflect what is in the playToInput field.
playingTo.textContent = playToInput;
console.log(playToInput);