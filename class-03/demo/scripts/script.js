// loops

// For loop
// 0 - 9

// for (var i = 0; i < 100; i++) {
//     console.log(i);
// }

// Array [ ]
var nameArray = ['Alaa', 'Mohammed', 'Ahmed', 'Areej', 'Waaleed'];

// console.log(nameArray[1]);

for (var i = 0; i < nameArray.length; i++) {
    console.log(nameArray[i]);
}

// While
// var index = 0;
// while (index < nameArray.length) {
//     console.log(nameArray[index]);
//     index++;
// }

// var userInput = prompt('Please till ,y name?');

// console.log(typeof userInput);

// while (userInput !== 'ghaith') {

//     userInput = prompt('Please till ,y name?');
// }

// console.log(userInput);

do {
    var userInput = prompt('Please till ,y name?');
} while (userInput !== 'ghaith')

// do while
// var j = 0;
// do {
//     console.log(nameArray[j]);
//     j++;
// } while (j < nameArray.length)