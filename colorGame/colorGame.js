var colors = generateRandomColor(6);
//grab selectors
var squares = document.querySelectorAll(".squares");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var replay = document.querySelector("#replay");
//displays the pickedColor on the colorDisplay h1
colorDisplay.textContent = pickedColor;
//loops through the squares, adds click listeners to each, and compares if the square that was clicked matches the pickedColor square
for(var i = 0; i < squares.length; i++){
	//add inital square colors
	squares[i].style.backgroundColor = colors[i];
	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		if(clickedColor === pickedColor){
			changeColor(pickedColor);
			h1.style.backgroundColor = pickedColor;
			messageDisplay.textContent = "Correct!"
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try again!";
		}
	});
}

//used to change all squares to the pickedColor color
function changeColor(color){
	//loop through all the squares
	for(var i = 0; i < squares.length; i++){
		//change each color to match given color
		squares[i].style.backgroundColor = color;
	}
}

//used to return a random square to be pickedColor square
function pickColor(){
	//create random number
	var random = Math.floor(Math.random() * colors.length);
	//return random number
	return colors[random];
}

//generates a num amount of random colors
function generateRandomColor(num){
	//make an array
	var arr = [];
	//add num random colors to array
	for(var i = 0; i < num; i++){
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

//creates a random color in rgb() format
function randomColor(){
	//pick a "red" from 0 - 255
	var red = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var green = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var blue = Math.floor(Math.random() * 256);
	//return a string of all three colors together
	return "rgb(" + red + ", " + green + ", " + blue + ")";
}

