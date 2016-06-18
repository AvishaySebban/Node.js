//function statment
function greet(){
	console.log('Hi');
}

greet();

//functions are first class.

function logGreeting(fn){
	fn();
}

logGreeting(greet);

//function expression

var greetMe = function() {
	console.log('Hi Avishay');
}

greetMe();

// its first class
logGreeting(greetMe);





