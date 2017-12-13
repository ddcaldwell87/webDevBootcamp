var todos = [];

var input = prompt("What would you like to do?");

while(input !== "quit"){
	//handle input
	if(input === "new"){
		addTodo();
	} else if(input === "list"){
		listTodos();
	} else if(input === "delete"){
		deleteTodo();
	}
	input = prompt("What would you like to do?");
}

console.log("You quit the app");

function addTodo(){
	//ask for a new todo
	var newTodo = prompt("Enter new todo");
	//add new todo to the todos array
	todos.push(newTodo);
	console.log("Added todo");
}

function listTodos(){
	//list the todos
	console.log("**********");
	todos.forEach(function(todo, index){
		console.log(index + ": " + todo);
	});
	console.log("**********");
}

function deleteTodo(){
	//ask for the index of the array
	var index = prompt("Enter index of todo to delete");
	//delete that todo
	todos.splice(index, 1);
	console.log("Item deleted");
}