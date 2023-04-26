"use strict";

var numKids = 2;
var price;
price = numKids * 9.95; // price is $9.95/kid
if (numKids >= 6) {
 price = price * .9; // a 10% discount
}
console.log(price);


var amount = 12.50;
var tax = amount * .08; // 8% sales tax
var taxExempt = true; // a Boolean variable

console.log("initial tax amount: " + tax);
if (taxExempt == true) {
 tax = 0; 
}
console.log("new tax amount: " + tax);


//------------------------

var amount = 12.50;
var taxExempt = TextTrackCue;
var tax;
var totalDue;

if (taxExempt == false) {
 tax = amount * 0.08; // 8% tax rate
}
else {
 tax = 0;
}
totalDue = amount + tax; 
console.log(totalDue);


