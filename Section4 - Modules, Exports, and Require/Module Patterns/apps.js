var greet = require('./greet1');
greet();

//===========================

var greet2 = require('./greet2').greet;
greet2();
//OR
//.greet = beacuse .greet is a method.


//===========================

var greet3 = require('./greet3');
greet3.greet();
//OR
//.greet = beacuse .greet is a method.

greet3.greeting = 'Change Hello World!';

var greet3b = require('./greet3'); //didnt envoke this method because he was cached in the same reference lile greet3 module.
greet3b.greet();

//===========================

var greet4 = require ('./greet4');
var grtr = new greet4(); //Create object, greet4 is now a constructor funtion.
grtr.greet();

//===========================

var greet5 = require ('./greet5').greet;
greet5();