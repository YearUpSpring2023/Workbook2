"use strict";

// Identify and assign the input.
var hoursWorked = 45;
var basePayRate = 17.30;

// calculate intermediary values.
var standardPayRate = basePayRate * 1;
var overtimePayRate = basePayRate * 1.5;

// Initialize the output.
var grossPay;

// Compute the output.

// is this just standard pay?  (easy!)
if (hoursWorked <= 40){
    grossPay = hoursWorked * standardPayRate;
}

// does this require overtime pay? (tricky as two payrates will 
// apply.)
if (hoursWorked > 40){
    var overtimeHours = hoursWorked - 40;
    var standardPay = standardPayRate * 40;
    var overtimePay = overtimePayRate * overtimeHours;
    grossPay = standardPay + overtimePay;
}

// Display the output.
console.log("The hours worked is   " + hoursWorked)
console.log("The base pay rate is  " + basePayRate)
console.log("The gross pay is      " + grossPay)