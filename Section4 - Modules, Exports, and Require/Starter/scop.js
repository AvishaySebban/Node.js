var firstname = 'Jane';

 (function () { //anonymus function this scoped and protected.

 	var fisrtname = 'Jhon';
 	console .log(fisrtname);
 }()); // () this is where i invoke the fuction.


console.log(firstname);


//===================================================================
//We can rap our code in a imdeitaley invoke a fucntion and make sure that it dosent affect intentioly outside of it.
//module = sperate code from others.

(function (lastname) { //anonymus function this scoped and protected.

	var fisrtname = 'Jhon';
	console.log(firstname);
	console.log(lastname);
}('Doe')); // () this is where i invoke the fuction.
 console.log(firstname);

 