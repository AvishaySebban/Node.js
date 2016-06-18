var greet = function(){
	console.log('HELLO!');
};

module.exports = greet; //Export = to make availble outside the function

//module.exports is what the require function returns
//this works beacuas your code is actully warpedd in a function (function expression)
// that is given these things as function parameters.