"use strict";

var costOfVetVisit = 70.0;
var vacinationFee = 37.50;
var totalDue = costOfVetVisit + vacinationFee;
console.log(totalDue);

var priceOfMeal = 72.85;
var discountCoupon = 10;
var totalDue = priceOfMeal - discountCoupon;
console.log(totalDue);

var pricePerGallon = 2.97;
var numberOfGallons = 11.3;
var totalDue = pricePerGallon * numberOfGallons;
console.log(totalDue);

var costOfLimo = 300;
var numberOfPromGoers = 2;
var costPerPerson = costOfLimo / numberOfPromGoers;
console.log(costPerPerson);

var num = 63;
if (num % 2 == 0) 
{
  console.log("The number " + num + " is even!")
}
else
{
    console.log("The number " + num + " is odd!")
}
