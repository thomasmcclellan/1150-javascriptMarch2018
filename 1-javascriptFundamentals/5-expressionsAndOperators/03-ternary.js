// // Ternaries

// // var x = 6;

// // (x > 0) ? 'yay' : 'nay'


// // if (x > 0) {
// //   console.log('yay');
// // // } else {
// // //   console.log('nay');
// // // }

// // var x = -9;
// // //Conditional statements
// // if (x == 0) {
// //   console.log("hello");
// // } else if (x < 0) {
// //   console.log("hi");
// // } else {
// //   console.log("goodbye");
// // }

// // //Ternary operators

// // (x == 0) ? "hello" : (x < 0) ? "hi" : "goodbye";
// // console.log(yay)



// var age = 10;

// if (age >= 25) {
// 	console.log("Yay! You can rent a car!");
// } else if (age >= 21) {
// 	console.log("Yay! You can drink!");
// } else if (age >= 18) {
// 	console.log("Yay! You can vote!");
// } else {
// 	console.log("Sorry, you're too young to do anything fun.");
// }

// // Challenge:
// // Write a ternary that does the same thing as the age challenge

// var ternAge = (age >= 25) ? 'Yay! You can rent a car!' : (age >= 21) ? 'Yay! You can drink!' : (age >= 18 ) ? 'Yay! You can vote!' : "Sorry, you're too young to do anything fun."

// console.log(ternAge);


// Challenge: 
// Check the type of data for a variable 
// If datatype = string, console.log 'String cheese'
// If datatype = number, console.log 'Number are cool'
// If datatype = boolean, console.log 'Truthiness'

var x = {};
var y = typeof x;
var mint = (y === 'string') ? 'String cheese' : (y === 'number') ? 'Numbers are cool' : (y === 'boolean') ? 'Truthiness' : 'Nothing'

console.log(mint);