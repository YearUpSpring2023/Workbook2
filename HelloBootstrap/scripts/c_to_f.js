"use strict";

const txtInputVariable = document.getElementById("txtInput");
const txtOutputVariable = document.getElementById("txtOutput");
const calculateBtnVariable = document.getElementById("calculateBtn");

// This will "wire up" the init function 
// with the onload event of the window.
window.onload = init;

// This will execute when the page first loads, because it is "wired up"
// with the window.onload command above.
function init(){
    calculateBtnVariable.onclick = onCalculateBtnClicked;
}

// This will execute when the button is clicked, because it is "wired up"
// when the page first loads.
function onCalculateBtnClicked(){
    console.log("Clicked!!");

    // get the known (user supplied) values.
    let userTypedValue = txtInputVariable.value;
    let valueAsNumber = parseFloat(userTypedValue);
    console.log("Got the value from the textbox it was: " + userTypedValue);

    // calculate the unknown..
    let fahrenheit = valueAsNumber * (9/5) + 32;
    console.log("calculated the value of: " + fahrenheit);


    // display the results to the user
    txtOutputVariable.value = fahrenheit;

}




