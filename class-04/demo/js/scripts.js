'use strict';

console.log(" Everything is okay and running! ");

var user = prompt("What is your name? ");


function welcomeTheUser(userName, numberValue) {
    alert(numberValue);
    alert("Hello "+userName+"!");

}

// welcomeTheUser(user, 2);

function sayGoodbye() {
    alert("goodbye :)");
}
// sayGoodbye();


function policeInvestigationRoom() {
    var localScope =  "ASAC";
    alert(localScope + " school");
}



// policeInvestigationRoom();

// alert(localScope+ " is global");


function overrideExample() {
    var user = "Ghaith";
    alert("local alert "+ user);
}

overrideExample();

alert("global Alert "+ user);


var anonFunc = function () {
    alert("anon function");
};

anonFunc();