// var weather = 75;

// if (weather <= 70) {
//   console.log('Wear a jacket!');
// } else {
//   console.log('No jacket necessary!');
// }

// // Challenge: 
// // Write an if else statement that checks your name; 
// // If it is your name, console.log 'Hello, my name is <your name>'; 
// // If the name does not match, console.log 'Hello, what is your name?'

// var name = 'Jared';

// if (name == 'Jared') {
//   console.log('Hello, my name is ' + name + '.');
// } else {
//   console.log('What is your name?');
// }

// Challenge: 
// Write an if else statement that capitalizes the FIRST LETTER of name ONLY
// Have an option so it works if the name is already caps;
// Have an option for when it doesn't

// var myName = 'briTTany';
// var name = myName.toLowerCase();
// if (name[0] == name[0].toUpperCase()) {
//   console.log(name);
// } else {
//   console.log(name[0].toUpperCase() + name.slice(1));
// }


// // Else If Statements

// // Challenge:
// // Set a variable age and give it an age of your choice
// // Set an else if statement that convey the following:
// // If the age is 17 or younger, console.log 'Sorry, you're too young to do anything.'
// // If the age is at least 18, console.log 'Yay! You can vote!'
// // If the age is at least 21, console.log 'Yay! You can drink!'
// // If the age is at least 25, console.log 'Yay! You can rent a car!'

// var age = 11;

// if (age <= 17) {
//   console.log('Sorry, you are too young to do anything');
// } else if (age >= 18 && age < 21){
//   console.log('Yay! You can vote!');
// } else if (age >= 21 && age < 25) {
//   console.log('Yay! You can drink!');
// } else if (age >= 25) {
//   console.log('Yay! You can rent a car!');
// }

// var age = 30;

// if (age >= 25) {
// 	console.log("Yay! You can rent a car!");
// } else if (age >= 21) {
// 	console.log("Yay! You can drink!");
// } else if (age >= 18) {
// 	console.log("Yay! You can vote!");
// } else {
// 	console.log("Sorry, you're too young to do anything fun.");
// }

// numberExample = 0;
// stringExample = 'string';
// booleanExample = true;


// Challenge: 
// Check the type of data for a variable 
// If datatype = string, console.log 'String cheese'
// If datatype = number, console.log 'Number are cool'
// If datatype = boolean, console.log 'Truthiness'

var x = false;

if (typeof x === 'string') {
  console.log('String cheese');
} else if (typeof x === 'number') {
  console.log('Numbers are cool');
} else if (typeof x === 'boolean') {
  console.log('Truthiness');
}