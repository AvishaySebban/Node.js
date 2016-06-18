var greeting = 'Hello World!!!!';

function greet(){
	console.log(greeting);
}

module.exports = {
greet: greet  //set name and value, only exposiing the function not the varible like above.
}
		