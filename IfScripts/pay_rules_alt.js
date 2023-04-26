"use strict";

// Identify and assign the input.
var hoursWorked = 45;
var basePayRate = 17.30;

// Initialize the output.
var grossPay;

// Compute the output.

// is this just standard pay?  (easy!)
if (hoursWorked <= 40){
    grossPay = hoursWorked * basePayRate;
}
else{  // does this require overtime pay? (tricky as two payrates 
       //will apply.)
    grossPay = (basePayRate * 40) + ((basePayRate * 1.5 ) 
    * 
    (hoursWorked - 40));
}

// Display the output.
console.log("The hours worked is   " + hoursWorked)
console.log("The base pay rate is  " + basePayRate)
console.log("The gross pay is      " + grossPay)