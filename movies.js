//iterate through a movie array and print out:
//You have seen/not seen movie - rating


var movies = [
	{
		title: "Star Wars: A New Hope",
		rating: 5,
		viewed: true
	},
	{
		title: "Star Wars: The Last Jedi",
		rating: "No",
		viewed: false
	},
	{
		title: "Avengers",
		rating: "No",
		viewed: false
	},
	{
		title: "Harry Potter",
		rating: 5,
		viewed: true
	}
]

//my solution
for(var i = 0; i < movies.length; i++){
	if(movies[i].viewed){
		console.log("You have seen " + movies[i].title + " - " + movies[i].rating + " stars");
	} else {
		console.log("You have not seen " + movies[i].title + " - " + movies[i].rating + " stars");
	}
}

//my solution
movies.forEach(function(movie){
	if(movie.viewed){
		console.log("You have seen " + movie.title + " - " + movie.rating + " stars");
	} else {
		console.log("You have not seen " + movie.title + " - " + movie.rating + " stars");
	}
});

//not my solution
movies.forEach(function(movie){
	var result = "You have ";
	if(movie.viewed){
		result += "watched ";
	} else {
		result += "not watched ";
	}
	result += "\" " + movie.title + "\" - ";
	result += movie.rating + " stars";
	console.log(result);
});