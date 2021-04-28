/* Variables 
let myvariable1 = "Dog"
let myvariable2 = "Cat"
let myvariable3 = "Bird"
let myvariable4 = "Lion"
let myvariable5 = "Mouse"

document.getElementByID("Animal1").innerHTML = myvariable3;


let myvariable1 = "Bird"

document.getElementById("Animal1").innerHTML = myvariable1;

let myvariable2 = "Dog"

document.getElementById("Animal2").innerHTML = myvariable2;

*/


let myvariable1 = "Dog"

document.getElementById("Animal1").innerHTML = myvariable1;

let myvariable2 = "Cat"

document.getElementById("Animal2").innerHTML = myvariable2;

let myvariable3 = "Bird"

document.getElementById("Animal3").innerHTML = myvariable3;

let myvariable4 = "Lion"

document.getElementById("Animal4").innerHTML = myvariable4;

let myvariable5 = "Mouse"

document.getElementById("Animal5").innerHTML = myvariable5;


/*Operator*/

var x, y, z;
x = 49;
y = 20;
z = 19;

document.getElementById("op1").innerHTML = x + y - z;


document.getElementById("op2").innerHTML = 49 + 20 - 19;


var a, b, c;
a = 30;
b = 20;
c = 10;

document.getElementById("op3").innerHTML = a + b * c;

/* Function */

var z = myFunction (40, 20, 10);
document.getElementById("fun1").innerHTML = z;

function myFunction (d, e, f) {
	return d + e - f;
}

/* Conditions */

function myFunction1 () {

	var hour = new Date().getHours();
	var greeting;
	if (hour < 11) {
		greeting = "Buenos dias";
	} else if (hour < 18){
		greeting = "Buenas tardes";
	} else {
		greeting = "Buenas noches"
	}

	document.getElementById("fun2").innerHTML = greeting;
}




























