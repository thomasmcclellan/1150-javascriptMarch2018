// Switch Statements

// var friend = "Fred";

// switch (friend) {
//   case "Fred":
//     console.log("Hey Fred, let's go golfing.");
//     break;
//   case "Karl":
//     console.log("Let's hang.");
//     break;
//   case "John":
//     console.log("Sorry, I'm busy right now.");
//     break;
//   default:
//     console.log("Hey " + friend + "can I call you back in a minute.");
// }

// Challenge:
// Write a dessert menu;
// If the dessert is pie, console.log 'Pie, pie, me oh my!'
// If the dessert if cake, console.log 'Cake is great!'
// If the dessert is ice cream, console.log 'I scream for ice cream!'
// Otherwise, have your switch statement console.log 'Not on the menu.'

// var desserts = 'carrots';

// switch (desserts) {
//   case 'pie':
//     console.log('Pie, pie, me oh my!');
//     break;
//   case 'cake':
//     console.log('Cake is great!');
//     break;
//   case 'ice cream':
//     console.log('I scream for ice cream!');
//     break;
//   default:
//     console.log('Not on the menu.');
// }

// Challenge: 
// Check the type of data for a variable 
// If datatype = string, console.log 'String cheese'
// If datatype = number, console.log 'Number are cool'
// If datatype = boolean, console.log 'Truthiness'

var x = function(){};

switch (typeof x) {
  case 'string':
    console.log('String cheese');
    break;
  case 'number':
    console.log('Numbers are cool');
    break;
  case 'boolean':
    console.log('Truthiness');
    break;
  case 'object':
    console.log('Object');
    break;
  case 'function':
    console.log('function')
    break;
  default: 
    console.log('Everything else');
}