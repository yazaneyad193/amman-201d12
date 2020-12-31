'use strict';


function exampleFunction(params) {
    if(params>5){
        alert('user')
    }
}

// exampleFunction(6);


function sum(numOne, numTwo) {
    var total = parseInt(numOne)+parseInt(numTwo);
    
    return total;
}

var totalSum = sum(5,5); 
console.log(totalSum);

var totalSumTwo = sum(5, totalSum);

console.log(totalSumTwo);