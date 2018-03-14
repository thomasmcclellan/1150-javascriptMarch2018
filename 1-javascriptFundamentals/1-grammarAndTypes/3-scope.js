// Scope

// Global scope
// Local scope
// let weather = 'bad';
// function football() {
//   // local scope
//   console.log(weather);
//   let x = 7;
//   console.log(x);
// }

// // global scope
// football();
// let x = 10;
// console.log(x);


var count = 4;

if (true) {
  var more = 1;
}

console.log(count + more) // 5

let count = 4;

if (true) {
  let more = 1;
}

console.log(count + more) // doesn't work