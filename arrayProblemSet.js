function printReverse(arr){
	//reverse the array and log each index
	arr.reverse().forEach(function(el){
		console.log(el);
	});
}

printReverse(["a", "b", "c"]);
printReverse([1,2,3,4,5]);

//***************************************

function isUniform(arr){
	//variable that stores first index
	var firstIndex = arr[0];
	//loop to compare
	for(var i = 0; i < arr.length; i++){
		if(arr[i] !== firstIndex){
			return false;
		}
	}
	return true;
}

isUniform([1,1,1,1]); //true
isUniform([2,1,1,1]); //false
isUniform(["a", "b", "p"]); //false
isUniform(["b", "b", "b"]); //true

//***************************************

function sumArray(x){
	//variable that stores the answer
	var sum = 0;
	//add each index to the sum variable
	x.forEach(function(el){
		sum += el;
	});
	return sum;
}

sumArray([1,2,3]); //6
sumArray([10,3,10,4]); //27

//***************************************

function max(x){
	//variable to store highest index
	var highest = 0;
	//loop through each index to find the highest number
	x.forEach(function(el){
		if(el > highest){
			highest = el;
		}
	});
	return highest;
}

max([1,2,3]); //3
max([10,3,10,4]); //10
max([-5,100]); //100