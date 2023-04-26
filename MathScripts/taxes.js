"use strict";

// Get all of the known values.
var taxRate = 0.23;
var salary = 10000;


// Calculate the unknown values.
var withheldAmount = (salary * taxRate);
var amountOfCheck = salary - withheldAmount;


// Display the result.
console.log("You made $" + salary);
console.log("But the government took $" + withheldAmount);
console.log("so here is your check for $" + amountOfCheck);


