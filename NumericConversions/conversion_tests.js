// Description: This script tests various numeric
// conversion techniques
// Author: Matthew W. Christenson

// Declare our known values.
var a = " 101.1 ";
var b = "55";
var c = "402 Stevens";
var d = "Number 5 ";


// Calculate the unknown
var aInt = parseInt(a);
var bInt = parseInt(b);
var cInt = parseInt(c);
var dInt = parseInt(d);

var aFloat = parseFloat(a);
var bFloat = parseFloat(b);
var cFloat = parseFloat(c);
var dFloat = parseFloat(d);

// Display the results.

console.log("a '" + a + "' converted with parseInt: " + aInt);
console.log("b '" + b + "'  converted with parseInt: " + bInt);
console.log("c '" + c + "'  converted with parseInt: " + cInt);
console.log("d '" + d + "'  converted with parseInt: " + dInt);

console.log();

console.log("a '" + a + "' converted with parseFloat: " + aFloat);
console.log("b '" + b + "'  converted with parseFloat: " + bFloat);
console.log("c '" + c + "'  converted with parseFloat: " + cFloat);
console.log("d '" + d + "'  converted with parseFloat: " + dFloat);